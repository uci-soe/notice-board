import React, {useEffect, useState} from 'react';

import './index.scss';

function Image ({ src, size, position, flip }) {
  const [topImg, setTop] = useState({src, size, position, flip, opacity: 1});
  const [bottomImg, setBottom] = useState({src, size, position, flip, opacity: 0});

  useEffect(() => {
    let fade, swap;

    console.log(src);

    loadImage(src)
      .then(() => {
        console.log('loaded');

        setBottom({src, size, position, flip, opacity: 1});

        fade = setTimeout(() => {
          console.log('fade');
          setTop({...topImg, opacity: 0});
        }, 1000);
        swap = setTimeout(() => {
          console.log('swap');
          setTop({...bottomImg, opacity: 1});
        }, 2000);


      })
      .catch(err => {
        console.error(err.stack);
      })
    ;

  }, [src, size, position, flip]);

  return (
    <div style={({height:"100%",width:"100%", margin: 0})}>
      <div {...process(topImg)} />
      <div {...process(bottomImg)} />
    </div>
  );
}

export default Image;


function process ({ src, size, position, flip, opacity = 1 }) {
  const styles = {
    backgroundImage: `url(${src})`,
    backgroundSize: `${size.w} ${size.h}`,
    backgroundPosition: `${position.x} ${position.y}`,
    opacity
  };

  let classNames = ['background-image'];
  if (flip === 'h') {
    classNames.push('flip-h');
  } else if (flip === 'v') {
    classNames.push('flip-v');
  }

  return {
    className: classNames.join(' '),
    style: styles
  }
}
function loadImage (src) {
  return new Promise((res, rej) => {
    let img = new window.Image();
    img.onload = (...args) => {
      res(img, ...args);
    };
    img.onerror = rej;
    img.src = src;
  });
}


// import React, { Component } from "react";
// import PropTypes from "prop-types";
//
// export default class CrossfadeImage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       topSrc: props.src,
//       bottomOpacity: 0,
//       bottomSrc: props.src
//     };
//   }
//   componentWillReceiveProps(newProps) {
//     const oldSrc = this.state.topSrc;
//     const newSrc = newProps.src;
//     if (newSrc !== oldSrc) {
//       // Reset the component everytime we receive new prop, to
//       // cancel out any animation that's still going on
//       this.setState({ bottomSrc: false, topSrc: false }, () =>
//         this.setState(
//           // Opacity less than 1 takes precendence in stacking order
//           { bottomSrc: oldSrc, topSrc: newSrc, bottomOpacity: 0.99 },
//           () => {
//             // One of the few times setTimeout does wonders, this is for
//             // getting fade out transition without css keyframe
//             if (!this.timeout) clearTimeout(this.timeout);
//             this.timeout = setTimeout(
//               () => this.setState({ bottomOpacity: 0 }),
//               20
//             );
//           }
//         )
//       );
//     }
//   }
//   render() {
//     const { duration, timingFunction, delay, style, alt } = this.props;
//     const { topSrc, bottomOpacity, bottomSrc } = this.state;
//     return (
//       <div style={{ ...defaultStyle, ...{ position: "relative" } }}>
//         {topSrc &&
//         <img
//           style={{ ...defaultStyle, ...style, ...{ position: "absolute" } }}
//           src={topSrc}
//           alt={alt}
//         />}
//         {bottomSrc &&
//         <img
//           style={{
//             ...defaultStyle,
//             ...style,
//             ...{
//               opacity: bottomOpacity,
//               transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s`
//             }
//           }}
//           src={bottomSrc}
//         />}
//       </div>
//     );
//   }
// }
//
// const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };
//
// CrossfadeImage.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string,
//   duration: PropTypes.number,
//   timingFunction: PropTypes.string,
//   delay: PropTypes.number,
//   style: PropTypes.object
// };
//
// CrossfadeImage.defaultProps = {
//   duration: 500,
//   timingFunction: "ease",
//   delay: 0
// };

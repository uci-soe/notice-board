import React, {useState, useEffect} from 'react';

import './index.scss';
import images from './images';
import Image from './Image';

const HOUR = 1000 * 60 * 60;


// const images = [
//   {
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAGWQAAABGCAYAAADvPcsnAAAHsUlEQVR42u3dAQ0AIAzAsN+/aMAGS5v52J6ZFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/1pAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyDBkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIMWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAMQxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgw5AFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyLjiO4u71eYORwAAAABJRU5ErkJggg==",
//     size: { "w": "4700px", "h": "4700px" },
//     position: { "x": "center", "y": "center" }
//   },
//   {
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAb0lEQVR42u3QwQAAAAgEsLLIX/QC6BPAhrCuSYqjxYgRI0aMGDFixIgRIwYxYsSIESNGjBgxYsQgRowYMWLEiBEjRowYxIgRI0aMGDFixIgRgxgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGDGJ+FhAnkku7WRqPAAAAAElFTkSuQmCC",
//     size: { "w": "4700px", "h": "4700px" },
//     position: { "x": "center", "y": "center" }
//   },
//   {
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAb0lEQVR42u3QwQAAAAgEsPLnjOMC6BPAhrCeSoqjxYgRI0aMGDFixIgRIwYxYsSIESNGjBgxYsQgRowYMWLEiBEjRowYxIgRI0aMGDFixIgRgxgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGDGJ+FqQqyllLE7pdAAAAAElFTkSuQmCC",
//     size: { "w": "4700px", "h": "4700px" },
//     position: { "x": "center", "y": "center" }
//   },
// ];


function Background ({delay = HOUR}) {
  // const getNext = (function imageIncrementer (arr) {
  //   let i = -1;
  //   return function getNext() {
  //     i = (i + 1) % arr.length;
  //     return arr[i];
  //   };
  // })(images);

  const [image, setImage] = useState(random(images));

  useEffect(() => {
    let timeout;
    const update = () => {
      return setTimeout(() => {
        setImage(random(images));
        timeout = update();
      }, delay);
    };

    update(delay);

    return () => {
      clearTimeout(timeout);
    }
  }, [delay]);

  return (
    <div className='background-container'>

      <Image {...image} />

    </div>
  );
}

export default Background;

function random (array) {
  return array[Math.floor(Math.random() * array.length)]
}

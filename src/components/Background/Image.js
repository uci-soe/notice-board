import React from 'react';

import './index.scss';

function Image ({ src, size, position, flip }) {
  const styles = {
    backgroundImage: `url(${src})`,
    backgroundSize: `${size.w} ${size.h}`,
    backgroundPosition: `${position.x} ${position.y}`,
  };

  let classNames = ['background-image'];
  if (flip === 'h') {
    classNames.push('flip-h');
  } else if (flip === 'v') {
    classNames.push('flip-v');
  }

  return (
    <div className={classNames.join(' ')} style={styles}></div>
  );
}

export default Image;




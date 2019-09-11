import React, {useState, useEffect} from 'react';

import './index.scss';
import images from './images';
import Image from './Image';

const HOUR = 1000 * 60 * 60;


function Background ({delay = HOUR}) {
  const [image, setImage] = useState(random(images));


  let timeout;
  const update = window.abc = (thisDelay) => {
    return setTimeout(() => {
      setImage(random(images));
      clearTimeout(timeout);
      timeout = update();
    }, thisDelay);
  };

  useEffect(() => {
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

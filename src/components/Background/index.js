import React, {useState, useEffect} from 'react';

import './index.scss';
import images from './images';
import Image from './Image';

const HOUR = 1000 * 60 * 60;

function Background ({delay = HOUR}) {
  const [image, setImage] = useState(random(images));
  // const [image, setImage] = useState(images[14]);

  useEffect(() => {
    let timeout;
    const update = () => {
      return setTimeout(() => {
        setImage(random(images));
        timeout = update();
      }, delay);
    };

    update();

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

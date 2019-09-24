import React, { useState, useEffect } from 'react';
import format from "date-fns/format";

//import './index.scss';
const SECOND = 1000;

function Clock ({timeFmt = 'EEE, MMM do, yyyy h:mm aaa', frequency = 10 * SECOND}) {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(Date.now());
    }, frequency);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="clock">{format(date, timeFmt)}</div>
  );
}

export default Clock;

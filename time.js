// Time.js
import React, { useState, useEffect } from 'react';


const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{fontSize:"16px", marginLeft:'39px'}}>
     
      <p className="time-text">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;

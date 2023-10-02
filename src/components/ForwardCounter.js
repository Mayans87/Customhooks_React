// import { useState, useEffect } from 'react';

import Card from './Card';
import useCustomHook from '../hooks/customhook';

const ForwardCounter = () => {
  const customHookCounter = useCustomHook(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{customHookCounter}</Card>;
};

export default ForwardCounter;

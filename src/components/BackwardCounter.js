// import { useState, useEffect } from 'react';
import useCustomHook from '../hooks/customhook';

import Card from './Card';

const BackwardCounter = () => {
  const customHookCounter = useCustomHook(true);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>-{customHookCounter}</Card>;
};

export default BackwardCounter;

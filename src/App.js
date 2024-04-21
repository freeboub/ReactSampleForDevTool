/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

export const timeout = 100;

/* component which is too long to render */
const HeavyComponent = () => {
  const start = performance.now()
  let i = 0;
  while (i < 9000000) {
    i = i + 1;
  }
  console.log('render time', performance.now() - start)
  return null;
};

/* core of the App */

const App = () => {
  
  // eslint-disable-next-line no-unused-vars
  const [_time, setTime] = useState(0);

  // setState in an interval to for refresh periodically

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(_time => _time + 1);
    }, timeout);
    return () => clearInterval(interval)
  }, []);

  return <HeavyComponent />;
};

export default App;

import React from 'react';

// https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
const useInterval = (callback: any, delay: number) => {
  const intervalRef = React.useRef<any>(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  return intervalRef;
};

export default useInterval;

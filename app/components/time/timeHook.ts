import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

export const useFormattedDate = () => {
  const currentTime = useCurrentTime();

  const weekday = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const month = currentTime.toLocaleDateString('en-US', {
    month: 'long',
  });

  const day = currentTime.getDate();

  const year = currentTime.getFullYear();

  const formattedDate = `${weekday}, ${month} ${day}, ${year}`;

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return {
    formattedDate,
    formattedTime,
    currentTime,
    weekday,
    month,
    day,
    year,
  };
};
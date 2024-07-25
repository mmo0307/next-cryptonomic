import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return scrollPosition;
};

export { useScroll };

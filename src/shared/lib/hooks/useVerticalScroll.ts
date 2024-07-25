import { useEffect, useState } from 'react';

const useVerticalScroll = (id: string) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const el = document.getElementById(id);
    setElement(el);
  }, [id]);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (event.target instanceof HTMLElement) {
        setScrollPosition(event.target.scrollTop);
      }
    };

    element?.addEventListener('scroll', handleScroll);

    return () => {
      element?.removeEventListener('scroll', handleScroll);
    };
  }, [element]);

  return scrollPosition;
};

export { useVerticalScroll };

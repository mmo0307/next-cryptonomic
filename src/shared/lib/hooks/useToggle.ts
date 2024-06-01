import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [show, setShow] = useState<boolean>(initialValue);

  const toggle = () => setShow(!show);

  return [show, toggle];
};

export { useToggle };

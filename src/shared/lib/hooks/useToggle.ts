import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [show, setShow] = useState<boolean>(initialValue);

  const onToggle = () => setShow(!show);

  return [show, onToggle];
};

export { useToggle };

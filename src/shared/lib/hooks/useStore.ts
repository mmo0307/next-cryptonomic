import { useContext } from 'react';

import { StoreContext } from '@/app/config/providers/StoreProvider';

/**
 * Use Store
 */
const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('error');
  }

  return store;
};

export { useStore };

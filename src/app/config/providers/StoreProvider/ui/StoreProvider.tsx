'use client';

import { createContext, PropsWithChildren } from 'react';

import { AppStore } from '../model/app.store';

/**
 * Store Context
 */
const StoreContext = createContext<AppStore | null>(null);

const StoreProvider = ({ children }: PropsWithChildren) => {
  const store = new AppStore();

  // const _store = initializeStore(store);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

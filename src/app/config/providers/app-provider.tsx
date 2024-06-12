'use client';

import React, { PropsWithChildren } from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { MetaMaskProvider } from './MetaMaskProvider';
import { StoreProvider } from './StoreProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <MetaMaskProvider>
        <ErrorBoundary>{children}</ErrorBoundary>
      </MetaMaskProvider>
    </StoreProvider>
  );
};

export { Providers };

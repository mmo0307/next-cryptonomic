'use client';

import React, { PropsWithChildren } from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { StoreProvider } from './StoreProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </StoreProvider>
  );
};

export { Providers };

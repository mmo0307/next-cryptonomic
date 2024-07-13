import React, { FC, memo, PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface PageProps extends PropsWithChildren {
  className?: string;
}

export const PAGE_ID = 'PAGE_ID';

const Page: FC<PageProps> = memo(({ className, children }: PageProps) => {
  return (
    <main
      id={PAGE_ID}
      className={cn(styles.page, className)}
    >
      {children}
    </main>
  );
});

export { Page };

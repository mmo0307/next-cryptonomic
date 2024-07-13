import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={cn(styles.wrapper, className)}>
    <span className={styles.loader} />
  </div>
);

export { Loader };

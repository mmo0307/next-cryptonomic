import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface CircleProps {
  className?: string;
}

const Circle: FC<CircleProps> = ({ className }) => (
  <div className={cn(styles.wrapper, className)}>
    <span className={styles.loader} />
  </div>
);

export { Circle };

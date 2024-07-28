import React, { FC, PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface ChipProps extends PropsWithChildren {
  className?: string;
}

const Chip: FC<ChipProps> = ({ className, children }) => (
  <div className={cn(styles.chip, className)}>{children}</div>
);

export { Chip };

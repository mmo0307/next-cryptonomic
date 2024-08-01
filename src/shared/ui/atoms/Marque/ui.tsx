import { memo, PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface MarqueProps extends PropsWithChildren {
  className?: string;
}

const Marque = memo(({ className, children }: MarqueProps) => (
  <div className={cn(styles.marquee, className)}>
    <div className={styles.track}>{children}</div>
  </div>
));

export { Marque };

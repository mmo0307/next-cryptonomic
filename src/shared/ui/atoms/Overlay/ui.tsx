import { FC, MouseEvent, PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface OverlayProps extends PropsWithChildren {
  className?: string;

  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Overlay: FC<OverlayProps> = ({ className, children, onClick }) => (
  <div
    className={cn(styles.overlay, className)}
    onClick={onClick}
  >
    {children}
  </div>
);

export { Overlay };

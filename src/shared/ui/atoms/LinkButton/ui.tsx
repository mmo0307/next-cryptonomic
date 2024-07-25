import { memo, PropsWithChildren } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

type LinkVariant = 'primary' | 'secondary';

interface LinkButtonProps extends PropsWithChildren {
  to: string;

  className?: string;

  variant?: LinkVariant;
}

const LinkButton = memo(
  ({ to, className, variant = 'primary', children }: LinkButtonProps) => {
    return (
      <Link
        href={to}
        className={cn(styles.link, styles[variant], className)}
      >
        {children}
      </Link>
    );
  }
);

export { LinkButton };

import type { ComponentProps, ReactHTML } from 'react';
// eslint-disable-next-line no-duplicate-imports
import { createElement } from 'react';

import { cn } from '../../lib/classNames/classNames';

const styled =
  <P extends keyof ReactHTML>(name: P, className = '') =>
  ({
    className: _className,
    ...props
  }: ComponentProps<ReactHTML[P]> & { className?: string }) =>
    createElement(name, {
      className: cn(className, _className),
      ...props
    });

export { styled };

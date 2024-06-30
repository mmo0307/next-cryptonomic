import { createElement, FC } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { TextProps } from './model/types';

import styles from './ui.module.scss';

const Text: FC<TextProps> = ({
  tag = 'div',
  font = 'rubik',
  theme = 'subheader-2',
  align = 'left',
  variant = 'primary',
  className,
  ...props
}) =>
  createElement(tag as string, {
    ...props,
    className: cn(
      styles[font],
      styles[variant],
      styles[align],
      styles[theme],
      className
    )
  });

export { Text };

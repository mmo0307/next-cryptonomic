import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  FlexProps
} from '../model/types';

import styles from './ui.module.scss';

const justifyClasses: Record<FlexJustify, string> = {
  'flex-start': styles.justifyStart,
  center: styles.justifyCenter,
  'flex-end': styles.justifyEnd,
  'space-between': styles.justifyBetween,
  'space-around': styles.justifyAround,
  'space-evenly': styles.justifyEvenly
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  normal: styles.alignNormal
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  24: styles.gap24,
  32: styles.gap32
};

const Flex: FC<FlexProps> = ({
  className,
  children,
  justify = 'flex-start',
  align = 'center',
  wrap = 'nowrap',
  direction = 'row',
  gap,
  max,
  ...props
}) => {
  console.log('direction=>', direction);
  console.log('directionClasses=>', directionClasses[direction]);

  return (
    <div
      className={cn(
        styles.flex,
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        styles[wrap],
        gap && gapClasses[gap],
        {
          [styles.max]: max
        }
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Flex };

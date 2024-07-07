import React, { ForwardedRef, forwardRef } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { View } from '../View';

import { ButtonProps } from './model/types';

import styles from './ui.module.scss';

const Button = forwardRef(
  (
    {
      className,
      children,
      variant = 'primary',
      disabled,
      size = 'small',
      icon,
      addonLeft,
      addonRight,
      ...otherProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      type='button'
      className={cn(styles.button, className, styles[variant], styles[size], {
        [styles.disabled]: disabled,
        [styles.iconOnly]: Boolean(icon),
        [styles.withAddonLeft]: Boolean(addonLeft),
        [styles.withAddonRight]: Boolean(addonRight)
      })}
      disabled={disabled}
      {...otherProps}
    >
      <View.Condition if={Boolean(icon)}>{icon}</View.Condition>

      <View.Condition if={!Boolean(icon)}>
        {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}

        {children}

        {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
      </View.Condition>
    </button>
  )
);

export { Button };

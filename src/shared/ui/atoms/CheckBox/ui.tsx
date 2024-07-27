import { ChangeEvent, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { CheckBoxProps } from './model/types';

import styles from './ui.module.scss';

const CheckBox = memo(
  ({
    className,
    error,
    disabled,
    label,
    value,
    onChange: checkBoxChange
  }: CheckBoxProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      checkBoxChange?.(e.target.checked);
    };

    return (
      <div
        className={cn(styles.block, className, {
          [styles.error]: !Boolean(value) && error,
          [styles.disabled]: disabled
        })}
      >
        <div className={styles.wrapper}>
          <input
            disabled={disabled}
            className={styles.checkbox}
            id='checkbox'
            type='checkbox'
            checked={Boolean(value)}
            onChange={onChange}
          />

          <label
            htmlFor='checkbox'
            className={cn(styles.checkmark, {
              [styles.checkmarkDisabled]: disabled && Boolean(value)
            })}
          />
        </div>

        <label className={styles.label}>{label}</label>
      </div>
    );
  }
);

export { CheckBox };

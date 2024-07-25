import { ChangeEvent, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface CheckBoxProps {
  value: boolean;

  onChange: (checked: boolean) => void;

  label: string;

  disabled?: boolean;

  error?: boolean;

  className?: string;
}

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
      checkBoxChange(e.target.checked);
    };

    return (
      <div
        className={cn(styles.block, className, {
          [styles.error]: !value && error,
          [styles.disabled]: disabled
        })}
      >
        <div className={styles.wrapper}>
          <input
            className={styles.checkbox}
            id='checkbox'
            type='checkbox'
            checked={value}
            onChange={onChange}
          />

          <label
            htmlFor='checkbox'
            className={cn(styles.checkmark, {
              [styles.checkmarkDisabled]: disabled && value
            })}
          />
        </div>

        <label className={styles.label}>{label}</label>
      </div>
    );
  }
);

export { CheckBox };

import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { Text } from '../Text';

import { InputProps } from './model/types';

import styles from './ui.module.scss';

const Input: FC<InputProps> = ({
  value,
  onChange,
  type = 'text',
  wrapperRef,
  inputRefId,
  classNames,
  placeholder,
  hasError,
  errorText,
  helperText,
  disabled,
  focused,
  labelAlwaysOnTop,
  label,
  append,
  prepend,
  size = 'lg',
  variant = 'default',
  maxLength,
  inputMode,
  onFocus,
  onBlur,
  onClick,
  onClear
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocusClick = useCallback(() => {
    setIsFocused(true);

    ref?.current?.focus();

    onFocus?.();
  }, [onFocus]);

  const onBlurClick = () => {
    setIsFocused(false);

    onBlur?.();
  };

  const onInputClick = () => {
    onFocus?.();
  };

  const onWrapperClick = () => {
    onClick?.();
  };

  const isFocusInput = useMemo(() => {
    return Boolean(isFocused || labelAlwaysOnTop || focused) || Boolean(value);
  }, [value, isFocused, labelAlwaysOnTop, focused]);

  useEffect(() => {
    if (labelAlwaysOnTop) {
      onFocusClick();
    }
  }, [labelAlwaysOnTop, onFocusClick]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        styles.wrapper,
        classNames?.wrapper,
        styles[variant],
        styles[size],
        {
          [styles.disabled]: disabled
        }
      )}
      onClick={onWrapperClick}
    >
      {label && (
        <label
          htmlFor={label.toString()}
          className={cn(styles.label, classNames?.label, {
            [styles.labelHasError]: hasError,
            [styles.labelWithoutIcon]: append,
            [styles.labelFocus]: isFocusInput
          })}
        >
          {label}
        </label>
      )}

      <div
        className={cn(styles.block, classNames?.block, {
          [styles.blockHasError]: hasError,
          [styles.blockFocus]: isFocusInput
        })}
        onClick={onInputClick}
      >
        {append && (
          <div className={cn(styles.icon, classNames?.leftIcon)}>{append}</div>
        )}

        <input
          type={type}
          inputMode={inputMode}
          className={cn(styles.input, classNames?.input, {
            [styles.inputIcon]: append
          })}
          value={value}
          ref={inputRefId ? inputRefId : ref}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChangeHandler}
          onFocus={onFocusClick}
          onBlur={onBlurClick}
        />

        {prepend && (
          <div
            className={cn(styles.icon, classNames?.rightIcon)}
            onClick={onClear}
          >
            {prepend}
          </div>
        )}
      </div>

      {helperText && (
        <Text className={cn(styles.helperText, classNames?.helperText)}>
          {helperText}
        </Text>
      )}

      {hasError && (
        <Text
          variant='error'
          className={cn(styles.errorText, classNames?.error)}
        >
          {errorText}
        </Text>
      )}
    </div>
  );
};

export { Input };

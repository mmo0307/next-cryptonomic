import React, {
  FC,
  InputHTMLAttributes,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { Text } from '../Text';

import styles from './ui.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'disabled' | 'size'
>;

interface InputProps extends HTMLInputProps {
  value: string | number;

  onChange: (value: string | number) => void;

  wrapperRef?: MutableRefObject<HTMLDivElement>;

  inputRefId?: MutableRefObject<HTMLInputElement>;

  classNames?: {
    wrapper?: string;

    block?: string;

    input?: string;

    label?: string;

    error?: string;

    leftIcon?: string;

    rightIcon?: string;
  };

  placeholder?: string;

  errorText?: string;

  hasError?: boolean;

  disabled?: boolean;

  focused?: boolean;

  labelAlwaysOnTop?: boolean;

  label?: ReactNode;

  append?: ReactNode;

  prepend?: ReactNode;

  onFocus?: () => void;

  onBlur?: () => void;
}

const Input: FC<InputProps> = ({
  wrapperRef,
  inputRefId,
  errorText,
  append,
  prepend,
  label,
  classNames,
  value,
  onChange,
  labelAlwaysOnTop,
  disabled,
  placeholder
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);

    ref?.current?.focus();
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onInputClick = () => {
    onFocus();
  };

  useEffect(() => {
    if (labelAlwaysOnTop) {
      setIsFocused(true);

      ref?.current?.focus();
    }
  }, [labelAlwaysOnTop]);

  console.log('isFocused=>', isFocused);

  return (
    <div
      ref={wrapperRef}
      className={cn(styles.wrapper, classNames?.wrapper)}
    >
      {label && (
        <label
          htmlFor={label.toString()}
          className={cn(styles.label, classNames?.label)}
        >
          {label}
        </label>
      )}

      <div
        className={cn(styles.block, classNames?.block)}
        onClick={onInputClick}
      >
        {append && (
          <div className={cn(styles.icon, classNames?.leftIcon)}>{append}</div>
        )}

        <input
          type='text'
          className={cn(styles.input, classNames?.input)}
          value={value}
          ref={inputRefId ? inputRefId : ref}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {prepend && (
          <div className={cn(styles.icon, classNames?.rightIcon)}>
            {prepend}
          </div>
        )}
      </div>

      {errorText && (
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

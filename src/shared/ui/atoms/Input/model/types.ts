import { InputHTMLAttributes, MutableRefObject, ReactNode } from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'disabled' | 'size'
>;

type InputVariant = 'default' | 'success';

type InputSize = 'sm' | 'md' | 'lg';

type InputType = 'text' | 'number';

interface InputProps extends HTMLInputProps {
  value: string | number;

  onChange: (value: string | number) => void;

  type?: InputType;

  wrapperRef?: MutableRefObject<HTMLDivElement>;

  inputRefId?: MutableRefObject<HTMLInputElement>;

  size?: InputSize;

  variant?: InputVariant;

  classNames?: {
    wrapper?: string;

    block?: string;

    input?: string;

    label?: string;

    helperText?: string;

    error?: string;

    leftIcon?: string;

    rightIcon?: string;
  };

  placeholder?: string;

  errorText?: string;

  helperText?: string;

  hasError?: boolean;

  disabled?: boolean;

  focused?: boolean;

  labelAlwaysOnTop?: boolean;

  label?: ReactNode;

  append?: ReactNode;

  prepend?: ReactNode;

  onFocus?: () => void;

  onBlur?: () => void;

  onClick?: () => void;

  onClear?: () => void;
}

export type { InputProps };

import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
// eslint-disable-next-line no-duplicate-imports
import { createContext, useContext } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

type RadioContextValue = {
  value: any;

  hasError?: boolean;

  onChange: (payload: any) => void;
};

type ItemProps = HTMLAttributes<HTMLDivElement> & {
  payload?: any;

  label?: ReactNode;

  withoutBackGround?: boolean;

  onSelected?: () => void;

  disabled?: boolean;
};

type GroupProps = PropsWithChildren<RadioContextValue>;

const Context = createContext<RadioContextValue>(null!);

const Item = ({
  payload,
  label,
  className,
  withoutBackGround,
  onSelected,
  disabled,
  ...props
}: ItemProps) => {
  const { value, onChange, hasError } = useContext(Context);

  const onClick = () => {
    if (disabled) return;

    onChange(payload);

    onSelected?.();
  };

  return (
    <div
      className={cn(
        styles.item,
        {
          [styles.checked]: value === payload,

          [styles.hasError]: hasError,

          [styles.withoutBackGround]: withoutBackGround,

          [styles.disabled]: disabled
        },
        className
      )}
      onClick={onClick}
      {...props}
    >
      <div className={styles.radio} />

      <label className={styles.label}>{label}</label>
    </div>
  );
};

const Group = ({ children, ...props }: GroupProps) => (
  <Context.Provider value={props}>{children}</Context.Provider>
);

const Radio = {
  Item,
  Group
};

export { Radio };

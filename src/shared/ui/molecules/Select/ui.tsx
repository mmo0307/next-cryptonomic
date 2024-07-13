import React, { FC, useRef, useState } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import { Each } from '@/shared/utils/each/each';

import { Input } from '../../atoms/Input';
import { Loader } from '../../atoms/Loader';
import { View } from '../../atoms/View';

import DropDown from '@/shared/assets/icons/drop-down.svg';

import styles from './ui.module.scss';

type SelectSize = 'sm' | 'md' | 'lg';

interface SelectProps {
  className?: string;

  label?: string;

  pending?: boolean;

  options: any[];

  value: string;

  onChange: (value: string) => void;

  onClick?: () => void;

  onOptionSelected?: (option?: string) => void;

  size?: SelectSize;
}

const Select: FC<SelectProps> = ({
  className,
  options,
  label,
  value,
  size = 'lg',
  pending,
  onChange,
  onOptionSelected,
  onClick
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onInputClick = () => {
    setIsFocused(true);
  };

  const onSelectClick = () => {
    setIsFocused(true);

    onClick?.();
  };

  const onOptionClick =
    (option: string) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      onOptionSelected?.(option);

      setIsFocused(false);

      onChange(option);
    };

  useClickOutside(ref, () => {
    setIsFocused(false);
  });

  return (
    <div
      ref={ref}
      className={cn(styles.select, className)}
      onClick={onSelectClick}
    >
      <Input
        size={size}
        label={label}
        value={value}
        focused={isFocused}
        helperText='Helper text'
        prepend={
          <DropDown
            className={cn(styles.icon, {
              [styles.focusedIcon]: isFocused
            })}
          />
        }
        onClick={onInputClick}
        // eslint-disable-next-line
        // @ts-ignore
        onChange={onChange}
      />

      <View.Condition if={isFocused}>
        <div
          className={cn(styles.dropDown, styles[size], {
            [styles.pending]: pending
          })}
        >
          <View.Condition if={Boolean(pending)}>
            <Loader className={cn(styles.loader)} />
          </View.Condition>

          <View.Condition if={!Boolean(pending)}>
            <Each
              data={options}
              render={(option) => (
                <div
                  className={styles.dropDownItem}
                  onClick={onOptionClick(option)}
                >
                  {option}
                </div>
              )}
            />
          </View.Condition>
        </div>
      </View.Condition>
    </div>
  );
};

export { Select };

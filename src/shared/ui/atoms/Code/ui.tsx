import { ChangeEvent, memo, useRef, useState } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { CodeProps } from './model/types';

import styles from './ui.module.scss';

const Code = memo(({ value, length = 4, error, onChange }: CodeProps) => {
  const wrapperRef = useRef<HTMLInputElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onClick = (index: number): void => {
    wrapperRef.current?.focus();

    if (value?.length) {
      setActiveIndex(index);

      return;
    }

    setActiveIndex(0);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);

    setActiveIndex(e.target.value.length - 1);
  };

  return (
    <>
      <input
        ref={wrapperRef}
        className={styles.block}
        max={length || 4}
        maxLength={length || 4}
        value={value}
        onChange={onChangeHandler}
      />

      <div className={styles.wrapperCode}>
        {Array(length || 4)
          .fill(1)
          .map((_, index) => (
            <div
              key={index}
              className={cn(styles.code, {
                [styles.notEmpty]: value,
                [styles.focused]: activeIndex === index,
                [styles.error]: error
              })}
              onClick={() => onClick(index)}
            >
              <span>{value?.[index] || ''}</span>
            </div>
          ))}
      </div>
    </>
  );
});

export { Code };

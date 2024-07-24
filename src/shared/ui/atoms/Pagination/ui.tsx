import React, { FC, useEffect, useState } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { Each } from '@/shared/utils/each/each';

import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';

import styles from './ui.module.scss';

interface PaginationProps {
  className?: string;

  activeNumberPage?: number;

  numbersPerPage: number;

  pagesAmount: number;

  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  className,
  activeNumberPage,
  numbersPerPage,
  pagesAmount,
  onPageChange
}) => {
  const [activePage, setActivePage] = useState<number>(activeNumberPage || 1);
  const [totalPages, setTotalPages] = useState<number[]>([]);

  const createNumberArray = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index);

  const onSetPage = (selectedPage: number) => {
    setActivePage(selectedPage);

    onPageChange(selectedPage);
  };

  const onPrevPage = () => {
    if (activePage > 1) {
      onSetPage(activePage - 1);
    }
  };

  const onNextPage = () => {
    if (activePage < pagesAmount) {
      onSetPage(activePage + 1);
    }
  };

  useEffect(() => {
    const halfPerPage = Math.floor(numbersPerPage / 2);
    const startIndex = Math.max(
      1,
      Math.min(activePage - halfPerPage, pagesAmount - numbersPerPage + 1)
    );
    const endIndex = Math.min(pagesAmount, startIndex + numbersPerPage - 1);

    setTotalPages(createNumberArray(startIndex, endIndex));
  }, [activePage, pagesAmount, numbersPerPage]);

  return (
    <div className={cn(styles.pagination, className)}>
      <div
        className={cn(styles.button, {
          [styles.buttonDisabled]: totalPages.at(0) === 1
        })}
        onClick={onPrevPage}
      >
        <ArrowLeft />
      </div>

      <div className={styles.container}>
        <Each
          data={totalPages}
          render={(item, key) => (
            <span
              key={key}
              className={cn(styles.pageItem, {
                [styles.pageItemActive]: item === activePage
              })}
              onClick={() => onSetPage(item)}
            >
              {item}
            </span>
          )}
        />
      </div>

      <div
        className={cn(styles.button, {
          [styles.buttonDisabled]: totalPages.at(-1) === activePage
        })}
        onClick={onNextPage}
      >
        <ArrowLeft className={cn(styles.arrowRight)} />
      </div>
    </div>
  );
};

export { Pagination };

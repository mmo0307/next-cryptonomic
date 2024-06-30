'use client';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './ui.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const onReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cn(styles.pageError, className)}>
      <p>{t('Произошла непредвиденная ошибка')}</p>

      <button
        className={styles.button}
        onClick={onReloadPage}
      >
        {t('Обновить страницу')}
      </button>
    </div>
  );
};

export { PageError };

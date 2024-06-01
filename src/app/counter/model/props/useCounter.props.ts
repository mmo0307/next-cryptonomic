'use client';

import { useTranslation } from 'react-i18next';

import { useStore } from '@/shared/lib/hooks/useStore';

const useCounter = () => {
  const { t } = useTranslation();

  const {
    counterStore: { counter, count, getData }
  } = useStore();

  return {
    t,
    counter,
    count,
    getData
  };
};

export { useCounter };

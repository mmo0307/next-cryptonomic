'use client';

import React from 'react';

import { hoc } from '@/shared/utils/hoc';

import { useCounter } from './model/props/useCounter.props';

import styles from './ui.module.scss';

const Counter = hoc.observer(useCounter, ({ t, counter, count, getData }) => (
  <div className={styles.backGround}>
    <p>
      {t('Counter:')} {counter}
    </p>

    <div className='grid gap-4 grid-cols-2'>
      <button
        className={styles.button}
        onClick={count}
      >
        {t('Count')}
      </button>

      <button
        className={styles.button}
        onClick={getData}
      >
        {t('Get Data')}
      </button>
    </div>
  </div>
));

export default Counter;

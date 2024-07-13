'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { Select } from '@/shared/ui/molecules/Select';
import { Page } from '@/widgets/Page';

import styles from './ui.module.scss';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const router = useRouter();

  const [value, setValue] = useState<string>('');

  const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'one',
    'two',
    'three',
    'four',
    'five'
  ];

  return (
    <Page>
      {t('Home')}

      <div style={{ width: '343px', display: 'grid', gap: '30px' }}></div>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>{t('Click me')}</button>

      <button
        type='button'
        onClick={() => router.push('/counter')}
      >
        {t('router counter')}
      </button>

      <Select
        className={styles.select}
        label='Label'
        value={value}
        onChange={setValue}
        options={options}
      />
    </Page>
  );
};

export default Home;

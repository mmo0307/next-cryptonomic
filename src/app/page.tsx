'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { Page } from '@/widgets/Page';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const router = useRouter();

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
    </Page>
  );
};

export default Home;

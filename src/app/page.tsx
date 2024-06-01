'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const router = useRouter();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {t('Home')}

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>{t('Click me')}</button>

      <button
        type='button'
        onClick={() => router.push('/counter')}
      >
        {t('router counter')}
      </button>
    </main>
  );
};

export default Home;

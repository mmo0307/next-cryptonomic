'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { Code } from '@/shared/ui/molecules/Code';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const router = useRouter();

  const [value, setValue] = useState<string>('');

  const onValueChange = (values: string) => {
    console.log('values=>', values);
    setValue(values);
  };

  return (
    <main>
      {t('Home')}

      <div style={{ width: '343px', display: 'grid', gap: '30px' }}>
        <Code
          value={value}
          onChange={onValueChange}
        />
      </div>

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

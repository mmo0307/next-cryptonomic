'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { Input } from '@/shared/ui/Input';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const router = useRouter();

  const [value, setValue] = useState<string | number>('');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {t('Home')}

      <Input
        value={value}
        onChange={setValue}
        // append={<EmailIcon />}
        // prepend={<EmailIcon />}
        label='Email address'
        placeholder='Email address'
      />

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

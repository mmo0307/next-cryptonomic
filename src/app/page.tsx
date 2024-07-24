'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { CheckBox } from '@/shared/ui/atoms/CheckBox';
import { Page } from '@/widgets/Page';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);
  const router = useRouter();

  const onChange = (checked: boolean) => {
    setValue(checked);
  };

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

      <CheckBox
        value={value}
        onChange={onChange}
        label='Param 1'
      />

      <CheckBox
        error
        value={value}
        onChange={onChange}
        label='Param 1'
      />

      <CheckBox
        disabled
        value={value}
        onChange={onChange}
        label='Param 1'
      />
    </Page>
  );
};

export default Home;

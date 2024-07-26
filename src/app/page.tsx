'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { toast } from 'sonner';

import { LinkButton } from '@/shared/ui/atoms/LinkButton';
import { DataTable } from '@/shared/ui/organisms/DataTable';
import { Page } from '@/widgets/Page';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <Page>
      {t('Home')}

      <div style={{ width: '343px', display: 'grid', gap: '30px' }}></div>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>{t('Click me')}</button>

      <LinkButton to='/counter'>{t('router counter')}</LinkButton>

      <LinkButton
        to='/about'
        variant='secondary'
      >
        {t('About Us')}
      </LinkButton>

      <button onClick={() => toast('My first toast')}>
        {' '}
        {t('Give me a toast')}
      </button>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DataTable />
      </div>
    </Page>
  );
};

export default Home;

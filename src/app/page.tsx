'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { toast } from 'sonner';

import { Chip } from '@/shared/ui/atoms/Chip';
import { LinkButton } from '@/shared/ui/atoms/LinkButton';
import { Marque } from '@/shared/ui/atoms/Marque';
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
        {t('Give me a toast')}
      </button>

      <Marque>
        {Array(100)
          .fill(1)
          .map(() => (
            <p>TEXT</p>
          ))}
      </Marque>

      <Chip>{'Create your NFT avatar'}</Chip>
    </Page>
  );
};

export default Home;

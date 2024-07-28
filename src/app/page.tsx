'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { toast } from 'sonner';

import { Code } from '@/shared/ui/atoms/Code';
import { LinkButton } from '@/shared/ui/atoms/LinkButton';
import { DataTable } from '@/shared/ui/organisms/DataTable';
import { HeadlineType } from '@/shared/ui/organisms/DataTable/model/types';
import { Page } from '@/widgets/Page';

enum ClientsDataGridColumns {
  fullName = 'fullName',
  typeReceiver = 'typeReceiver',
  contacts = 'contacts',
  typeDelivery = 'typeDelivery'
}

const headlines: HeadlineType[] = [
  {
    id: ClientsDataGridColumns.fullName,
    title: "Ім'я та Прізвище",
    width: '200px',
    visible: true
  },
  {
    id: ClientsDataGridColumns.typeReceiver,
    title: 'Тип отримувача',
    width: '196px',
    visible: true
  },
  {
    id: ClientsDataGridColumns.contacts,
    title: 'Контакти',
    width: '90px',
    visible: true
  },
  {
    id: ClientsDataGridColumns.typeDelivery,
    title: 'Тип доставки',
    width: '125px',
    visible: true
  }
];

const createData = () => ({
  id: Math.random(),

  [ClientsDataGridColumns.fullName]: <div>{'Text'}</div>,

  [ClientsDataGridColumns.typeReceiver]: <div>{'Text'}</div>,

  [ClientsDataGridColumns.contacts]: <div>{'Text'}</div>,

  [ClientsDataGridColumns.typeDelivery]: <div>{'Text'}</div>
});

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  console.log(Array(5).fill(() => createData()));
  console.log(headlines);

  const data = [1, 2, 3, 4, 5].map(() => createData());
  console.log('data=>', data);
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

      <Code value='3456' />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DataTable
          data={data}
          headline={headlines}
        />
      </div>
    </Page>
  );
};

export default Home;

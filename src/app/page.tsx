'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { Form } from 'formik-toolkit';

import { Button } from '@/shared/ui/atoms/Button';
import { Field } from '@/shared/utils/forms/field';
import { Page } from '@/widgets/Page';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const router = useRouter();

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

  const initialValues = {
    city: null,
    firstName: null
  };

  const form = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  });

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

      <Form use={form}>
        <Field.Select
          label='Label'
          name='city'
          options={options}
        />

        <Field.Input name='firstName' />

        <Button type='submit'>{'Submit'}</Button>
      </Form>
    </Page>
  );
};

export default Home;

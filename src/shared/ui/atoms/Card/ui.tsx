import { FC, PropsWithChildren } from 'react';

import { styled } from '@/shared/utils/styled';

import styles from './ui.module.scss';

interface CardProps extends PropsWithChildren {
  className?: string;

  contentClassName?: string;
}

const Container = styled('div', styles.container);

const Content = styled('div', styles.content);

const Card: FC<CardProps> = ({ className, contentClassName, children }) => (
  <Container className={className}>
    <Content className={contentClassName}>{children}</Content>
  </Container>
);

export { Card };

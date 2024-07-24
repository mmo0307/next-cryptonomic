import { styled } from '@/shared/utils/styled';

import styles from './ui.module.scss';

const Container = styled('table', styles.table);

const Header = styled('thead', styles.header);

const Headline = styled('th', styles.headline);

const Row = styled('tr', styles.row);

const Cell = styled('td', styles.cell);

const Body = styled('tbody', styles.body);

const Table = {
  Container,
  Body,
  Row,
  Cell,
  Header,
  Headline
};

export { Table };

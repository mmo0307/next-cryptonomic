import { FC, useMemo, useRef } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { useScroll } from '@/shared/lib/hooks/useScroll';

import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { Table } from '../../molecules/Table';

import Arrow from '@/shared/assets/icons/arrow-left.svg';

import styles from './ui.module.scss';

interface DataTableProps {
  className?: string;
}

//TODO TABLE
const DataTable: FC<DataTableProps> = ({ className }) => {
  const scrollContainerRef = useRef(null!);

  const scrollY = useScroll();

  const dataHeader = Array(4).fill(1);
  const data = Array(10).fill(1);

  const scrollButtonTopOffset = useMemo(() => {
    switch (data.length || 10) {
      case 1:
        return 60;
      case 2:
        return 99;
      default:
        return 134;
    }
  }, [data.length]);

  return (
    <Card
      className={styles.card}
      contentClassName={styles.cardContent}
    >
      <div className={cn(styles.wrapper, className)}>
        <div
          id='data-grid-scroll'
          ref={scrollContainerRef}
          className={cn(styles.content)}
        >
          <Button
            style={{
              top: `${scrollY ? scrollButtonTopOffset + scrollY : scrollButtonTopOffset}px`
            }}
            className={cn(styles.button, styles.buttonLeft)}
            variant='default'
            icon={<Arrow />}
          />

          <Table.Container>
            <Table.Header className={styles.tableHead}>
              <Table.Row>
                {dataHeader.map((item) => (
                  <Table.Headline key={item}>{'Person'}</Table.Headline>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.map(() => (
                <Table.Row>
                  {dataHeader.map((item) => (
                    <Table.Cell key={item}>{'Person'}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Container>

          <Button
            style={{
              top: `${scrollY ? scrollButtonTopOffset + scrollY : scrollButtonTopOffset}px`
            }}
            className={cn(styles.button, styles.buttonRight)}
            variant='default'
            icon={<Arrow className={styles.arrowRight} />}
          />
        </div>
      </div>
    </Card>
  );
};

export { DataTable };

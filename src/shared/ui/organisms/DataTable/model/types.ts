import { ReactNode } from 'react';

type HeadlineType = {
  id: string;

  title: string;

  width: string;

  visible?: boolean;
};

type Data = Record<string, ReactNode> & {
  id: string | number;
};

interface DataTableProps {
  data: Data[];

  headline: HeadlineType[];

  className?: string;
}

export type { DataTableProps, HeadlineType };

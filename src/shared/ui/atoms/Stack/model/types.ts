import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type FlexJustify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type FlexAlign = 'center' | 'start' | 'end' | 'normal';

type FlexDirection = 'row' | 'column';

type FlexWrap = 'wrap' | 'nowrap';

type FlexGap = '4' | '8' | '16' | '24' | '32';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type TagName = keyof JSX.IntrinsicElements;

interface FlexProps extends PropsWithChildren, DivProps {
  justify?: FlexJustify;

  align?: FlexAlign;

  wrap?: FlexWrap;

  direction: FlexDirection;

  gap?: FlexGap;

  max?: boolean;

  tagname?: TagName;
}

export type {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  FlexProps,
  FlexWrap
};

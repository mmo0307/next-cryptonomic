import { HTMLAttributes } from 'react';

type HeaderTagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subheader-1'
  | 'subheader-2'
  | 'body-1'
  | 'body-2'
  | 'caption'
  | 'overline';

type TextVariant = 'primary' | 'error';

type TextAlign = 'left' | 'right' | 'center';

type TextFont = 'rubik' | 'pixelify';

type TextTag = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  tag?: TextTag;

  font?: TextFont;

  theme?: HeaderTagType;

  align?: TextAlign;

  variant?: TextVariant;
}

export type { TextProps };

import { PropsWithChildren } from 'react';

interface BaseModalProps extends PropsWithChildren {
  className?: string;
}

interface OverlayModalProps extends BaseModalProps {
  visible: boolean;

  onClose: () => void;

  element?: HTMLElement;

  contentClassName?: string;
}

type HeaderModalProps = BaseModalProps;
type ContentModalProps = BaseModalProps;
type FooterModalProps = BaseModalProps;

export type {
  ContentModalProps,
  FooterModalProps,
  HeaderModalProps,
  OverlayModalProps
};

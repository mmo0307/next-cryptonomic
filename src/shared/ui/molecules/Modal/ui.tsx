import React, {
  createContext,
  FC,
  MouseEvent,
  useContext,
  useEffect,
  useMemo
} from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { Portal } from '../../atoms/Portal';

import {
  ContentModalProps,
  FooterModalProps,
  HeaderModalProps,
  OverlayModalProps
} from './model/types';

import CloseIcon from '@/shared/assets/icons/close.svg';

import styles from './ui.module.scss';

const ModalContext = createContext({
  onClose: () => {},

  visible: false
});

const Header: FC<HeaderModalProps> = ({ className, children }) => {
  const { onClose } = useContext(ModalContext);

  const onModalClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onClose();
  };

  return (
    <div className={cn(styles.header, className)}>
      <div className={styles.headerContent}>{children}</div>

      <CloseIcon
        className={styles.close}
        onCLick={onModalClose}
      />
    </div>
  );
};
const Footer: FC<FooterModalProps> = ({ className, children }) => (
  <div className={cn(styles.footer, className)}>{children}</div>
);

const Body: FC<ContentModalProps> = ({ className, children }) => (
  <div className={cn(styles.body, className)}>{children}</div>
);

const Overlay: FC<OverlayModalProps> = ({
  className,
  contentClassName,
  children,
  element,
  visible,
  onClose
}) => {
  const context = useMemo(
    () => ({
      visible,
      onClose
    }),
    [visible, onClose]
  );

  const onModalClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onClose();
  };

  useEffect(() => {
    function onKeyPress(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [onClose]);

  return (
    <Portal element={element}>
      <ModalContext.Provider value={context}>
        <div
          className={cn(styles.overlay, className, {
            [styles.active]: visible
          })}
          onClick={onModalClose}
        >
          <div
            className={cn(styles.content, contentClassName, {
              [styles.contentActive]: visible
            })}
          >
            {children}
          </div>
        </div>
      </ModalContext.Provider>
    </Portal>
  );
};

const Modal = {
  Header,
  Body,
  Footer,
  Overlay
};

export { Modal };

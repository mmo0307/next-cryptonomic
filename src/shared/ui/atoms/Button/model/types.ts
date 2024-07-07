import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonSize, ButtonVariant } from './consts';

/**
 * Button extend the standard HTML button element with additional properties
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Button theme. Responsible for the visual (in a frame, without styles, color opposite to the theme of the application, etc.)
   */
  variant?: ButtonVariant;
  /**
   *  Button size according to design system
   */
  size?: ButtonSize;
  /**
   * Flag responsible for the operation of the button
   */
  disabled?: boolean;
  /**
   * Button Rounded
   */
  rounded?: boolean;
  /**
   *  Icon for button according to design system
   */
  icon?: ReactNode;
  /**
   *  Left Icon for button according to design system
   */
  addonLeft?: ReactNode;
  /**
   *  Right Icon for button according to design system
   */
  addonRight?: ReactNode;
}

export type { ButtonProps };

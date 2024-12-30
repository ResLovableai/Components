import { ButtonHTMLAttributes, CSSProperties } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'cancel' | 'back';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonColors {
  background?: string;
  text?: string;
  border?: string;
  hover?: {
    background?: string;
    text?: string;
    border?: string;
  };
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  colors?: ButtonColors;
  rounded?: boolean;
  elevation?: boolean;
  customStyles?: CSSProperties;
  // Optional event handlers
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}
import { InputHTMLAttributes } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioVariant = 'primary' | 'secondary' | 'tertiary';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
}

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  options: RadioOption[];
  variant?: RadioVariant;
  size?: RadioSize;
  label?: string;
  error?: string;
  helperText?: string;
  layout?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  circleColor?: string;
  customStyles?: React.CSSProperties;
  customClasses?: {
    container?: string;
    label?: string;
    option?: string;
    radio?: string;
    error?: string;
    helper?: string;
  };
}
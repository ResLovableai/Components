import { InputHTMLAttributes } from 'react';

export type CheckboxVariant = 'primary' | 'secondary' | 'cancel' | 'back';
export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  tickColor?: string; // New prop for custom tick color
}
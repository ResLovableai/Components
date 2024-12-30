import { InputHTMLAttributes, CSSProperties } from 'react';

export type InputType = 
  | 'text'
  | 'password'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'phone'
  | 'creditcard';

export type InputVariant = 'primary' | 'secondary' | 'outlined';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  type?: InputType;
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  onSearch?: (term: string) => Promise<any[]>;
  searchData?: any[] | Record<string, any>;
  searchDebounce?: number;
  customStyles?: CSSProperties;
  customClasses?: {
    container?: string;
    label?: string;
    input?: string;
    icon?: string;
    error?: string;
    helper?: string;
  };
}

export interface CardType {
  name: string;
  pattern: RegExp;
  format: RegExp;
}
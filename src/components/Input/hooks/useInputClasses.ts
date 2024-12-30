import { InputSize, InputVariant } from '../types';
import { inputSizes } from '../styles/sizes';
import { inputVariants } from '../styles/variants';

interface UseInputClassesProps {
  type: string;
  size: InputSize;
  variant: InputVariant;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  isFocused?: boolean;
  customClasses?: {
    container?: string;
    label?: string;
    input?: string;
    icon?: string;
    error?: string;
    helper?: string;
  };
}

export const useInputClasses = ({
  type,
  size,
  variant,
  disabled,
  error,
  fullWidth,
  isFocused,
  customClasses = {},
}: UseInputClassesProps) => {
  const containerClasses = [
    'rsp-flex rsp-flex-col',
    fullWidth && 'rsp-w-full',
    disabled && 'rsp-opacity-50',
    customClasses.container,
  ]
    .filter(Boolean)
    .join(' ');

  const inputWrapperClasses = [
    'rsp-relative rsp-flex rsp-items-center',
    fullWidth && 'rsp-w-full',
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'rsp-appearance-none',
    'rsp-transition-all',
    'rsp-duration-200',
    inputSizes[size].input,
    inputVariants[variant].base,
    !disabled && inputVariants[variant].hover,
    isFocused && inputVariants[variant].focus,
    error ? 'rsp-border-red-500' : '',
    disabled ? 'rsp-cursor-not-allowed' : '',
    type === 'search' && 'rsp-pl-10',
    customClasses.input,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [
    inputSizes[size].label,
    'rsp-text-gray-700',
    'rsp-mb-1',
    disabled && 'rsp-cursor-not-allowed',
    customClasses.label,
  ]
    .filter(Boolean)
    .join(' ');

  const iconClasses = [
    'rsp-absolute',
    'rsp-flex',
    'rsp-items-center',
    'rsp-justify-center',
    inputSizes[size].icon,
    customClasses.icon,
  ]
    .filter(Boolean)
    .join(' ');

  const errorClasses = [
    'rsp-text-red-500',
    'rsp-text-sm',
    'rsp-mt-1',
    customClasses.error,
  ]
    .filter(Boolean)
    .join(' ');

  const helperClasses = [
    'rsp-text-gray-500',
    'rsp-text-sm',
    'rsp-mt-1',
    customClasses.helper,
  ]
    .filter(Boolean)
    .join(' ');

  return {
    container: containerClasses,
    inputWrapper: inputWrapperClasses,
    input: inputClasses,
    label: labelClasses,
    icon: iconClasses,
    error: errorClasses,
    helper: helperClasses,
  };
};

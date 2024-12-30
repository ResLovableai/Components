import { RadioSize, RadioVariant } from '../types';
import { radioSizes } from '../styles/sizes';
import { radioVariants } from '../styles/variants';

interface UseRadioClassesProps {
  size: RadioSize;
  variant: RadioVariant;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  layout?: 'horizontal' | 'vertical';
  circleColor?: string;
  customClasses?: {
    container?: string;
    label?: string;
    option?: string;
    radio?: string;
    error?: string;
    helper?: string;
  };
}

export const useRadioClasses = ({
  size,
  variant,
  disabled,
  error,
  fullWidth,
  layout = 'vertical',
  circleColor,
  customClasses = {},
}: UseRadioClassesProps) => {
  const containerClasses = [
    'rsp-flex',
    layout === 'vertical' ? 'rsp-flex-col' : 'rsp-flex-row rsp-flex-wrap',
    radioSizes[size].container,
    fullWidth && 'rsp-w-full',
    disabled && 'rsp-opacity-50',
    customClasses.container,
  ].filter(Boolean).join(' ');

  const optionClasses = [
    'rsp-flex rsp-items-center rsp-gap-2',
    radioSizes[size].container,
    customClasses.option,
  ].filter(Boolean).join(' ');

  const radioClasses = [
    'rsp-appearance-none',
    'rsp-rounded-full',
    'rsp-border-2',
    'rsp-transition-all',
    'rsp-duration-200',
    'rsp-bg-white',
    radioSizes[size].radio,
    circleColor ? 'rsp-border-gray-300' : radioVariants[variant].base,
    !disabled && !circleColor && radioVariants[variant].hover,
    !disabled && circleColor && 'hover:rsp-border-[var(--radio-hover-color)]',
    radioVariants[variant].focus,
    circleColor ? 'checked:rsp-border-[var(--radio-hover-color)]' : 'checked:' + radioVariants[variant].checked,
    error ? 'rsp-border-red-500' : '',
    disabled ? 'rsp-cursor-not-allowed' : 'rsp-cursor-pointer',
    customClasses.radio,
  ].filter(Boolean).join(' ');

  const dotClasses = circleColor ? '' : radioVariants[variant].dot;

  const labelClasses = [
    radioSizes[size].label,
    'rsp-text-gray-700',
    disabled ? 'rsp-cursor-not-allowed' : 'rsp-cursor-pointer',
    customClasses.label,
  ].filter(Boolean).join(' ');

  const errorClasses = [
    'rsp-text-red-500',
    'rsp-text-sm',
    'rsp-mt-1',
    customClasses.error,
  ].filter(Boolean).join(' ');

  const helperClasses = [
    'rsp-text-gray-500',
    'rsp-text-sm',
    'rsp-mt-1',
    customClasses.helper,
  ].filter(Boolean).join(' ');

  return {
    container: containerClasses,
    option: optionClasses,
    radio: radioClasses,
    dot: dotClasses,
    label: labelClasses,
    error: errorClasses,
    helper: helperClasses,
  };
};
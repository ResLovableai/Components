import { CheckboxSize, CheckboxVariant } from './types';

export const checkboxVariants: Record<CheckboxVariant, string> = {
  blue: 'checked:rsp-bg-blue-600 checked:rsp-border-blue-600',
  red: 'checked:rsp-bg-red-600 checked:rsp-border-red-600',
  amber: 'checked:rsp-bg-amber-600 checked:rsp-border-amber-600',
  green: 'checked:rsp-bg-green-600 checked:rsp-border-green-600',
  teal: 'checked:rsp-bg-teal-600 checked:rsp-border-teal-600',
  indigo: 'checked:rsp-bg-indigo-600 checked:rsp-border-indigo-600',
  purple: 'checked:rsp-bg-purple-600 checked:rsp-border-purple-600',
  pink: 'checked:rsp-bg-pink-600 checked:rsp-border-pink-600',
};

export const checkboxSizes: Record<CheckboxSize, { checkbox: string; icon: string }> = {
  sm: {
    checkbox: 'rsp-h-4 rsp-w-4',
    icon: 'rsp-h-3 rsp-w-3',
  },
  md: {
    checkbox: 'rsp-h-5 rsp-w-5',
    icon: 'rsp-h-3.5 rsp-w-3.5',
  },
  lg: {
    checkbox: 'rsp-h-6 rsp-w-6',
    icon: 'rsp-h-4 rsp-w-4',
  },
};
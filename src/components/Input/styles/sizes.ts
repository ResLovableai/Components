import { InputSize } from '../types';

export const inputSizes: Record<InputSize, {
  input: string;
  label: string;
  icon: string;
}> = {
  sm: {
    input: 'rsp-h-8 rsp-text-sm rsp-px-3',
    label: 'rsp-text-sm',
    icon: 'rsp-w-4 rsp-h-4 rsp-mx-2',
  },
  md: {
    input: 'rsp-h-10 rsp-text-base rsp-px-4',
    label: 'rsp-text-base',
    icon: 'rsp-w-5 rsp-h-5 rsp-mx-3',
  },
  lg: {
    input: 'rsp-h-12 rsp-text-lg rsp-px-5',
    label: 'rsp-text-lg',
    icon: 'rsp-w-6 rsp-h-6 rsp-mx-4',
  },
};
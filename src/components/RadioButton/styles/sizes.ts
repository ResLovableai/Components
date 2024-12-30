import { RadioSize } from '../types';

export const radioSizes: Record<RadioSize, {
  radio: string;
  label: string;
  container: string;
}> = {
  sm: {
    radio: 'rsp-h-4 rsp-w-4',
    label: 'rsp-text-sm',
    container: 'rsp-gap-2',
  },
  md: {
    radio: 'rsp-h-5 rsp-w-5',
    label: 'rsp-text-base',
    container: 'rsp-gap-3',
  },
  lg: {
    radio: 'rsp-h-6 rsp-w-6',
    label: 'rsp-text-lg',
    container: 'rsp-gap-4',
  },
};
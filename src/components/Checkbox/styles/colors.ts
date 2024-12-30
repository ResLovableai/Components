import { CheckboxVariant } from '../types';

export const checkboxColors: Record<CheckboxVariant, {
  tick: string;
  background: string;
}> = {
  primary: {
    tick: 'rsp-text-green-600',
    background: 'rsp-bg-white',
  },
  secondary: {
    tick: 'rsp-text-blue-600',
    background: 'rsp-bg-white',
  },
  cancel: {
    tick: 'rsp-text-red-600',
    background: 'rsp-bg-white',
  },
  back: {
    tick: 'rsp-text-gray-600',
    background: 'rsp-bg-gray-50',
  },
};
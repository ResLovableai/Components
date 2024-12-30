import { InputVariant } from '../types';

export const inputVariants: Record<InputVariant, {
  base: string;
  hover: string;
  focus: string;
}> = {
  primary: {
    base: 'rsp-bg-white rsp-border rsp-border-gray-300 rsp-rounded-md',
    hover: 'hover:rsp-border-gray-400',
    focus: 'focus:rsp-border-green-500 focus:rsp-ring-1 focus:rsp-ring-green-500',
  },
  secondary: {
    base: 'rsp-bg-gray-50 rsp-border rsp-border-gray-300 rsp-rounded-md',
    hover: 'hover:rsp-bg-gray-100',
    focus: 'focus:rsp-border-blue-500 focus:rsp-ring-1 focus:rsp-ring-blue-500',
  },
  outlined: {
    base: 'rsp-bg-transparent rsp-border-2 rsp-border-gray-300 rsp-rounded-md',
    hover: 'hover:rsp-border-gray-400',
    focus: 'focus:rsp-border-purple-500 focus:rsp-ring-1 focus:rsp-ring-purple-500',
  },
};
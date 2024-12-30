import { RadioVariant } from '../types';

export const radioVariants: Record<RadioVariant, {
  base: string;
  checked: string;
  hover: string;
  focus: string;
  dot: string;
}> = {
  primary: {
    base: 'rsp-border-gray-300',
    checked: 'rsp-border-green-600',
    hover: 'hover:rsp-border-green-500',
    // focus: 'focus:rsp-ring-2 focus:rsp-ring-offset-2 focus:rsp-ring-green-500',
    dot: 'rsp-bg-green-600'
  },
  secondary: {
    base: 'rsp-border-gray-300',
    checked: 'rsp-border-blue-600',
    hover: 'hover:rsp-border-blue-500',
    // focus: 'focus:rsp-ring-2 focus:rsp-ring-offset-2 focus:rsp-ring-blue-500',
    dot: 'rsp-bg-blue-600'
  },
  tertiary: {
    base: 'rsp-border-gray-300',
    checked: 'rsp-border-purple-600',
    hover: 'hover:rsp-border-purple-500',
    // focus: 'focus:rsp-ring-2 focus:rsp-ring-offset-2 focus:rsp-ring-purple-500',
    dot: 'rsp-bg-purple-600'
  }
};
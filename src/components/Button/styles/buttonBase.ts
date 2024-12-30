export const buttonBase = {
  wrapper:
    'rsp-button rsp-inline-flex rsp-items-center rsp-justify-center rsp-gap-2 rsp-font-medium rsp-relative rsp-overflow-hidden rsp-isolate rsp-border rsp-transition-all rsp-duration-300 rsp-ease-out',
  states: {
    fullWidth: 'rsp-full-width rsp-w-full',
    rounded: 'rsp-rounded rsp-rounded-full',
    default: 'rsp-default rsp-rounded-md',
    elevation: 'rsp-elevated rsp-shadow-md hover:rsp-shadow-lg',
    disabled: 'rsp-disabled rsp-opacity-50 rsp-cursor-not-allowed',
    loading: 'rsp-loading rsp-cursor-wait',
    interactive: 'rsp-interactive rsp-cursor-pointer',
  },
  hover:
    'rsp-hover-effect before:rsp-absolute before:rsp-inset-0 before:rsp-bg-black/10 before:rsp-scale-0 before:rsp-opacity-0 before:rsp-transition-all before:rsp-duration-300 before:rsp-ease-out before:rsp-z-10 before:rsp-rounded-[inherit] hover:before:rsp-scale-[2] hover:before:rsp-opacity-100',
} as const;

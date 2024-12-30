import React from 'react';
import { ButtonProps } from './types';
import { useButtonClasses } from './hooks/useButtonClasses';
import { buttonSizes } from './styles/buttonSizes';
import { buttonVariants } from './styles/buttonVariants';
import { ButtonContent } from './components/ButtonContent';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  isLoading,
  leftIcon,
  rightIcon,
  className = '',
  type = 'button',
  colors,
  rounded,
  elevation,
  customStyles,
  ...props
}) => {
  const baseClasses = useButtonClasses({
    fullWidth,
    rounded,
    elevation,
    disabled,
    isLoading,
    className
  });

  const variantClasses = disabled ? buttonVariants.disabled : buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  
  const hoverEffectClasses = !disabled && !isLoading ? 
    'before:rsp-absolute before:rsp-inset-0 before:rsp-bg-black/10 before:rsp-scale-0 before:rsp-opacity-0 before:rsp-transition-all before:rsp-duration-300 before:rsp-ease-out before:rsp-z-10 before:rsp-rounded-[inherit] hover:before:rsp-scale-[2] hover:before:rsp-opacity-100' 
    : '';

  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    hoverEffectClasses
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      style={colors ? {
        backgroundColor: colors.background,
        color: colors.text,
        borderColor: colors.border,
        ...customStyles
      } as React.CSSProperties : customStyles}
      {...props}
    >
      <ButtonContent
        isLoading={isLoading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonContent>
    </button>
  );
};
import { ButtonProps } from '../types';
import { buttonBase } from '../styles/buttonBase';

export const useButtonClasses = ({
  fullWidth,
  rounded,
  elevation,
  disabled,
  isLoading,
  className = ''
}: Partial<ButtonProps>): string => {
  const classes = [
    // Base classes
    buttonBase.wrapper,
    
    // State classes
    fullWidth && buttonBase.states.fullWidth,
    rounded && buttonBase.states.rounded,
    !rounded && buttonBase.states.default,
    elevation && buttonBase.states.elevation,
    disabled && buttonBase.states.disabled,
    isLoading && buttonBase.states.loading,
    !disabled && !isLoading && buttonBase.states.interactive,
    
    // Hover effect (only for interactive buttons)
    !disabled && !isLoading && buttonBase.hover,
    
    // Custom class
    className
  ];

  return classes.filter(Boolean).join(' ');
};
import React from 'react';
import { ButtonIcon } from './ButtonIcon';
import { ButtonSpinner } from './ButtonSpinner';

interface ButtonContentProps {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const ButtonContent: React.FC<ButtonContentProps> = ({
  isLoading,
  leftIcon,
  rightIcon,
  children
}) => {
  if (isLoading) {
    return <ButtonSpinner />;
  }

  return (
    <>
      {leftIcon && <ButtonIcon icon={leftIcon} position="left" />}
      <span className="rsp-button-text">{children}</span>
      {rightIcon && <ButtonIcon icon={rightIcon} position="right" />}
    </>
  );
};
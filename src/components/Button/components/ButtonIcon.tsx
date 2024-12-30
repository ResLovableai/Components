import React from 'react';

interface ButtonIconProps {
  icon: React.ReactNode;
  position: 'left' | 'right';
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, position }) => (
  <span 
    className={`rsp-button-icon rsp-inline-flex rsp-items-center ${position === 'left' ? 'rsp-mr-2' : 'rsp-ml-2'}`}
    aria-hidden="true"
  >
    {icon}
  </span>
);
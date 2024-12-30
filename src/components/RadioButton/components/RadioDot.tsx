import React from 'react';

interface RadioDotProps {
  checked: boolean;
  circleColor?: string;
  className?: string;
}

export const RadioDot: React.FC<RadioDotProps> = ({ checked, circleColor, className = '' }) => {
  if (!checked) return null;

  return (
    <div 
      className={`rsp-absolute rsp-left-1/2 rsp-top-1/2 -rsp-translate-x-1/2 -rsp-translate-y-1/2 rsp-rounded-full ${className}`}
      style={{ 
        width: '8px', 
        height: '8px',
        backgroundColor: circleColor 
      }} 
    />
  );
};
import { CSSProperties } from 'react';

export const createCircleColorStyles = (circleColor?: string): CSSProperties | undefined => {
  if (!circleColor) return undefined;
  
  return {
    '--radio-color': circleColor,
    '--radio-hover-color': circleColor,
  } as CSSProperties;
};
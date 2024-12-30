import React from 'react';
import { RadioOption as RadioOptionType } from '../types';
import { RadioDot } from './RadioDot';
import { createCircleColorStyles } from '../styles/customization';

interface RadioOptionProps {
  option: RadioOptionType;
  name: string;
  checked: boolean;
  disabled?: boolean;
  circleColor?: string;
  classes: {
    option: string;
    radio: string;
    label: string;
    dot: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioOption: React.FC<RadioOptionProps> = ({
  option,
  name,
  checked,
  disabled,
  circleColor,
  classes,
  onChange,
}) => {
  const id = `${name}-${option.value}`;
  const radioStyle = createCircleColorStyles(circleColor);
  
  return (
    <div className={classes.option}>
      <div className="rsp-relative rsp-flex rsp-items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={option.value}
          checked={checked}
          disabled={disabled || option.disabled}
          onChange={onChange}
          className={classes.radio}
          style={radioStyle}
        />
        <RadioDot 
          checked={checked}
          circleColor={circleColor}
          className={classes.dot}
        />
      </div>
      <label htmlFor={id} className={classes.label}>
        {option.label}
        {option.description && (
          <p className="rsp-text-sm rsp-text-gray-500">
            {option.description}
          </p>
        )}
      </label>
    </div>
  );
};
import React from 'react';
import { RadioButtonProps } from './types';
import { useRadioClasses } from './hooks/useRadioClasses';
import { RadioOption } from './components/RadioOption';

export const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  variant = 'primary',
  size = 'md',
  label,
  error,
  helperText,
  layout = 'vertical',
  fullWidth = false,
  disabled,
  value,
  onChange,
  circleColor,
  customStyles,
  customClasses,
  className,
  ...props
}) => {
  const classes = useRadioClasses({
    size,
    variant,
    disabled,
    error: !!error,
    fullWidth,
    layout,
    circleColor,
    customClasses,
  });

  const style = {
    ...customStyles,
    ...(circleColor && { '--radio-color': circleColor } as React.CSSProperties),
  };

  return (
    <div className={className} style={style}>
      {label && (
        <div className="rsp-mb-2">
          <span className={classes.label}>{label}</span>
        </div>
      )}
      
      <div className={classes.container}>
        {options.map((option) => (
          <RadioOption
            key={option.value}
            option={option}
            name={props.name || ''}
            checked={value === option.value}
            disabled={disabled}
            circleColor={circleColor}
            classes={{
              option: classes.option,
              radio: classes.radio,
              label: classes.label,
              dot: classes.dot,
            }}
            onChange={onChange}
          />
        ))}
      </div>

      {error && (
        <div className={classes.error} role="alert">
          {error}
        </div>
      )}
      
      {!error && helperText && (
        <div className={classes.helper}>
          {helperText}
        </div>
      )}
    </div>
  );
};
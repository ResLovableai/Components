import React from 'react';
import { CheckboxProps } from './types';
import { CheckIcon } from './CheckIcon';
import { checkboxSizes, checkboxVariants } from './styles';
import { checkboxColors } from './styles/colors';

export const Checkbox: React.FC<CheckboxProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  disabled,
  tickColor,
  ...props
}) => {
  const id = props.id || `checkbox-${Math.random().toString(36).slice(2, 11)}`;

  const containerClasses = [
    'rsp-inline-flex',
    'rsp-items-start',
    'rsp-gap-2',
    fullWidth && 'rsp-w-full',
    disabled && 'rsp-opacity-50',
    className
  ].filter(Boolean).join(' ');

  const checkboxClasses = [
    'rsp-peer',
    checkboxSizes[size].checkbox,
    'rsp-cursor-pointer',
    'rsp-transition-all',
    'rsp-appearance-none',
    'rsp-rounded',
    'rsp-shadow',
    'hover:rsp-shadow-md',
    'rsp-border',
    'rsp-border-slate-300',
    checkboxVariants[variant],
    disabled && 'rsp-cursor-not-allowed',
    error ? 'rsp-border-red-500' : 'focus:rsp-border-blue-500',
  ].filter(Boolean).join(' ');

  const tickStyle = tickColor ? { color: tickColor } : undefined;

  return (
    <div className={containerClasses}>
      <label className="rsp-flex rsp-items-center rsp-cursor-pointer rsp-relative">
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          className={checkboxClasses}
          {...props}
        />
        <span 
          className={`rsp-absolute rsp-opacity-0 peer-checked:rsp-opacity-100 rsp-top-1/2 rsp-left-1/2 rsp-transform -rsp-translate-x-1/2 -rsp-translate-y-1/2 ${!tickColor ? checkboxColors[variant].tick : ''}`}
          style={tickStyle}
        >
          <CheckIcon className={checkboxSizes[size].icon} />
        </span>
      </label>
      
      {(label || error || helperText) && (
        <div className="rsp-flex rsp-flex-col rsp-gap-1">
          {label && (
            <label
              htmlFor={id}
              className={`rsp-text-sm ${
                disabled ? 'rsp-cursor-not-allowed' : 'rsp-cursor-pointer'
              } ${error ? 'rsp-text-red-600' : 'rsp-text-gray-700'}`}
            >
              {label}
            </label>
          )}
          {error && (
            <span className="rsp-text-xs rsp-text-red-600">{error}</span>
          )}
          {!error && helperText && (
            <span className="rsp-text-xs rsp-text-gray-500">{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
};
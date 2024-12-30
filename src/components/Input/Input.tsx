import React, { useState, useRef, useEffect } from 'react';
import { InputProps } from './types';
import { useInputClasses } from './hooks/useInputClasses';
import { useDebounce } from './hooks/useDebounce';
import { formatCreditCard, detectCardType } from './utils/creditCard';
import { formatPhoneNumber } from './utils/phoneNumber';
import { 
  EyeIcon, 
  EyeSlashIcon,
  SearchIcon,
  LoadingSpinner,
  CreditCardIcon
} from './components/Icons';
import { SearchResults } from './components/SearchResults';
import { CountryCodeSelect } from './components/CountryCodeSelect';

export const Input: React.FC<InputProps> = ({
  type = 'text',
  variant = 'primary',
  size = 'md',
  label,
  error,
  helperText,
  startIcon,
  endIcon,
  fullWidth = false,
  disabled,
  value,
  onChange,
  onSearch,
  searchData,
  searchDebounce = 300,
  className = '',
  customStyles,
  customClasses,
  ...props
}) => {
  // State management
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [cardType, setCardType] = useState<string>('');
  const [maskedValue, setMaskedValue] = useState('');
  
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Custom hooks
  const classes = useInputClasses({
    type,
    variant,
    size,
    disabled,
    error: !!error,
    fullWidth,
    isFocused,
    customClasses,
  });

  const debouncedSearch = useDebounce((searchTerm: string) => {
    if (onSearch) {
      setIsLoading(true);
      onSearch(searchTerm)
        .then((results) => {
          setSearchResults(results);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, searchDebounce);

  // Effects
  useEffect(() => {
    if (type === 'creditcard' && typeof value === 'string') {
      const detectedType = detectCardType(value);
      setCardType(detectedType);
      
      if (!isFocused) {
        setMaskedValue(formatCreditCard(value, true));
      }
    }
  }, [value, type, isFocused]);

  // Event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (type === 'creditcard') {
      newValue = formatCreditCard(newValue, false);
    } else if (type === 'phone') {
      newValue = formatPhoneNumber(newValue);
    }

    if (onChange) {
      onChange({ ...e, target: { ...e.target, value: newValue } });
    }

    if (type === 'search' && onSearch) {
      debouncedSearch(newValue);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (props.onBlur) props.onBlur(e);
  };

  // Render helpers
  const renderPasswordIcon = () => {
    if (type !== 'password' || !isFocused) return null;

    return (
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={classes.icon}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
    );
  };

  const renderSearchIcon = () => {
    if (type !== 'search') return null;

    return (
      <span className={classes.icon}>
        {isLoading ? <LoadingSpinner /> : <SearchIcon />}
      </span>
    );
  };

  const renderCreditCardIcon = () => {
    if (type !== 'creditcard' || !cardType) return null;

    return (
      <span className={classes.icon}>
        <CreditCardIcon type={cardType} />
      </span>
    );
  };

  const renderStartIcon = () => {
    if (!startIcon) return null;
    return <span className={classes.icon}>{startIcon}</span>;
  };

  const renderEndIcon = () => {
    if (!endIcon) return null;
    return <span className={classes.icon}>{endIcon}</span>;
  };

  return (
    <div className={`${classes.container} ${className}`} style={customStyles}>
      {label && (
        <label htmlFor={props.id} className={classes.label}>
          {label}
        </label>
      )}

      <div className={classes.inputWrapper}>
        {type === 'phone' && <CountryCodeSelect />}
        {renderStartIcon()}
        
        <input
          ref={inputRef}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          className={classes.input}
          value={type === 'creditcard' && !isFocused ? maskedValue : value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
        />

        {renderPasswordIcon()}
        {renderSearchIcon()}
        {renderCreditCardIcon()}
        {renderEndIcon()}
      </div>

      {type === 'search' && searchResults.length > 0 && (
        <SearchResults results={searchResults} />
      )}

      {error && (
        <p className={classes.error} role="alert">
          {error}
        </p>
      )}
      
      {!error && helperText && (
        <p className={classes.helper}>
          {helperText}
        </p>
      )}
    </div>
  );
};
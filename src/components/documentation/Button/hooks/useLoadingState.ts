import { useState, useCallback } from 'react';

export const useLoadingState = (duration: number = 2000) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), duration);
  }, [duration]);

  return {
    isLoading,
    handleLoadingClick,
  };
};
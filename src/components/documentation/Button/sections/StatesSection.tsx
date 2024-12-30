import React from 'react';
import { Button } from '../../../Button';

interface StatesSectionProps {
  isLoading: boolean;
  onLoadingClick: () => void;
}

export const StatesSection: React.FC<StatesSectionProps> = ({
  isLoading,
  onLoadingClick,
}) => {
  return (
    <section>
      <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">States</h2>
      <div className="rsp-flex rsp-flex-wrap rsp-gap-4">
        <Button disabled>Disabled</Button>
        <Button isLoading>Loading</Button>
        <Button onClick={onLoadingClick} isLoading={isLoading}>
          {isLoading ? 'Loading...' : 'Click to Load'}
        </Button>
      </div>
    </section>
  );
};
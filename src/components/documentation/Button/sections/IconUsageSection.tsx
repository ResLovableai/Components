import React from 'react';
import { Button } from '../../../Button';
import { CodeBlock } from '../../CodeBlock';
import { iconUsageCode } from '../constants';

export const IconUsageSection: React.FC = () => {
  // Simple arrow icons for demonstration
  const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rsp-w-5 rsp-h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rsp-w-5 rsp-h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );

  return (
    <section>
      <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">Icons</h2>
      <div className="rsp-mb-4 rsp-flex rsp-flex-wrap rsp-gap-4">
        <Button leftIcon={<ArrowLeftIcon />}>Back</Button>
        <Button rightIcon={<ArrowRightIcon />}>Next</Button>
        <Button 
          leftIcon={<ArrowLeftIcon />}
          rightIcon={<ArrowRightIcon />}
        >
          Navigate
        </Button>
      </div>
      <CodeBlock code={iconUsageCode} language="tsx" />
    </section>
  );
};
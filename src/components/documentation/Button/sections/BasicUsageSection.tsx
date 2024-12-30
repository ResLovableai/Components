import React from 'react';
import { Button } from '../../../Button';
import { CodeBlock } from '../../CodeBlock';
import { basicUsageCode } from '../constants';

export const BasicUsageSection: React.FC = () => {
  return (
    <section>
      <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">Basic Usage</h2>
      <div className="rsp-mb-4 rsp-flex rsp-flex-wrap rsp-gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="cancel">Cancel</Button>
        <Button variant="back">← Back</Button>
      </div>
      <CodeBlock code={basicUsageCode} language="tsx" />
    </section>
  );
};
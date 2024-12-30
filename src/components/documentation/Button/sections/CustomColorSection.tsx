import React from 'react';
import { Button } from '../../../Button';
import { CodeBlock } from '../../CodeBlock';
import { customColorCode } from '../constants';

export const CustomColorSection: React.FC = () => {
  return (
    <section>
      <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">Custom Colors</h2>
      <div className="rsp-mb-4">
        <Button
          colors={{
            background: '#8b5cf6',
            text: 'white',
            hover: { background: '#7c3aed' }
          }}
        >
          Custom Purple
        </Button>
      </div>
      <CodeBlock code={customColorCode} language="tsx" />
    </section>
  );
};
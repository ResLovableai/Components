import React, { useState } from 'react';
import { RadioButton } from '../../../RadioButton';
import { CodeBlock } from '../../CodeBlock';
import { customColorCode } from '../constants';

export const CustomColorSection: React.FC = () => {
  const [value, setValue] = useState('');
  
  const options = [
    { label: 'Purple Option', value: '1' },
    { label: 'Another Purple', value: '2' },
    { label: 'More Purple', value: '3' },
  ];

  return (
    <section>
      <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
        Custom Circle Color
      </h2>
      <div className="rsp-mb-4">
        <RadioButton
          name="custom-color"
          options={options}
          circleColor="#8B5CF6"
          label="Custom Purple Radio"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <CodeBlock code={customColorCode} language="tsx" />
    </section>
  );
};
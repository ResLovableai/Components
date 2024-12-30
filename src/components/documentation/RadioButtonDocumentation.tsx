import React, { useState } from 'react';
import { RadioButton } from '../RadioButton';
import { CodeBlock } from './CodeBlock';
import {
  importCode,
  basicUsageCode,
  sizesCode,
  layoutCode,
  variantsCode,
  customColorCode,
} from './RadioButton/constants';

export const RadioButtonDocumentation: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [variantValues, setVariantValues] = useState({
    primary: '',
    secondary: '',
    tertiary: '',
  });
  const [customColorValue, setCustomColorValue] = useState('');

  const basicOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const handleVariantChange = (variant: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setVariantValues(prev => ({ ...prev, [variant]: e.target.value }));
  };

  return (
    <div className="rsp-space-y-8">
      <section>
        <h1 className="rsp-text-3xl rsp-font-bold rsp-text-gray-900 rsp-mb-4">
          Radio Button Component
        </h1>
        <p className="rsp-text-gray-600 rsp-mb-8">
          A customizable radio button component with support for different variants,
          sizes, layouts, and custom colors.
        </p>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Installation
        </h2>
        <CodeBlock code={importCode} language="typescript" />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Basic Usage
        </h2>
        <div className="rsp-mb-4">
          <RadioButton
            name="basic"
            options={basicOptions}
            value={basicValue}
            onChange={(e) => setBasicValue(e.target.value)}
          />
        </div>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Custom Circle Color
        </h2>
        <div className="rsp-mb-4">
          <RadioButton
            name="custom-color"
            options={basicOptions}
            circleColor="#8B5CF6"
            label="Custom Purple Radio"
            value={customColorValue}
            onChange={(e) => setCustomColorValue(e.target.value)}
          />
        </div>
        <CodeBlock code={customColorCode} language="tsx" />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Variants
        </h2>
        <div className="rsp-mb-4 rsp-space-y-4">
          <RadioButton
            name="primary"
            options={basicOptions}
            variant="primary"
            label="Primary"
            value={variantValues.primary}
            onChange={handleVariantChange('primary')}
          />
          <RadioButton
            name="secondary"
            options={basicOptions}
            variant="secondary"
            label="Secondary"
            value={variantValues.secondary}
            onChange={handleVariantChange('secondary')}
          />
          <RadioButton
            name="tertiary"
            options={basicOptions}
            variant="tertiary"
            label="Tertiary"
            value={variantValues.tertiary}
            onChange={handleVariantChange('tertiary')}
          />
        </div>
        <CodeBlock code={variantsCode} language="tsx" />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">Props</h2>
        <div className="rsp-overflow-x-auto">
          <table className="rsp-min-w-full rsp-divide-y rsp-divide-gray-200">
            <thead className="rsp-bg-gray-50">
              <tr>
                <th className="rsp-px-6 rsp-py-3 rsp-text-left rsp-text-xs rsp-font-medium rsp-text-gray-500 rsp-uppercase rsp-tracking-wider">Prop</th>
                <th className="rsp-px-6 rsp-py-3 rsp-text-left rsp-text-xs rsp-font-medium rsp-text-gray-500 rsp-uppercase rsp-tracking-wider">Type</th>
                <th className="rsp-px-6 rsp-py-3 rsp-text-left rsp-text-xs rsp-font-medium rsp-text-gray-500 rsp-uppercase rsp-tracking-wider">Default</th>
                <th className="rsp-px-6 rsp-py-3 rsp-text-left rsp-text-xs rsp-font-medium rsp-text-gray-500 rsp-uppercase rsp-tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="rsp-bg-white rsp-divide-y rsp-divide-gray-200">
              {[
                {
                  name: 'name',
                  type: 'string',
                  default: '-',
                  description: 'Required. Unique name for the radio group',
                },
                {
                  name: 'options',
                  type: 'RadioOption[]',
                  default: '[]',
                  description: 'Array of radio options with label and value',
                },
                {
                  name: 'value',
                  type: 'string',
                  default: '-',
                  description: 'Currently selected value',
                },
                {
                  name: 'onChange',
                  type: '(event: ChangeEvent) => void',
                  default: '-',
                  description: 'Change event handler',
                },
                {
                  name: 'variant',
                  type: 'primary | secondary | tertiary',
                  default: 'primary',
                  description: 'Visual style variant',
                },
                {
                  name: 'size',
                  type: 'sm | md | lg',
                  default: 'md',
                  description: 'Size of the radio buttons',
                },
                {
                  name: 'circleColor',
                  type: 'string',
                  default: '-',
                  description: 'Custom color for the selected circle (CSS color value)',
                },
                {
                  name: 'layout',
                  type: 'horizontal | vertical',
                  default: 'vertical',
                  description: 'Layout direction of radio options',
                },
                {
                  name: 'label',
                  type: 'string',
                  default: '-',
                  description: 'Label for the radio group',
                },
                {
                  name: 'error',
                  type: 'string',
                  default: '-',
                  description: 'Error message to display',
                },
                {
                  name: 'helperText',
                  type: 'string',
                  default: '-',
                  description: 'Helper text below the radio group',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable all radio buttons',
                },
                {
                  name: 'fullWidth',
                  type: 'boolean',
                  default: 'false',
                  description: 'Make the radio group take full width',
                },
                {
                  name: 'customStyles',
                  type: 'CSSProperties',
                  default: '-',
                  description: 'Custom styles to apply to the container',
                },
                {
                  name: 'customClasses',
                  type: 'object',
                  default: '-',
                  description: 'Custom classes for different parts of the component',
                },
              ].map((prop) => (
                <tr key={prop.name}>
                  <td className="rsp-px-6 rsp-py-4 rsp-whitespace-nowrap rsp-text-sm rsp-font-medium rsp-text-gray-900">{prop.name}</td>
                  <td className="rsp-px-6 rsp-py-4 rsp-whitespace-nowrap rsp-text-sm rsp-text-gray-500">{prop.type}</td>
                  <td className="rsp-px-6 rsp-py-4 rsp-whitespace-nowrap rsp-text-sm rsp-text-gray-500">{prop.default}</td>
                  <td className="rsp-px-6 rsp-py-4 rsp-text-sm rsp-text-gray-500">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
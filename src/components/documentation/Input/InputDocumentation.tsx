import React, { useState } from 'react';
import { Input } from '../../Input/Input';
import { CodeBlock } from '../CodeBlock';

export const InputDocumentation: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const mockData = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const handleSearch = async (term: string): Promise<string[]> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockData.filter(item => 
      item.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <div className="rsp-space-y-8">
      <section>
        <h1 className="rsp-text-3xl rsp-font-bold rsp-text-gray-900 rsp-mb-4">
          Input Component
        </h1>
        <p className="rsp-text-gray-600 rsp-mb-8">
          A highly customizable input component supporting various types and advanced features.
        </p>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Basic Usage
        </h2>
        <div className="rsp-space-y-4 rsp-mb-4">
          <Input
            label="Text Input"
            placeholder="Enter text"
          />
          <Input
            type="password"
            label="Password Input"
            placeholder="Enter password"
          />
          <Input
            type="search"
            label="Search Input"
            placeholder="Search..."
            onSearch={handleSearch}
          />
        </div>
        <CodeBlock
          code={`<Input
  label="Text Input"
  placeholder="Enter text"
/>

<Input
  type="password"
  label="Password Input"
  placeholder="Enter password"
/>

<Input
  type="search"
  label="Search Input"
  placeholder="Search..."
  onSearch={handleSearch}
/>`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Date and Time Inputs
        </h2>
        <div className="rsp-space-y-4 rsp-mb-4">
          <Input
            type="date"
            label="Date Input"
          />
          <Input
            type="time"
            label="Time Input"
          />
          <Input
            type="datetime-local"
            label="DateTime Input"
          />
        </div>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Phone Number Input
        </h2>
        <div className="rsp-space-y-4 rsp-mb-4">
          <Input
            type="phone"
            label="Phone Number"
            placeholder="Enter phone numbers"
            helperText="Enter up to 5 phone numbers, separated by commas"
          />
        </div>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Credit Card Input
        </h2>
        <div className="rsp-space-y-4 rsp-mb-4">
          <Input
            type="creditcard"
            label="Credit Card"
            placeholder="Enter card number"
            helperText="Supports major card types"
          />
        </div>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Variants
        </h2>
        <div className="rsp-space-y-4 rsp-mb-4">
          <Input
            variant="primary"
            label="Primary Variant"
            placeholder="Primary input"
          />
          <Input
            variant="secondary"
            label="Secondary Variant"
            placeholder="Secondary input"
          />
          <Input
            variant="outlined"
            label="Outlined Variant"
            placeholder="Outlined input"
          />
        </div>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Sizes
        </h2>
        <div className="rsp-space-y-4 rsp-mb-4">
          <Input
            size="sm"
            label="Small Input"
            placeholder="Small size"
          />
          <Input
            size="md"
            label="Medium Input"
            placeholder="Medium size"
          />
          <Input
            size="lg"
            label="Large Input"
            placeholder="Large size"
          />
        </div>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          States
        </h2>
        <div className="rsp-space-y-4 rsp-mb-4">
          <Input
            label="With Error"
            error="This field is required"
          />
          <Input
            label="With Helper Text"
            helperText="This is a helpful message"
          />
          <Input
            label="Disabled Input"
            disabled
            value="Disabled value"
          />
        </div>
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
                  name: 'type',
                  type: 'text | password | search | date | time | datetime-local | phone | creditcard',
                  default: 'text',
                  description: 'Type of input field',
                },
                {
                  name: 'variant',
                  type: 'primary | secondary | outlined',
                  default: 'primary',
                  description: 'Visual style variant',
                },
                {
                  name: 'size',
                  type: 'sm | md | lg',
                  default: 'md',
                  description: 'Size of the input',
                },
                {
                  name: 'label',
                  type: 'string',
                  default: '-',
                  description: 'Label text for the input',
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
                  description: 'Helper text below the input',
                },
                {
                  name: 'startIcon',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Icon to display at the start of the input',
                },
                {
                  name: 'endIcon',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Icon to display at the end of the input',
                },
                {
                  name: 'fullWidth',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the input should take full width',
                },
                {
                  name: 'onSearch',
                  type: '(term: string) => Promise<any[]>',
                  default: '-',
                  description: 'Search callback function for search input type',
                },
                {
                  name: 'searchData',
                  type: 'any[] | Record<string, any>',
                  default: '-',
                  description: 'Data source for search functionality',
                },
                {
                  name: 'searchDebounce',
                  type: 'number',
                  default: '300',
                  description: 'Debounce delay for search in milliseconds',
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
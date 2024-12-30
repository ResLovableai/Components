import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { CodeBlock } from './CodeBlock';

export const CheckboxDocumentation: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const importCode = `import { Checkbox } from '@/components/Checkbox';`;

  const basicUsageCode = `<Checkbox label="Basic Checkbox" />
<Checkbox label="Checked Checkbox" defaultChecked />
<Checkbox label="Disabled" disabled />`;

  const variantsCode = `// Primary variant (Green tick on white)
<Checkbox variant="primary" label="Primary Checkbox" />

// Secondary variant (Blue tick on white)
<Checkbox variant="secondary" label="Secondary Checkbox" />

// Cancel variant (White tick on red)
<Checkbox variant="cancel" label="Cancel Checkbox" />

// Back variant (Gray tick on light gray)
<Checkbox variant="back" label="Back Checkbox" />`;

  const customTickColorCode = `// Custom tick color
<Checkbox 
  label="Custom Purple Tick" 
  tickColor="#8B5CF6" 
  defaultChecked 
/>

// Custom Pink Tick
<Checkbox 
  label="Custom Pink Tick" 
  tickColor="#EC4899" 
  defaultChecked 
/>`;

  return (
    <div className="rsp-space-y-8">
      <section>
        <h1 className="rsp-text-3xl rsp-font-bold rsp-text-gray-900 rsp-mb-4">
          Checkbox Component
        </h1>
        <p className="rsp-text-gray-600 rsp-mb-8">
          A customizable checkbox component with support for different variants,
          sizes, and states.
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
        <div className="rsp-mb-4 rsp-flex rsp-flex-col rsp-gap-4">
          <Checkbox
            label="Basic Checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Checkbox label="Checked Checkbox" defaultChecked />
          <Checkbox label="Disabled" disabled />
        </div>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Variants
        </h2>
        <div className="rsp-mb-4 rsp-flex rsp-flex-col rsp-gap-4">
          <Checkbox variant="primary" label="Primary" defaultChecked />
          <Checkbox variant="secondary" label="Secondary" defaultChecked />
          <Checkbox variant="cancel" label="Cancel" defaultChecked />
          <Checkbox variant="back" label="Back" defaultChecked />
        </div>
        <CodeBlock code={variantsCode} language="tsx" />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Custom Tick Color
        </h2>
        <div className="rsp-mb-4 rsp-flex rsp-flex-col rsp-gap-4">
          <Checkbox 
            label="Custom Color" 
            tickColor="#8B5CF6" 
            defaultChecked 
          />
          <Checkbox 
            label="Custom Color" 
            tickColor="#EC4899" 
            defaultChecked 
          />
        </div>
        <CodeBlock code={customTickColorCode} language="tsx" />
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          Sizes
        </h2>
        <div className="rsp-mb-4 rsp-flex rsp-flex-col rsp-gap-4">
          <Checkbox label="Small Size" size="sm" />
          <Checkbox label="Medium Size" size="md" />
          <Checkbox label="Large Size" size="lg" />
        </div>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
          With Helper Text
        </h2>
        <div className="rsp-mb-4 rsp-flex rsp-flex-col rsp-gap-4">
          <Checkbox
            label="With helper text"
            helperText="This is a helpful message"
          />
          <Checkbox
            label="With error"
            error="This field is required"
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
                  name: 'variant',
                  type: 'primary | secondary | cancel | back',
                  default: 'primary',
                  description: 'The style variant of the checkbox',
                },
                {
                  name: 'size',
                  type: 'sm | md | lg',
                  default: 'md',
                  description: 'The size of the checkbox',
                },
                {
                  name: 'label',
                  type: 'string',
                  default: '-',
                  description: 'Label text for the checkbox',
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
                  description: 'Helper text to display below the checkbox',
                },
                {
                  name: 'fullWidth',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the checkbox should take full width',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the checkbox is disabled',
                },
                {
                  name: 'tickColor',
                  type: 'string',
                  default: '-',
                  description: 'Custom color for the checkbox tick (CSS color value)',
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
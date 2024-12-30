export const importCode = `import { RadioButton } from '@/components/RadioButton';`;

export const basicUsageCode = `<RadioButton
  name="basic"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]}
  value={value}
  onChange={handleChange}
/>`;

export const sizesCode = `// Different sizes
<RadioButton
  name="small"
  options={options}
  size="sm"
  label="Small Radio"
  value={value}
  onChange={handleChange}
/>

<RadioButton
  name="medium"
  options={options}
  size="md"
  label="Medium Radio"
  value={value}
  onChange={handleChange}
/>

<RadioButton
  name="large"
  options={options}
  size="lg"
  label="Large Radio"
  value={value}
  onChange={handleChange}
/>`;

export const layoutCode = `// Horizontal layout
<RadioButton
  name="horizontal"
  options={options}
  layout="horizontal"
  label="Horizontal Layout"
  value={value}
  onChange={handleChange}
/>

// Vertical layout (default)
<RadioButton
  name="vertical"
  options={options}
  layout="vertical"
  label="Vertical Layout"
  value={value}
  onChange={handleChange}
/>`;

export const variantsCode = `// Different variants
<RadioButton
  name="primary"
  options={options}
  variant="primary"
  label="Primary Variant"
  value={value}
  onChange={handleChange}
/>

<RadioButton
  name="secondary"
  options={options}
  variant="secondary"
  label="Secondary Variant"
  value={value}
  onChange={handleChange}
/>

<RadioButton
  name="tertiary"
  options={options}
  variant="tertiary"
  label="Tertiary Variant"
  value={value}
  onChange={handleChange}
/>`;

export const customColorCode = `// Custom circle color example
<RadioButton
  name="custom-color"
  options={options}
  circleColor="#8B5CF6"
  label="Custom Purple Radio"
  value={value}
  onChange={handleChange}
/>`;
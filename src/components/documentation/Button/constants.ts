export const importCode = `import { Button } from '@/components/Button';`;

export const basicUsageCode = `<Button variant="primary">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="cancel">Cancel</Button>
<Button variant="back">← Back</Button>`;

export const eventHandlingCode = `// Event handling example
<Button
  onClick={(e) => console.log('Button clicked!', e)}
  onFocus={(e) => console.log('Button focused!', e)}
  onBlur={(e) => console.log('Button lost focus!', e)}
  onChange={(e) => console.log('Button changed!', e)}
>
  Click me
</Button>`;

export const customColorCode = `const customPurple = {
  background: '#8b5cf6',
  text: 'white',
  hover: {
    background: '#7c3aed'
  }
};

<Button colors={customPurple}>Custom Purple</Button>`;

export const iconUsageCode = `import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Button with left icon
<Button leftIcon={<ArrowLeftIcon className="rsp-w-5 rsp-h-5" />}>
  Back
</Button>

// Button with right icon
<Button rightIcon={<ArrowRightIcon className="rsp-w-5 rsp-h-5" />}>
  Next
</Button>

// Button with both icons
<Button 
  leftIcon={<ArrowLeftIcon className="rsp-w-5 rsp-h-5" />}
  rightIcon={<ArrowRightIcon className="rsp-w-5 rsp-h-5" />}
>
  Navigate
</Button>`;
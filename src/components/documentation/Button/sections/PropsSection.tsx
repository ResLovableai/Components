import React from 'react';

export const PropsSection: React.FC = () => {
  return (
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
                description: 'The style variant of the button',
              },
              {
                name: 'size',
                type: 'small | medium | large',
                default: 'medium',
                description: 'The size of the button',
              },
              {
                name: 'onClick',
                type: '(event: MouseEvent) => void',
                default: '-',
                description: 'Optional click event handler',
              },
              {
                name: 'onChange',
                type: '(event: ChangeEvent) => void',
                default: '-',
                description: 'Optional change event handler',
              },
              {
                name: 'onFocus',
                type: '(event: FocusEvent) => void',
                default: '-',
                description: 'Optional focus event handler',
              },
              {
                name: 'onBlur',
                type: '(event: FocusEvent) => void',
                default: '-',
                description: 'Optional blur event handler',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the button is disabled',
              },
              {
                name: 'isLoading',
                type: 'boolean',
                default: 'false',
                description: 'Shows a loading spinner',
              },
              {
                name: 'leftIcon',
                type: 'React.ReactNode',
                default: '-',
                description: 'Icon to display before the button text',
              },
              {
                name: 'rightIcon',
                type: 'React.ReactNode',
                default: '-',
                description: 'Icon to display after the button text',
              },
              {
                name: 'colors',
                type: 'ButtonColors',
                default: '-',
                description: 'Custom color configuration',
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
  );
};
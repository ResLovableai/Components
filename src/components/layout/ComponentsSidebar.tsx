import React from 'react';

interface ComponentsSidebarProps {
  selectedComponent: string;
  onSelectComponent: (component: string) => void;
}

export const ComponentsSidebar: React.FC<ComponentsSidebarProps> = ({
  selectedComponent,
  onSelectComponent,
}) => {
  const components = [
    { id: 'button', name: 'Button' },
    { id: 'checkbox', name: 'Checkbox' },
    { id: 'radio', name: 'Radio Button' },
    { id: 'input', name: 'Input' },
  ];

  return (
    <aside className="rsp-w-64 rsp-bg-white rsp-rounded-lg rsp-shadow-sm rsp-p-4 rsp-h-fit">
      <h2 className="rsp-text-lg rsp-font-semibold rsp-text-gray-800 rsp-mb-4">
        Components
      </h2>
      <nav>
        <ul className="rsp-space-y-2">
          {components.map((component) => (
            <li key={component.id}>
              <button
                onClick={() => onSelectComponent(component.id)}
                className={`rsp-w-full rsp-text-left rsp-px-4 rsp-py-2 rsp-rounded-md rsp-transition-colors ${
                  selectedComponent === component.id
                    ? 'rsp-bg-green-50 rsp-text-green-800 rsp-font-medium'
                    : 'rsp-text-gray-600 hover:rsp-bg-gray-50'
                }`}
              >
                {component.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
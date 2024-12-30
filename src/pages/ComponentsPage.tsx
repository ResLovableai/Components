import React from 'react';
import { ComponentsSidebar } from '../components/layout/ComponentsSidebar';
import { ButtonDocumentation } from '../components/documentation/ButtonDocumentation';
import { CheckboxDocumentation } from '../components/documentation/CheckboxDocumentation';
import { RadioButtonDocumentation } from '../components/documentation/RadioButtonDocumentation';
import { InputDocumentation } from '../components/documentation/Input/InputDocumentation';

export const ComponentsPage: React.FC = () => {
  const [selectedComponent, setSelectedComponent] =
    React.useState<string>('button');

  return (
    <div className="rsp-min-h-screen rsp-bg-gray-50">
      <div className="rsp-container rsp-mx-auto rsp-px-5 rsp-py-8">
        <div className="rsp-flex rsp-gap-8">
          <ComponentsSidebar
            selectedComponent={selectedComponent}
            onSelectComponent={setSelectedComponent}
          />

          <main className="rsp-flex-1 rsp-bg-white rsp-rounded-lg rsp-shadow-sm rsp-p-8">
            {selectedComponent === 'button' && <ButtonDocumentation />}
            {selectedComponent === 'checkbox' && <CheckboxDocumentation />}
            {selectedComponent === 'radio' && <RadioButtonDocumentation />}
            {selectedComponent === 'input' && <InputDocumentation />}
          </main>
        </div>
      </div>
    </div>
  );
};

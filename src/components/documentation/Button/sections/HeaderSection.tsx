import React from 'react';
import { CodeBlock } from '../../CodeBlock';
import { importCode } from '../constants';

export const HeaderSection: React.FC = () => {
  return (
    <>
      <section>
        <h1 className="rsp-text-3xl rsp-font-bold rsp-text-gray-900 rsp-mb-4">Button Component</h1>
        <p className="rsp-text-gray-600 rsp-mb-8">
          A versatile button component that supports various styles, sizes, states, and event handlers.
          Built with Tailwind CSS and fully customizable.
        </p>
      </section>

      <section>
        <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">Installation</h2>
        <CodeBlock code={importCode} language="typescript" />
      </section>
    </>
  );
};
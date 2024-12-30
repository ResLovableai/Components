import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="rsp-relative rsp-rounded-lg rsp-bg-gray-900 rsp-p-4">
      <pre className="rsp-text-gray-100 rsp-text-sm rsp-overflow-x-auto">
        <code className={`rsp-language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
import React from 'react';

interface SearchResultsProps {
  results: any[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="rsp-absolute rsp-z-10 rsp-w-full rsp-mt-1 rsp-bg-white rsp-rounded-md rsp-shadow-lg rsp-border rsp-border-gray-200">
      <ul className="rsp-max-h-60 rsp-overflow-auto">
        {results.map((result, index) => (
          <li
            key={index}
            className="rsp-px-4 rsp-py-2 hover:rsp-bg-gray-100 rsp-cursor-pointer"
          >
            {/* Customize based on your data structure */}
            {typeof result === 'string' ? result : JSON.stringify(result)}
          </li>
        ))}
      </ul>
    </div>
  );
};
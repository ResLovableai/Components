import React from 'react';
import { Button } from '../../../Button';

export const SizesSection: React.FC = () => {
  return (
    <section>
      <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">Sizes</h2>
      <div className="rsp-mb-4 rsp-flex rsp-flex-wrap rsp-gap-4 rsp-items-center">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </section>
  );
};
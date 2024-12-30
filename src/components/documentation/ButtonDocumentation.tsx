import React from 'react';
import { HeaderSection } from './Button/sections/HeaderSection';
import { BasicUsageSection } from './Button/sections/BasicUsageSection';
import { IconUsageSection } from './Button/sections/IconUsageSection';
import { EventHandlingSection } from './Button/sections/EventHandlingSection';
import { SizesSection } from './Button/sections/SizesSection';
import { CustomColorSection } from './Button/sections/CustomColorSection';
import { StatesSection } from './Button/sections/StatesSection';
import { PropsSection } from './Button/sections/PropsSection';
import { useEventLogger } from './Button/hooks/useEventLogger';
import { useLoadingState } from './Button/hooks/useLoadingState';

export const ButtonDocumentation: React.FC = () => {
  const { eventLog, logEvent } = useEventLogger();
  const { isLoading, handleLoadingClick } = useLoadingState();

  return (
    <div className="rsp-space-y-8">
      <HeaderSection />
      <BasicUsageSection />
      <IconUsageSection />
      <EventHandlingSection logEvent={logEvent} eventLog={eventLog} />
      <SizesSection />
      <CustomColorSection />
      <StatesSection isLoading={isLoading} onLoadingClick={handleLoadingClick} />
      <PropsSection />
    </div>
  );
};
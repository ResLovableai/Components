import { useState } from 'react';

export const useEventLogger = (maxEvents: number = 5) => {
  const [eventLog, setEventLog] = useState<string[]>([]);

  const logEvent = (message: string) => {
    setEventLog((prev) => [message, ...prev.slice(0, maxEvents - 1)]);
  };

  return {
    eventLog,
    logEvent,
  };
};
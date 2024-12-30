import React from 'react';
import { Button } from '../../../Button';
import { CodeBlock } from '../../CodeBlock';
import { eventHandlingCode } from '../constants';

interface EventHandlingSectionProps {
  logEvent: (message: string) => void;
  eventLog: string[];
}

export const EventHandlingSection: React.FC<EventHandlingSectionProps> = ({
  logEvent,
  eventLog,
}) => {
  return (
    <section>
      <h2 className="rsp-text-2xl rsp-font-semibold rsp-text-gray-800 rsp-mb-4">Event Handling</h2>
      <div className="rsp-mb-4 rsp-space-y-4">
        <div className="rsp-flex rsp-flex-wrap rsp-gap-4">
          <Button
            onClick={() => logEvent('Button clicked!')}
            onFocus={() => logEvent('Button focused!')}
            onBlur={() => logEvent('Button lost focus!')}
            onChange={() => logEvent('Button changed!')}
          >
            Interactive Button
          </Button>
        </div>
        <EventLog events={eventLog} />
      </div>
      <CodeBlock code={eventHandlingCode} language="tsx" />
    </section>
  );
};

interface EventLogProps {
  events: string[];
}

const EventLog: React.FC<EventLogProps> = ({ events }) => (
  <div className="rsp-bg-gray-50 rsp-p-4 rsp-rounded-md rsp-border rsp-border-gray-200">
    <h3 className="rsp-text-sm rsp-font-medium rsp-text-gray-700 rsp-mb-2">Event Log:</h3>
    <div className="rsp-space-y-1">
      {events.map((event, index) => (
        <div key={index} className="rsp-text-sm rsp-text-gray-600">
          {event}
        </div>
      ))}
    </div>
  </div>
);
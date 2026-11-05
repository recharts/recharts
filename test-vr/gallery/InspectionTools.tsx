import * as React from 'react';
import { RechartsAnnotationsPortal, RechartsDevtoolsContext, RechartsDevtoolsPortal } from '@recharts/devtools';
import './inspection.css';

export function InspectionTools({ children }: { children: React.ReactNode }) {
  return (
    <RechartsDevtoolsContext>
      {children}
      <aside className="gallery-inspection-tools" aria-label="Story inspection tools">
        <h1>Story inspection tools</h1>
        <section aria-label="Hook inspector">
          <h2>Hook inspector</h2>
          <RechartsDevtoolsPortal className="gallery-inspector-portal" />
          <p className="gallery-inspection-hint">
            To inspect this story, add <code>{'<RechartsDevtools />'}</code> from <code>@recharts/devtools</code> inside
            its chart. Website examples that include it work here automatically.
          </p>
        </section>
        <section aria-label="Chart annotations">
          <h2>Annotations</h2>
          <RechartsAnnotationsPortal />
        </section>
      </aside>
    </RechartsDevtoolsContext>
  );
}

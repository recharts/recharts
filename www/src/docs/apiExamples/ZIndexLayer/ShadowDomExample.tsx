import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

// #region shadow DOM wrapper component, and data
interface ShadowDomWrapperProps {
  children: React.ReactNode;
}

const ShadowDomWrapper: React.FC<ShadowDomWrapperProps> = ({ children }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadow = hostRef.current.attachShadow({ mode: 'closed' });
      setShadowRoot(shadow);
    }
  }, []);

  useEffect(() => {
    if (shadowRoot) {
      // Clear existing content
      shadowRoot.innerHTML = '';

      // Create a container for React to render into
      const container = document.createElement('div');
      container.id = 'shadow-container';
      shadowRoot.appendChild(container);

      // Render children into the shadow DOM
      const root = ReactDOM.createRoot(container);
      root.render(children);

      return () => {
        root.unmount();
      };
    }
    return () => {};
  }, [shadowRoot, children]);

  return <div ref={hostRef} className="shadow-host" />;
};

const pieData = [
  { name: 'Desktop', value: 400, fill: '#0088FE' },
  { name: 'Mobile', value: 300, fill: '#00C49F' },
  { name: 'Tablet', value: 200, fill: '#FFBB28' },
  { name: 'Other', value: 100, fill: '#FF8042' },
];
// #endregion

export default function ShadowDomExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <ShadowDomWrapper>
      <PieChart width={380} height={300}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={isAnimationActive}
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ShadowDomWrapper>
  );
}

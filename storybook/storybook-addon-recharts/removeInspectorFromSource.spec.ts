import { describe, it, expect } from 'vitest';
import { removeInspectorFromSource } from './removeInspectorFromSource';

describe('removeInspectorFromSource', () => {
  it('should do nothing in story source code that does not have the inspector', () => {
    const source = `
      import { BarChart, Bar } from 'recharts';
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (<BarChart width={500} height={300} data={data}>
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    );`;
    expect(removeInspectorFromSource(source)).toBe(source);
  });

  it('should remove the RechartsHookInspector from the source code, and remove its import too', () => {
    const source = `
      import React from 'react';
      import { BarChart, Bar } from 'recharts';
      import { RechartsHookInspector } from './RechartsHookInspector';
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
         <RechartsHookInspector rechartsInspectorEnabled={true} some other future='props' />
       </BarChart>
      );
    )`;
    const expectedSource = `
      import React from 'react';
      import { BarChart, Bar } from 'recharts';
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
       </BarChart>
      );
    )`;
    expect(removeInspectorFromSource(source)).toBe(expectedSource);
  });

  it('should remove the RechartsHookInspector if it is formatted on multiple lines', () => {
    const source = `
      import React from 'react';
      import { BarChart, Bar } from 'recharts';
      import { RechartsHookInspector } from './RechartsHookInspector';
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
          <RechartsHookInspector
            rechartsInspectorEnabled={true}
            some other future='props'
          />
        </BarChart>
      );
    )`;
    const expectedSource = `
      import React from 'react';
      import { BarChart, Bar } from 'recharts';
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      );
    )`;
    expect(removeInspectorFromSource(source)).toBe(expectedSource);
  });

  it('should remove the RechartsHookInspector if it has no props', () => {
    const source = `
      import React from 'react';
      import { BarChart, Bar } from 'recharts';
      import { RechartsHookInspector } from './RechartsHookInspector';
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
          <RechartsHookInspector />
        </BarChart>
      );
    )`;
    const expectedSource = `
      import React from 'react';
      import { BarChart, Bar } from 'recharts';
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      );
    )`;
    expect(removeInspectorFromSource(source)).toBe(expectedSource);
  });
});

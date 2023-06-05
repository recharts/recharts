import React, { ComponentProps, useState } from 'react';
import { ComposedChart, XAxis, Bar, ResponsiveContainer, YAxis, Legend } from '../../../../../src';
import { pageData } from '../../../data';

export default {
  title: 'Examples/cartesian/YAxis/WithIncludeHidden',
};

export const WithIncludeHidden = {
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]));
    };

    return (
      <ResponsiveContainer width="100%" height={500}>
        <>
          <ComposedChart width={400} height={400} data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
          <h4>
            Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same,
            if `includeHidden`
          </h4>
        </>
      </ResponsiveContainer>
    );
  },
};

import React, { Component } from 'react';
import { Sankey, Tooltip } from 'recharts';
import _ from 'lodash';
import DemoSankeyLink from './DemoSankeyLink';
import DemoSankeyNode from './DemoSankeyNode';

const data0 = {
  nodes: [
    { name: 'Agricultural waste' },
    { name: 'Bio-conversion' },
    { name: 'Liquid' },
    { name: 'Losses' },
    { name: 'Solid' },
    { name: 'Gas' },
    { name: 'Biofuel imports' },
    { name: 'Biomass imports' },
    { name: 'Coal imports' },
    { name: 'Coal' },
    { name: 'Coal reserves' },
    { name: 'District heating' },
    { name: 'Industry' },
    { name: 'Heating and cooling - commercial' },
    { name: 'Heating and cooling - homes' },
    { name: 'Electricity grid' },
    { name: 'Over generation / exports' },
    { name: 'H2 conversion' },
    { name: 'Road transport' },
    { name: 'Agriculture' },
    { name: 'Rail transport' },
    { name: 'Lighting & appliances - commercial' },
    { name: 'Lighting & appliances - homes' },
    { name: 'Gas imports' },
    { name: 'Ngas' },
    { name: 'Gas reserves' },
    { name: 'Thermal generation' },
    { name: 'Geothermal' },
    { name: 'H2' },
    { name: 'Hydro' },
    { name: 'International shipping' },
    { name: 'Domestic aviation' },
    { name: 'International aviation' },
    { name: 'National navigation' },
    { name: 'Marine algae' },
    { name: 'Nuclear' },
    { name: 'Oil imports' },
    { name: 'Oil' },
    { name: 'Oil reserves' },
    { name: 'Other waste' },
    { name: 'Pumped heat' },
    { name: 'Solar PV' },
    { name: 'Solar Thermal' },
    { name: 'Solar' },
    { name: 'Tidal' },
    { name: 'UK land based bioenergy' },
    { name: 'Wave' },
    { name: 'Wind' },
  ],
  links: [
    { source: 0, target: 1, value: 124.729 },
    { source: 1, target: 2, value: 0.597 },
    { source: 1, target: 3, value: 26.862 },
    { source: 1, target: 4, value: 280.322 },
    { source: 1, target: 5, value: 81.144 },
    { source: 6, target: 2, value: 35 },
    { source: 7, target: 4, value: 35 },
    { source: 8, target: 9, value: 11.606 },
    { source: 10, target: 9, value: 63.965 },
    { source: 9, target: 4, value: 75.571 },
    { source: 11, target: 12, value: 10.639 },
    { source: 11, target: 13, value: 22.505 },
    { source: 11, target: 14, value: 46.184 },
    { source: 15, target: 16, value: 104.453 },
    { source: 15, target: 14, value: 113.726 },
    { source: 15, target: 17, value: 27.14 },
    { source: 15, target: 12, value: 342.165 },
    { source: 15, target: 18, value: 37.797 },
    { source: 15, target: 19, value: 4.412 },
    { source: 15, target: 13, value: 40.858 },
    { source: 15, target: 3, value: 56.691 },
    { source: 15, target: 20, value: 7.863 },
    { source: 15, target: 21, value: 90.008 },
    { source: 15, target: 22, value: 93.494 },
    { source: 23, target: 24, value: 40.719 },
    { source: 25, target: 24, value: 82.233 },
    { source: 5, target: 13, value: 0.129 },
    { source: 5, target: 3, value: 1.401 },
    { source: 5, target: 26, value: 151.891 },
    { source: 5, target: 19, value: 2.096 },
    { source: 5, target: 12, value: 48.58 },
    { source: 27, target: 15, value: 7.013 },
    { source: 17, target: 28, value: 20.897 },
    { source: 17, target: 3, value: 6.242 },
    { source: 28, target: 18, value: 20.897 },
    { source: 29, target: 15, value: 6.995 },
    { source: 2, target: 12, value: 121.066 },
    { source: 2, target: 30, value: 128.69 },
    { source: 2, target: 18, value: 135.835 },
    { source: 2, target: 31, value: 14.458 },
    { source: 2, target: 32, value: 206.267 },
    { source: 2, target: 19, value: 3.64 },
    { source: 2, target: 33, value: 33.218 },
    { source: 2, target: 20, value: 4.413 },
    { source: 34, target: 1, value: 4.375 },
    { source: 24, target: 5, value: 122.952 },
    { source: 35, target: 26, value: 839.978 },
    { source: 36, target: 37, value: 504.287 },
    { source: 38, target: 37, value: 107.703 },
    { source: 37, target: 2, value: 611.99 },
    { source: 39, target: 4, value: 56.587 },
    { source: 39, target: 1, value: 77.81 },
    { source: 40, target: 14, value: 193.026 },
    { source: 40, target: 13, value: 70.672 },
    { source: 41, target: 15, value: 59.901 },
    { source: 42, target: 14, value: 19.263 },
    { source: 43, target: 42, value: 19.263 },
    { source: 43, target: 41, value: 59.901 },
    { source: 4, target: 19, value: 0.882 },
    { source: 4, target: 26, value: 400.12 },
    { source: 4, target: 12, value: 46.477 },
    { source: 26, target: 15, value: 525.531 },
    { source: 26, target: 3, value: 787.129 },
    { source: 26, target: 11, value: 79.329 },
    { source: 44, target: 15, value: 9.452 },
    { source: 45, target: 1, value: 182.01 },
    { source: 46, target: 15, value: 19.013 },
    { source: 47, target: 15, value: 289.366 },
  ],
};

const data1 = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};

function SankeyDemo() {
  return (
    <div className="sankey-charts">
      <div>
        <pre>1. Simple Sankey</pre>
        <Sankey width={960} height={500} data={data0}>
          <Tooltip />
        </Sankey>
      </div>
      <br />
      <div>
        <pre>2. Customized Sankey.</pre>
        <Sankey
          width={960}
          height={500}
          data={data0}
          node={{ fill: '#8a52b6' }}
          link={{ stroke: '#77c878' }}
        >
          {/* <Tooltip /> */}
        </Sankey>
      </div>
      <br />
      <div>
        <pre>2. Sankey with gradient color, name and value, and use margin to avoid outer-clip.</pre>
        <Sankey
          width={960} height={500}
          margin={{ top: 20, bottom: 20 }}
          data={data1}
          nodeWidth={10} nodePadding={60}
          linkCurvature={0.61}
          iterations={64}
          link={<DemoSankeyLink />}
          node={<DemoSankeyNode containerWidth={960} />}
        >
          <defs>
            <linearGradient id={'linkGradient'}>
              <stop offset="0%" stopColor="rgba(0, 136, 254, 0.5)" />
              <stop offset="100%" stopColor="rgba(0, 197, 159, 0.3)" />
            </linearGradient>
          </defs>
          <Tooltip />
        </Sankey>
      </div>
    </div>
  );
}

export default SankeyDemo;

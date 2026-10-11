import * as React from 'react';
import { Sankey, Tooltip } from '../../src';

const data = {
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

const overlappingData = {
  nodes: [
    { name: 'Consumption bought' },
    { name: 'Total consumption' },
    { name: 'Total production' },
    { name: 'Consumed production' },
    { name: 'Passive surplus' },
    { name: 'Unused production' },
  ],
  links: [
    { source: 0, target: 1, value: 797.44 },
    { source: 2, target: 3, value: 39.73 },
    { source: 3, target: 1, value: 39.73 },
    { source: 2, target: 4, value: 1.95 },
    { source: 4, target: 5, value: 1.95 },
  ],
};

export const SankeyAlignJustify = () => {
  return (
    <Sankey width={1000} height={500} data={data} align="justify">
      <Tooltip />
    </Sankey>
  );
};

export const SankeyAlignLeft = () => {
  return (
    <Sankey width={1000} height={500} data={data} align="left">
      <Tooltip />
    </Sankey>
  );
};

export const SankeyVerticalAlignJustify = () => {
  return (
    <Sankey width={1000} height={500} data={data} verticalAlign="justify">
      <Tooltip />
    </Sankey>
  );
};

export const SankeyVerticalAlignTop = () => {
  return (
    <Sankey width={1000} height={500} data={data} verticalAlign="top">
      <Tooltip />
    </Sankey>
  );
};

export const SankeyKeepIntermediateNodesOutOfSkippedDepthLinks = () => {
  return (
    <Sankey width={760} height={420} data={overlappingData}>
      <Tooltip />
    </Sankey>
  );
};

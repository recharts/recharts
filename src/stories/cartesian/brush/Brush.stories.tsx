import React from 'react';
import BrushComponent from './BrushComponent';
import { dateData } from '../../data';

export default {
  title: 'Recharts/Brush',
  component: BrushComponent,
};

function Template(args: any) {
  return <BrushComponent {...args} />;
}

export const Simple = Template.bind({});
Simple.args = {
  data: dateData,
};

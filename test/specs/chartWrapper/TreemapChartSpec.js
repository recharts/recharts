import React from 'react';
import { expect } from 'chai';
import { TreemapChart } from 'recharts';
import { mount, render } from 'enzyme';

describe('<TreemapChart />', () => {
  const data = [
    { rank: '1', name: 'A', value: 17061682925 },
    { rank: '2', name: 'B', value: 12490887132 },
    { rank: '3', name: 'C', value: 10772738863 },
    { rank: '4', name: 'D', value: 8236223813 },
    { rank: '5', name: 'E', value: 6583448127 },
    { rank: '6', name: 'F', value: 5834718183 },
    { rank: '7', name: 'G', value: 5559852006 },
    { rank: '8', name: 'H', value: 4651272674 },
    { rank: '9', name: 'I', value: 4248844205 },
    { rank: '10', name: 'J', value: 3862568602 },
    { rank: '11', name: 'K', value: 3803070009 },
    { rank: '12', name: 'L', value: 3480361169 },
    { rank: '13', name: 'M', value: 3476552989 },
    { rank: '14', name: 'N', value: 3147229713 },
    { rank: '15', name: 'O', value: 2907504853 },
    { rank: '16', name: 'P', value: 2555558916 },
    { rank: '17', name: 'Q', value: 2149183029 },
    { rank: '18', name: 'H', value: 2107468912 },
    { rank: '19', name: 'I', value: 2088055427 },
    { rank: '20', name: 'J', value: 1885463047 },
  ];

  const wrapper = render(
    <TreemapChart width={1000} height={500} data={data} ratio={0.5 * (1 + Math.sqrt(5))}/>
  );

  it('renders 20 rectangles in simple TreemapChart', () => {
    expect(wrapper.find('.recharts-rectangle').length).to.equal(20);
  });
});

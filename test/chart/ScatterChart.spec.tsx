import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis, Legend, Symbols } from '../../src';
import { mockMouseEvent } from '../helper/mockMouseEvent';

describe('ScatterChart of three dimension data', () => {
  const data01 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  const data02 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 },
  ];

  test('Render 2 Scatter', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" />
        <Scatter name="B school" data={data02} fill="#347300" />
        <Tooltip />
        <Legend />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-scatter')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-legend-item')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(data01.length + data02.length);
    expect(container.querySelectorAll('.recharts-scatter-symbol path')).toHaveLength(data01.length + data02.length);
  });

  test("Don't render any symbols when data is empty", () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={[]} fillOpacity={0.3} fill="#ff7300" />
        <Tooltip />
        <Legend layout="vertical" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-symbol')).toHaveLength(0);
  });

  test('mouse enter on one circle will trigger one Cross', () => {
    const onMouseEnter = jest.fn();
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" onMouseEnter={onMouseEnter} />
        <Scatter name="B school" data={data02} fill="#347300" />
        <Tooltip />
        <Legend />
      </ScatterChart>,
    );

    const symbol = container.querySelectorAll('.recharts-symbols')[0];
    fireEvent.mouseEnter(symbol);

    expect(onMouseEnter).toHaveBeenCalled();
  });
});

describe('ScatterChart of two dimension data', () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  test('renders 6 circles in simple ScatterChart', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-symbols')).toHaveLength(6);
  });

  test('renders 1 jointed line when line is setted to be true', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-scatter-line')).toHaveLength(1);
  });

  test('Renders customized active shape when activeShape set to be an object', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" activeShape={{ fill: 'red' }} />
        <Tooltip />
      </ScatterChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
  });

  test('Renders customized active shape when activeShape set to be an object as symbols props', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter
          line
          name="A school"
          data={data}
          fill="#ff7300"
          activeShape={{ type: 'triangle', className: 'triangle-symbols-type', fill: 'red' }}
        />
        <Tooltip />
      </ScatterChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.triangle-symbols-type');
    expect(activeSector).toHaveLength(1);
  });

  test('Renders customized active shape when activeShape set to be a function', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter
          line
          name="A school"
          data={data}
          fill="#ff7300"
          activeShape={props => <Symbols {...props} type="circle" fill="red" />}
        />
        <Tooltip />
      </ScatterChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar set to be a ReactElement', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" activeShape={<Symbols type="circle" fill="red" />} />
        <Tooltip />
      </ScatterChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
  });

  test('Renders customized active bar when activeBar is set to be a truthy boolean', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" activeShape />
        <Tooltip />
      </ScatterChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
  });

  test('Does not render customized active bar when activeBar set to be a falsy boolean', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" activeShape={false} />
        <Tooltip />
      </ScatterChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-scatter-symbol');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(0);
  });
});

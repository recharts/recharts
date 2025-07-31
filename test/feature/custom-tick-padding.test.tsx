/**
 * @fileOverview Test for custom tick component receiving padding info
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LineChart, Line, XAxis, YAxis } from '../../src';

describe('Custom tick component padding feature', () => {
  it('should pass XAxis object padding to custom tick component', () => {
    let receivedPadding: any = null;

    const CustomXAxisTick = (props: any) => {
      receivedPadding = props.padding;
      return <text {...props}>Custom Tick</text>;
    };

    const data = [
      { name: 'A', value: 100 },
      { name: 'B', value: 200 },
      { name: 'C', value: 300 },
    ];

    render(
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" padding={{ left: 20, right: 30 }} tick={<CustomXAxisTick />} />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>,
    );

    expect(receivedPadding).toEqual({ left: 20, right: 30 });
  });

  it('should pass XAxis string padding to custom tick component', () => {
    let receivedPadding: any = null;

    const CustomXAxisTick = (props: any) => {
      receivedPadding = props.padding;
      return <text {...props}>Custom Tick</text>;
    };

    const data = [
      { name: 'A', value: 100 },
      { name: 'B', value: 200 },
    ];

    render(
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" padding="gap" tick={<CustomXAxisTick />} />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>,
    );

    expect(receivedPadding).toBe('gap');
  });

  it('should pass YAxis object padding to custom tick component', () => {
    let receivedPadding: any = null;

    const CustomYAxisTick = (props: any) => {
      receivedPadding = props.padding;
      return <text {...props}>Custom Y Tick</text>;
    };

    const data = [
      { name: 'A', value: 100 },
      { name: 'B', value: 200 },
      { name: 'C', value: 300 },
    ];

    render(
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis padding={{ top: 10, bottom: 15 }} tick={<CustomYAxisTick />} />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>,
    );

    expect(receivedPadding).toEqual({ top: 10, bottom: 15 });
  });

  it('should pass YAxis string padding to custom tick component', () => {
    let receivedPadding: any = null;

    const CustomYAxisTick = (props: any) => {
      receivedPadding = props.padding;
      return <text {...props}>Custom Y Tick</text>;
    };

    const data = [
      { name: 'A', value: 100 },
      { name: 'B', value: 200 },
    ];

    render(
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis padding="no-gap" tick={<CustomYAxisTick />} />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>,
    );

    expect(receivedPadding).toBe('no-gap');
  });

  it('should pass padding as function parameter when tick is a function', () => {
    let receivedPadding: any = null;

    const CustomTickFunction = (props: any) => {
      receivedPadding = props.padding;
      return <text {...props}>Function Tick</text>;
    };

    const data = [
      { name: 'A', value: 100 },
      { name: 'B', value: 200 },
    ];

    render(
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" padding={{ left: 25, right: 35 }} tick={CustomTickFunction} />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>,
    );

    expect(receivedPadding).toEqual({ left: 25, right: 35 });
  });

  it('should pass default padding when no padding is specified', () => {
    let receivedPadding: any = 'INITIAL_VALUE';

    const CustomXAxisTick = (props: any) => {
      receivedPadding = props.padding;
      return <text {...props}>Custom Tick</text>;
    };

    const data = [
      { name: 'A', value: 100 },
      { name: 'B', value: 200 },
    ];

    render(
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" tick={<CustomXAxisTick />} />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>,
    );

    // When no padding is specified, the axis provides default padding values
    expect(receivedPadding).toEqual({ left: 0, right: 0 });
  });
});

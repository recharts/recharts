import { describe, expect, it } from 'vitest';
import { rechartsFromAntd } from '../../src';

describe('rechartsFromAntd', () => {
  it('maps Ant Design tokens into a Recharts theme', () => {
    const theme = rechartsFromAntd({
      colorBgBase: '#141414',
      colorBgContainer: '#1f1f1f',
      colorBgElevated: '#262626',
      colorBgLayout: '#000000',
      colorText: 'rgba(255, 255, 255, 0.88)',
      colorTextSecondary: 'rgba(255, 255, 255, 0.65)',
      colorTextTertiary: 'rgba(255, 255, 255, 0.45)',
      colorBorder: '#434343',
      colorBorderSecondary: '#303030',
      colorPrimary: '#1677ff',
      colorSuccess: '#52c41a',
      colorWarning: '#faad14',
      colorError: '#ff4d4f',
      colorInfo: '#13c2c2',
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      fontWeightStrong: 600,
      lineHeight: 1.57,
      lineWidth: 2,
      borderRadius: 6,
      borderRadiusLG: 10,
      boxShadowSecondary: '0 12px 24px rgba(0, 0, 0, 0.45)',
    });

    expect(theme.meta).toMatchObject({
      name: 'antd',
      mode: 'dark',
    });
    expect(theme.colors).toMatchObject({
      canvas: '#000000',
      surface: '#1f1f1f',
      text: 'rgba(255, 255, 255, 0.88)',
      mutedText: 'rgba(255, 255, 255, 0.65)',
      border: '#434343',
      grid: '#303030',
      axis: 'rgba(255, 255, 255, 0.65)',
      tooltipCursor: '#434343',
    });
    expect(theme.typography).toMatchObject({
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.57,
    });
    expect(theme.strokeWidths).toMatchObject({
      axis: 2,
      grid: 2,
      line: 2,
      area: 2,
      reference: 2,
      polarGrid: 2,
    });
    expect(theme.radii).toMatchObject({
      tooltip: 10,
    });
    expect(theme.shadows).toMatchObject({
      tooltip: '0 12px 24px rgba(0, 0, 0, 0.45)',
    });
    expect(theme.series?.palette).toEqual(['#1677ff', '#52c41a', '#faad14', '#ff4d4f', '#13c2c2']);
  });

  it('supports custom metadata and palette overrides', () => {
    const theme = rechartsFromAntd(
      {
        colorBgContainer: '#ffffff',
        colorText: 'rgba(0, 0, 0, 0.88)',
        colorBorder: '#d9d9d9',
        colorPrimary: '#1677ff',
      },
      {
        name: 'antd-happy',
        mode: 'light',
        palette: ['#fa541c', '#faad14', '#52c41a'],
      },
    );

    expect(theme.meta).toMatchObject({
      name: 'antd-happy',
      mode: 'light',
    });
    expect(theme.series?.palette).toEqual(['#fa541c', '#faad14', '#52c41a']);
  });
});

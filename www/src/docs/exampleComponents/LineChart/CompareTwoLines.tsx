import { FC, useMemo, useState } from 'react';
import { Line, LineChart, ReferenceLine, Tooltip, TooltipContentProps, XAxis, YAxis } from 'recharts';

// #region sample data and types
const formatUsdCompressed = (n: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  })
    .format(n)
    .toUpperCase();
};

const getDataKeyClose = (point: any) => point.close;
const getDataKeyNetDeposits = (point: any) => point.netDeposits;
const getDataKeyReinvestClose = (point: any) => point.reinvestClose;

const CustomTooltip: FC<TooltipContentProps<any, any>> = ({ active, payload }) => {
  const activePayload = payload?.[0]?.payload;
  if (!active || !activePayload || !activePayload.date) {
    return null;
  }
  return <span className="text-frecDarkGray flex -translate-x-1/2 select-none">{activePayload.date}</span>;
};

const data = [
  {
    date: 1754265600000,
    close: 200250.28586,
    maxClose: 200329.40245,
    reinvestClose: 200250.28586,
    netDeposits: 200000,
  },
  {
    date: 1754352000000,
    close: 199272.96485,
    maxClose: 199474.10888,
    reinvestClose: 199272.96485,
    netDeposits: 200000,
  },
  {
    date: 1754438400000,
    close: 200912.62441,
    maxClose: 200912.62441,
    reinvestClose: 200912.62441,
    netDeposits: 200000,
  },
  {
    date: 1754524800000,
    close: 200841.07452,
    maxClose: 200841.07452,
    reinvestClose: 200841.07452,
    netDeposits: 200000,
  },
  {
    date: 1754611200000,
    close: 202280.1764,
    maxClose: 202819.09273,
    reinvestClose: 202819.09273,
    netDeposits: 200000,
  },
  {
    date: 1754697600000,
    close: 202280.1764,
    maxClose: 202819.12355,
    reinvestClose: 202819.12355,
    netDeposits: 200000,
  },
  {
    date: 1754784000000,
    close: 202280.1764,
    maxClose: 202819.12355,
    reinvestClose: 202819.12355,
    netDeposits: 200000,
  },
  {
    date: 1754870400000,
    close: 201695.79315,
    maxClose: 202233.53819000002,
    reinvestClose: 202233.53819000002,
    netDeposits: 200000,
  },
  {
    date: 1754956800000,
    close: 204165.11346,
    maxClose: 204708.99235,
    reinvestClose: 204708.99235,
    netDeposits: 200000,
  },
  {
    date: 1755043200000,
    close: 204683.86015,
    maxClose: 205229.85045,
    reinvestClose: 205229.85045,
    netDeposits: 200000,
  },
  {
    date: 1755129600000,
    close: 204386.16203,
    maxClose: 204931.76703000002,
    reinvestClose: 204931.76703000002,
    netDeposits: 200000,
  },
  {
    date: 1755216000000,
    close: 203872.79671,
    maxClose: 204417.21500999999,
    reinvestClose: 204417.21500999999,
    netDeposits: 200000,
  },
  {
    date: 1755302400000,
    close: 203875.56671,
    maxClose: 204419.98501,
    reinvestClose: 204419.98501,
    netDeposits: 200000,
  },
  {
    date: 1755388800000,
    close: 203875.56671,
    maxClose: 204419.98501,
    reinvestClose: 204419.98501,
    netDeposits: 200000,
  },
  {
    date: 1755475200000,
    close: 203990.21558,
    maxClose: 204534.66470999998,
    reinvestClose: 204534.66470999998,
    netDeposits: 200000,
  },
  {
    date: 1755561600000,
    close: 202693.85337,
    maxClose: 203235.18933,
    reinvestClose: 203235.18933,
    netDeposits: 200000,
  },
  {
    date: 1755648000000,
    close: 202185.45487,
    maxClose: 202725.1726,
    reinvestClose: 202725.1726,
    netDeposits: 200000,
  },
  {
    date: 1755734400000,
    close: 201559.8993,
    maxClose: 202097.73681,
    reinvestClose: 202097.73681,
    netDeposits: 200000,
  },
  {
    date: 1755820800000,
    close: 204676.42605,
    maxClose: 205222.81705,
    reinvestClose: 205222.81705,
    netDeposits: 200000,
  },
  {
    date: 1755907200000,
    close: 204680.26605,
    maxClose: 205226.65705,
    reinvestClose: 205226.65705,
    netDeposits: 200000,
  },
  {
    date: 1755993600000,
    close: 204680.26605,
    maxClose: 205226.65705,
    reinvestClose: 205226.65705,
    netDeposits: 200000,
  },
  {
    date: 1756080000000,
    close: 203829.67195,
    maxClose: 204373.79742999998,
    reinvestClose: 204373.79742999998,
    netDeposits: 200000,
  },
  {
    date: 1756166400000,
    close: 204599.65998,
    maxClose: 205145.98933,
    reinvestClose: 205145.98933,
    netDeposits: 200000,
  },
  {
    date: 1756252800000,
    close: 205156.94904,
    maxClose: 205704.15302,
    reinvestClose: 205704.15302,
    netDeposits: 200000,
  },
  {
    date: 1756339200000,
    close: 205982.92992,
    maxClose: 206531.6413,
    reinvestClose: 206531.6413,
    netDeposits: 200000,
  },
  {
    date: 1756425600000,
    close: 204750.72779,
    maxClose: 205296.33207,
    reinvestClose: 205296.33207,
    netDeposits: 200000,
  },
  {
    date: 1756512000000,
    close: 204771.30779,
    maxClose: 205316.91207,
    reinvestClose: 205316.91207,
    netDeposits: 200000,
  },
  {
    date: 1756598400000,
    close: 204771.30779,
    maxClose: 205316.91207,
    reinvestClose: 205316.91207,
    netDeposits: 200000,
  },
  {
    date: 1756684800000,
    close: 204771.30779,
    maxClose: 205316.91207,
    reinvestClose: 205316.91207,
    netDeposits: 200000,
  },
  {
    date: 1756771200000,
    close: 203336.77508,
    maxClose: 203878.38012,
    reinvestClose: 203878.38012,
    netDeposits: 200000,
  },
  {
    date: 1756857600000,
    close: 204313.32762,
    maxClose: 204857.62446,
    reinvestClose: 204857.62446,
    netDeposits: 200000,
  },
  {
    date: 1756944000000,
    close: 206164.82454,
    maxClose: 206713.68974,
    reinvestClose: 206713.68974,
    netDeposits: 200000,
  },
  {
    date: 1757030400000,
    close: 205688.30079,
    maxClose: 206235.95084,
    reinvestClose: 206235.95084,
    netDeposits: 200000,
  },
  {
    date: 1757116800000,
    close: 205694.24079,
    maxClose: 206241.89084,
    reinvestClose: 206241.89084,
    netDeposits: 200000,
  },
  {
    date: 1757203200000,
    close: 205694.24079,
    maxClose: 206241.89084,
    reinvestClose: 206241.89084,
    netDeposits: 200000,
  },
  {
    date: 1757289600000,
    close: 206248.11961,
    maxClose: 206797.50779,
    reinvestClose: 206797.50779,
    netDeposits: 200000,
  },
  {
    date: 1757376000000,
    close: 206361.60467,
    maxClose: 206911.90037,
    reinvestClose: 206911.90037,
    netDeposits: 200000,
  },
  {
    date: 1757462400000,
    close: 206931.57487,
    maxClose: 207483.45488,
    reinvestClose: 207483.45488,
    netDeposits: 200000,
  },
  {
    date: 1757548800000,
    close: 208777.49902,
    maxClose: 209334.08583,
    reinvestClose: 209334.08583,
    netDeposits: 200000,
  },
  {
    date: 1757635200000,
    close: 208367.30969,
    maxClose: 209021.15418,
    reinvestClose: 208923.34276,
    netDeposits: 200000,
  },
  {
    date: 1757721600000,
    close: 208370.03969,
    maxClose: 209021.15418,
    reinvestClose: 208926.07276,
    netDeposits: 200000,
  },
  {
    date: 1757808000000,
    close: 208370.03969,
    maxClose: 209021.15418,
    reinvestClose: 208926.07276,
    netDeposits: 200000,
  },
  {
    date: 1757894400000,
    close: 209371.73869,
    maxClose: 210020.92301,
    reinvestClose: 209930.4328,
    netDeposits: 200000,
  },
  {
    date: 1757980800000,
    close: 208934.04827,
    maxClose: 209490.66585,
    reinvestClose: 209490.66585,
    netDeposits: 200000,
  },
  {
    date: 1758067200000,
    close: 208731.12737,
    maxClose: 209287.02201000002,
    reinvestClose: 209287.02201000002,
    netDeposits: 200000,
  },
  {
    date: 1758153600000,
    close: 210068.19722,
    maxClose: 210627.04514,
    reinvestClose: 210627.04514,
    netDeposits: 200000,
  },
  {
    date: 1758240000000,
    close: 210862.44012,
    maxClose: 211513.10408,
    reinvestClose: 211423.62606,
    netDeposits: 200000,
  },
  {
    date: 1758326400000,
    close: 210859.46012,
    maxClose: 211513.10408,
    reinvestClose: 211420.64606,
    netDeposits: 200000,
  },
  {
    date: 1758412800000,
    close: 210859.46012,
    maxClose: 211513.10408,
    reinvestClose: 211420.64606,
    netDeposits: 200000,
  },
  {
    date: 1758499200000,
    close: 291534.89436,
    maxClose: 292736.93416,
    reinvestClose: 292736.93416,
    netDeposits: 280000,
  },
  {
    date: 1758585600000,
    close: 289886.60569,
    maxClose: 291084.14519,
    reinvestClose: 291084.14519,
    netDeposits: 280000,
  },
  {
    date: 1758672000000,
    close: 288803.00042,
    maxClose: 289996.03962,
    reinvestClose: 289996.03962,
    netDeposits: 280000,
  },
  {
    date: 1758758400000,
    close: 287237.53875,
    maxClose: 288424.69800000003,
    reinvestClose: 288424.69800000003,
    netDeposits: 280000,
  },
  {
    date: 1758844800000,
    close: 289098.40234,
    maxClose: 290292.75549999997,
    reinvestClose: 290292.75549999997,
    netDeposits: 280000,
  },
  {
    date: 1758931200000,
    close: 289100.27234,
    maxClose: 290294.6255,
    reinvestClose: 290294.6255,
    netDeposits: 280000,
  },
  {
    date: 1759017600000,
    close: 289100.27234,
    maxClose: 290294.6255,
    reinvestClose: 290294.6255,
    netDeposits: 280000,
  },
  {
    date: 1759104000000,
    close: 289917.68812,
    maxClose: 291114.99768000003,
    reinvestClose: 291114.99768000003,
    netDeposits: 280000,
  },
  {
    date: 1759190400000,
    close: 290927.67041,
    maxClose: 292128.23201000004,
    reinvestClose: 292128.23201000004,
    netDeposits: 280000,
  },
  {
    date: 1759276800000,
    close: 291725.80907,
    maxClose: 292930.93666,
    reinvestClose: 292930.93666,
    netDeposits: 280000,
  },
  {
    date: 1759363200000,
    close: 291954.38666,
    maxClose: 293161.35379,
    reinvestClose: 293161.35379,
    netDeposits: 280000,
  },
  {
    date: 1759449600000,
    close: 291896.55473,
    maxClose: 293103.65326,
    reinvestClose: 293103.65326,
    netDeposits: 280000,
  },
  {
    date: 1759536000000,
    close: 291896.97473,
    maxClose: 293104.07326000003,
    reinvestClose: 293104.07326000003,
    netDeposits: 280000,
  },
  {
    date: 1759622400000,
    close: 291896.97473,
    maxClose: 293104.07326000003,
    reinvestClose: 293104.07326000003,
    netDeposits: 280000,
  },
  {
    date: 1759708800000,
    close: 293116.53883,
    maxClose: 294328.13765999995,
    reinvestClose: 294328.13765999995,
    netDeposits: 280000,
  },
  {
    date: 1759795200000,
    close: 292039.96981,
    maxClose: 293246.27995999996,
    reinvestClose: 293246.27995999996,
    netDeposits: 280000,
  },
  {
    date: 1759881600000,
    close: 293856.81708,
    maxClose: 295070.45254,
    reinvestClose: 295070.45254,
    netDeposits: 280000,
  },
  {
    date: 1759968000000,
    close: 293065.79468,
    maxClose: 294275.58681999997,
    reinvestClose: 294275.58681999997,
    netDeposits: 280000,
  },
  {
    date: 1760054400000,
    close: 284898.1604,
    maxClose: 286075.43213,
    reinvestClose: 286075.43213,
    netDeposits: 280000,
  },
  {
    date: 1760140800000,
    close: 284915.9704,
    maxClose: 286093.24212999997,
    reinvestClose: 286093.24212999997,
    netDeposits: 280000,
  },
  {
    date: 1760227200000,
    close: 284915.9704,
    maxClose: 286093.24212999997,
    reinvestClose: 286093.24212999997,
    netDeposits: 280000,
  },
  {
    date: 1760313600000,
    close: 289631.91477,
    maxClose: 290827.74613,
    reinvestClose: 290827.74613,
    netDeposits: 280000,
  },
  {
    date: 1760400000000,
    close: 289375.17,
    maxClose: 290569.7531,
    reinvestClose: 290569.7531,
    netDeposits: 280000,
  },
  {
    date: 1760486400000,
    close: 290518.57728,
    maxClose: 291718.21911,
    reinvestClose: 291718.21911,
    netDeposits: 280000,
  },
  {
    date: 1760572800000,
    close: 288250.37569,
    maxClose: 289441.6739,
    reinvestClose: 289441.6739,
    netDeposits: 280000,
  },
  {
    date: 1760659200000,
    close: 289546.09897,
    maxClose: 290945.19578,
    reinvestClose: 290945.19578,
    netDeposits: 280000,
  },
  {
    date: 1760745600000,
    close: 289565.87897,
    maxClose: 290968.16831000004,
    reinvestClose: 290968.16831000004,
    netDeposits: 280000,
  },
  {
    date: 1760832000000,
    close: 289565.87897,
    maxClose: 290968.16831000004,
    reinvestClose: 290968.16831000004,
    netDeposits: 280000,
  },
  {
    date: 1760918400000,
    close: 292661.84624,
    maxClose: 294226.94687,
    reinvestClose: 294226.94687,
    netDeposits: 280000,
  },
  {
    date: 1761004800000,
    close: 292596.13311,
    maxClose: 294278.6664,
    reinvestClose: 294278.6664,
    netDeposits: 280000,
  },
  {
    date: 1761091200000,
    close: 291286.23879,
    maxClose: 293053.57587999996,
    reinvestClose: 293053.57587999996,
    netDeposits: 280000,
  },
  {
    date: 1761177600000,
    close: 292980.34027,
    maxClose: 294761.25367999997,
    reinvestClose: 294761.25367999997,
    netDeposits: 280000,
  },
  {
    date: 1761264000000,
    close: 295334.07645,
    maxClose: 297264.83434,
    reinvestClose: 297264.83434,
    netDeposits: 280000,
  },
  {
    date: 1761350400000,
    close: 295339.16645,
    maxClose: 297287.49003000004,
    reinvestClose: 297287.49003000004,
    netDeposits: 280000,
  },
  {
    date: 1761436800000,
    close: 295339.16645,
    maxClose: 297287.49003000004,
    reinvestClose: 297287.49003000004,
    netDeposits: 280000,
  },
  {
    date: 1761523200000,
    close: 298898.51849,
    maxClose: 301027.20428,
    reinvestClose: 301027.20428,
    netDeposits: 280000,
  },
  {
    date: 1761609600000,
    close: 299458.39529,
    maxClose: 301698.80308000004,
    reinvestClose: 301698.80308000004,
    netDeposits: 280000,
  },
  {
    date: 1761696000000,
    close: 300155.03367,
    maxClose: 302519.21663,
    reinvestClose: 302519.21663,
    netDeposits: 280000,
  },
  {
    date: 1761782400000,
    close: 296838.93323,
    maxClose: 299172.16269,
    reinvestClose: 299172.16269,
    netDeposits: 280000,
  },
  {
    date: 1761868800000,
    close: 297645.82883,
    maxClose: 299987.45458,
    reinvestClose: 299987.45458,
    netDeposits: 280000,
  },
  {
    date: 1761955200000,
    close: 297436.88883,
    maxClose: 299778.51458,
    reinvestClose: 299778.51458,
    netDeposits: 280000,
  },
  {
    date: 1762041600000,
    close: 297436.88883,
    maxClose: 299778.51458,
    reinvestClose: 299778.51458,
    netDeposits: 280000,
  },
  {
    date: 1762128000000,
    close: 297896.80552,
    maxClose: 300467.03155,
    reinvestClose: 300467.03155,
    netDeposits: 280000,
  },
  {
    date: 1762214400000,
    close: 294259.78159,
    maxClose: 296810.06841,
    reinvestClose: 296810.06841,
    netDeposits: 280000,
  },
  {
    date: 1762300800000,
    close: 295344.54123,
    maxClose: 298175.78807999997,
    reinvestClose: 298175.78807999997,
    netDeposits: 280000,
  },
  {
    date: 1762387200000,
    close: 292176.91517,
    maxClose: 294964.41625999997,
    reinvestClose: 294964.41625999997,
    netDeposits: 280000,
  },
  {
    date: 1762473600000,
    close: 293150.13876,
    maxClose: 295951.40437,
    reinvestClose: 295951.40437,
    netDeposits: 280000,
  },
  {
    date: 1762560000000,
    close: 293164.76876,
    maxClose: 296001.37622000003,
    reinvestClose: 296001.37622000003,
    netDeposits: 280000,
  },
  {
    date: 1762646400000,
    close: 293164.76876,
    maxClose: 296001.37622000003,
    reinvestClose: 296001.37622000003,
    netDeposits: 280000,
  },
  {
    date: 1762992000000,
    close: 367372.436370742,
    maxClose: 367372.436370742,
    netDeposits: 355000,
  },
];
// #endregion

const color = '#bd7f2a';
const compareColor = '#dd4b1a';

const { yAxisMin, yAxisMax } = data.reduce(
  (acc, val) => {
    const mc = val.maxClose ?? 0;
    const nd = val.netDeposits ?? 0;

    return {
      yAxisMin: Math.min(acc.yAxisMin, mc, nd),
      yAxisMax: Math.max(acc.yAxisMax, mc, nd),
    };
  },
  { yAxisMin: Infinity, yAxisMax: 0 },
);

const yAxisDomain = [Math.max(0, 0.75 * yAxisMin), 1.25 * yAxisMax];

const compareHoverDenominator = data.filter(d => !!d.reinvestClose).length;

const App: FC = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const isHovering = hoverIndex !== -1;

  const invalidCompareValueLength = data.slice(0, hoverIndex).filter(d => !d.reinvestClose).length;
  const compareHoverNumerator = hoverIndex - invalidCompareValueLength;
  const compareHoverPercentage =
    // eslint-disable-next-line no-nested-ternary
    compareHoverDenominator > 0
      ? hoverIndex >= 0
        ? (compareHoverNumerator / compareHoverDenominator) * 100
        : 100
      : // handle the case of no valid data points. This only happens when the
        // chart has only 2 data points.
        compareHoverNumerator === 0
        ? 0
        : 100;
  const invalidNetDepositsLength = data.slice(0, hoverIndex).filter(d => !d.netDeposits).length;
  const netDepositHoverPercentage =
    hoverIndex >= 0
      ? ((hoverIndex - invalidNetDepositsLength) / (data.filter(d => !!d.netDeposits).length - 1)) * 100
      : 100;
  const hoverPercentage = hoverIndex >= 0 ? (hoverIndex / (data.filter(d => !!d.date).length - 1)) * 100 : 100;
  const compareValue = data[hoverIndex]?.reinvestClose;

  const handleMouseLeave = useMemo(() => () => setHoverIndex(-1), []);
  const handleMouseMove = useMemo(
    () =>
      ({ activeIndex }: any) =>
        setHoverIndex(Number(activeIndex ?? -1)),
    [],
  );

  const referenceLineSegment = useMemo(
    () =>
      [
        {
          x: data[hoverIndex]?.date ?? '',
          y: compareValue ?? data[hoverIndex]?.close ?? 0,
        },
        {
          x: data[hoverIndex]?.date ?? '',
          y: data[hoverIndex]?.close ?? compareValue ?? 0,
        },
      ] as const,
    [hoverIndex, compareValue],
  );

  return (
    <LineChart
      style={{ width: '100%', height: 300 }}
      responsive
      data={data}
      // Leave enough space to render the active dot
      margin={{ left: 6, right: 6 }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <defs>
        <linearGradient id="portfolioColor" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity={1} />
          <stop offset={`${hoverPercentage}%`} stopColor={color} stopOpacity={1} />
          <stop offset={`${hoverPercentage}%`} stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="netDepositsColor" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#8c9699" stopOpacity={1} />
          <stop offset={`${netDepositHoverPercentage}%`} stopColor="#8c9699" stopOpacity={1} />
          <stop offset={`${netDepositHoverPercentage}%`} stopColor="#8c9699" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#8c9699" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="compareValueColor" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor={compareColor} stopOpacity={1} />
          <stop offset={`${compareHoverPercentage}%`} stopColor={compareColor} stopOpacity={1} />
          <stop offset={`${compareHoverPercentage}%`} stopColor={compareColor} stopOpacity={0.3} />
          <stop offset="100%" stopColor={compareColor} stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <YAxis
        style={{
          userSelect: 'none',
        }}
        dataKey={getDataKeyClose}
        tickCount={3} // 3 ticks only: 0, half of max, max = portfolio value rounded to nearest 50k
        orientation="right"
        mirror
        type="number"
        name="Portfolio value"
        tickFormatter={formatUsdCompressed}
        tick={{ fill: 'black' }}
        domain={yAxisDomain}
      />
      {/** XAxis is required to show the lowest tick on the y-axis */}
      <XAxis dataKey="date" axisLine={false} tickLine={false} tick={false} tickSize={0} tickMargin={0} />
      <Tooltip
        offset={10}
        cursor={isHovering ? { stroke: 'gray', strokeWidth: 1 } : false}
        allowEscapeViewBox={{ x: true, y: true }}
        wrapperStyle={{
          top: '-24px',
          outline: 'none',
          fontSize: '12px',
          zIndex: 1,
        }}
        content={CustomTooltip}
        position={{
          y: 30,
        }}
        animationDuration={0}
      />
      {/* tracking error line */}
      <ReferenceLine
        stroke="#000AFF"
        strokeOpacity={0.4}
        strokeWidth={12}
        strokeLinecap="round"
        opacity={isHovering ? 1 : 0}
        segment={referenceLineSegment}
      />
      <Line
        type="linear"
        dataKey={getDataKeyNetDeposits}
        name="Net deposits"
        dot={false}
        activeDot={false}
        stroke="url(#netDepositsColor)"
        strokeWidth={2}
        opacity={isHovering ? 1 : 0}
        animationDuration={700}
      />
      <Line
        type="linear"
        dataKey={getDataKeyReinvestClose}
        name="Compare value"
        dot={false}
        activeDot={{ fill: compareColor }}
        stroke="url(#compareValueColor)"
        strokeDasharray="0.1 4"
        strokeLinecap="round"
        strokeWidth={2}
        strokeOpacity={isHovering ? 1 : 0}
        animationDuration={900}
      />
      <Line
        type="linear"
        dataKey={getDataKeyClose}
        name="Portfolio value"
        activeDot={{ fill: color }}
        dot={false}
        stroke="url(#portfolioColor)"
        strokeWidth={2}
        animationDuration={500}
      />
    </LineChart>
  );
};

export default App;

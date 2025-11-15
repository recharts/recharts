import * as React from 'react';
import {
  ComposedChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  Line,
  LabelList,
  LabelProps,
  MouseHandlerDataParam,
} from 'recharts';
import { useCallback } from 'react';

// #region Sample data
export const chartData = [
  { timestamp: 1695333600000, price: 317.01, targetPrice: 396.556098, low: 298.1, lowHigh: [298.1, 440] },
  { timestamp: 1695592800000, price: 317.54, targetPrice: 396.556098, low: 298.1, lowHigh: [298.1, 440] },
  { timestamp: 1696284000000, price: 313.39, targetPrice: 396.638095, low: 298.1, lowHigh: [298.1, 440] },
  { timestamp: 1697148000000, price: 327.73, targetPrice: 397.762791, low: 298.1, lowHigh: [298.1, 440] },
  { timestamp: 1698184800000, price: 340.67, targetPrice: 404.897674, low: 298.1, lowHigh: [298.1, 450] },
  { timestamp: 1698793200000, price: 346.07, targetPrice: 405.362791, low: 298.1, lowHigh: [298.1, 450] },
  { timestamp: 1698966000000, price: 352.8, targetPrice: 404.559091, low: 298.1, lowHigh: [298.1, 450] },
  { timestamp: 1699052400000, price: 352.8, targetPrice: 407.034884, low: 350, lowHigh: [350, 450] },
  { timestamp: 1699138800000, price: 352.8, targetPrice: 409.174419, low: 350, lowHigh: [350, 450] },
  { timestamp: 1701385200000, price: 374.51, targetPrice: 410.465909, low: 350, lowHigh: [350, 466] },
  { timestamp: 1701990000000, price: 374.23, targetPrice: 410.465909, low: 350, lowHigh: [350, 466] },
  { timestamp: 1702335600000, price: 374.38, targetPrice: 416.537778, low: 350, lowHigh: [350, 600] },
  { timestamp: 1703026800000, price: 370.62, targetPrice: 418.05, low: 350, lowHigh: [350, 600] },
  { timestamp: 1703804400000, price: 376.04, targetPrice: 420.911628, low: 350, lowHigh: [350, 600] },
  { timestamp: 1705014000000, price: 388.47, targetPrice: 425.934884, low: 370, lowHigh: [370, 600] },
  { timestamp: 1705878000000, price: 396.51, targetPrice: 429.231818, low: 370, lowHigh: [370, 600] },
  { timestamp: 1706655600000, price: 397.58, targetPrice: 459.344444, low: 370, lowHigh: [370, 600] },
  { timestamp: 1706828400000, price: 411.22, targetPrice: 460.733333, low: 370, lowHigh: [370, 600] },
  { timestamp: 1707001200000, price: 411.22, targetPrice: 464.272727, low: 370, lowHigh: [370, 600] },
  { timestamp: 1707174000000, price: 405.49, targetPrice: 467.813913, low: 370, lowHigh: [370, 600] },
  { timestamp: 1707433200000, price: 420.55, targetPrice: 467.813913, low: 370, lowHigh: [370, 600] },
  { timestamp: 1707606000000, price: 420.55, targetPrice: 469.987556, low: 420, lowHigh: [420, 600] },
  { timestamp: 1708383600000, price: 402.79, targetPrice: 470.066087, low: 420, lowHigh: [420, 600] },
  { timestamp: 1708988400000, price: 407.48, targetPrice: 470.066087, low: 420, lowHigh: [420, 600] },
  { timestamp: 1709247600000, price: 415.5, targetPrice: 469.69234, low: 420, lowHigh: [420, 600] },
  { timestamp: 1709593200000, price: 402.65, targetPrice: 469.970208, low: 420, lowHigh: [420, 600] },
  { timestamp: 1710802800000, price: 421.41, targetPrice: 474.317755, low: 420, lowHigh: [420, 600] },
  { timestamp: 1714082400000, price: 406.32, targetPrice: 479.035098, low: 420, lowHigh: [420, 600] },
  { timestamp: 1714687200000, price: 406.66, targetPrice: 478.354706, low: 420, lowHigh: [420, 600] },
  { timestamp: 1714946400000, price: 413.54, targetPrice: 478.242941, low: 420, lowHigh: [420, 600] },
  { timestamp: 1715292000000, price: 414.74, targetPrice: 480.4078, low: 425, lowHigh: [425, 600] },
  { timestamp: 1715896800000, price: 420.21, targetPrice: 481.4666, low: 425, lowHigh: [425, 600] },
  { timestamp: 1717452000000, price: 416.07, targetPrice: 482.61898, low: 425, lowHigh: [425, 600] },
  { timestamp: 1717624800000, price: 424.52, targetPrice: 486.547551, low: 425, lowHigh: [425, 600] },
  { timestamp: 1718920800000, price: 449.78, targetPrice: 486.547551, low: 425, lowHigh: [425, 600] },
  { timestamp: 1719093600000, price: 449.78, targetPrice: 488.142292, low: 436, lowHigh: [436, 600] },
  { timestamp: 1719439200000, price: 452.85, targetPrice: 489.166596, low: 436, lowHigh: [436, 600] },
  { timestamp: 1719525600000, price: 446.95, targetPrice: 489.892292, low: 436, lowHigh: [436, 600] },
  { timestamp: 1719784800000, price: 456.73, targetPrice: 489.892292, low: 436, lowHigh: [436, 600] },
  { timestamp: 1719957600000, price: 460.77, targetPrice: 489.892292, low: 436, lowHigh: [436, 600] },
  { timestamp: 1720476000000, price: 459.54, targetPrice: 494.976122, low: 436, lowHigh: [436, 600] },
  { timestamp: 1722376800000, price: 418.35, targetPrice: 498.914894, low: 448, lowHigh: [448, 600] },
  { timestamp: 1722549600000, price: 408.49, targetPrice: 498.667391, low: 448, lowHigh: [448, 600] },
  { timestamp: 1722722400000, price: 408.49, targetPrice: 498.489362, low: 448, lowHigh: [448, 600] },
  { timestamp: 1724018400000, price: 421.53, targetPrice: 497.631915, low: 448, lowHigh: [448, 600] },
  { timestamp: 1725487200000, price: 408.39, targetPrice: 498.168696, low: 448, lowHigh: [448, 600] },
  { timestamp: 1726178400000, price: 430.59, targetPrice: 497.431739, low: 448, lowHigh: [448, 600] },
  { timestamp: 1726783200000, price: 435.27, targetPrice: 497.431739, low: 448, lowHigh: [448, 600] },
  { timestamp: 1727560800000, price: 428.02, targetPrice: 497.431739, low: 448, lowHigh: [448, 600] },
  { timestamp: 1728252000000, price: 409.54, targetPrice: 500.117021, low: 425, lowHigh: [425, 600] },
  { timestamp: 1730934000000, price: 425.43, targetPrice: 500.597826, low: 425, lowHigh: [425, 600] },
  { timestamp: 1731020400000, price: 422.54, targetPrice: 500.833333, low: 425, lowHigh: [425, 600] },
  { timestamp: 1731106800000, price: 422.54, targetPrice: 500.380435, low: 425, lowHigh: [425, 600] },
  { timestamp: 1731366000000, price: 423.03, targetPrice: 501.477111, low: 425, lowHigh: [425, 600] },
  { timestamp: 1731970800000, price: 417.79, targetPrice: 501.477111, low: 425, lowHigh: [425, 600] },
  { timestamp: 1732489200000, price: 418.79, targetPrice: 501.477111, low: 425, lowHigh: [425, 600] },
  { timestamp: 1733266800000, price: 437.42, targetPrice: 510.358043, low: 425, lowHigh: [425, 650] },
  { timestamp: 1736895600000, price: 426.31, targetPrice: 508.500208, low: 425, lowHigh: [425, 650] },
  { timestamp: 1738278000000, price: 415.06, targetPrice: 508.500208, low: 425, lowHigh: [425, 650] },
  { timestamp: 1738537200000, price: 410.92, targetPrice: 508.812708, low: 425, lowHigh: [425, 650] },
  { timestamp: 1738796400000, price: 415.82, targetPrice: 509.326735, low: 425, lowHigh: [425, 650] },
  { timestamp: 1738969200000, price: 409.75, targetPrice: 510.000217, low: 425, lowHigh: [425, 650] },
  { timestamp: 1739055600000, price: 409.75, targetPrice: 510.666889, low: 425, lowHigh: [425, 650] },
  { timestamp: 1739228400000, price: 411.44, targetPrice: 510.851277, low: 425, lowHigh: [425, 650] },
  { timestamp: 1739574000000, price: 408.43, targetPrice: 510.851277, low: 425, lowHigh: [425, 650] },
  { timestamp: 1740006000000, price: 416.13, targetPrice: 510.000213, low: 425, lowHigh: [425, 650] },
  { timestamp: 1740092400000, price: 408.21, targetPrice: 510.217609, low: 425, lowHigh: [425, 650] },
  { timestamp: 1740610800000, price: 392.53, targetPrice: 508.261087, low: 425, lowHigh: [425, 650] },
  { timestamp: 1741302000000, price: 393.31, targetPrice: 508.261087, low: 425, lowHigh: [425, 650] },
  { timestamp: 1741734000000, price: 383.27, targetPrice: 504.891522, low: 440, lowHigh: [440, 600] },
  { timestamp: 1741906800000, price: 388.56, targetPrice: 505.666889, low: 440, lowHigh: [440, 600] },
  { timestamp: 1743116400000, price: 378.8, targetPrice: 490.333556, low: 415, lowHigh: [415, 600] },
  { timestamp: 1744754400000, price: 371.61, targetPrice: 489.739348, low: 415, lowHigh: [415, 600] },
  { timestamp: 1744840800000, price: 367.78, targetPrice: 496.787447, low: 420, lowHigh: [420, 600] },
  { timestamp: 1745791200000, price: 391.16, targetPrice: 502.301667, low: 432, lowHigh: [432, 650] },
  { timestamp: 1746050400000, price: 425.4, targetPrice: 504.193469, low: 432, lowHigh: [432, 650] },
  { timestamp: 1746136800000, price: 435.28, targetPrice: 505.622041, low: 432, lowHigh: [432, 650] },
  { timestamp: 1746828000000, price: 438.73, targetPrice: 506.132245, low: 432, lowHigh: [432, 650] },
  { timestamp: 1746914400000, price: 438.73, targetPrice: 507.0096, low: 432, lowHigh: [432, 650] },
  { timestamp: 1747173600000, price: 452.94, targetPrice: 507.0096, low: 432, lowHigh: [432, 650] },
  { timestamp: 1747432800000, price: 454.27, targetPrice: 508.581224, low: 432, lowHigh: [432, 650] },
  { timestamp: 1747864800000, price: 454.86, targetPrice: 510.530833, low: 432, lowHigh: [432, 650] },
  { timestamp: 1748988000000, price: 463.87, targetPrice: 515.976458, low: 432, lowHigh: [432, 700] },
  { timestamp: 1750284000000, price: 480.24, targetPrice: 515.976458, low: 432, lowHigh: [432, 700] },
  { timestamp: 1750370400000, price: 477.4, targetPrice: 524.226458, low: 432, lowHigh: [432, 700] },
  { timestamp: 1751493600000, price: 498.84, targetPrice: 525.772857, low: 432, lowHigh: [432, 700] },
  { timestamp: 1751839200000, price: 497.72, targetPrice: 556.6374, low: 432, lowHigh: [432, 700] },
  { timestamp: 1753826400000, price: 513.24, targetPrice: 557.6374, low: 432, lowHigh: [432, 700] },
  { timestamp: 1753912800000, price: 533.5, targetPrice: 611.570588, low: 432, lowHigh: [432, 700] },
  { timestamp: 1754431200000, price: 524.94, targetPrice: 615.747059, low: 470, lowHigh: [470, 700] },
  { timestamp: 1754690400000, price: 522.04, targetPrice: 618.662, low: 480, lowHigh: [480, 700] },
  { timestamp: 1754776800000, price: 522.04, targetPrice: 621.491837, low: 485, lowHigh: [485, 700] },
  { timestamp: 1755036000000, price: 520.58, targetPrice: 618.422, low: 320, lowHigh: [320, 700] },
  { timestamp: 1755208800000, price: 520.17, targetPrice: 624.502083, low: 485, lowHigh: [485, 700] },
  { timestamp: 1755468000000, price: 517.1, targetPrice: 624.512245, low: 485, lowHigh: [485, 700] },
  { timestamp: 1756418400000, price: 506.69, targetPrice: 625.165306, low: 485, lowHigh: [485, 700] },
  { timestamp: 1757282400000, price: 498.2, targetPrice: 624.362, low: 485, lowHigh: [485, 700] },
  { timestamp: 1757628000000, price: 509.9, targetPrice: 624.362, low: 485, lowHigh: [485, 700] },
];
// #endregion

function ActiveLabel(props: LabelProps) {
  if (props.x == null || props.y == null || props.value == null) {
    return null;
  }
  return (
    <text x={Number(props.x) + 10} y={Number(props.y) + 5}>
      {props.value}
    </text>
  );
}

const tickFormatter = (value: string): string => {
  const date = new Date(value);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

function useActiveIndexState(defaultValue?: number) {
  const [state, setState] = React.useState<number | undefined>(defaultValue);

  const setActiveIndex = useCallback(
    (props: MouseHandlerDataParam) => {
      setState(Number(props.activeTooltipIndex));
    },
    [setState],
  );

  const clearActiveIndex = useCallback(() => {
    setState(undefined);
  }, [setState]);

  return [state, setActiveIndex, clearActiveIndex] as const;
}

const showNothing = () => null;

export default function TargetPriceChart({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: number;
}) {
  const [activeIndex, setActiveIndex, clearActiveIndex] = useActiveIndexState(defaultIndex);

  return (
    <ComposedChart
      id="TargetPriceChart"
      style={{ width: '100%', height: '50vh' }}
      responsive
      data={chartData}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      onMouseMove={setActiveIndex}
      onMouseLeave={clearActiveIndex}
    >
      <CartesianGrid vertical />
      <XAxis
        type="number"
        scale="time"
        dataKey="timestamp"
        interval="preserveStartEnd"
        domain={['dataMin', 'dataMax']}
        tickFormatter={tickFormatter}
      />
      <YAxis interval="preserveStartEnd" orientation="right" />
      <Area
        connectNulls
        dataKey="lowHigh"
        fill="orange"
        stroke="orange"
        fillOpacity={0.12}
        isAnimationActive={isAnimationActive}
      >
        <LabelList
          position="center"
          // eslint-disable-next-line react/no-unstable-nested-components
          content={labelProps => activeIndex === labelProps.index && <ActiveLabel {...labelProps} />}
        />
      </Area>
      <Line dataKey="low" stroke="none" dot={false} isAnimationActive={isAnimationActive}>
        <LabelList
          position="center"
          // eslint-disable-next-line react/no-unstable-nested-components
          content={labelProps => activeIndex === labelProps.index && <ActiveLabel {...labelProps} />}
        />
      </Line>
      <Line dataKey="price" stroke="darkslateblue" dot={false} isAnimationActive={isAnimationActive}>
        <LabelList
          position="center"
          // eslint-disable-next-line react/no-unstable-nested-components
          content={labelProps => activeIndex === labelProps.index && <ActiveLabel {...labelProps} />}
        />
      </Line>
      <Line dataKey="targetPrice" stroke="darkorange" dot={false} isAnimationActive={isAnimationActive}>
        <LabelList
          position="center"
          // eslint-disable-next-line react/no-unstable-nested-components
          content={labelProps => activeIndex === labelProps.index && <ActiveLabel {...labelProps} />}
        />
      </Line>
      <Tooltip content={showNothing} defaultIndex={defaultIndex} />
    </ComposedChart>
  );
}

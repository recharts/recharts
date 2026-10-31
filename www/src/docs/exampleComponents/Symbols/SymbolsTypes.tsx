import { Symbols, SymbolType, Text, useRechartsTheme } from 'recharts';

const symbolTypes: ReadonlyArray<SymbolType> = ['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'];

const cellWidth = 80;
const height = 110;

export const SymbolsTypes = () => {
  const theme = useRechartsTheme();
  const palette = theme?.graphicalItems ?? [];

  return (
    <svg
      viewBox={`0 0 ${cellWidth * symbolTypes.length} ${height}`}
      style={{ width: '100%', maxWidth: `${cellWidth * symbolTypes.length}px` }}
      role="img"
    >
      {symbolTypes.map((type, index) => {
        const cx = cellWidth * index + cellWidth / 2;
        return (
          <g key={type}>
            <Symbols
              type={type}
              cx={cx}
              cy={40}
              size={1200}
              fill={palette[index % palette.length]?.fill ?? '#8884d8'}
            />
            <Text x={cx} y={95} textAnchor="middle">
              {type}
            </Text>
          </g>
        );
      })}
    </svg>
  );
};

export default SymbolsTypes;

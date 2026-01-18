import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Solar System Data
/**
 * Data source: https://solarsystem.nasa.gov/planet-compare/
 *
 * Color fill from: https://astronomy.stackexchange.com/questions/14032/color-of-planets
 * And also some here: https://www.color-hex.com/color-palette/7174
 */
const solarSystem = [
  {
    name: 'Sun',
    orbitalDistanceKm: 0,
    radiusKm: 696340,
    massKg: 1.989e30,
    fill: '#ffa700',
  },
  {
    name: 'Mercury',
    orbitalDistanceKm: 5.791e7,
    radiusKm: 2439.7,
    massKg: 3.3e23,
    fill: '#1a1a1a',
  },
  {
    name: 'Venus',
    orbitalDistanceKm: 1.082e8,
    radiusKm: 6051.8,
    massKg: 4.87e24,
    fill: '#e3bb76',
  },
  {
    name: 'Earth',
    orbitalDistanceKm: 1.496e8,
    radiusKm: 6371,
    massKg: 5.97e24,
    fill: '#6b93d6',
  },
  {
    name: 'Mars',
    orbitalDistanceKm: 2.279e8,
    radiusKm: 3389.5,
    massKg: 6.42e23,
    fill: '#993d00',
  },
  {
    name: 'Jupiter',
    orbitalDistanceKm: 7.786e8,
    radiusKm: 69911,
    massKg: 1.9e27,
    fill: '#b07f35',
  },
  {
    name: 'Saturn',
    orbitalDistanceKm: 1.4335e9,
    radiusKm: 58232,
    massKg: 5.68e26,
    fill: '#b08f36',
  },
  {
    name: 'Uranus',
    orbitalDistanceKm: 2.8725e9,
    radiusKm: 25362,
    massKg: 8.68e25,
    fill: '#5580aa',
  },
  {
    name: 'Neptune',
    orbitalDistanceKm: 4.4951e9,
    radiusKm: 24622,
    massKg: 1.02e26,
    fill: '#366896',
  },
  {
    name: 'Pluto',
    orbitalDistanceKm: 5.9064e9,
    radiusKm: 1188.3,
    massKg: 1.3e22,
    fill: '#968570',
  },
];
// #endregion

export default function MassBarChartLogScale() {
  return (
    <BarChart
      style={{
        width: '100%',
        maxWidth: '800px',
        maxHeight: '80vh',
        aspectRatio: 1.618,
      }}
      responsive
      data={solarSystem}
    >
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis
        scale="log"
        domain={[1e22, 3e30]}
        width={100}
        stroke="var(--color-text-3)"
        label={{
          value: 'Mass log10[kg]',
          position: 'insideLeft',
          dx: 0,
          dy: 20,
          angle: -90,
          fill: 'var(--color-text-3)',
        }}
      />
      <Bar dataKey="massKg" unit="kg" stroke="var(--color-border-2)" />
      <Tooltip
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
        cursor={{ fill: 'var(--color-solid-7a)' }}
        itemStyle={{
          color: 'var(--color-text-3)',
        }}
      />
      <RechartsDevtools />
    </BarChart>
  );
}

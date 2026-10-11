import { ResponsiveContainer, SunburstChart, SunburstData, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
/*
 * The data has no colors. The chart takes them from the theme:
 * each department gets the next theme color, and its teams inherit it.
 */
const hierarchy: SunburstData = {
  name: 'Company',
  value: 150,
  children: [
    {
      name: 'Engineering',
      value: 60,
      children: [
        { name: 'Frontend', value: 25 },
        {
          name: 'Backend',
          value: 20,
          children: [
            { name: 'API', value: 12 },
            { name: 'Data', value: 8 },
          ],
        },
        { name: 'QA', value: 15 },
      ],
    },
    {
      name: 'Sales',
      value: 40,
      children: [
        { name: 'Direct', value: 25 },
        { name: 'Partners', value: 15 },
      ],
    },
    {
      name: 'Marketing',
      value: 30,
      children: [
        { name: 'Content', value: 18 },
        { name: 'Ads', value: 12 },
      ],
    },
    { name: 'Support', value: 20 },
  ],
};
// #endregion

export default function SunburstChartThemeColors() {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <SunburstChart data={hierarchy}>
        <Tooltip />
        <RechartsDevtools />
      </SunburstChart>
    </ResponsiveContainer>
  );
}

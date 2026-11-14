import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const hours = [
  { day: 'Mon', design: 3, build: 4 },
  { day: 'Tue', design: 5 },
  { day: 'Wed', build: 6 },
  { day: 'Thu', design: 0, build: 4 },
];

export default function WorkLogExample() {
  return (
    <>
      {[false, true].map(centerBarsInCategory => (
        <figure key={String(centerBarsInCategory)} style={{ margin: 0 }}>
          <figcaption>
            {centerBarsInCategory ? 'Center the projects with recorded hours' : 'Reserve a slot for each project'}
          </figcaption>
          <BarChart
            responsive
            width="100%"
            height={180}
            data={hours}
            barSize={24}
            centerBarsInCategory={centerBarsInCategory}
          >
            <XAxis dataKey="day" />
            <YAxis width={30} unit="h" />
            <Legend />
            <Tooltip />
            <Bar dataKey="design" name="Design" isAnimationActive={false} />
            <Bar dataKey="build" name="Build" isAnimationActive={false} />
            <RechartsDevtools />
          </BarChart>
        </figure>
      ))}
    </>
  );
}

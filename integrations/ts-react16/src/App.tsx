import './App.css';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

function App() {
  return (
    <>
      <h1>Vite + React 18 + TypeScript + Recharts</h1>
      <BarChart
        width={600}
        height={300}
        data={[
          { name: 'A', value: 100 },
          { name: 'B', value: 200 },
        ]}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="gold" name="Tooltip value" />
        <Legend />
        <Tooltip />
      </BarChart>
    </>
  );
}

export default App;

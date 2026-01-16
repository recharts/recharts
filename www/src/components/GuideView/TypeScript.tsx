import { localeGet } from '../../utils/LocaleUtils.ts';
import { SupportedLocale } from '../../locale';
import { SourceCodeEditor } from '../Playground/SourceCodeEditor.tsx';

export function TypeScript({ locale }: { locale: SupportedLocale }) {
  return (
    <div className="mod-typescript" id="TypeScript">
      <h3 className="page-title">{localeGet(locale, 'guide', 'typescript')}</h3>
      <p className="paragraph-title">
        Recharts provides first-class support for TypeScript. All components export their props interfaces,
        and most components accept generic type parameters to strictly type your data.
      </p>

      <h4 className="sub-title">Strict Typing with Generics</h4>
      <p>
        Most Recharts components (like <code>Area</code>, <code>Bar</code>, <code>Line</code>, <code>Scatter</code>,
        <code>XAxis</code>, <code>YAxis</code>, etc.) accept generic type parameters.
        You can pass your data type to these components to ensure type safety for props like <code>dataKey</code>.
      </p>
      <SourceCodeEditor
        className="tsx"
        value={`import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

interface MyData {
  name: string;
  value: number;
  other: number;
}

const data: MyData[] = [
  { name: 'A', value: 10, other: 100 },
  { name: 'B', value: 20, other: 200 },
];

export const MyChart = () => (
  <AreaChart width={500} height={400} data={data}>
    <XAxis<MyData> dataKey="name" />
    <YAxis<MyData> />
    <Area<MyData> dataKey="value" stroke="#8884d8" fill="#8884d8" />
    {/* TypeScript will error if you use an invalid key */}
    {/* <Area<MyData> dataKey="invalid" /> */}
  </AreaChart>
);`}
        readOnly
      />

      <h4 className="sub-title">Typed Component Helper</h4>
      <p>
        If you prefer not to pass generics to every component, or want to enforce a specific data type across all components in a chart,
        you can use the <code>createTypedComponents</code> helper.
        This function creates a set of strictly typed components based on your data interface, while preserving tree-shaking.
      </p>

      <SourceCodeEditor
        className="tsx"
        value={`import { AreaChart, Area, XAxis, YAxis, createTypedComponents } from 'recharts';

interface MyData {
  name: string;
  value: number;
}

// Create typed components
const {
  AreaChart: TypedAreaChart,
  Area: TypedArea,
  XAxis: TypedXAxis,
  YAxis: TypedYAxis
} = createTypedComponents<MyData>({ AreaChart, Area, XAxis, YAxis });

export const MyTypedChart = () => (
  <TypedAreaChart width={500} height={400} data={data}>
    <TypedXAxis dataKey="name" />
    <TypedYAxis />
    <TypedArea dataKey="value" stroke="#82ca9d" fill="#82ca9d" />
  </TypedAreaChart>
);`}
        readOnly
      />
    </div>
  );
}

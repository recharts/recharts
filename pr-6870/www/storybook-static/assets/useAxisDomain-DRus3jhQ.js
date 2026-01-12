import{j as e}from"./jsx-runtime-WcQf8sum.js";import{useMDXComponents as o}from"./index-CfnNZBUz.js";import"./iframe-C9kyXynm.js";import"./preload-helper-Dp1pzeXC.js";function i(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{id:"usexaxisdomain-and-useyaxisdomain",children:[e.jsx(n.code,{children:"useXAxisDomain"})," and ",e.jsx(n.code,{children:"useYAxisDomain"})]}),`
`,e.jsx(n.p,{children:"These two hooks return the domain of the X and Y axes respectively."}),`
`,e.jsx(n.p,{children:"The domain can be either numeric or categorical, depending on the type of axis."}),`
`,e.jsx(n.p,{children:"Numeric domains will return an array of two numbers, representing the minimum and maximum values of the axis."}),`
`,e.jsx(n.p,{children:`Categorical domains will return an array of values, representing the categories on the axis.
In case there are no data points, and in case of categorical axis that requires unique values but the data contains duplicates,
the categorical domain uses numerical index values instead of the actual values.`}),`
`,e.jsxs(n.p,{children:["Both of these hooks will return ",e.jsx(n.code,{children:"undefined"})," if called outside of a chart context or if the domain cannot be calculated."]}),`
`,e.jsxs(n.p,{children:["Both accept an optional ",e.jsx(n.code,{children:"axisId"}),` parameter to specify which axis to get the domain for.
If not provided, the default axis ID of `,e.jsx(n.code,{children:"0"})," will be used."]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from 'react';
import { useXAxisDomain, useYAxisDomain, Line, YAxis, XAxis, LineChart } from 'recharts';

const MyComponent = () => {
  const xAxisDomain = useXAxisDomain();
  const yAxisDomain = useYAxisDomain();
  console.log('X Axis Domain:', xAxisDomain);
  console.log('Y Axis Domain:', yAxisDomain);
  return null;
};

const MyChart = () => (
  <LineChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Line type="monotone" dataKey="value" />
    <MyComponent />
  </LineChart>
);
`})})]})}function d(a={}){const{wrapper:n}={...o(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{d as default};

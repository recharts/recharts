import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,t as n}from"./jsx-runtime-BenY-SQ9.js";import{t as r}from"./mdx-react-shim-6gHMkx1M.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:`usexaxisdomain-and-useyaxisdomain`,children:[(0,o.jsx)(n.code,{children:`useXAxisDomain`}),` and `,(0,o.jsx)(n.code,{children:`useYAxisDomain`})]}),`
`,(0,o.jsx)(n.p,{children:`These two hooks return the domain of the X and Y axes respectively.`}),`
`,(0,o.jsx)(n.p,{children:`The domain can be either numeric or categorical, depending on the type of axis.`}),`
`,(0,o.jsx)(n.p,{children:`Numeric domains will return an array of two numbers, representing the minimum and maximum values of the axis.`}),`
`,(0,o.jsx)(n.p,{children:`Categorical domains will return an array of values, representing the categories on the axis.
In case there are no data points, and in case of categorical axis that requires unique values but the data contains duplicates,
the categorical domain uses numerical index values instead of the actual values.`}),`
`,(0,o.jsxs)(n.p,{children:[`Both of these hooks will return `,(0,o.jsx)(n.code,{children:`undefined`}),` if called outside of a chart context or if the domain cannot be calculated.`]}),`
`,(0,o.jsxs)(n.p,{children:[`Both accept an optional `,(0,o.jsx)(n.code,{children:`axisId`}),` parameter to specify which axis to get the domain for.
If not provided, the default axis ID of `,(0,o.jsx)(n.code,{children:`0`}),` will be used.`]}),`
`,(0,o.jsx)(n.h2,{id:`example-usage`,children:`Example Usage`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-jsx`,children:`import React from 'react';
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
`})})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};
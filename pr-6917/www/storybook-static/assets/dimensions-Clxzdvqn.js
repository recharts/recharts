import{j as e}from"./jsx-runtime-B7qEVVFh.js";import{useMDXComponents as n}from"./index-B1h8y65x.js";import{M as h,C as o}from"./blocks-BWxoNjte.js";import{C as d,W as s}from"./dimensions.stories-D_VfNLEK.js";import"./iframe-A-0tKSWD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-Mvr0XH.js";import"./ChartSizeDimensions-22sFfi6P.js";import"./arrayEqualityCheck-Bi53fE_W.js";import"./resolveDefaultProps-DGQ-_Q5N.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-DpDrbSCn.js";import"./RechartsWrapper-SmBFshtg.js";import"./hooks-BIt-PEDd.js";import"./axisSelectors-BPBM-BQI.js";import"./zIndexSlice-BnuFP1kN.js";import"./CartesianChart-2alRd1pz.js";import"./chartDataContext-BdRC9Sc-.js";import"./CategoricalChart-El9GFkBl.js";import"./Line-JkOAy3vk.js";import"./Layer-CxQ6kbYz.js";import"./ReactUtils-ptTox43v.js";import"./Label-C7autWsa.js";import"./Text-DMK2KaGs.js";import"./DOMUtils-gTBfrWdN.js";import"./ZIndexLayer-BJZUY29j.js";import"./ActivePoints-Jfec1qwc.js";import"./Dot-1LqtVP9Q.js";import"./types-BYDpjVEr.js";import"./RegisterGraphicalItemId-DjlQV6Vi.js";import"./ErrorBarContext-9JUs1gmp.js";import"./GraphicalItemClipPath-Sdkq8hlz.js";import"./SetGraphicalItem-C1AKRyjE.js";import"./useAnimationId-CvIqeW01.js";import"./getRadiusAndStrokeWidthFromDot-D6jqQXc0.js";import"./ActiveShapeUtils-CxepjeQB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9GYhQ17.js";import"./Trapezoid-B9ii8EyS.js";import"./Sector-BedQrfAt.js";import"./Symbols-C_xPmfi9.js";import"./Curve-BQURRmu9.js";import"./XAxis-BXhGyvV2.js";import"./CartesianAxis-DX3J6okb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DGY1JRVK.js";import"./Legend-DaKq2VbA.js";import"./useElementOffset-pOCC4UDR.js";import"./iteratee-CS8o6XLt.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
`,e.jsxs(i.h1,{id:"usechartwidth-usechartheight",children:[e.jsx(i.code,{children:"useChartWidth"}),", ",e.jsx(i.code,{children:"useChartHeight"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"useChartWidth"})," hook returns the width of the chart in pixels. ",e.jsx(i.code,{children:"useChartHeight"})," returns the height of the chart in pixels."]}),`
`,e.jsxs(i.p,{children:["If you are using chart with hardcoded ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` props, then the width returned will be the same
as the `,e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"})," prop on the main chart element."]}),`
`,e.jsxs(i.p,{children:["If you are using a chart with a ",e.jsx(i.code,{children:"ResponsiveContainer"}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,e.jsxs(i.p,{children:["If the chart has any axes or legend, the ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` will be the size of the chart
including the axes and legend.`]}),`
`,e.jsx(i.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,e.jsx(o,{of:s,layout:"padded"}),`
`,e.jsx(i.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(i.p,{children:"The hooks can be used within any chart:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<AreaChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<BarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<LineChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<PieChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Sankey/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Treemap/>"})}),`
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};

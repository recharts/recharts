import{j as e}from"./jsx-runtime-Cf4D7i78.js";import{useMDXComponents as n}from"./index-D7xLJCl5.js";import{M as h,C as o}from"./blocks-BxCD0jWy.js";import{C as d,W as s}from"./dimensions.stories-XK8tmOYg.js";import"./iframe-DDewu6bn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXZrkBkN.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./arrayEqualityCheck-DXTExga0.js";import"./resolveDefaultProps-B5JubxST.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-A2O41DUS.js";import"./RechartsWrapper-CzQiRy-1.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./Line-Bn8-TD5I.js";import"./Layer-DqLbE6Uv.js";import"./ReactUtils-DtjzxdpY.js";import"./Label-J4ZfWAib.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./ZIndexLayer-mUyPWZcK.js";import"./ActivePoints-6rWUYf_F.js";import"./Dot-CCTp0i8d.js";import"./types-BJyKbQEz.js";import"./RegisterGraphicalItemId-CHV5Wa4s.js";import"./ErrorBarContext-CZxFfXpJ.js";import"./GraphicalItemClipPath-B9jmiGSm.js";import"./SetGraphicalItem-CnIZ3Mlk.js";import"./useAnimationId-CjgQOJMR.js";import"./getRadiusAndStrokeWidthFromDot-dhATJ_xE.js";import"./ActiveShapeUtils-uXTIH56O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Don_yAtF.js";import"./Trapezoid-Bbc_2Q2m.js";import"./Sector-efCwWuY6.js";import"./Symbols-DzJjx9Jp.js";import"./Curve-BBC21-sm.js";import"./XAxis-8FAWklv8.js";import"./CartesianAxis-D7kXIk58.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-D9vEUw1w.js";import"./Legend-BNNypsMi.js";import"./useElementOffset-BW_oDTfp.js";import"./iteratee-KFwqOqNI.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

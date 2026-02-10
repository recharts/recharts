import{j as e}from"./jsx-runtime-wC7fy548.js";import{useMDXComponents as n}from"./index-DUMxoBIH.js";import{M as h,C as o}from"./blocks-BcJ0boof.js";import{C as d,W as s}from"./dimensions.stories-LwGxwF2v.js";import"./iframe-BJmj21Iv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bcx4MYAQ.js";import"./ChartSizeDimensions-DzMxt8cg.js";import"./arrayEqualityCheck-DUr5Baor.js";import"./resolveDefaultProps-BRnWZzOd.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Qt-NTGDC.js";import"./RechartsWrapper-DbAa2EPs.js";import"./hooks-B5MTKyny.js";import"./axisSelectors-CjDiZ-xu.js";import"./zIndexSlice-COvs_Sat.js";import"./CartesianChart-DEbVCltq.js";import"./chartDataContext-Cx9KpUyq.js";import"./CategoricalChart-B8_cyiQX.js";import"./Line-BQi0Q9VA.js";import"./Layer-CfTs1qEr.js";import"./ReactUtils-B_n9e2df.js";import"./Label-B5aPNwUF.js";import"./Text-DA6O7Yy4.js";import"./DOMUtils-CQprm85Q.js";import"./ZIndexLayer-h8hw7e3y.js";import"./ActivePoints-BJiO-RId.js";import"./Dot-C-sAwJUZ.js";import"./types-BB2yvksg.js";import"./RegisterGraphicalItemId-DTHmNv35.js";import"./ErrorBarContext-DSxRheLC.js";import"./GraphicalItemClipPath-CzdqANMv.js";import"./SetGraphicalItem-DUq8N8zo.js";import"./useAnimationId-BtjxpnPj.js";import"./getRadiusAndStrokeWidthFromDot-D1oY8r7_.js";import"./ActiveShapeUtils-COxfqJFr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtPz-Bf1.js";import"./Trapezoid-DUAp6hoC.js";import"./Sector-Dq6mbUDa.js";import"./Symbols-Li-QgOej.js";import"./Curve-DSyQRjp9.js";import"./XAxis-B-U8Jsdu.js";import"./CartesianAxis-BAnw5oBq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BnZN_5Sd.js";import"./Legend-BBsW8_Ki.js";import"./useElementOffset-BA4CWq7u.js";import"./iteratee-Cf1__6jE.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

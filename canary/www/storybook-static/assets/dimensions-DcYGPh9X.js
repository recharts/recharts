import{j as e}from"./jsx-runtime-DZp4dqjr.js";import{useMDXComponents as n}from"./index-DBjs_Sqv.js";import{M as h,C as o}from"./blocks-5RdNCo4F.js";import{C as d,W as s}from"./dimensions.stories-NIlAaFsd.js";import"./iframe-_im4GKTL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B3zuwbjl.js";import"./ChartSizeDimensions-Db8YW_qh.js";import"./arrayEqualityCheck-DQWePApg.js";import"./resolveDefaultProps-CaxhqgES.js";import"./PolarUtils-DcWiW1XO.js";import"./ComposedChart-BY8obHgx.js";import"./RechartsWrapper-DKFQy6Ae.js";import"./hooks-DKOVFqS5.js";import"./axisSelectors-DpIDWeTq.js";import"./zIndexSlice-CPIWfeLh.js";import"./CartesianChart-DG1wjONq.js";import"./chartDataContext-DX2vSSsK.js";import"./CategoricalChart-CQUZMGEq.js";import"./Line-0hzLwUmh.js";import"./Layer-ojK6bjXb.js";import"./ReactUtils-CAkOWUwD.js";import"./Label-CTy8eywr.js";import"./Text-DEtZyA_I.js";import"./DOMUtils-BcupyZUP.js";import"./ZIndexLayer-DmWCVoEY.js";import"./ActivePoints-DX8NdDb8.js";import"./Dot-D7h6v8mz.js";import"./types-CFuB44L5.js";import"./RegisterGraphicalItemId-B4K3Ftz3.js";import"./ErrorBarContext-NodAal-E.js";import"./GraphicalItemClipPath-BfdvnoI7.js";import"./SetGraphicalItem-fuqPKC-n.js";import"./useAnimationId-iCdU_Q_k.js";import"./getRadiusAndStrokeWidthFromDot-ClQkEbgX.js";import"./ActiveShapeUtils-rIph4crd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ejGTCKcw.js";import"./Trapezoid-C1OI6suu.js";import"./Sector-BGg8SpOK.js";import"./Symbols-aMSa3fiu.js";import"./Curve-CjWJcBC1.js";import"./XAxis-BtqRyYI3.js";import"./CartesianAxis-BZEJptN1.js";import"./YAxis-D-u8YWMK.js";import"./Legend-CHw6DFha.js";import"./useElementOffset-C2SIKvmg.js";import"./iteratee-CjrhkTpo.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};

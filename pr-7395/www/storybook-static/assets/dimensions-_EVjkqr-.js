import{u as n,j as e}from"./index-biGcxVJE.js";import{e as o,C as h}from"./blocks-DWHkaZ0x.js";import{C as d,W as s}from"./dimensions.stories-B8AaHxeO.js";import"./iframe-QM_Hy95O.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPQwco96.js";import"./index-CyaeIqvy.js";import"./index-CGSa8iwo.js";import"./ChartSizeDimensions-CNIhvvV1.js";import"./zIndexSlice-BlNPxokt.js";import"./immer-fQ35ak9n.js";import"./get-in6fAyvy.js";import"./resolveDefaultProps-BlXEfe9z.js";import"./isWellBehavedNumber-COg8tf3N.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CQ4Xoo2c.js";import"./RechartsWrapper-Ls9ymLSy.js";import"./index-rIa8t0ZL.js";import"./renderedTicksSlice-CdDiUgXh.js";import"./axisSelectors-CnIWqyv7.js";import"./d3-scale-CDUvP8fj.js";import"./CartesianChart-BOBGMUhC.js";import"./chartDataContext-Cuzu216J.js";import"./CategoricalChart-C66Yjwv3.js";import"./Page-DPte-9pC.js";import"./Line-Uf2Z77KS.js";import"./Curve-BXRuFBMP.js";import"./types-B29_egWp.js";import"./step-BH3XZet7.js";import"./path-DyVhHtw_.js";import"./Layer-DMLrZzOp.js";import"./ReactUtils-BIEdgNAL.js";import"./Label-D4PO75Y9.js";import"./Text-CiqEhbxu.js";import"./DOMUtils-O0X-t8NY.js";import"./ZIndexLayer-BiKPrQca.js";import"./ActivePoints-48Z6mXbE.js";import"./Dot-CfJGHcqY.js";import"./RegisterGraphicalItemId-Ch0Vf5AU.js";import"./ErrorBarContext-BHFsn856.js";import"./GraphicalItemClipPath-BHIKYbjI.js";import"./SetGraphicalItem-DzbZ3uGV.js";import"./useAnimationId-BxdIxPQQ.js";import"./getRadiusAndStrokeWidthFromDot-6yNSu3ln.js";import"./ActiveShapeUtils-Ben0Z5Gs.js";import"./XAxis-k_T7UBmN.js";import"./CartesianAxis-B-Qfc6z6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-ByuMssjK.js";import"./Legend-glhn_kqD.js";import"./Symbols-BvjnAwcw.js";import"./symbol-jogBUXor.js";import"./useElementOffset-BwqgoTsT.js";import"./uniqBy-B1I9aJN4.js";import"./iteratee-CmZMcvd6.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`,e.jsx(h,{of:s,layout:"padded"}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

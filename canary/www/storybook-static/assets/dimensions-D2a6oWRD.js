import{j as e}from"./jsx-runtime-ga0_kMPI.js";import{useMDXComponents as n}from"./index-CXr36Q83.js";import{M as o,C as h}from"./blocks-BInSHUb2.js";import{C as d,W as s}from"./dimensions.stories-BuuSxwK9.js";import"./iframe-zNZ6gtuS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NY9m0Yqy.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./arrayEqualityCheck-Dt2SCAs7.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./immer-M5VU9jjz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dsj55aBj.js";import"./RechartsWrapper-C9d9AYjY.js";import"./index-FhY_ESTg.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./zIndexSlice-DvWemZ8b.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./Line-c3RRemFq.js";import"./Layer-BQ0S_2Uh.js";import"./ReactUtils-CDHy-yxP.js";import"./Label-BCeegupp.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./ZIndexLayer-BqvP1SAm.js";import"./ActivePoints-CYKr6AgU.js";import"./Dot-DYFOoPhj.js";import"./types-ynSAt5pr.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./ErrorBarContext-DueqJhS_.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./useAnimationId-C73SjrYi.js";import"./getRadiusAndStrokeWidthFromDot-OAyCmPPZ.js";import"./ActiveShapeUtils-CGpmN3Ni.js";import"./isPlainObject-BwG0gXsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOPBXjWX.js";import"./Trapezoid-D3gu8WeD.js";import"./Sector-BY1ck4On.js";import"./Symbols-D7LFKWCm.js";import"./symbol-31gnSDTi.js";import"./step-CCZqHQ-h.js";import"./Curve-o1yhe_oH.js";import"./XAxis-DgIpX0Qf.js";import"./CartesianAxis-CVokkLFp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-QWxltK0B.js";import"./Legend-CMcjGl_9.js";import"./useElementOffset-C-dERYCT.js";import"./uniqBy-Cyl5F9xm.js";import"./iteratee-L6muNfU6.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};

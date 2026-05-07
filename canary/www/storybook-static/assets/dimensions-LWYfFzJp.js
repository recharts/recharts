import{j as e}from"./jsx-runtime-B-HErM9O.js";import{useMDXComponents as n}from"./index-DOQ3yhEw.js";import{M as o,C as h}from"./blocks-BaNo52kD.js";import{C as d,W as s}from"./dimensions.stories-B2X0a0Yb.js";import"./iframe-BgwmBjfB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B_0cWXev.js";import"./ChartSizeDimensions-BOdb3hAs.js";import"./arrayEqualityCheck-B1qnogVb.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-qucNpk_A.js";import"./immer-L1QYf-NE.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-QYakg_VE.js";import"./RechartsWrapper-BzFnIirW.js";import"./index-Dw-9JZxy.js";import"./hooks-BBhaKEpc.js";import"./axisSelectors-p-DsPcsN.js";import"./d3-scale-C0r8W7gC.js";import"./zIndexSlice-9mnJo3WO.js";import"./renderedTicksSlice-kbflTFpl.js";import"./CartesianChart-C8IYYlhJ.js";import"./chartDataContext-DR_cij4x.js";import"./CategoricalChart-DrEP-5RI.js";import"./Page-Cj8EiXz7.js";import"./Line-BukzmJmv.js";import"./Layer-sKAIqvEC.js";import"./ReactUtils-Dla0XjmI.js";import"./Label-BeTMxE7h.js";import"./Text-D7VqnjvF.js";import"./DOMUtils-CUsjemqf.js";import"./ZIndexLayer-DX-nM8qM.js";import"./ActivePoints-DDZpcuUc.js";import"./Dot-n89jEX-l.js";import"./types-CFdz9x_M.js";import"./RegisterGraphicalItemId-CtttlxaS.js";import"./ErrorBarContext-CLlFokOM.js";import"./GraphicalItemClipPath-bS3Dkt_2.js";import"./SetGraphicalItem-CbRoDUDG.js";import"./useAnimationId-nEXiQ4wd.js";import"./getRadiusAndStrokeWidthFromDot-BAwr8WJt.js";import"./ActiveShapeUtils-Bc3Bo2kR.js";import"./isPlainObject-DCrRKxze.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xy71HFhS.js";import"./Trapezoid-Ctq3RZiG.js";import"./Sector-B8iCNGe2.js";import"./Symbols-CqgbDjwG.js";import"./symbol-D69U7vWh.js";import"./step-BxFdL0zf.js";import"./Curve-D2S6CN-2.js";import"./XAxis-BX9DZiaX.js";import"./CartesianAxis-GtFYCfV6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DL4fvP6H.js";import"./Legend-DBmPCTQS.js";import"./useElementOffset-DX4-4QE5.js";import"./uniqBy-CHNs3q3W.js";import"./iteratee-DJZlIK_6.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

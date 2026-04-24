import{j as e}from"./jsx-runtime-DIYdM7oB.js";import{useMDXComponents as n}from"./index-DGuf7RaY.js";import{M as o,C as h}from"./blocks-CI74sXLd.js";import{C as d,W as s}from"./dimensions.stories-DExG2SrF.js";import"./iframe-LMZEDrr2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Bhf0VI.js";import"./ChartSizeDimensions-Dkn4GtcA.js";import"./arrayEqualityCheck-Isy6zPZP.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BZX4Pe9p.js";import"./immer-BxzI6gFZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CJ4Tf8S0.js";import"./RechartsWrapper-CGclI6Yd.js";import"./index-9UiZJf_6.js";import"./hooks-D05996su.js";import"./axisSelectors-BJbnODt1.js";import"./d3-scale-HoZeCUQ0.js";import"./zIndexSlice-C5mrfXZA.js";import"./renderedTicksSlice-P-8ydmtT.js";import"./CartesianChart-D8UfDOFa.js";import"./chartDataContext-CmqegXUH.js";import"./CategoricalChart-CdP22T7j.js";import"./Page-Cj8EiXz7.js";import"./Line-5-HvnnXd.js";import"./Layer-Dm4unAaj.js";import"./ReactUtils-D-S282mX.js";import"./Label-C1cFmZLh.js";import"./Text-D-rTyPnI.js";import"./DOMUtils-nLe0COZN.js";import"./ZIndexLayer-xLHvpxY5.js";import"./ActivePoints-iQlXbE54.js";import"./Dot-D2FHp4ML.js";import"./types-C96dbGEy.js";import"./RegisterGraphicalItemId-D4ZA5iGR.js";import"./ErrorBarContext-ByVn-xgW.js";import"./GraphicalItemClipPath-BG8ja_no.js";import"./SetGraphicalItem-BbPBNAhF.js";import"./useAnimationId-BVzXz2Ut.js";import"./getRadiusAndStrokeWidthFromDot-uSj8EeRI.js";import"./ActiveShapeUtils-DlCg2xOm.js";import"./isPlainObject-tSKo75hS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bTQTBoQ8.js";import"./Trapezoid-BaFBv2Ob.js";import"./Sector-DM3Dpfvi.js";import"./Symbols-q47rYWMx.js";import"./symbol-BUCm0Fuj.js";import"./step-DHepAl4j.js";import"./Curve-D3f_JNhO.js";import"./XAxis-CDuwPcZ0.js";import"./CartesianAxis-CmrHLfhr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-ClmaHC8-.js";import"./Legend-DpVDCq_z.js";import"./useElementOffset-BsnK6ysB.js";import"./uniqBy-DoryuFu9.js";import"./iteratee-B7wf2MQl.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

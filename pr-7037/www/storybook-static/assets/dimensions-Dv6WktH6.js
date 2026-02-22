import{j as e}from"./jsx-runtime-C729ke3_.js";import{useMDXComponents as n}from"./index-DbfBMZl_.js";import{M as o,C as h}from"./blocks-BkI0rh7b.js";import{C as d,W as s}from"./dimensions.stories-CnbqaeCJ.js";import"./iframe-DwKnaYxn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DfrlB0-M.js";import"./ChartSizeDimensions-Bj69MEnT.js";import"./arrayEqualityCheck-LpIzrfco.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ASXxnl.js";import"./immer-DQq_9s85.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DVQptumT.js";import"./RechartsWrapper-Cx1zvPpd.js";import"./index-CdfNcBdj.js";import"./hooks-hd7QZ5DW.js";import"./axisSelectors-CHTcuo-V.js";import"./d3-scale-DF79GY39.js";import"./zIndexSlice-BYI3CC3N.js";import"./renderedTicksSlice-CSkX6jPi.js";import"./CartesianChart-CzQwlEOC.js";import"./chartDataContext-BLheDghz.js";import"./CategoricalChart-E4I9FfSw.js";import"./Line-CajB4DXV.js";import"./Layer-DSEoyjCD.js";import"./ReactUtils-BWd9nqnf.js";import"./Label-V1o-IcdK.js";import"./Text-Cmd1_Toj.js";import"./DOMUtils-Poqmn9Kz.js";import"./ZIndexLayer-BN-fjZdO.js";import"./ActivePoints-O0bbVxi4.js";import"./Dot-Bm4ifZBZ.js";import"./types-CuZ_PvfO.js";import"./RegisterGraphicalItemId-DJ-_fktQ.js";import"./ErrorBarContext-C_ynaDio.js";import"./GraphicalItemClipPath-BWTY-wx8.js";import"./SetGraphicalItem-BvmoZ9RU.js";import"./useAnimationId-DAuxgXsL.js";import"./getRadiusAndStrokeWidthFromDot-CGIH-rbC.js";import"./ActiveShapeUtils-BElib0Bt.js";import"./isPlainObject-CWJcMVMA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bCycDAsX.js";import"./Trapezoid-lPFf9vCg.js";import"./Sector-DE27qkYe.js";import"./Symbols-C2QRSUXD.js";import"./symbol-CZd2cT8P.js";import"./step-Cbn8vCGE.js";import"./Curve-BGSMtIpM.js";import"./XAxis-BZQZZAmU.js";import"./CartesianAxis-CcPlK-DU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CPIo8OmW.js";import"./Legend-CtcC-yxU.js";import"./useElementOffset-CmOXLvcN.js";import"./uniqBy-BxUPqeI8.js";import"./iteratee-CyMhRah8.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{j as e}from"./jsx-runtime-Br1LQhVs.js";import{useMDXComponents as n}from"./index-BUD008Hi.js";import{M as o,C as h}from"./blocks-BVnbr7sF.js";import{C as d,W as s}from"./dimensions.stories-Dk3-WP3p.js";import"./iframe-CGVhrCsk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CQT87Gjl.js";import"./ChartSizeDimensions-CJ3vtll8.js";import"./arrayEqualityCheck-hWfBO-dZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwNF5fMy.js";import"./immer-ByckOGb7.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cs4bNDUq.js";import"./RechartsWrapper-DgM4xUF4.js";import"./index-CEIii_b2.js";import"./hooks-mLbHXbPh.js";import"./axisSelectors-CrTWvSV9.js";import"./d3-scale-D5vl0Nsi.js";import"./zIndexSlice-DutzqnKh.js";import"./renderedTicksSlice-DmMczr5P.js";import"./CartesianChart-B1c-3hUF.js";import"./chartDataContext-DQaWG2U3.js";import"./CategoricalChart-X3-XrJiY.js";import"./Line-BDkuDWC1.js";import"./Layer-DI3r5k9z.js";import"./ReactUtils-CZtHcLE8.js";import"./Label-Ca0FMlUU.js";import"./Text-DbvmJCeH.js";import"./DOMUtils-5Zd9MXZO.js";import"./ZIndexLayer-BlFiVhV6.js";import"./ActivePoints-DCd-acaj.js";import"./Dot-Dwb1H9wZ.js";import"./types-CutyoUQf.js";import"./RegisterGraphicalItemId-D2-m4nk3.js";import"./ErrorBarContext-BGDc3EIW.js";import"./GraphicalItemClipPath-D7PtxHvG.js";import"./SetGraphicalItem-BqAzYXKd.js";import"./useAnimationId-bFrgCHGo.js";import"./getRadiusAndStrokeWidthFromDot-EoCljdHa.js";import"./ActiveShapeUtils-DEu4pVNL.js";import"./isPlainObject-BSA6Caji.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL9KViSo.js";import"./Trapezoid-C1cOue80.js";import"./Sector-8CmLtbdM.js";import"./Symbols-DsXXK2gD.js";import"./symbol-Dw_xitWX.js";import"./step-p7MifGWd.js";import"./Curve-DdraDXui.js";import"./XAxis-CU7mfsQ-.js";import"./CartesianAxis-DzeHRsGq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-pDp602YX.js";import"./Legend-CpunIFOu.js";import"./useElementOffset--pKlwBer.js";import"./uniqBy-BhkSAKgM.js";import"./iteratee-DIIFvXI9.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

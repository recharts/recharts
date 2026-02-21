import{j as e}from"./jsx-runtime-Cz66qJtn.js";import{useMDXComponents as n}from"./index-B3rzFkc2.js";import{M as o,C as h}from"./blocks-CCveIrLg.js";import{C as d,W as s}from"./dimensions.stories-D-pm1cZw.js";import"./iframe-BFxtY9dI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df7eFGry.js";import"./ChartSizeDimensions-Rd73rJcG.js";import"./arrayEqualityCheck-BQbZm714.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bso679kC.js";import"./immer-CUcePk58.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Pvg-RSkd.js";import"./RechartsWrapper-DLTyrBtL.js";import"./index-DIi_90kL.js";import"./hooks-BNRFjHsC.js";import"./axisSelectors-Ceb__LH1.js";import"./d3-scale-KUDmBWZW.js";import"./zIndexSlice-ZRc_7mLu.js";import"./renderedTicksSlice-BzWN-VH9.js";import"./CartesianChart-CabJwrb4.js";import"./chartDataContext-DVsTe71B.js";import"./CategoricalChart-DKEDTrV-.js";import"./Line-UEiO7S8k.js";import"./Layer-YgumUWTD.js";import"./ReactUtils-DAjtS1FD.js";import"./Label-BcnS9G2E.js";import"./Text-C_nqvwwO.js";import"./DOMUtils-D2wt1W4C.js";import"./ZIndexLayer-DBC69qog.js";import"./ActivePoints-YDyzEBL0.js";import"./Dot-BvOkHPQI.js";import"./types-DnPXbBrB.js";import"./RegisterGraphicalItemId-Dp1MHSbj.js";import"./ErrorBarContext-BKgH9nv9.js";import"./GraphicalItemClipPath-DRveIpF0.js";import"./SetGraphicalItem-BHv-MNOM.js";import"./useAnimationId-BSFVs4aF.js";import"./getRadiusAndStrokeWidthFromDot-BTjYZIUU.js";import"./ActiveShapeUtils-C6MZRufc.js";import"./isPlainObject-BfhtbKPL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpImsBEM.js";import"./Trapezoid-DlEtqDsP.js";import"./Sector-CtJlOyZO.js";import"./Symbols-CK_J3ycL.js";import"./symbol-CT0Qon51.js";import"./step-Ckw-k6uH.js";import"./Curve-CuVRTfs_.js";import"./XAxis-D3JpuhiV.js";import"./CartesianAxis-BYeXOVyG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CPuMzTzv.js";import"./Legend-v5xHdTLw.js";import"./useElementOffset-DKdxrDGu.js";import"./uniqBy-6ea5zmox.js";import"./iteratee-VCyK8kIm.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

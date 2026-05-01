import{j as e}from"./jsx-runtime-EubTybcG.js";import{useMDXComponents as n}from"./index-GmlJ_EhG.js";import{M as o,C as h}from"./blocks-BD3JONod.js";import{C as d,W as s}from"./dimensions.stories-CMOSsK71.js";import"./iframe-BLDR2_i0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CTEoDz69.js";import"./ChartSizeDimensions-CoOcLq9u.js";import"./arrayEqualityCheck-CvNQEz9w.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRIlCLrP.js";import"./immer-BKFNBdyg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D_KoMtLA.js";import"./RechartsWrapper-Ct1BBYFn.js";import"./index-CFbRxLRx.js";import"./hooks-CtJRBtxo.js";import"./axisSelectors-BB17965m.js";import"./d3-scale-BhFvmkin.js";import"./zIndexSlice-yBBB4uSb.js";import"./renderedTicksSlice-BSzl6y0x.js";import"./CartesianChart-LlNtHt9D.js";import"./chartDataContext-Bphfe7Jq.js";import"./CategoricalChart-DdO_PfYZ.js";import"./Page-Cj8EiXz7.js";import"./Line-D-dTaVGT.js";import"./Layer-Bg4znOhy.js";import"./ReactUtils-BZwBYxFJ.js";import"./Label-BeUhNh6s.js";import"./Text-Z-_UHMZw.js";import"./DOMUtils-CzTi80AG.js";import"./ZIndexLayer-7ToExptV.js";import"./ActivePoints-rdhL3F9r.js";import"./Dot-DzHpuORN.js";import"./types-DW7k3YBY.js";import"./RegisterGraphicalItemId-BAO_-1Fe.js";import"./ErrorBarContext-DJptcZIz.js";import"./GraphicalItemClipPath-iX6Zf2o8.js";import"./SetGraphicalItem-DTwOd3dX.js";import"./useAnimationId-CuonZP-E.js";import"./getRadiusAndStrokeWidthFromDot-BdzGGcnE.js";import"./ActiveShapeUtils-Bx3IdaBV.js";import"./isPlainObject-Bgs7IkK4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFLqOtC4.js";import"./Trapezoid-DytqB0t5.js";import"./Sector-DJtO2zeV.js";import"./Symbols-BPbqFGSD.js";import"./symbol-BlMgqIva.js";import"./step-CJMvDBr8.js";import"./Curve-Dso7sD8l.js";import"./XAxis-DtQQBd2y.js";import"./CartesianAxis-BPi0jvIf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-D1KSMWgt.js";import"./Legend-BMZplj7G.js";import"./useElementOffset-BZPwPb6Z.js";import"./uniqBy-B3VFxQDg.js";import"./iteratee-BJQ0nu2N.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

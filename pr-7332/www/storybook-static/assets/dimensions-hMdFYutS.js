import{j as e}from"./jsx-runtime-GP9G0ONI.js";import{useMDXComponents as n}from"./index-CYH6sRTY.js";import{M as o,C as h}from"./blocks-sIV_oGbr.js";import{C as d,W as s}from"./dimensions.stories-x1akXHnw.js";import"./iframe-BwSUf2T9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D71go6ze.js";import"./ChartSizeDimensions-DuDQVVyz.js";import"./arrayEqualityCheck-kNUesU9n.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvrFLXNt.js";import"./immer-7Mb6ATLS.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DIEhpHjl.js";import"./RechartsWrapper-4BCl0_T5.js";import"./index-DweiLrJJ.js";import"./hooks-DWJz6m6D.js";import"./axisSelectors-BxFZbnk8.js";import"./d3-scale-4uUuwoJk.js";import"./zIndexSlice-CtGAVWci.js";import"./renderedTicksSlice-BDQYkSRg.js";import"./CartesianChart-Bob7JQC-.js";import"./chartDataContext-DGesBm7c.js";import"./CategoricalChart-DQIJaSSS.js";import"./Page-Cj8EiXz7.js";import"./Line-BN5F3gve.js";import"./Layer-CG8DX7G3.js";import"./ReactUtils-BlFNJVa6.js";import"./Label-cBW6O7Up.js";import"./Text-BIBt_YS0.js";import"./DOMUtils-DuReS6JS.js";import"./ZIndexLayer-Bv5glbFY.js";import"./ActivePoints-dru_eoBO.js";import"./Dot-CW3ALvSp.js";import"./types-CNlhQ7_N.js";import"./RegisterGraphicalItemId-fD1_o_b6.js";import"./ErrorBarContext-BaQDv8aw.js";import"./GraphicalItemClipPath-bwNzittR.js";import"./SetGraphicalItem-DlbF6pEY.js";import"./useAnimationId-DY4wSWRx.js";import"./getRadiusAndStrokeWidthFromDot-DGBZLmVX.js";import"./ActiveShapeUtils-N1muSzDi.js";import"./isPlainObject-BZM5eFQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CW7YI0Bu.js";import"./Trapezoid-BeLgkWe2.js";import"./Sector-D_JRIQS4.js";import"./Symbols-CCCMBfqC.js";import"./symbol-Cn5r8HhL.js";import"./step-CwM1BVfC.js";import"./Curve-DXAcp3xR.js";import"./XAxis-DMsA7lKM.js";import"./CartesianAxis-D9SaV3-s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CuVkr_B5.js";import"./Legend-C04w1Ai2.js";import"./useElementOffset-CdLeMivj.js";import"./uniqBy-c5b7uoEj.js";import"./iteratee-2sw6E18I.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

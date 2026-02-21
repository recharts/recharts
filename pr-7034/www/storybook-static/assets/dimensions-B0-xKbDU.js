import{j as e}from"./jsx-runtime-D9d9J7ck.js";import{useMDXComponents as n}from"./index-CjR_nCeF.js";import{M as o,C as h}from"./blocks-C5OtS_FH.js";import{C as d,W as s}from"./dimensions.stories-eR_-g3QT.js";import"./iframe-CiJ-9oSW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DbWSPN2V.js";import"./ChartSizeDimensions-mFb6CdqR.js";import"./arrayEqualityCheck-C8jW8oZt.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_fWxmLs.js";import"./immer-37ItimpE.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dc7jAWzW.js";import"./RechartsWrapper-eTQdG_km.js";import"./index-CDsMfUar.js";import"./hooks-Dfqn0uk4.js";import"./axisSelectors-DOyKuHrc.js";import"./d3-scale-DsUEV-Ka.js";import"./zIndexSlice-eHnPInNj.js";import"./renderedTicksSlice-9qCibHxh.js";import"./CartesianChart-CziHqUQ0.js";import"./chartDataContext-C_-Fr4aA.js";import"./CategoricalChart-B2RsDCkt.js";import"./Line-DYv13fKO.js";import"./Layer-BNBNN9ao.js";import"./ReactUtils-DvnOMe61.js";import"./Label-C9pOXevO.js";import"./Text-3tLRx2GL.js";import"./DOMUtils-DnoEKxPk.js";import"./ZIndexLayer-BJKv50T_.js";import"./ActivePoints-C7RKWaCs.js";import"./Dot-3CUYNcL8.js";import"./types-vu75yOSZ.js";import"./RegisterGraphicalItemId-C-8W5AZj.js";import"./ErrorBarContext-CYSXeNyx.js";import"./GraphicalItemClipPath-wqub__sm.js";import"./SetGraphicalItem-LQknpEAz.js";import"./useAnimationId-CXrnPLqE.js";import"./getRadiusAndStrokeWidthFromDot-DRdGVHTE.js";import"./ActiveShapeUtils-DyEnrLdp.js";import"./isPlainObject-CsWSYAtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfLyzxqP.js";import"./Trapezoid-D3a_DMTo.js";import"./Sector-KbjOkzpv.js";import"./Symbols-B-HpyQSV.js";import"./symbol-BTeg8-vO.js";import"./step-DuNs4m9V.js";import"./Curve-CSLHFVyE.js";import"./XAxis-BJxfrRMM.js";import"./CartesianAxis-BCIccZ9q.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BZxiz2W9.js";import"./Legend-DnnvorAp.js";import"./useElementOffset-CCXA-6n2.js";import"./uniqBy-P9RtWepS.js";import"./iteratee-DhHmPQfF.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

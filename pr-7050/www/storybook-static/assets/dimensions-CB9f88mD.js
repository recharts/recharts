import{j as e}from"./jsx-runtime-fB_eToSq.js";import{useMDXComponents as n}from"./index-De3HA9Qs.js";import{M as o,C as h}from"./blocks-Ckd7waD1.js";import{C as d,W as s}from"./dimensions.stories-xejUzIzW.js";import"./iframe-BxnpLNlI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D27xip60.js";import"./ChartSizeDimensions-CkjlP-Hw.js";import"./arrayEqualityCheck-Ev4pEcaj.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-znjuu04v.js";import"./immer-BkCi42RL.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B09NG58-.js";import"./RechartsWrapper-_MSRa_Ei.js";import"./index-b30Cmp9V.js";import"./hooks-C-flJ6p6.js";import"./axisSelectors-CNXspQbT.js";import"./d3-scale-ClZ26DSd.js";import"./zIndexSlice--EK8Um__.js";import"./renderedTicksSlice-BJPmxvjH.js";import"./CartesianChart-C-nBds0D.js";import"./chartDataContext-j05r-NuJ.js";import"./CategoricalChart-DZvzXAdF.js";import"./Line-BsG4Isq5.js";import"./Layer-CjPvoy9w.js";import"./ReactUtils-BdNEbP_1.js";import"./Label-BJJgujul.js";import"./Text-lfWzmX-o.js";import"./DOMUtils-BwcWjDda.js";import"./ZIndexLayer-BFJ6fW_I.js";import"./ActivePoints-BBEugXOU.js";import"./Dot-yJDT37nk.js";import"./types-gZ1RVbMB.js";import"./RegisterGraphicalItemId-D2g_8__I.js";import"./ErrorBarContext-BbpRKECp.js";import"./GraphicalItemClipPath-BWEZTu7p.js";import"./SetGraphicalItem-legQuKyA.js";import"./useAnimationId-BkMfgj6S.js";import"./getRadiusAndStrokeWidthFromDot-TgdqzR3J.js";import"./ActiveShapeUtils-BFvjG2KX.js";import"./isPlainObject-B1iN99vF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvUDBcr-.js";import"./Trapezoid-BVhmBeys.js";import"./Sector-B9qkET69.js";import"./Symbols-7Di5jhUy.js";import"./symbol-CNSHwdEE.js";import"./step-ClrTL6ck.js";import"./Curve-Cd2m7ztB.js";import"./XAxis-DivYk73O.js";import"./CartesianAxis-xelplfqC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-N3Hr219E.js";import"./Legend-BvoWLFBw.js";import"./useElementOffset-qjVs9Par.js";import"./uniqBy-CKqIpa99.js";import"./iteratee-DIaIkoeV.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

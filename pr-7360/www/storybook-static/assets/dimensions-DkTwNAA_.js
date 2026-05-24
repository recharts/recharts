import{j as e}from"./jsx-runtime-ZskOOVBU.js";import{useMDXComponents as n}from"./index-BQBG2UfO.js";import{M as o,C as h}from"./blocks-OqGGDj9I.js";import{C as d,W as s}from"./dimensions.stories-CrExVCAz.js";import"./iframe-HklBE7vu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DO5d7GKD.js";import"./ChartSizeDimensions-GhqI97PU.js";import"./arrayEqualityCheck-CG9NM7M7.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CmkmsSRd.js";import"./immer-B5bJcxrJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BGfN3j9r.js";import"./RechartsWrapper-BYIG_iFP.js";import"./index-QkgaeSYl.js";import"./hooks-CnW7pryE.js";import"./axisSelectors-DQ1WchLm.js";import"./d3-scale-ByKoA0zW.js";import"./zIndexSlice-CVyG9qRx.js";import"./renderedTicksSlice--_3RJj48.js";import"./CartesianChart-DtRgi5pX.js";import"./chartDataContext-I9Ggk7nE.js";import"./CategoricalChart-BN63kSx-.js";import"./Page-DPte-9pC.js";import"./Line-CUZjpINw.js";import"./Curve-CrXnBsHg.js";import"./types-D0dCN7Ox.js";import"./step-BUDT2jIN.js";import"./path-DyVhHtw_.js";import"./Layer-D8ZS5vyC.js";import"./ReactUtils-mFr3j9RO.js";import"./Label-ClB5KqOQ.js";import"./Text-Dt3ARXcw.js";import"./DOMUtils-BwtPQYwq.js";import"./ZIndexLayer-BPeCIwGs.js";import"./ActivePoints-D0HNFK49.js";import"./Dot-C8qeBV5T.js";import"./RegisterGraphicalItemId-BaLxd7fn.js";import"./ErrorBarContext-C1pX8SkM.js";import"./GraphicalItemClipPath-Xc6uO7Vp.js";import"./SetGraphicalItem-CjWW7GpL.js";import"./useAnimationId-Yfa74zNK.js";import"./getRadiusAndStrokeWidthFromDot-Bqn73jYn.js";import"./ActiveShapeUtils-CKRCWn6k.js";import"./XAxis-BeXZR1BO.js";import"./CartesianAxis-C0qWYU4C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-D8onK4in.js";import"./Legend-xz8sv_Ff.js";import"./Symbols-B00rQK0H.js";import"./symbol-DGMnJi_X.js";import"./useElementOffset-Dsq1NBLL.js";import"./uniqBy-BzZ8JhX0.js";import"./iteratee-BhmnkMoJ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

import{j as e}from"./jsx-runtime-NEWlANpq.js";import{useMDXComponents as n}from"./index-BEO3gmpD.js";import{M as o,C as h}from"./blocks-BB1fL5g0.js";import{C as d,W as s}from"./dimensions.stories-5Son_lqb.js";import"./iframe-N_BxlBi6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-PFvsiB8w.js";import"./ChartSizeDimensions-BbCILWBg.js";import"./arrayEqualityCheck-CEf0Nn8K.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2ILCf7-n.js";import"./immer-m4imqOCY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CWKNFmv2.js";import"./RechartsWrapper-CgEBdM7G.js";import"./index-BJgTJKw_.js";import"./hooks-DU7HquZl.js";import"./axisSelectors-BasHfAyu.js";import"./d3-scale-DrFqqVTo.js";import"./zIndexSlice-Dwnmzy4_.js";import"./renderedTicksSlice-grNcr2K9.js";import"./CartesianChart-DhdcO3Tw.js";import"./chartDataContext-B8JcpkdW.js";import"./CategoricalChart-DO4JOSMM.js";import"./Line-CcaUDWqS.js";import"./Layer-BGFLosQF.js";import"./ReactUtils-Bc5QD6WP.js";import"./Label-DSedETU8.js";import"./Text-Pl8FjWNp.js";import"./DOMUtils-DL6CcFbu.js";import"./ZIndexLayer-B4oG6gqW.js";import"./ActivePoints-BdX8YxXH.js";import"./Dot-B-WJq94W.js";import"./types-BHZ13L2v.js";import"./RegisterGraphicalItemId-DW71PThT.js";import"./ErrorBarContext-C2YvqoiQ.js";import"./GraphicalItemClipPath-D270ZFS9.js";import"./SetGraphicalItem-BUxGEWkq.js";import"./useAnimationId-CZd_sIsZ.js";import"./getRadiusAndStrokeWidthFromDot-B0bkRdWl.js";import"./ActiveShapeUtils-D2jvcwVW.js";import"./isPlainObject-e5Vt2T8p.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0p8YhE4.js";import"./Trapezoid-C5EqpCxF.js";import"./Sector-BfcxVEhG.js";import"./Symbols-CsUc_eaQ.js";import"./symbol-B52iyaxv.js";import"./step-Dwb2wnB2.js";import"./Curve-BzBcZROj.js";import"./XAxis-kOfNYCLV.js";import"./CartesianAxis-Bz8y1rju.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DsllJpGC.js";import"./Legend-D89IvT-l.js";import"./useElementOffset-drVnHBTv.js";import"./uniqBy-ClVVrVdj.js";import"./iteratee-T_aYBY_u.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

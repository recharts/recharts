import{j as e}from"./jsx-runtime-DFILQFM3.js";import{useMDXComponents as n}from"./index-hc4dG_UY.js";import{M as o,C as h}from"./blocks-nEGikePQ.js";import{C as d,W as s}from"./dimensions.stories-xBZrWm4Y.js";import"./iframe-DY46aw1T.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bfh64D8_.js";import"./ChartSizeDimensions-Cyi7sjqL.js";import"./arrayEqualityCheck-0_K9klWl.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cb7Us82j.js";import"./immer-BvCcuZ6o.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-xNspB-SJ.js";import"./RechartsWrapper-CSeg5AQz.js";import"./index-D_nfX1S8.js";import"./hooks-nf1zKR0g.js";import"./axisSelectors-C9B6Wugz.js";import"./d3-scale-DfNPAUjz.js";import"./zIndexSlice-CoVcCSuo.js";import"./renderedTicksSlice-D-nZzoJO.js";import"./CartesianChart-DO22hXPG.js";import"./chartDataContext-DXzlJMXH.js";import"./CategoricalChart-DUj4pKmY.js";import"./Page-Cj8EiXz7.js";import"./Line-BpqthCpk.js";import"./Layer-hFhQiM_L.js";import"./ReactUtils-Cz-9gufx.js";import"./Label-BXRSGziE.js";import"./Text-BzNExQTR.js";import"./DOMUtils-DGEQ3O38.js";import"./ZIndexLayer-DnZ_K0Nx.js";import"./ActivePoints-BQsjSyf0.js";import"./Dot-Bs5nAcv2.js";import"./types-Dtzv1a1O.js";import"./RegisterGraphicalItemId-wZiFGjJl.js";import"./ErrorBarContext-BdBDnSnf.js";import"./GraphicalItemClipPath-BxX-Y-FU.js";import"./SetGraphicalItem-V1giDG84.js";import"./useAnimationId-Zdg7gWN0.js";import"./getRadiusAndStrokeWidthFromDot-BlOwTSD5.js";import"./ActiveShapeUtils-C_pX6xWx.js";import"./isPlainObject-zUPa-N8J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEP5-Dm7.js";import"./Trapezoid-vSPDkj38.js";import"./Sector-BAsKK7Vz.js";import"./Symbols-CVBOcrIt.js";import"./symbol-CEFOgOTV.js";import"./step-CyrTl9M_.js";import"./Curve-DQutT_ql.js";import"./XAxis-_Mr4CO1Y.js";import"./CartesianAxis-CK3eGRof.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DuAnuVSE.js";import"./Legend-DH9x-Ph_.js";import"./useElementOffset-DwWwMAQX.js";import"./uniqBy-CUYvsV5i.js";import"./iteratee-Dyz53KPO.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

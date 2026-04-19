import{j as e}from"./jsx-runtime-D9CWunnx.js";import{useMDXComponents as n}from"./index-BYInwf6D.js";import{M as o,C as h}from"./blocks-ToCIAL2v.js";import{C as d,W as s}from"./dimensions.stories-Ba359RDr.js";import"./iframe-Bz2Qn6Q0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6agPL1sG.js";import"./ChartSizeDimensions-DcrFs19n.js";import"./arrayEqualityCheck-SrtJKTr1.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bw6mkRAu.js";import"./immer-Bf1ANpdG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DbbuyMVF.js";import"./RechartsWrapper-BxgxCr4x.js";import"./index-XEi-vt0m.js";import"./hooks-Bn0YkRzT.js";import"./axisSelectors-Dn0P--3Q.js";import"./d3-scale-Cj0fhoc6.js";import"./zIndexSlice-MM57jocS.js";import"./renderedTicksSlice-KjJl__e1.js";import"./CartesianChart-JAhvkHqp.js";import"./chartDataContext-DBTgugHo.js";import"./CategoricalChart-M6gnVyEJ.js";import"./Page-Cj8EiXz7.js";import"./Line-B0FBW4kU.js";import"./Layer-Bp-alVkQ.js";import"./ReactUtils-BKN20BZR.js";import"./Label-Cx92zGqb.js";import"./Text-BeGwGDIw.js";import"./DOMUtils-CfBuJ7pA.js";import"./ZIndexLayer-Ci1J2GEs.js";import"./ActivePoints-BoxMP4wY.js";import"./Dot-H2-aVAZo.js";import"./types-Bq1ywEo3.js";import"./RegisterGraphicalItemId-BDNbOxSF.js";import"./ErrorBarContext-s59o9x04.js";import"./GraphicalItemClipPath-DmsPoL2A.js";import"./SetGraphicalItem-DmI1gY5l.js";import"./useAnimationId-C0d16Qdx.js";import"./getRadiusAndStrokeWidthFromDot-9Je4pShm.js";import"./ActiveShapeUtils-Cw4OmDCr.js";import"./isPlainObject-C7eNr1WD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZ4j4B1r.js";import"./Trapezoid-BI8cfUTU.js";import"./Sector-DlNvRyQv.js";import"./Symbols-CBkGZNC5.js";import"./symbol-CWNMfYRI.js";import"./step-Dly43UW-.js";import"./Curve-DWJn7QSQ.js";import"./XAxis-0rcliQLc.js";import"./CartesianAxis-BokQwd-n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B5cQ30-7.js";import"./Legend-CCnvmhn5.js";import"./useElementOffset-D3Hbl9Ub.js";import"./uniqBy-nH0hK7Do.js";import"./iteratee-C2xaFs01.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

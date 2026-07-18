import{u as n,j as e}from"./index-UdOlrPPt.js";import{M as o,C as h}from"./blocks-BzkWtIGV.js";import{C as d,W as s}from"./dimensions.stories-BsYxxKcl.js";import"./iframe-Bv6Dcd9T.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CcYReNCh.js";import"./index-CxI2Eqca.js";import"./index-DzmElQg1.js";import"./ChartSizeDimensions-CaSchZHy.js";import"./zIndexSlice-DGhXPr-9.js";import"./throttle-BcQ01sX8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-D_NqfWCM.js";import"./isWellBehavedNumber-CU7VWJn9.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C2bRBn5w.js";import"./RechartsWrapper-DTS_6Eoq.js";import"./index-DdiL_HAM.js";import"./renderedTicksSlice-CJ-EtdQM.js";import"./axisSelectors-BcVMUp1z.js";import"./d3-scale-CClsGt0Z.js";import"./CartesianChart-DBwo_mBR.js";import"./chartDataContext-BjtAcLZf.js";import"./CategoricalChart-BwO0IaNH.js";import"./Page-Cj8EiXz7.js";import"./Line-Czh-ZCOq.js";import"./Layer-DlkJXe1G.js";import"./Curve-DpXmJzZj.js";import"./types-CAucql9k.js";import"./step-CRpvhJpW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xeFS2cCQ.js";import"./Label-CQaeTHfg.js";import"./Text-00C33NA5.js";import"./DOMUtils-C-FPV1O8.js";import"./ZIndexLayer-DxBey86b.js";import"./useAnimationId-K5YFgJBV.js";import"./ActivePoints-DNi94Mhe.js";import"./Dot-BE-61l3v.js";import"./RegisterGraphicalItemId-9ZN-jgk_.js";import"./ErrorBarContext-GKGPhv_o.js";import"./GraphicalItemClipPath-BS-sqKFj.js";import"./SetGraphicalItem-BQ96Q1Zd.js";import"./getRadiusAndStrokeWidthFromDot-BICVUXTz.js";import"./ActiveShapeUtils-BPmEcXgb.js";import"./XAxis-CSpcOKY2.js";import"./CartesianAxis-COkD_qks.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DHQaIYZw.js";import"./Legend-A0cX5XEa.js";import"./Symbols-B944ltIA.js";import"./symbol-BDYSoGh9.js";import"./useElementOffset-DCBd45Il.js";import"./uniqBy-BjtflDCk.js";import"./iteratee-BrcS1bci.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

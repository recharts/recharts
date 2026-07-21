import{u as n,j as e}from"./index-0NAXtJ-f.js";import{M as o,C as h}from"./blocks-gLDh58GX.js";import{C as d,W as s}from"./dimensions.stories-BF2dajEW.js";import"./iframe-Ba761dAt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CD7Kt9vJ.js";import"./index-CQZXBhnc.js";import"./index-jmRPS8ks.js";import"./ChartSizeDimensions-DFeHkGhG.js";import"./zIndexSlice-QfUsSAvl.js";import"./throttle-DM8vz_S7.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BbsZGrBO.js";import"./isWellBehavedNumber-DtdZYAzd.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-xz85xxXO.js";import"./RechartsWrapper-Bka_uKoY.js";import"./index-DNu-VFbT.js";import"./renderedTicksSlice-C9WcFyVD.js";import"./axisSelectors-Cn6pQrFe.js";import"./d3-scale-MektT9AZ.js";import"./CartesianChart-BhhNM2dx.js";import"./chartDataContext-CIdWR6fk.js";import"./CategoricalChart-B2LsRV82.js";import"./Page-Cj8EiXz7.js";import"./Line-Bm1u625u.js";import"./Layer-B5w5vx75.js";import"./Curve-mQomw5g8.js";import"./types-0dL2Niha.js";import"./step-Bh181Pvp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DBRlvqN4.js";import"./Label-BnOVxmge.js";import"./Text-CN68nsih.js";import"./DOMUtils-BwEbS88Q.js";import"./ZIndexLayer-DN2jzfCT.js";import"./useAnimationId-Bb4M1zTw.js";import"./ActivePoints-BxdWxMht.js";import"./Dot-DfAT_SUP.js";import"./RegisterGraphicalItemId-BoJDveOV.js";import"./ErrorBarContext-kfdlWhVC.js";import"./GraphicalItemClipPath-CD6E6U12.js";import"./SetGraphicalItem-c2dU8YzM.js";import"./getRadiusAndStrokeWidthFromDot-DNi5zXue.js";import"./ActiveShapeUtils-SxPaImaJ.js";import"./XAxis-BFSA3F3Y.js";import"./CartesianAxis-Dp6wkVSq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-BGJzMLCA.js";import"./Legend-CcGGT61q.js";import"./Symbols-BRW25Rg2.js";import"./symbol-F9gJ0Uyf.js";import"./useElementOffset-zcMD2hVj.js";import"./uniqBy-CHlYBrF5.js";import"./iteratee-BskgW_tl.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

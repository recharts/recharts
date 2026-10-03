import{u as n,j as e}from"./index-YLnVRbqB.js";import{M as o,C as h}from"./blocks-BW0wyri5.js";import{C as d,W as s}from"./dimensions.stories-Dz4eFRxA.js";import"./iframe-Bi3q5ica.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B0qzmCsN.js";import"./index-BFXu3aHt.js";import"./index-BUn-OEAP.js";import"./ChartSizeDimensions-DRgWJ7iQ.js";import"./zIndexSlice-3OSmdeIU.js";import"./throttle-CZI3Ns_R.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DHzWDEtS.js";import"./isWellBehavedNumber-DYrnpjB-.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BJ-4k_4i.js";import"./RechartsWrapper-BIVD6JFp.js";import"./axisSelectors-BxvzYEcA.js";import"./d3-scale-Dy9_TWZx.js";import"./index-ngMl_c_9.js";import"./renderedTicksSlice-DRFwN4j3.js";import"./index-BVwc-Jau.js";import"./CartesianChart-Dl2J0BS7.js";import"./chartDataContext-D-hMyVvi.js";import"./CategoricalChart-hTIoEyr2.js";import"./Page-Cj8EiXz7.js";import"./Line-BE5Ogd3G.js";import"./Layer-CtQIi_dM.js";import"./Curve-C2iAxlmR.js";import"./types-3e9Y1DlN.js";import"./step-BPB7nuaq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C5QOwiw_.js";import"./Label-BY0KH6BI.js";import"./Text-Dc41Ok3C.js";import"./DOMUtils-Daz026gj.js";import"./useId-WQ4DmC28.js";import"./useBackwardsCompatibleTheme-CbD5lCDD.js";import"./ZIndexLayer-D_YH5dyV.js";import"./useAnimationId-Wfo4M9rJ.js";import"./ActivePoints-DNbrAlaG.js";import"./Dot-8HK_808i.js";import"./RegisterGraphicalItemId-DY8suQGI.js";import"./ErrorBarContext-Tsgmsoyf.js";import"./GraphicalItemClipPath-DaMNa-IP.js";import"./SetGraphicalItem-ChWBfBoT.js";import"./getRadiusAndStrokeWidthFromDot-Co8c106b.js";import"./ActiveShapeUtils-CMwbxzD5.js";import"./useGraphicalItemIdentity-BkNHKZMP.js";import"./XAxis-hhEBl8YN.js";import"./CartesianAxis-BXx4NBAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C54oD4nc.js";import"./Legend-CKkxm3dE.js";import"./Symbols-DqOq9bgq.js";import"./symbol-DuoL-nUS.js";import"./useElementOffset-Cv1kBb51.js";import"./uniqBy-DtuySXID.js";import"./iteratee-9Tj9By3u.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

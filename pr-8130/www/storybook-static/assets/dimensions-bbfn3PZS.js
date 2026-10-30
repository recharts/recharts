import{u as n,j as e}from"./index-DokJN6xu.js";import{M as o,C as h}from"./blocks-C2dvroOw.js";import{C as d,W as s}from"./dimensions.stories-CB4qfIpB.js";import"./iframe-BmS0ecXK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CdWOU_Jt.js";import"./index-CT2dpPb1.js";import"./index-B2CB0vSq.js";import"./ChartSizeDimensions-UT_BKDc9.js";import"./zIndexSlice-ChtzqxIP.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-L-kb5cDL.js";import"./throttle-OPlZV-qu.js";import"./ComposedChart-DaLh_jdc.js";import"./RechartsWrapper-CUI9gBJC.js";import"./axisSelectors-BzqnuZDm.js";import"./polarAxisSelectors-CE28gFQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3fk2W2Xu.js";import"./index-S9VbsYVM.js";import"./renderedTicksSlice-DE9Jk9Mo.js";import"./index-B9xLgKg_.js";import"./fillDefinitions-BfTN52CB.js";import"./CartesianChart-MAWW00G9.js";import"./ZIndexPortal-BBTCIcjJ.js";import"./CategoricalChart-Y8ADkKU9.js";import"./Page-Cj8EiXz7.js";import"./Line-Dcfa59Q0.js";import"./Layer-BUeogdZj.js";import"./Curve-lc4LP5Ja.js";import"./types-BFfgrH_g.js";import"./step-SGVv9xA0.js";import"./path-DyVhHtw_.js";import"./LabelList-HbN4s7ci.js";import"./Label-xOYEqHzO.js";import"./Text-Cy6IgmxI.js";import"./DOMUtils-nGO8S--J.js";import"./ZIndexLayer-CGSpKlNm.js";import"./ActivePoints-DWCg0rgm.js";import"./Dot-D1LmOLCb.js";import"./activeStyles-D5Ig3nSZ.js";import"./useAnimationId-CpCNOV8e.js";import"./dataEntryStyles-BusWIJtt.js";import"./Symbols-D9BPgtte.js";import"./symbol-BAUa8x3O.js";import"./ErrorBarContext-D4UbmXd_.js";import"./SetGraphicalItem-DxeCv-Nd.js";import"./getRadiusAndStrokeWidthFromDot-DJ-NIfPX.js";import"./ActiveShapeUtils-UpE3VQFE.js";import"./useEffectiveDataKey-1aGsCLfO.js";import"./XAxis-Bh2usn2R.js";import"./CartesianAxis-Brh0Ot5h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-p6gtuiCl.js";import"./Legend-CLhfiF0I.js";import"./useElementOffset-EBCaWoeA.js";import"./uniqBy-3a9GARB0.js";import"./iteratee-Cu9W3M9t.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-NZeWCimx.js";import{M as o,C as h}from"./blocks-CXlliv_S.js";import{C as d,W as s}from"./dimensions.stories-CLMZVEjn.js";import"./iframe-BhkmDUK8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGM2KozU.js";import"./index-Co7lnbSI.js";import"./index-DbiGNxfl.js";import"./ChartSizeDimensions-z5P5QiFK.js";import"./zIndexSlice-Cx3NgCbD.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CBrUOLtb.js";import"./throttle-BvBRI7mu.js";import"./ComposedChart-BfTAH9AC.js";import"./RechartsWrapper-DFqlV8En.js";import"./axisSelectors-iANbDNdr.js";import"./polarAxisSelectors-BxjhUIGd.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-6P_5w6kZ.js";import"./index-CMvdSvcn.js";import"./renderedTicksSlice-BaGEcMV8.js";import"./index-EMj2ovmv.js";import"./CartesianChart-DAEGsrX3.js";import"./ZIndexPortal-B4U04QBk.js";import"./CategoricalChart-DsbjL1iZ.js";import"./Page-Cj8EiXz7.js";import"./Line-DgKeyyKw.js";import"./Layer-DN_2iRDC.js";import"./Curve-BHBAmygs.js";import"./types-CU7_71qS.js";import"./step-Bs1-0DQI.js";import"./path-DyVhHtw_.js";import"./LabelList-CB1bAazX.js";import"./Label-BVWylkM-.js";import"./Text-DMX7oKTI.js";import"./pageBackground-4Wz1Kk9n.js";import"./ZIndexLayer-CK_kCyLL.js";import"./dataEntryStyles-BVrjnugi.js";import"./ActivePoints-BLD8htC5.js";import"./Dot-Cu6BzPzv.js";import"./activeStyles-Bn41iv6z.js";import"./useAnimationId-49rixTyB.js";import"./Symbols-DztLe2AE.js";import"./symbol-C9i3gtuu.js";import"./RegisterGraphicalItemId-BQIh3gpM.js";import"./ErrorBarContext-BtfMVugS.js";import"./SetGraphicalItem-B5IS3skS.js";import"./getRadiusAndStrokeWidthFromDot-B2MvN2Za.js";import"./ActiveShapeUtils-DRwsgq7-.js";import"./useEffectiveDataKey-C5G10thl.js";import"./XAxis-C6NctsPw.js";import"./CartesianAxis-BmcJMrp5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CXhwTwOE.js";import"./Legend-BN2PSvXd.js";import"./useElementOffset-ButFEXKE.js";import"./uniqBy-DG4g_Lj4.js";import"./iteratee-B9qR9krY.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

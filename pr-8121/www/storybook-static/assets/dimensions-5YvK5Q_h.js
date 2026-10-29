import{u as n,j as e}from"./index-DBUw4lty.js";import{M as o,C as h}from"./blocks-DMevPh8G.js";import{C as d,W as s}from"./dimensions.stories-BN6qgbpN.js";import"./iframe-CA9m8GYo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CErELZnL.js";import"./index-BmamNDCv.js";import"./index-B2booWlS.js";import"./ChartSizeDimensions-DABglLIG.js";import"./zIndexSlice-DtH5keZE.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CyX6DFN8.js";import"./throttle-o0TVEzLp.js";import"./ComposedChart-Cxv2A6YY.js";import"./RechartsWrapper-PB4GMrwR.js";import"./axisSelectors-BayOnfvg.js";import"./polarAxisSelectors-C9u8TkQ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C2dTdr93.js";import"./index-CqNMjBNA.js";import"./renderedTicksSlice-CIfh4CCk.js";import"./index-AvPiQd-I.js";import"./CartesianChart-BMo55UJv.js";import"./ZIndexPortal-CP5nbT1n.js";import"./CategoricalChart-CxzHbLbb.js";import"./Page-Cj8EiXz7.js";import"./Line-7sQ58Sto.js";import"./Layer-Hxk-5S8n.js";import"./Curve-DZjiB-zR.js";import"./types-Cvx_7iJj.js";import"./step-DF34UguZ.js";import"./path-DyVhHtw_.js";import"./LabelList-CV5x_Azz.js";import"./Label-ekuzQLiz.js";import"./Text-BFxpfCQD.js";import"./pageBackground-O7JuB7S_.js";import"./ZIndexLayer-DnamAcTi.js";import"./ActivePoints-CEzGZ3l_.js";import"./Dot-CmRgS_7G.js";import"./activeStyles-PpyfPCVq.js";import"./useAnimationId-CvualzzB.js";import"./dataEntryStyles-XE7WR2iA.js";import"./Symbols-BokwsXNu.js";import"./symbol-DmvnuhBw.js";import"./ErrorBarContext-DjcN2az-.js";import"./SetGraphicalItem-C9x_j8Aw.js";import"./getRadiusAndStrokeWidthFromDot-CYDrKKi3.js";import"./ActiveShapeUtils-DBAVXS8z.js";import"./useEffectiveDataKey-VJMj_VC4.js";import"./XAxis-CC3YYdgQ.js";import"./CartesianAxis-D4TNjeO6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CbW8C0_5.js";import"./Legend-CrU4twQ-.js";import"./useElementOffset-DILgA3Om.js";import"./uniqBy-Cx6V6RxR.js";import"./iteratee-BlwalV7N.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

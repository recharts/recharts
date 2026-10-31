import{u as n,j as e}from"./index-FuG8ag3e.js";import{M as o,C as h}from"./blocks-CLTb0tbU.js";import{C as d,W as s}from"./dimensions.stories-RTS_8I1_.js";import"./iframe-DG1yZPWZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8R5wD7Q.js";import"./index-Cm9Dvuha.js";import"./index-Bt1QYmkD.js";import"./ChartSizeDimensions-DMrmAu58.js";import"./zIndexSlice-asfAkO72.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-zC97C8Ii.js";import"./throttle-QLzPTGhw.js";import"./ComposedChart-Bg3J3jLh.js";import"./RechartsWrapper-Bchp_o7p.js";import"./axisSelectors-BLyrYAI0.js";import"./polarAxisSelectors-D8A3KxdK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-p1mp5kit.js";import"./index-BlTUNZQc.js";import"./renderedTicksSlice-DtyZfQXr.js";import"./index-D_9rD6su.js";import"./CartesianChart-JxE9ej3_.js";import"./ZIndexPortal-iKAZRpeg.js";import"./CategoricalChart-C_RyWiZg.js";import"./Page-Cj8EiXz7.js";import"./Line-DiHguxZv.js";import"./Layer-DzG8YxQe.js";import"./Curve-DcJDRZ_G.js";import"./types-DqMoKlmp.js";import"./step-U1uI6C26.js";import"./path-DyVhHtw_.js";import"./LabelList-DDOiPfis.js";import"./Label-CP0s7Q77.js";import"./Text-jtW7RKFp.js";import"./DOMUtils-CnKUAWGq.js";import"./ZIndexLayer-Bf1pNdwz.js";import"./ActivePoints-CGsYeesF.js";import"./Dot-BvOm6Swm.js";import"./activeStyles-BM7qy7T1.js";import"./useAnimationId-C_9VGehw.js";import"./dataEntryStyles-B8PPCs32.js";import"./fillDefinitions-C7BJRYTP.js";import"./themeFill-D_uX30kF.js";import"./Symbols-0F73g9aR.js";import"./symbol-B3qgj-xo.js";import"./ErrorBarContext-C4LHoflN.js";import"./SetGraphicalItem-Cvt15Nbt.js";import"./getRadiusAndStrokeWidthFromDot-Bzdqwx5x.js";import"./ActiveShapeUtils-Dl04D47U.js";import"./useEffectiveDataKey-Qa_0ZIQ7.js";import"./XAxis-Cx1v_iob.js";import"./CartesianAxis-D2CTuJLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-D8fDz-Jg.js";import"./Legend-Bg__uj4m.js";import"./useElementOffset-gChE2lz3.js";import"./uniqBy-BMDahjm8.js";import"./iteratee-Bd2duUdb.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

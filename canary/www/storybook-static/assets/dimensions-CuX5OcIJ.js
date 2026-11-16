import{u as n,j as e}from"./index-MwfaJQlR.js";import{M as o,C as h}from"./blocks-DxDCPJ1y.js";import{C as d,W as s}from"./dimensions.stories-Cb7ApzrX.js";import"./iframe-BCDSQyOo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-fM7uFcW2.js";import"./index-I1h0g8eb.js";import"./index-Q4jLEkfo.js";import"./ChartSizeDimensions-CusFDRXU.js";import"./zIndexSlice-CihbJEZu.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-s8FlAHQv.js";import"./throttle-D1lsoNSG.js";import"./ComposedChart-DErsj6jf.js";import"./RechartsWrapper-BqnNMENS.js";import"./axisSelectors-Cvi9anx3.js";import"./polarAxisSelectors-B-E8zUoJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CYMX0yrb.js";import"./index-ClkyNFpC.js";import"./renderedTicksSlice-xgVyqeD0.js";import"./index-oH22xoCa.js";import"./fillDefinitions-LB53xD7z.js";import"./CartesianChart-CkJbsuu1.js";import"./chartDataContext-B0YZn_2w.js";import"./CategoricalChart-CNAFu95B.js";import"./Page-Cj8EiXz7.js";import"./Line-ltW-vN8n.js";import"./Layer-sje4p3Rc.js";import"./Curve-B6YhKAHC.js";import"./types-Czx6BcyQ.js";import"./step-_U3fQ-Ri.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dui-VolR.js";import"./Label-C128IvfG.js";import"./Text-RrCvwkND.js";import"./ZIndexLayer-PvoR44l1.js";import"./ActivePoints-C5df2K_e.js";import"./Dot-DeEkJUDG.js";import"./activeStyles-BVEmlDAe.js";import"./useAnimationId-DOTZ38LK.js";import"./Symbols-BhFpev2q.js";import"./symbol-BFQRYOt6.js";import"./ErrorBarContext-Cfqy-sXq.js";import"./SetGraphicalItem-CopBxnc9.js";import"./getRadiusAndStrokeWidthFromDot-tbcff33p.js";import"./ActiveShapeUtils-CHvAKsEu.js";import"./useEffectiveDataKey-Chw-9k17.js";import"./XAxis-Bk5D6i9E.js";import"./CartesianAxis-DeXvVTxW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DnB_2g0Q.js";import"./Legend-BLHD4EtA.js";import"./useElementOffset-BdQyjpik.js";import"./uniqBy-DshlIWW5.js";import"./iteratee-_elDKS4N.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

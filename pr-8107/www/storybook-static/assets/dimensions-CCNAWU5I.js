import{u as n,j as e}from"./index-Dr183Ud8.js";import{M as o,C as h}from"./blocks-JStn9Tr1.js";import{C as d,W as s}from"./dimensions.stories-C-rg-Raw.js";import"./iframe-CFREJgKh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./index-CXWxUzol.js";import"./ChartSizeDimensions-DI_jIn0Z.js";import"./zIndexSlice-BlChPiJc.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D2NJN12P.js";import"./throttle-D0fuDWYv.js";import"./ComposedChart-BHYrkphp.js";import"./RechartsWrapper-i5dbrXIz.js";import"./axisSelectors-BWBf8JbO.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CSfabLms.js";import"./index-DNbnfthz.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./Page-Cj8EiXz7.js";import"./Line-RQeT_xTt.js";import"./Layer-C0qOZ959.js";import"./Curve-CftG2h3G.js";import"./types-DVbjgkU5.js";import"./step-BcalNNwl.js";import"./path-DyVhHtw_.js";import"./LabelList-D_a5qFT1.js";import"./Label-CqB5IeGz.js";import"./Text-CdYm4waL.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./ActivePoints-C0jpDbhM.js";import"./Dot-CbZEK9HK.js";import"./activeStyles-DZOohqxv.js";import"./useAnimationId-D_reCqg_.js";import"./dataEntryStyles-D-tUw7To.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./ErrorBarContext-Ckc5teto.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getRadiusAndStrokeWidthFromDot-C8BFWNtM.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./XAxis-C8rslJeD.js";import"./CartesianAxis-DYae0Cq3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BpqGKlEV.js";import"./Legend-RpMQdupJ.js";import"./useElementOffset-D9x3IcJV.js";import"./uniqBy-DeAafqXU.js";import"./iteratee-iRN6k7X2.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

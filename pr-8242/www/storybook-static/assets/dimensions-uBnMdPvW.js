import{u as n,j as e}from"./index-6YwryVKN.js";import{M as o,C as h}from"./blocks-BHGiYWnB.js";import{C as d,W as s}from"./dimensions.stories-BW-EUJAP.js";import"./iframe-BRs2DqB3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CqTGU6qX.js";import"./index-C0uv-V1O.js";import"./index-Co-V1H3-.js";import"./ChartSizeDimensions-DQIV6LvW.js";import"./zIndexSlice-XRTrDK7l.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTztjAc.js";import"./throttle-BN55ZsBD.js";import"./ComposedChart-DVPdEFZp.js";import"./RechartsWrapper-CJYaD9xA.js";import"./axisSelectors-DBUHuATQ.js";import"./polarAxisSelectors-DwLugqE9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B39-KfBv.js";import"./index-BL5_00_X.js";import"./renderedTicksSlice-BjdRfY4C.js";import"./index-IgyX-1iw.js";import"./fillDefinitions-Cww6uxJT.js";import"./CartesianChart-Dsxkw-P3.js";import"./chartDataContext-QcS0sZvi.js";import"./CategoricalChart-BZHqfx2A.js";import"./Page-Cj8EiXz7.js";import"./Line-BkTgv4cu.js";import"./Layer-DqrqtEm2.js";import"./Curve-YmdI71--.js";import"./types-BN549hIA.js";import"./step-UgzMRyWu.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B5I1MPoS.js";import"./Label-utTJNWp0.js";import"./Text-DRaltNnR.js";import"./ZIndexLayer-BCRtaoEe.js";import"./ActivePoints-DywQ8pFt.js";import"./Dot-DCtDqOty.js";import"./activeStyles-gnY1xuwf.js";import"./useAnimationId-De06VpE9.js";import"./Symbols-Cy-ALuGW.js";import"./symbol-rCFxuDnc.js";import"./ErrorBarContext-D0NsIgk-.js";import"./SetGraphicalItem-C9srr3mG.js";import"./getRadiusAndStrokeWidthFromDot-CwwAN-KH.js";import"./ActiveShapeUtils-Cvk6a1r9.js";import"./useEffectiveDataKey-_AqelCoa.js";import"./XAxis-BJyhb9sC.js";import"./CartesianAxis-C23TAeVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DidbNqGc.js";import"./Legend-aPOwwcA9.js";import"./useElementOffset-DjI6NDB8.js";import"./uniqBy-aZImii2x.js";import"./iteratee-CrjEP9l6.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

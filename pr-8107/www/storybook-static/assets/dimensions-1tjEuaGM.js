import{u as n,j as e}from"./index-DS2rhGIL.js";import{M as o,C as h}from"./blocks-3UwG3WlQ.js";import{C as d,W as s}from"./dimensions.stories-BegpdEve.js";import"./iframe-BGa_aXYV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wG94lJw7.js";import"./index-Bi5RYh62.js";import"./index-_XAYd-SQ.js";import"./ChartSizeDimensions-CsNjp7e6.js";import"./zIndexSlice-Ck6l0OZs.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--MxbOSxe.js";import"./throttle-odPHgumR.js";import"./ComposedChart-wHTG2hfS.js";import"./RechartsWrapper-BTlrgf4s.js";import"./axisSelectors-BhlTci4j.js";import"./polarAxisSelectors-DZZ_sV95.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D32hxSnZ.js";import"./index-CCS8tdiB.js";import"./renderedTicksSlice-D_6jJO7k.js";import"./index-DF81NAeA.js";import"./CartesianChart-BVZLzzem.js";import"./ZIndexPortal-yBnaKAUB.js";import"./CategoricalChart-C-tokN3T.js";import"./Page-Cj8EiXz7.js";import"./Line-Y16V4sUQ.js";import"./Layer-Bzj9T_Rp.js";import"./Curve-yqHv3532.js";import"./types-BlkSdkM7.js";import"./step-Bk4v6FYF.js";import"./path-DyVhHtw_.js";import"./LabelList-dSe8emrx.js";import"./Label-Bzq01dK8.js";import"./Text-mATLrig6.js";import"./pageBackground-BUMPEk7V.js";import"./ZIndexLayer-D3eS8Esu.js";import"./ActivePoints-CflJ3BqH.js";import"./Dot-DIjQdgeX.js";import"./activeStyles-DZX2Soqz.js";import"./useAnimationId-BY6DYNe9.js";import"./dataEntryStyles-3sm9ZLw4.js";import"./Symbols-D-n9Z7lT.js";import"./symbol-CZaSDg5i.js";import"./ErrorBarContext-DCAq7oKy.js";import"./SetGraphicalItem-Ds0lF9cJ.js";import"./getRadiusAndStrokeWidthFromDot-Dl4gueRZ.js";import"./ActiveShapeUtils-Luuswf_P.js";import"./useEffectiveDataKey-D5yK2eiQ.js";import"./XAxis-CE3oHyxg.js";import"./CartesianAxis-D2QFH6SB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CP1brurK.js";import"./Legend-Dilw1X-J.js";import"./useElementOffset-PZh3tzwx.js";import"./uniqBy-BD2wLUuV.js";import"./iteratee-GuFU32s6.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-CnhySzhD.js";import{M as o,C as h}from"./blocks-B74KEKQ3.js";import{C as d,W as s}from"./dimensions.stories-CPk96LME.js";import"./iframe-CRBCr4I7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./index-D8BMywLD.js";import"./ChartSizeDimensions-ymloYnxS.js";import"./zIndexSlice-C5HnNY9r.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./throttle-Bi7M9SHL.js";import"./ComposedChart-AEeY6CWp.js";import"./RechartsWrapper-Csv9gEG8.js";import"./axisSelectors-Cn24srzI.js";import"./polarAxisSelectors-BXwH5847.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBFMZtoY.js";import"./index-CYvH0a5R.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./Page-Cj8EiXz7.js";import"./Line-Bk3eQLZy.js";import"./getRadiusAndStrokeWidthFromDot-DSL_ZrdX.js";import"./Layer-DK4q3BXK.js";import"./Curve-L8TXrD0N.js";import"./types-BcVdsd1S.js";import"./step-CDOWbVN9.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BCu_-7t9.js";import"./Label-CLJtKhiN.js";import"./Text-CzrZS4hs.js";import"./ZIndexLayer-ChuLKuaE.js";import"./ActivePoints-BaVCT3KN.js";import"./Dot-BSp4p8j6.js";import"./activeStyles-BGmObwWl.js";import"./useAnimationId-BEWOQrK8.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./ErrorBarContext-C9vHq9NB.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./XAxis-4jTaFcnE.js";import"./CartesianAxis-Cnz0mea7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-C5vFCns8.js";import"./Legend-Dak6j9fY.js";import"./useElementOffset-Dm_VZj6e.js";import"./uniqBy-B5_XcYmH.js";import"./iteratee-BFRZNziE.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

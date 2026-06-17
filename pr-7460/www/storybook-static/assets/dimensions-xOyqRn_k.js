import{u as n,j as e}from"./index-CcmonQRV.js";import{M as o,C as h}from"./blocks-kfJ3MTf5.js";import{C as d,W as s}from"./dimensions.stories-DoIRT7wu.js";import"./iframe-DGhU-a9T.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cst7TkYL.js";import"./index-DSZNwJZV.js";import"./index-DCbVvyOU.js";import"./ChartSizeDimensions-D6xnFn55.js";import"./zIndexSlice-D4C6hgdT.js";import"./immer-6aMp-_7U.js";import"./get-BovgKQJV.js";import"./resolveDefaultProps-Dbt_ZrM5.js";import"./isWellBehavedNumber-CmPQeXr3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Juh79sHc.js";import"./RechartsWrapper-DbVRBKBT.js";import"./index-B_yATEtm.js";import"./renderedTicksSlice-DlUNX-2S.js";import"./axisSelectors-B2LpzdTT.js";import"./d3-scale-CGHFSatL.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rdohZj9d.js";import"./chartDataContext-D0QBQcjy.js";import"./CategoricalChart-CgcUCFFA.js";import"./Page-Cj8EiXz7.js";import"./Line-ivCSXdEf.js";import"./Layer-Dq7d9_uV.js";import"./Curve-D1MUxqb9.js";import"./types-DBzeQvsP.js";import"./step-LyYYLf4o.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tx7FJlw3.js";import"./Label-Cn2enGhV.js";import"./Text-BWhw0wXD.js";import"./DOMUtils-CZpE5MKQ.js";import"./ZIndexLayer-D2dadpNA.js";import"./useAnimationId-whgPLHvU.js";import"./ActivePoints-DRG6SQTE.js";import"./Dot-ueeTOKda.js";import"./RegisterGraphicalItemId-7Cg8xoFx.js";import"./ErrorBarContext-D0SNCxES.js";import"./GraphicalItemClipPath-BG_0y6FZ.js";import"./SetGraphicalItem--dLvTOsx.js";import"./getRadiusAndStrokeWidthFromDot-Web9rp4C.js";import"./ActiveShapeUtils-FGDrwnsX.js";import"./XAxis-BniO9eps.js";import"./CartesianAxis-Cncjk8wz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BZIvedAi.js";import"./Legend-BRE1EjLl.js";import"./Symbols-CjwVZBtH.js";import"./symbol-H1Rke99i.js";import"./useElementOffset-F-eAusQk.js";import"./uniqBy-61b_bX-x.js";import"./iteratee-IjYl2ZNO.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

import{u as n,j as e}from"./index-By8HoRFy.js";import{M as o,C as h}from"./blocks-Ci3TWRNH.js";import{C as d,W as s}from"./dimensions.stories-CRyTrNts.js";import"./iframe-__Uni7ot.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuAus-7O.js";import"./index-D5MVAu2q.js";import"./index-B8BzxjEy.js";import"./ChartSizeDimensions-BIXM5WpD.js";import"./zIndexSlice-D7vG4UcO.js";import"./immer-DHOgEza7.js";import"./get-M8ASrgh5.js";import"./resolveDefaultProps-id_IzIac.js";import"./isWellBehavedNumber-DShwpyY_.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-De5M1TqL.js";import"./RechartsWrapper-BbAqMlrq.js";import"./index-ClzAupHk.js";import"./renderedTicksSlice-DJf3fvCP.js";import"./axisSelectors-CWQCxUri.js";import"./d3-scale-DZYmGYua.js";import"./string-B6fdYHAA.js";import"./CartesianChart--sKXWUKy.js";import"./chartDataContext-CKCl4rEW.js";import"./CategoricalChart-BLqwxQ25.js";import"./Page-Cj8EiXz7.js";import"./Line-9aK3ra6i.js";import"./Layer-CMTKTZZ4.js";import"./Curve-DAVrDxo_.js";import"./types-DL1t91_l.js";import"./step-BeYfnRlJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZS1OqPe2.js";import"./Label-CrlvYGOF.js";import"./Text-C_yGKqXr.js";import"./DOMUtils-neCLUP_5.js";import"./ZIndexLayer-C4Jgnnas.js";import"./useAnimationId-BhPEQZA3.js";import"./ActivePoints-C2WwE9Wu.js";import"./Dot-BYTlXUFT.js";import"./RegisterGraphicalItemId-CVmvnLvy.js";import"./ErrorBarContext-DZdbeW5P.js";import"./GraphicalItemClipPath-B5rXG3_D.js";import"./SetGraphicalItem-DXUbiEXj.js";import"./getRadiusAndStrokeWidthFromDot-DeEAWH9e.js";import"./ActiveShapeUtils-r_dsHEWU.js";import"./XAxis-_jE_dg8q.js";import"./CartesianAxis-CtUpgzNz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CjBkwZMp.js";import"./Legend-E8-hGuLK.js";import"./Symbols-D_5F4i1D.js";import"./symbol-bHB5vcKZ.js";import"./useElementOffset-D9v1k3Me.js";import"./uniqBy-C2yG_xcT.js";import"./iteratee-Cq5ryGVX.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

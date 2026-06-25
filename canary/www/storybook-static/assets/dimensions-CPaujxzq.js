import{u as n,j as e}from"./index-BYRwDjYn.js";import{M as o,C as h}from"./blocks-WuUq88IL.js";import{C as d,W as s}from"./dimensions.stories-C9XbnbPH.js";import"./iframe-Bbgfrsw7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C0ODKNwO.js";import"./index-v2biSiVS.js";import"./index-Dgahjeym.js";import"./ChartSizeDimensions-Bd3TqS1f.js";import"./zIndexSlice-CQlXcDAc.js";import"./immer-BnwOCZg8.js";import"./get-CGUpvFiU.js";import"./resolveDefaultProps-o6njxdDq.js";import"./isWellBehavedNumber-BR76DXAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D5u7NNSO.js";import"./RechartsWrapper-CRt4NQQt.js";import"./index-CECpKJ3H.js";import"./renderedTicksSlice-CbreQ2EV.js";import"./axisSelectors-CDvVNjDS.js";import"./d3-scale-OklfQgrl.js";import"./CartesianChart-QVFJB6ft.js";import"./chartDataContext-CL0ujozD.js";import"./CategoricalChart-DhdplheV.js";import"./Page-Cj8EiXz7.js";import"./Line-Brw9uyw8.js";import"./Layer-8m_pE-_A.js";import"./Curve-bpXujO2y.js";import"./types-8gz_-wr5.js";import"./step-DyahUGnz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtW6zihY.js";import"./Label-BiRqfMN5.js";import"./Text-Bz6YKmeV.js";import"./DOMUtils-Z9sFA7ma.js";import"./ZIndexLayer-6gPnMOeu.js";import"./useAnimationId-DUfU26_x.js";import"./ActivePoints-CH9TfgfX.js";import"./Dot-DOMfzIFj.js";import"./RegisterGraphicalItemId-BgE_IAVb.js";import"./ErrorBarContext-hic6ppru.js";import"./GraphicalItemClipPath-zba15Mlm.js";import"./SetGraphicalItem-Bny1zUhU.js";import"./getRadiusAndStrokeWidthFromDot-AY2jwcKk.js";import"./ActiveShapeUtils-CLp6ysVz.js";import"./XAxis-B3CRQ6u6.js";import"./CartesianAxis-D1v9Dkeg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-p6BAB9xn.js";import"./Legend-BOvb-yDa.js";import"./Symbols-DZYHpXuH.js";import"./symbol-CxUaEHbS.js";import"./useElementOffset-Cn0zPWFa.js";import"./uniqBy-mEUJfJNn.js";import"./iteratee-DuZXcmXc.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

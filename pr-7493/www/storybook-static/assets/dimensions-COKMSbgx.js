import{u as n,j as e}from"./index-ByM9CWCp.js";import{M as o,C as h}from"./blocks-Bw3Ph1AH.js";import{C as d,W as s}from"./dimensions.stories-mhhbAgGQ.js";import"./iframe-BWYv0W0I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DTxMd3-u.js";import"./index-BcXaHiqG.js";import"./index-ByNF5ywv.js";import"./ChartSizeDimensions-B5fdl5be.js";import"./zIndexSlice-BZjtJtRO.js";import"./immer-BPqm6WO1.js";import"./get-YpvzSERN.js";import"./resolveDefaultProps-_5I5KHm0.js";import"./isWellBehavedNumber-BvLe-n8Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-3rsPeh8g.js";import"./RechartsWrapper-A48iA3eZ.js";import"./index-C30dpYE2.js";import"./renderedTicksSlice-BylsjMl6.js";import"./axisSelectors-BqS5J0kn.js";import"./d3-scale-CFHPl3Hx.js";import"./CartesianChart-CWrMrl0B.js";import"./chartDataContext-8Yx6Y713.js";import"./CategoricalChart-COWvBEEg.js";import"./Page-Cj8EiXz7.js";import"./Line-BatACtMg.js";import"./Layer-Bj1H698J.js";import"./Curve-u414SiC4.js";import"./types-Dytxgf6V.js";import"./step-FVBZPP9Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhxwbWlw.js";import"./Label-Df5r-7el.js";import"./Text-z-woKoAn.js";import"./DOMUtils-CcdNUrj8.js";import"./ZIndexLayer-DFHa7v_x.js";import"./useAnimationId-CZnp92c4.js";import"./ActivePoints-_ILc4AHk.js";import"./Dot-DQMh135C.js";import"./RegisterGraphicalItemId-CK6cp7E5.js";import"./ErrorBarContext-CwrVQcWY.js";import"./GraphicalItemClipPath-lDfebASI.js";import"./SetGraphicalItem-DQ0Lh0bj.js";import"./getRadiusAndStrokeWidthFromDot-DsWQpG0J.js";import"./ActiveShapeUtils-iodju3ZT.js";import"./XAxis-DpTHfSKL.js";import"./CartesianAxis-DUktxQyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DIG6TcZO.js";import"./Legend-D42dlFNp.js";import"./Symbols-DwyX2t_a.js";import"./symbol-B59mLEvR.js";import"./useElementOffset-DLPfaP7i.js";import"./uniqBy-Bag5RbDs.js";import"./iteratee-ByXW7YOK.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

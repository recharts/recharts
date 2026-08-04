import{u as n,j as e}from"./index-D-6kYYJ9.js";import{M as o,C as h}from"./blocks-DXiBa2WZ.js";import{C as d,W as s}from"./dimensions.stories-DtstLbBM.js";import"./iframe-DwLZZwhK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./index-VnXRJ0a1.js";import"./ChartSizeDimensions-C3fITomU.js";import"./zIndexSlice-lVUWNgM0.js";import"./throttle-m49sR4Np.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-p1KVu18j.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./d3-scale-CjSqz0E9.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./Page-Cj8EiXz7.js";import"./Line-Cvv4G15o.js";import"./Layer-BVmot7FB.js";import"./Curve-Cv92tytC.js";import"./types-B7g8Th-s.js";import"./step-DqN0Bx6a.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKnm6tp0.js";import"./Label-tECJL-37.js";import"./Text-Bh0YxhQF.js";import"./DOMUtils-BGpns11t.js";import"./ZIndexLayer-BAEsl3nH.js";import"./useAnimationId-C3Y_zOxU.js";import"./ActivePoints-CdWhr2jU.js";import"./Dot-CGLhLTV3.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./ErrorBarContext-wXozNj3Y.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./graphicalItemIdentity-CtF6lVXQ.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./RechartsThemeContext-pLBMwypQ.js";import"./XAxis-DBBjIwDo.js";import"./CartesianAxis-ByQIstMG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BRmSg-U1.js";import"./Legend-DKdaWvlb.js";import"./Symbols-DVjBjeOn.js";import"./symbol-CjHagoG3.js";import"./useElementOffset-Df4AHCQV.js";import"./uniqBy-BbT4zose.js";import"./iteratee-DaU-OdzY.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};

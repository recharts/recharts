import{u as n,j as e}from"./index-CJytpqHa.js";import{M as o,C as h}from"./blocks-BI4WpTR3.js";import{C as d,W as s}from"./dimensions.stories-Cy1X26OY.js";import"./iframe-D1t-DMDX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DN4Hf2vp.js";import"./index-DXAWsi2y.js";import"./index-DBKl6Uwy.js";import"./ChartSizeDimensions-CPFDs7fF.js";import"./zIndexSlice-D3y7WbGu.js";import"./throttle-6Gvu17mH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CslUsmpl.js";import"./isWellBehavedNumber-CUXK_wKy.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BzsVf6dd.js";import"./RechartsWrapper-BZjYCuuq.js";import"./axisSelectors-j0uMY4D2.js";import"./d3-scale-BUFFZJWe.js";import"./index-BVgOAcLw.js";import"./renderedTicksSlice-BDhtYcVT.js";import"./index-DVZyTUvl.js";import"./CartesianChart-CkbIBTi3.js";import"./chartDataContext-Cv-ECou4.js";import"./CategoricalChart-CSw7HOxG.js";import"./Page-Cj8EiXz7.js";import"./Line-F5T58cXI.js";import"./Layer-C3v8UF0F.js";import"./Curve-DkVKde3C.js";import"./types-CakNgFJg.js";import"./step-2p0USgF7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C6KHS5pS.js";import"./Label-l8kFpP-D.js";import"./Text-DAi50bHG.js";import"./DOMUtils-B6_ZXa7e.js";import"./useId-DDzIZyqo.js";import"./useBackwardsCompatibleTheme-BSefrMjh.js";import"./ZIndexLayer-DAI4vBfR.js";import"./useAnimationId-CHualwmZ.js";import"./ActivePoints-DH8HO3TV.js";import"./Dot-iuKqNYRF.js";import"./RegisterGraphicalItemId-6E8BE8Ka.js";import"./ErrorBarContext-aZAJKe3w.js";import"./GraphicalItemClipPath-CTjco7rb.js";import"./SetGraphicalItem-B3rvHIl-.js";import"./getRadiusAndStrokeWidthFromDot-B9ylC5dT.js";import"./ActiveShapeUtils-DPvI5kC4.js";import"./useGraphicalItemIdentity-Y17Z1Bub.js";import"./XAxis-D2W5e4ho.js";import"./CartesianAxis-zM23PuK9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DA6hAinn.js";import"./Legend-Cied3KuF.js";import"./Symbols-B523Ziwf.js";import"./symbol-DHiI_cX5.js";import"./useElementOffset-BtiRWiP_.js";import"./uniqBy-DQAv3Mv_.js";import"./iteratee-B8C5seUw.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

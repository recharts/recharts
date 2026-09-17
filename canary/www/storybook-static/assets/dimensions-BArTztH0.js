import{u as n,j as e}from"./index-GzQeS-Z9.js";import{M as o,C as h}from"./blocks-BYP37v-k.js";import{C as d,W as s}from"./dimensions.stories-fX13XJPQ.js";import"./iframe-tVU98U3S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BHaD7xdN.js";import"./index-Dkxefu6-.js";import"./index-CelAevGI.js";import"./ChartSizeDimensions-CZkGzOff.js";import"./zIndexSlice-CyBuhAxg.js";import"./throttle-7FDSZAP-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-yCAU9vb4.js";import"./isWellBehavedNumber-Cm_Hybde.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DMW4n_nS.js";import"./RechartsWrapper-B6c-k2Ww.js";import"./axisSelectors-Dk0RXaf-.js";import"./d3-scale-DsWe6xo3.js";import"./index-D5U9ICSu.js";import"./renderedTicksSlice-B6OJ4cSv.js";import"./index-Dkiks_wh.js";import"./CartesianChart-cRl5-qnH.js";import"./chartDataContext-gF0asL1b.js";import"./CategoricalChart-ZVxjTQBd.js";import"./Page-Cj8EiXz7.js";import"./Line-DB7R10NU.js";import"./Layer-BI456J7x.js";import"./Curve-Ba9QZAHb.js";import"./types-B3--bUgQ.js";import"./step-BPWa_HmE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CqlhlM_R.js";import"./Label-BiGv8_RF.js";import"./Text-BIcirXpx.js";import"./DOMUtils-ZXubKPMD.js";import"./useId-Bhu2YHP8.js";import"./useBackwardsCompatibleTheme-BKS2Kex1.js";import"./ZIndexLayer-uxtsIBVq.js";import"./useAnimationId-3DY0RP1D.js";import"./ActivePoints-DterfL9t.js";import"./Dot-B9zwDON4.js";import"./RegisterGraphicalItemId-BUrw94Fl.js";import"./ErrorBarContext-D5CP1D9F.js";import"./GraphicalItemClipPath-DLKqhYTd.js";import"./SetGraphicalItem-BAgFstOS.js";import"./getRadiusAndStrokeWidthFromDot-Cld96GCx.js";import"./ActiveShapeUtils-D132qIUj.js";import"./useGraphicalItemIdentity-BYgYeKaf.js";import"./XAxis-B6lV3McA.js";import"./CartesianAxis-BOF0DDEi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Cz8LA1zT.js";import"./Legend-B-Vpf91_.js";import"./Symbols-BweGjQax.js";import"./symbol-BLUibg7I.js";import"./useElementOffset-Bhj0sPEh.js";import"./uniqBy-C2Zh7Teh.js";import"./iteratee-BRu2ejZj.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

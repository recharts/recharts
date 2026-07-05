import{u as n,j as e}from"./index-cbEYOw5J.js";import{M as o,C as h}from"./blocks-Bl-cp2z1.js";import{C as d,W as s}from"./dimensions.stories-C12Z3Lve.js";import"./iframe-CWavEj4K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CAI0wlC8.js";import"./index-BUN8uoaU.js";import"./index-CB7M5YEf.js";import"./ChartSizeDimensions-DK5XCEcH.js";import"./zIndexSlice-5FODTzGQ.js";import"./throttle-Bkho8TEt.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Di3JUEKf.js";import"./isWellBehavedNumber-DmSAVoQw.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-5wlVBK1U.js";import"./RechartsWrapper-BHgaBn1E.js";import"./index-rtKProJN.js";import"./renderedTicksSlice-BaH7gash.js";import"./axisSelectors-XK5eG7GE.js";import"./d3-scale-BaBPlFPk.js";import"./CartesianChart-0mhtnzxI.js";import"./chartDataContext-B5TlaDO0.js";import"./CategoricalChart-DbdrFP36.js";import"./Page-Cj8EiXz7.js";import"./Line-CsLLlM8L.js";import"./Layer-CGV1iRtS.js";import"./Curve-Be2eVpFP.js";import"./types-BmbikVaN.js";import"./step-De38Fzbp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tOezhTob.js";import"./Label-BBFntxVE.js";import"./Text-DKOGU3E1.js";import"./DOMUtils-bwyz7eCe.js";import"./ZIndexLayer-BFe8VyCX.js";import"./useAnimationId-DfkBBgp-.js";import"./ActivePoints-Bl1BNxPS.js";import"./Dot-DxpmSLW5.js";import"./RegisterGraphicalItemId-C4WMjaGC.js";import"./ErrorBarContext-DxKtXG2P.js";import"./GraphicalItemClipPath-CrXxzkB7.js";import"./SetGraphicalItem-DS2vQ-KW.js";import"./getRadiusAndStrokeWidthFromDot-CWHux7lI.js";import"./ActiveShapeUtils-DeeBbphL.js";import"./XAxis-eQhyZl4T.js";import"./CartesianAxis-CUeBd0Qu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DW5tby8v.js";import"./Legend-BdpiRDzw.js";import"./Symbols-hO1GCjZB.js";import"./symbol-y17aD_bO.js";import"./useElementOffset-BUB8Afxb.js";import"./uniqBy-CCg55Ce9.js";import"./iteratee-DuHJ9aff.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

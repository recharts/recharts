import{u as n,j as e}from"./index-CKJu3nQ2.js";import{M as o,C as h}from"./blocks-D-myYfmW.js";import{C as d,W as s}from"./dimensions.stories-oqgYYieL.js";import"./iframe-CM9KFlpR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./index-CO_J2hQh.js";import"./ChartSizeDimensions-COTLePUb.js";import"./zIndexSlice-i3oRyNLb.js";import"./throttle-De6mCLNM.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BliiGcYz.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./axisSelectors-gWKpmW3G.js";import"./d3-scale-BtCHm39u.js";import"./CartesianChart-Bh6VCjY7.js";import"./chartDataContext-Do1rIj0R.js";import"./CategoricalChart-DG8gXHxR.js";import"./Page-Cj8EiXz7.js";import"./Line-D_p7ofiv.js";import"./Layer-CyTLoz3L.js";import"./Curve-DN_e8w4x.js";import"./types-BZH27c5K.js";import"./step-DSranele.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dc6JrbcK.js";import"./Label-8JT3S2zg.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./ZIndexLayer-CLQFgWIH.js";import"./useAnimationId-OG1_HfMp.js";import"./ActivePoints-BWeInnwU.js";import"./Dot-kCj2iLyE.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./ErrorBarContext-L6TULBDt.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getRadiusAndStrokeWidthFromDot-CWl-YjkB.js";import"./ActiveShapeUtils-BKApU02X.js";import"./XAxis-BpZNPHzq.js";import"./CartesianAxis-wxz_d6Fj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-CI94Yo_i.js";import"./Legend-XLGRzbOD.js";import"./Symbols-CQYN6ifz.js";import"./symbol-C_YmnP65.js";import"./useElementOffset-Ce1ZX6FX.js";import"./uniqBy-CUPFsq1k.js";import"./iteratee-FPt0V19d.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

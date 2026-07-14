import{u as n,j as e}from"./index-DUFYWfko.js";import{M as o,C as h}from"./blocks-DbObRlA1.js";import{C as d,W as s}from"./dimensions.stories-CkZFeUq9.js";import"./iframe-n-wQuCBi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./index-ifJ0vXzc.js";import"./ChartSizeDimensions-BvA7X7kS.js";import"./zIndexSlice-agpgazdg.js";import"./throttle-DNZjDlXp.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-QtT3UbV6.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./renderedTicksSlice-DRvXNutS.js";import"./axisSelectors-DJGA74tj.js";import"./d3-scale-Dq3pQP3q.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./Page-Cj8EiXz7.js";import"./Line-_0667e52.js";import"./Layer-q34S3x6j.js";import"./Curve-DeDi9IqD.js";import"./types-DiIuPkat.js";import"./step-Cdwz2fUu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CukHfitT.js";import"./Label-1gu4eHha.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./ZIndexLayer-CKoiASff.js";import"./useAnimationId-CnnOw5XR.js";import"./ActivePoints-3GB3c-YC.js";import"./Dot-B6zDcllv.js";import"./RegisterGraphicalItemId-DirXNoHy.js";import"./ErrorBarContext-Dm_7tkVC.js";import"./GraphicalItemClipPath-NXqqiVYJ.js";import"./SetGraphicalItem-jej3rFoE.js";import"./getRadiusAndStrokeWidthFromDot-BrX-hwFD.js";import"./ActiveShapeUtils-D_ggCq42.js";import"./XAxis-CqwZgwEA.js";import"./CartesianAxis-BKtFBsNE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-bBYdAORl.js";import"./Legend-BXBSIHAx.js";import"./Symbols-TALShFh1.js";import"./symbol-BUqBCutU.js";import"./useElementOffset-Dbda4rug.js";import"./uniqBy-CtExDG4G.js";import"./iteratee-7MnTZri1.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

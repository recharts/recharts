import{u as n,j as e}from"./index-2g_HV4Au.js";import{M as o,C as h}from"./blocks-CzXVRs6O.js";import{C as d,W as s}from"./dimensions.stories-XkmDvyZx.js";import"./iframe-CLYMtVVU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6XAYvxn.js";import"./index-C3oYNXo1.js";import"./index-CUSuyme2.js";import"./ChartSizeDimensions-D8QcsRV0.js";import"./zIndexSlice-CYEFLgyb.js";import"./immer-C-1Bq0C7.js";import"./get-DSRRGDfq.js";import"./resolveDefaultProps-CfuK3i5d.js";import"./isWellBehavedNumber-Dc0RpdQ2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CrRzeNT_.js";import"./RechartsWrapper-jnQrHFKT.js";import"./index-D3KBwDZ7.js";import"./renderedTicksSlice-6fh8zoWq.js";import"./axisSelectors-BM98nGPd.js";import"./d3-scale-Beg35rGW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxrU-fy.js";import"./chartDataContext-BVNdEBob.js";import"./CategoricalChart-DtR6LZhP.js";import"./Page-Cj8EiXz7.js";import"./Line-BFselYwC.js";import"./Layer-Bl-M4NCf.js";import"./Curve-CECgUjTc.js";import"./types-Bp6tCXm1.js";import"./step-BUm_V17B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-fTI7Y-Cy.js";import"./Label-m25-3SN6.js";import"./Text-qYO8jmtc.js";import"./DOMUtils-4OHTktxt.js";import"./ZIndexLayer-DaVYg93h.js";import"./useAnimationId-CPzMxfeA.js";import"./ActivePoints-CLviZOj_.js";import"./Dot-Xh8APYeF.js";import"./RegisterGraphicalItemId-DiMQaNFZ.js";import"./ErrorBarContext-CoCRg6bd.js";import"./GraphicalItemClipPath-DWrBQcDT.js";import"./SetGraphicalItem-B11_FOSD.js";import"./getRadiusAndStrokeWidthFromDot-DBkbTiQk.js";import"./ActiveShapeUtils-BVcr_xDt.js";import"./XAxis-CBhmV7sv.js";import"./CartesianAxis-BkW0Yyb6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Cpo1C8HM.js";import"./Legend-DcD6k0Sc.js";import"./Symbols-BbFN5qez.js";import"./symbol-DT-DdzbR.js";import"./useElementOffset-BBQpNMyz.js";import"./uniqBy-CZClMibn.js";import"./iteratee-Dvvu4gyG.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

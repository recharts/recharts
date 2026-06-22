import{u as n,j as e}from"./index-TGIOTgAd.js";import{M as o,C as h}from"./blocks-DkdC97DM.js";import{C as d,W as s}from"./dimensions.stories-CMCNwmxR.js";import"./iframe-CvYyRmMb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ximmRSZs.js";import"./index-GLYrDd_3.js";import"./index-BDFNdDeq.js";import"./ChartSizeDimensions-Pv72FvVT.js";import"./zIndexSlice-Cp8J06te.js";import"./immer-DxglGVhE.js";import"./get-CIMqXaai.js";import"./resolveDefaultProps-VEZFy5tu.js";import"./isWellBehavedNumber-Lw6v0aAh.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B1VIvVBS.js";import"./RechartsWrapper-BcqH_-Dr.js";import"./index-D24-ZTWt.js";import"./renderedTicksSlice-BWK4MGTQ.js";import"./axisSelectors-C-wRbz-D.js";import"./d3-scale-ZyzwHhuQ.js";import"./CartesianChart-BwCKHjXt.js";import"./chartDataContext-WmbcVDkE.js";import"./CategoricalChart-BVRGiY0N.js";import"./Page-Cj8EiXz7.js";import"./Line-Ox0BYUUe.js";import"./Layer-C5boFLOM.js";import"./Curve-B0ipnk9C.js";import"./types-Zq1Yq0zW.js";import"./step-CfQihZ4L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C6-g87vu.js";import"./Label-CYZiU-dh.js";import"./Text-B2fcvIhU.js";import"./DOMUtils-Bkzksssp.js";import"./ZIndexLayer-BRD83X3W.js";import"./useAnimationId-BRj_sN3I.js";import"./ActivePoints-T9IVC-_m.js";import"./Dot-B1euizWe.js";import"./RegisterGraphicalItemId-wnXP5bti.js";import"./ErrorBarContext-CaDNtEdt.js";import"./GraphicalItemClipPath-b7ayD98P.js";import"./SetGraphicalItem-Bggld1CO.js";import"./getRadiusAndStrokeWidthFromDot-Dx9iWsDu.js";import"./ActiveShapeUtils-DSfdlNCJ.js";import"./XAxis-3reDaDaV.js";import"./CartesianAxis-Be4--iUh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CjttnAc1.js";import"./Legend-BG5egmz1.js";import"./Symbols-BxgPZ6x6.js";import"./symbol-CZiTVtyO.js";import"./useElementOffset-CAsgb7km.js";import"./uniqBy-xgluxroo.js";import"./iteratee-B7aRbMAg.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

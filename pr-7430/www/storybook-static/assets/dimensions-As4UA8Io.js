import{u as n,j as e}from"./index-ChOebLaY.js";import{M as o,C as h}from"./blocks-eumpD3yk.js";import{C as d,W as s}from"./dimensions.stories-SPqnomMC.js";import"./iframe-D_P_Mvdh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./index-B6Dv4SpM.js";import"./ChartSizeDimensions-XLGXG38Z.js";import"./zIndexSlice-DWG8bKuL.js";import"./immer-zUUuTuVf.js";import"./get-B4It9gJG.js";import"./resolveDefaultProps-D055Uems.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C2CR4N0a.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./CategoricalChart-D93P9I6f.js";import"./Page-Cj8EiXz7.js";import"./Line-CWgXDn5v.js";import"./Layer-DPlEhKnR.js";import"./Curve-CAkixkLO.js";import"./types-BEWgGyLa.js";import"./step-DWwWZa2n.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TOHLuZU5.js";import"./Label-XikFYvD7.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./ZIndexLayer-B_lVTO01.js";import"./useAnimationId-B85ZSEKA.js";import"./ActivePoints-1kyrVvID.js";import"./Dot-BAS0IQWR.js";import"./RegisterGraphicalItemId-C0Rctadm.js";import"./ErrorBarContext-CuQjxX0z.js";import"./GraphicalItemClipPath-BH1bphsQ.js";import"./SetGraphicalItem-BXfByqWK.js";import"./getRadiusAndStrokeWidthFromDot-BQbb3rIK.js";import"./ActiveShapeUtils-h9V9VuFf.js";import"./XAxis-qMeue6_L.js";import"./CartesianAxis-CFHvtBrK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DVaDEIZb.js";import"./Legend-DohzNoFA.js";import"./Symbols-EQJpu1dQ.js";import"./symbol-BLc3Uspj.js";import"./useElementOffset-saJFZnh4.js";import"./uniqBy-CXjOom_h.js";import"./iteratee-rU0UrMDe.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

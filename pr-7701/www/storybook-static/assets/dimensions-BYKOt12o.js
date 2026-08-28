import{u as n,j as e}from"./index-BxRfCbqs.js";import{M as o,C as h}from"./blocks-Iokg0PJe.js";import{C as d,W as s}from"./dimensions.stories-BmiAwwUU.js";import"./iframe-BTdOdF9K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cq8tu8wQ.js";import"./index-Ced2HG28.js";import"./index-CwuReyQ-.js";import"./ChartSizeDimensions-DM-PNmZH.js";import"./zIndexSlice-CcQiDZWo.js";import"./throttle-BGr8RGVS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CYx6Kk4A.js";import"./isWellBehavedNumber-ZiYy0LNM.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BNTkSnPn.js";import"./RechartsWrapper-DRLvm4aR.js";import"./axisSelectors-CEXy452f.js";import"./d3-scale-B2K1_ofr.js";import"./index-uQqEtlSq.js";import"./renderedTicksSlice-CwdI_hq1.js";import"./index-DifGdyog.js";import"./CartesianChart-DxgKFkUN.js";import"./chartDataContext-BIlbUR4j.js";import"./CategoricalChart-CWtNWW3W.js";import"./Page-Cj8EiXz7.js";import"./Line-D-0vjVan.js";import"./Layer-BIBCumPU.js";import"./Curve-D7vA0Myr.js";import"./types-DjPeWPew.js";import"./step-DMCy-hl7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKFfKX33.js";import"./Label-Cm499Ers.js";import"./Text-ad69v4o0.js";import"./DOMUtils-D3jMOIM3.js";import"./useId-R0lZrYSa.js";import"./useBackwardsCompatibleTheme-CO-7LDmO.js";import"./ZIndexLayer-C5GGlVd8.js";import"./useAnimationId-C9O8Tbu7.js";import"./ActivePoints-DEDNVxhq.js";import"./Dot-C09h-5Zk.js";import"./RegisterGraphicalItemId-CtQfyEXD.js";import"./ErrorBarContext-CqdXJ3Jz.js";import"./GraphicalItemClipPath-BNHF0YUS.js";import"./SetGraphicalItem-CBZad1k7.js";import"./getRadiusAndStrokeWidthFromDot-CXK6U_2t.js";import"./ActiveShapeUtils-HwCQ4yPj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BHkAQnNg.js";import"./CartesianAxis-Bjag6PpJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D6a9CyOE.js";import"./Legend-CTek2g6f.js";import"./Symbols-1hS8x8It.js";import"./symbol-4RT96rpw.js";import"./useElementOffset-CabjllZT.js";import"./uniqBy-w2GX_Mj8.js";import"./iteratee-BGtIuJre.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

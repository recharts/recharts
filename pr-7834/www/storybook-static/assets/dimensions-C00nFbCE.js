import{u as n,j as e}from"./index-BNZ0jIAr.js";import{M as o,C as h}from"./blocks-BRsoyno5.js";import{C as d,W as s}from"./dimensions.stories-DRxkWWsZ.js";import"./iframe-o9H8KOy9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-UCkqSDpm.js";import"./index-DST8VIu0.js";import"./index-CnuR4GUo.js";import"./ChartSizeDimensions-BXLISkj8.js";import"./zIndexSlice-CsgZI5yp.js";import"./throttle-hW6vudhT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CyRSpMie.js";import"./isWellBehavedNumber-Dwj2svK3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CKiAGi27.js";import"./RechartsWrapper-BZ0mtC1D.js";import"./axisSelectors-Cs0jtKkZ.js";import"./d3-scale-DTDNfzi3.js";import"./index-EzgePqD6.js";import"./renderedTicksSlice-BmkiUxUd.js";import"./index-jpFEenpG.js";import"./CartesianChart-Gd4WSf--.js";import"./chartDataContext-up-x_HqN.js";import"./CategoricalChart-PL_s45W5.js";import"./Page-Cj8EiXz7.js";import"./Line-Ci_p0EPQ.js";import"./Layer-C1DHBl04.js";import"./Curve-3cnVmCNd.js";import"./types-Df3MXzgv.js";import"./step-UNDjkb8Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-eAjckEIy.js";import"./Label-nsqVjfiI.js";import"./Text-CYZhXiJD.js";import"./DOMUtils-S1dn3EjE.js";import"./useId-C6JRG-LM.js";import"./useBackwardsCompatibleTheme-BxxjaG6R.js";import"./ZIndexLayer-DKFjfMYd.js";import"./useAnimationId-BkEDLLv5.js";import"./ActivePoints-DgEMzgoZ.js";import"./Dot-CCkur9hD.js";import"./RegisterGraphicalItemId-C9q20zyT.js";import"./ErrorBarContext-CLeU9z0V.js";import"./GraphicalItemClipPath-DTZX6fHd.js";import"./SetGraphicalItem-obUYvC56.js";import"./getRadiusAndStrokeWidthFromDot-_fRFOmw4.js";import"./ActiveShapeUtils-DCctTHnp.js";import"./useGraphicalItemIdentity-CagZ9rA9.js";import"./XAxis-BS32pGnO.js";import"./CartesianAxis-oj3Fjdb5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-ULho8m9m.js";import"./Legend-BDSlM8QB.js";import"./Symbols-BXh2yBEO.js";import"./symbol-D3GrKsoh.js";import"./useElementOffset-C_bcUY1n.js";import"./uniqBy-CCcfeBgo.js";import"./iteratee-CwqL5YXH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

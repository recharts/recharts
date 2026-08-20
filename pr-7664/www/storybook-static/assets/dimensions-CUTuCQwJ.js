import{u as n,j as e}from"./index-KOkK4NB2.js";import{M as o,C as h}from"./blocks-CvxIAhvU.js";import{C as d,W as s}from"./dimensions.stories-D6OqFBI7.js";import"./iframe-DU8eOjQ1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BiO2BZqr.js";import"./index-BR94yoib.js";import"./index-C5aMPIVJ.js";import"./ChartSizeDimensions-isSDfcKZ.js";import"./zIndexSlice-BTgaU9mo.js";import"./throttle-Ds7SGj9O.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DqdCI-hK.js";import"./isWellBehavedNumber-RQOJRbJb.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D8lCnIzr.js";import"./RechartsWrapper-9E3HwjIh.js";import"./index-BsY6e3Dv.js";import"./axisSelectors-BDOPVsa7.js";import"./d3-scale-Dni3_L1R.js";import"./renderedTicksSlice-FFc2HuFp.js";import"./CartesianChart-DXBshymN.js";import"./chartDataContext-Cbz9ELzS.js";import"./CategoricalChart-QJ_K41d4.js";import"./Page-Cj8EiXz7.js";import"./Line-Bui1sNFj.js";import"./Layer-BIDK12wM.js";import"./Curve-DOio-0wn.js";import"./types-RZ1xD5kE.js";import"./step-DrL3PK0v.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DENpSSAq.js";import"./Label-Z9o5T8X-.js";import"./Text-AtzkHDEd.js";import"./DOMUtils-Cql2uYAT.js";import"./useId-ChL7HBdG.js";import"./useBackwardsCompatibleTheme-DkLB3iia.js";import"./ZIndexLayer-D8k4jgaj.js";import"./useAnimationId-CdvddGlN.js";import"./ActivePoints-BjMq4-Xw.js";import"./Dot-B7WcmA_A.js";import"./RegisterGraphicalItemId-Z2iPsOPY.js";import"./ErrorBarContext-C4_kHW9u.js";import"./GraphicalItemClipPath-MaN5rDAF.js";import"./SetGraphicalItem-CdyLZ_3H.js";import"./getRadiusAndStrokeWidthFromDot-B5__NC0u.js";import"./ActiveShapeUtils-C-NGBOfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DwxXrNeT.js";import"./CartesianAxis-CXtQQdut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C5Bhkieg.js";import"./Legend-XINFVufZ.js";import"./Symbols-s2FGnFTW.js";import"./symbol-D0L4AM1n.js";import"./useElementOffset-GWMwWCSs.js";import"./uniqBy-DbQx-kHr.js";import"./iteratee-Did0_bax.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};

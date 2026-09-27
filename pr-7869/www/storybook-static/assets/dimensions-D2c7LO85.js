import{u as n,j as e}from"./index-BnItqkXU.js";import{M as o,C as h}from"./blocks-D5GNSZD9.js";import{C as d,W as s}from"./dimensions.stories-D_UEa-zZ.js";import"./iframe-DjMXRMWw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DVy8JuJj.js";import"./index-C8KOxsb8.js";import"./index-Bhr5x-9R.js";import"./ChartSizeDimensions-BB_QsE8v.js";import"./zIndexSlice-CtOSUbKS.js";import"./throttle-inystY2z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B1XIyHIw.js";import"./isWellBehavedNumber-umHPGaL1.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BWguOzjW.js";import"./RechartsWrapper-BnIn7gPv.js";import"./axisSelectors-CNz5a2R6.js";import"./d3-scale-CRgYiiwr.js";import"./index-DYIYCqg3.js";import"./renderedTicksSlice-DVXswGI9.js";import"./index-BD7yu4TT.js";import"./CartesianChart-CDSIXDAD.js";import"./chartDataContext-DOQrMEHc.js";import"./CategoricalChart-DvjYEnPS.js";import"./Page-Cj8EiXz7.js";import"./Line-inedNkom.js";import"./Layer-CXKDxib5.js";import"./Curve-OU_i7PV7.js";import"./types-CHoZYlJ3.js";import"./step-Cub6k3wO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B8zijpSk.js";import"./Label-bBUf40Mc.js";import"./Text-BAKQyfL2.js";import"./DOMUtils-C8lW23C1.js";import"./useId-_ZeDNFzq.js";import"./useBackwardsCompatibleTheme-nOUNGopJ.js";import"./ZIndexLayer-BeupKQ39.js";import"./useAnimationId-DqHnZ7Fe.js";import"./ActivePoints-D8eJWPdK.js";import"./Dot-DcNcFyGg.js";import"./RegisterGraphicalItemId-Dt04SWfb.js";import"./ErrorBarContext-B-5bQ8PS.js";import"./GraphicalItemClipPath-BWZ1AOYB.js";import"./SetGraphicalItem-7PkPViNi.js";import"./getRadiusAndStrokeWidthFromDot-D039ugpa.js";import"./ActiveShapeUtils-B380iXXR.js";import"./useGraphicalItemIdentity-CLXu1wVJ.js";import"./XAxis-CEqdRxfv.js";import"./CartesianAxis-CyNRu8rC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CsW9B0iy.js";import"./Legend-afF_4FYA.js";import"./Symbols-D7EyCHsi.js";import"./symbol-CBruGsGe.js";import"./useElementOffset-jSBsXjkO.js";import"./uniqBy-l_xI2UHC.js";import"./iteratee-D1sHNf4H.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

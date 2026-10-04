import{u as n,j as e}from"./index-CpIeotrK.js";import{M as o,C as h}from"./blocks-DvQpfPIp.js";import{C as d,W as s}from"./dimensions.stories-CuiqVYEp.js";import"./iframe-Ek26OKJE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bhq43Y8T.js";import"./index-CH5hGN9X.js";import"./index-CddS4NP_.js";import"./ChartSizeDimensions-DdqMD6rf.js";import"./zIndexSlice-Cb7AOhUN.js";import"./throttle-nAaWLAvW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DikHbtvd.js";import"./isWellBehavedNumber-C3YqTazs.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bemin9MV.js";import"./RechartsWrapper-B_5MzBNC.js";import"./axisSelectors-BZyUnxor.js";import"./d3-scale-Di7qtVT_.js";import"./index-CVfvjw4V.js";import"./renderedTicksSlice-Bw9pF84S.js";import"./index-tmDn5Ue5.js";import"./CartesianChart-BUYt3N23.js";import"./chartDataContext-q8RiqEic.js";import"./CategoricalChart-Co9RgHLu.js";import"./Page-Cj8EiXz7.js";import"./Line-B_mB8jRL.js";import"./Layer-DRl71Sg_.js";import"./Curve-8tFNvOBV.js";import"./types-USIGaiIt.js";import"./step-DzHhz21P.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B7V8aYKV.js";import"./Label-Bl-xJBza.js";import"./Text-DbwWqm58.js";import"./DOMUtils-BY_uPlRS.js";import"./useId-rsWHAn-D.js";import"./useBackwardsCompatibleTheme-Drt73puE.js";import"./ZIndexLayer-CR_MqsJe.js";import"./useAnimationId-CwN306xk.js";import"./ActivePoints-CnBuc0OH.js";import"./Dot-CSgA8HWq.js";import"./RegisterGraphicalItemId-DmFzdfAb.js";import"./ErrorBarContext-Cn_05uOu.js";import"./GraphicalItemClipPath-BeXUWsOJ.js";import"./SetGraphicalItem-OIwhrDsV.js";import"./getRadiusAndStrokeWidthFromDot-Dg98J8GV.js";import"./ActiveShapeUtils-AftK0wfE.js";import"./useGraphicalItemIdentity-CLabRpL-.js";import"./XAxis-BnPYeIW7.js";import"./CartesianAxis-D3cjFJua.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DEoqYThk.js";import"./Legend-Cz3kEQrZ.js";import"./Symbols-B5r7o9db.js";import"./symbol-CFHkB0SW.js";import"./useElementOffset-C5V_fM0x.js";import"./uniqBy-Cj7_lSTC.js";import"./iteratee-DmOgoTF5.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

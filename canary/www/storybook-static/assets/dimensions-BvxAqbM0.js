import{u as n,j as e}from"./index-BpnAdvSz.js";import{M as o,C as h}from"./blocks-C3x_fGpZ.js";import{C as d,W as s}from"./dimensions.stories-Dqyd3Sl5.js";import"./iframe-H7jEjneP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DTPOqFjg.js";import"./index-DgXESwgB.js";import"./index-DrbE-eKG.js";import"./ChartSizeDimensions-CxJqA3Gj.js";import"./zIndexSlice-Dwk71gAs.js";import"./throttle-Bn1i2xOI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bj9dJCv2.js";import"./isWellBehavedNumber-DWCHHiO4.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-bb4rZ5JT.js";import"./RechartsWrapper-BVH4-pX9.js";import"./axisSelectors-D2lTMvot.js";import"./d3-scale-BleojrFS.js";import"./index-zqvhcYYr.js";import"./renderedTicksSlice-BRHju3tw.js";import"./index-CGgy5q-V.js";import"./CartesianChart-DtibPJLh.js";import"./chartDataContext-B51jhbZz.js";import"./CategoricalChart-W9YrWS6c.js";import"./Page-Cj8EiXz7.js";import"./Line-CejbRaJQ.js";import"./Layer-FJAqqNNz.js";import"./Curve-Etd9Rf3G.js";import"./types-CAmW2CbH.js";import"./step-vnfu6Ctu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-zgVz-4ei.js";import"./Label-DbiDHxJi.js";import"./Text-B4P_g0R9.js";import"./DOMUtils-C61hDB9-.js";import"./useId-ZSgrseWl.js";import"./useBackwardsCompatibleTheme-CTObI66g.js";import"./ZIndexLayer-5waeKBAU.js";import"./useAnimationId-CpeZSN5w.js";import"./ActivePoints-BbbrdPUM.js";import"./Dot-DQi7JtyA.js";import"./RegisterGraphicalItemId-BUF7N8O-.js";import"./ErrorBarContext-VTewkZK5.js";import"./GraphicalItemClipPath-7Dat9Ey8.js";import"./SetGraphicalItem-sO5iD_xL.js";import"./getRadiusAndStrokeWidthFromDot-8tlUvvpa.js";import"./ActiveShapeUtils-6A9Zooe8.js";import"./useGraphicalItemIdentity-DWbVUF44.js";import"./XAxis-C43A4phh.js";import"./CartesianAxis-YWS3Tdxj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Vy_FZIWc.js";import"./Legend-qia_N5yl.js";import"./Symbols-CP2hyogX.js";import"./symbol-DrfccpTF.js";import"./useElementOffset-v2aajhRC.js";import"./uniqBy-Du05t_Lg.js";import"./iteratee-B7EKCWvZ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

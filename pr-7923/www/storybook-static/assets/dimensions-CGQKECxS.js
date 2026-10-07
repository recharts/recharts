import{u as n,j as e}from"./index-D224XJV-.js";import{M as o,C as h}from"./blocks-Yvtqflxt.js";import{C as d,W as s}from"./dimensions.stories-BSXkNeNQ.js";import"./iframe-wyV1OFJQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D2dSqbX-.js";import"./index-DF9BGNcn.js";import"./index-BMAJF2wT.js";import"./ChartSizeDimensions-v1tWz4Ky.js";import"./zIndexSlice-0AwT1g9-.js";import"./throttle-CUUK7_-R.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ChoAHX7J.js";import"./isWellBehavedNumber-DZ7NyhtT.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CBisthEs.js";import"./RechartsWrapper-0u6nGOPN.js";import"./axisSelectors-DUKM8TOz.js";import"./d3-scale-BCMPgSvY.js";import"./index-ZiSf6-0W.js";import"./renderedTicksSlice-B5WYeoae.js";import"./index-DnbQaRSG.js";import"./CartesianChart-wU-_7i2L.js";import"./chartDataContext-BFbqUx5W.js";import"./CategoricalChart-CYyVEG_Z.js";import"./Page-Cj8EiXz7.js";import"./Line-BEKv9UbE.js";import"./Layer-C6HNy6Ts.js";import"./Curve-BT6y-5_3.js";import"./types-Df9zKJ57.js";import"./step-DN0D11qs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9EcBcc8f.js";import"./Label-DI-dZ1Mj.js";import"./Text-LrIwM5Ef.js";import"./DOMUtils-CMxfKpC9.js";import"./useId-CyB1NCIB.js";import"./useBackwardsCompatibleTheme-DPV1EzeF.js";import"./ZIndexLayer--FDGDHLw.js";import"./useAnimationId-BF1AH8CU.js";import"./ActivePoints-C-ZsoMWs.js";import"./Dot-CQzkvjlm.js";import"./RegisterGraphicalItemId-_B2FfK6k.js";import"./ErrorBarContext-D8mz_gNG.js";import"./GraphicalItemClipPath-Txs2MFfL.js";import"./SetGraphicalItem-DW8cLaxQ.js";import"./getRadiusAndStrokeWidthFromDot-BVhvwnfR.js";import"./ActiveShapeUtils-D6GHKFv-.js";import"./useGraphicalItemIdentity-gmKXJpLw.js";import"./XAxis-C5gx8h5c.js";import"./CartesianAxis-C_-7YUyD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Vd3tzgVC.js";import"./Legend-GgjS0V5G.js";import"./Symbols-BPY8-Kj_.js";import"./symbol-2v4hKg1J.js";import"./useElementOffset-WnBYc90z.js";import"./uniqBy-BDxcmCyA.js";import"./iteratee-KwxnxvYa.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

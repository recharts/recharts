import{u as n,j as e}from"./index-DnGN0Z4C.js";import{M as o,C as h}from"./blocks-yiR8h89J.js";import{C as d,W as s}from"./dimensions.stories--wKJIue6.js";import"./iframe-DozjnQY4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C_fPCGUJ.js";import"./index-DvODWZUZ.js";import"./index-55Hv9cWy.js";import"./ChartSizeDimensions-DxM8R5f6.js";import"./zIndexSlice-BgkLcB6R.js";import"./throttle-ja6YfGso.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CVm2MzcI.js";import"./isWellBehavedNumber-pk6AjLe8.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-8ht4NcA2.js";import"./RechartsWrapper-CsvSe4fO.js";import"./axisSelectors-DgS41G-2.js";import"./d3-scale-DiLIb41e.js";import"./index-B-gAWTo9.js";import"./renderedTicksSlice-eosOC0PP.js";import"./index-CQZmeOSf.js";import"./CartesianChart-C23oYJhj.js";import"./chartDataContext-BMMD7dGr.js";import"./CategoricalChart-cz-sFoBH.js";import"./Page-Cj8EiXz7.js";import"./Line-DBFiZ6tT.js";import"./Layer-DqTc2vWN.js";import"./Curve-cLiU8AJA.js";import"./types-BbIJv7s_.js";import"./step-DFSUgzDE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DN24URVz.js";import"./Label-zwFJYypc.js";import"./Text-CYg0PxB3.js";import"./DOMUtils-12JScs07.js";import"./useId-CoUbJimw.js";import"./useBackwardsCompatibleTheme-ZiWSCSRQ.js";import"./ZIndexLayer-BfyW3t5T.js";import"./useAnimationId-Dn8df37H.js";import"./ActivePoints-B8JQwmYC.js";import"./Dot-8Z6kgu22.js";import"./RegisterGraphicalItemId-DbLQfc-G.js";import"./ErrorBarContext-Ure7iGoK.js";import"./GraphicalItemClipPath-CB6u2457.js";import"./SetGraphicalItem-Ba3q6rOQ.js";import"./getRadiusAndStrokeWidthFromDot-m20kiUFK.js";import"./ActiveShapeUtils-DQCdFpwN.js";import"./useGraphicalItemIdentity-BMnjEDTs.js";import"./XAxis-CMLACdRu.js";import"./CartesianAxis-VBiFHU3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DKlfhRHH.js";import"./Legend-D7-pVV-n.js";import"./Symbols-B5tB_r3v.js";import"./symbol-DkoFJi3o.js";import"./useElementOffset-q9rliSht.js";import"./uniqBy-DDhkZRqQ.js";import"./iteratee-BypAlLeG.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

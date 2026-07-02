import{u as n,j as e}from"./index-CKh840Se.js";import{M as o,C as h}from"./blocks-CZKXC1pW.js";import{C as d,W as s}from"./dimensions.stories-BHbMHde_.js";import"./iframe-CgifVdGo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CE-jOOb9.js";import"./index-2TSMvrpE.js";import"./index-BIPnoVIq.js";import"./ChartSizeDimensions-4ipA4SdZ.js";import"./zIndexSlice-cYNAtEFZ.js";import"./throttle-RNDoIp5v.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BWqJsMaX.js";import"./isWellBehavedNumber-B5I1Y8ko.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CGqH3jPg.js";import"./RechartsWrapper-Bdtf4nFv.js";import"./index-B-WSnDkr.js";import"./renderedTicksSlice-CdxlE0u2.js";import"./axisSelectors-BoKC2N9p.js";import"./d3-scale-B4rm30Tj.js";import"./CartesianChart-5X0OU6Ae.js";import"./chartDataContext-Cgkpv-Wp.js";import"./CategoricalChart-gWPq6G-r.js";import"./Page-Cj8EiXz7.js";import"./Line-Bk8sgUVU.js";import"./Layer-CeyNxq54.js";import"./Curve-kzqc65C_.js";import"./types-IwSvkxMz.js";import"./step-BTn_xVWj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wyY7R1ar.js";import"./Label-TzQ7qbgp.js";import"./Text-CP2PjM28.js";import"./DOMUtils-D8x8v_7W.js";import"./ZIndexLayer-D9Ef8fDH.js";import"./useAnimationId-B2JL6a3u.js";import"./ActivePoints-CRIrUZTw.js";import"./Dot-ki06ENMH.js";import"./RegisterGraphicalItemId-DWqGyRZG.js";import"./ErrorBarContext-CK5Inlk3.js";import"./GraphicalItemClipPath-ChEyBJAa.js";import"./SetGraphicalItem-DiTEFY4D.js";import"./getRadiusAndStrokeWidthFromDot-CVuDAoNN.js";import"./ActiveShapeUtils-PZHl54QD.js";import"./XAxis-CZyFu1IP.js";import"./CartesianAxis-5D6mywdN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CdCViLx5.js";import"./Legend-7_W2X7gA.js";import"./Symbols-Cv5yDpJ-.js";import"./symbol-DQfiD1hp.js";import"./useElementOffset-Ddd5eBYU.js";import"./uniqBy-B-PlV6wf.js";import"./iteratee-Cmxxp19p.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

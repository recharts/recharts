import{u as n,j as e}from"./index-nTro3BwP.js";import{M as o,C as h}from"./blocks-C1qizT8i.js";import{C as d,W as s}from"./dimensions.stories-DtwIv2f5.js";import"./iframe-BWKtkC3a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-dmgaO9Ns.js";import"./index-DnD7Y3-0.js";import"./index-BJ1rhnQo.js";import"./ChartSizeDimensions-CKjJHhyk.js";import"./zIndexSlice-CJYktc5S.js";import"./throttle-CSPVuwv0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSdxfhaa.js";import"./isWellBehavedNumber-Bx1-jT0B.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B4E8jNZy.js";import"./RechartsWrapper-BXQ1II60.js";import"./axisSelectors-4rRhJnZy.js";import"./d3-scale-BK7khyLD.js";import"./index-2yxEF-zg.js";import"./renderedTicksSlice-CkjOXsqY.js";import"./index-BdvYswuq.js";import"./CartesianChart-Ck046iEl.js";import"./chartDataContext-CHsw8eio.js";import"./CategoricalChart-CTjKdKoB.js";import"./Page-Cj8EiXz7.js";import"./Line-_xIPfQEK.js";import"./Layer-BW2neL7L.js";import"./Curve-DCrUUXgR.js";import"./types-DVYgZ5G0.js";import"./step-4b6-oj2z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DrPbLth3.js";import"./Label-3HnLAq9q.js";import"./Text-D6blVt8R.js";import"./DOMUtils-BR5iDZmA.js";import"./useId-Dtk37enT.js";import"./useBackwardsCompatibleTheme-ChHa43Fb.js";import"./ZIndexLayer-CAOggInk.js";import"./useAnimationId-DDNvTaoZ.js";import"./ActivePoints-UtB0KfzC.js";import"./Dot-j4FVDpMz.js";import"./RegisterGraphicalItemId-DgdLcRFp.js";import"./ErrorBarContext-CPaf1b78.js";import"./GraphicalItemClipPath-DnbnKIJy.js";import"./SetGraphicalItem-CkEmM5fN.js";import"./getRadiusAndStrokeWidthFromDot-CP4Q4sYB.js";import"./ActiveShapeUtils-BQlodlaC.js";import"./useGraphicalItemIdentity-hpl57a82.js";import"./XAxis-Beuqpq4u.js";import"./CartesianAxis-CjxgM0pW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Bjai06eq.js";import"./Legend-DO3vjskf.js";import"./Symbols-CFGGSQbZ.js";import"./symbol-C9rnqtm1.js";import"./useElementOffset-Dl9OEUY7.js";import"./uniqBy-jfG8v9oK.js";import"./iteratee-CcJpQkl8.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

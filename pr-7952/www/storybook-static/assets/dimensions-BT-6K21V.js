import{u as n,j as e}from"./index-Bv-UM3Hy.js";import{M as o,C as h}from"./blocks-C5QE9bHg.js";import{C as d,W as s}from"./dimensions.stories-xj_-lNnk.js";import"./iframe-W_agkVyV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./index-DIRpvxdg.js";import"./ChartSizeDimensions-CBCwlfQY.js";import"./zIndexSlice-CTdReD9p.js";import"./throttle-CA9ZAVQz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./isWellBehavedNumber-DiRVonYH.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C5TkesQ1.js";import"./RechartsWrapper-C3mPyrs7.js";import"./axisSelectors-6axja2Em.js";import"./d3-scale-HrkydzFI.js";import"./index-Dt83L4jz.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-BqSIxi03.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./Page-Cj8EiXz7.js";import"./Line-CHfdY4oG.js";import"./Layer-BtznfAPn.js";import"./Curve-BtaxSMiV.js";import"./types-CaM0OvRl.js";import"./step-DBl9LSRi.js";import"./path-DyVhHtw_.js";import"./activeStyles-BahHAzuq.js";import"./Label-ClOsex7o.js";import"./Text-BeEwTqv_.js";import"./pageBackground-BGxpKyNa.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";import"./ZIndexLayer-BRJamsEl.js";import"./useAnimationId-Bm_zuzY4.js";import"./dataEntryStyles-ubI82mtZ.js";import"./ActivePoints-BV4SsbUp.js";import"./Dot-DTv2KvAS.js";import"./ErrorBarContext-Bg5MlTZs.js";import"./GraphicalItemClipPath-eVqzfYHN.js";import"./SetGraphicalItem-MNgoA9Pf.js";import"./getRadiusAndStrokeWidthFromDot-HZaFqHia.js";import"./ActiveShapeUtils-Ba2JWET-.js";import"./useEffectiveDataKey-Bzuj7hT4.js";import"./XAxis-BMo9pONJ.js";import"./CartesianAxis-CPOh9De0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BF1PYNAy.js";import"./Legend-BtXzKbhi.js";import"./Symbols-CsmzfHDw.js";import"./symbol-Dglao2xo.js";import"./useElementOffset-DTnjneKq.js";import"./uniqBy-CNAIty-g.js";import"./iteratee-7xt3GUi6.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

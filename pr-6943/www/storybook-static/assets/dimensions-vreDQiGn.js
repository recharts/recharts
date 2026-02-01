import{j as e}from"./jsx-runtime-BQOUy_5x.js";import{useMDXComponents as n}from"./index-Cg7h6weo.js";import{M as h,C as o}from"./blocks-BM5Z35Eh.js";import{C as d,W as s}from"./dimensions.stories-Pig80Bij.js";import"./iframe-S3w8vazP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DLTKO4-0.js";import"./ChartSizeDimensions-DHpkkx7o.js";import"./arrayEqualityCheck-CVVcuOqH.js";import"./resolveDefaultProps-DUh5CxZw.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-Bs1sqtrj.js";import"./RechartsWrapper-BglxN53s.js";import"./hooks-BIoyKUdn.js";import"./axisSelectors-C9fo5mxJ.js";import"./zIndexSlice-C8yB0SjJ.js";import"./CartesianChart-Di7ZLiW9.js";import"./chartDataContext-C3H726Iv.js";import"./CategoricalChart-BpFyN0NS.js";import"./Line-B74ZxJWW.js";import"./Layer-Dpjv3Z7H.js";import"./ReactUtils-DdWnBm1Y.js";import"./Label-BFw783un.js";import"./Text-Ch2i1yLS.js";import"./DOMUtils-BYd--jqE.js";import"./ZIndexLayer-DtdorfOg.js";import"./ActivePoints-Dejn0HsJ.js";import"./Dot-Bjvjl7Nl.js";import"./types-46Crnp6z.js";import"./RegisterGraphicalItemId-B2X6SVeo.js";import"./ErrorBarContext-B0bCUlMx.js";import"./GraphicalItemClipPath-D9qCdAxL.js";import"./SetGraphicalItem-BpO8akWh.js";import"./useAnimationId-Pi9wCxwd.js";import"./getRadiusAndStrokeWidthFromDot-aysjhdrr.js";import"./ActiveShapeUtils-D5tQ5sxS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClBH0-aW.js";import"./Trapezoid-BgHkPCBK.js";import"./Sector-JtnSW-LM.js";import"./Symbols-DWbc74gd.js";import"./Curve-DzPn9elm.js";import"./XAxis-y9KwpsE4.js";import"./CartesianAxis-CWMaA0v8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BLaSPofG.js";import"./Legend-CY90PPf5.js";import"./useElementOffset-DsT0Vt7J.js";import"./iteratee-DBpy2Zkw.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};

import{j as e}from"./jsx-runtime-BQOUy_5x.js";import{useMDXComponents as r}from"./index-Cg7h6weo.js";import{M as o,C as s,a as p}from"./blocks-BM5Z35Eh.js";import{C as h}from"./useOffset.stories-CE_BMZ4I.js";import"./iframe-S3w8vazP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DLTKO4-0.js";import"./OffsetShower-By9PfpSa.js";import"./ChartSizeDimensions-DHpkkx7o.js";import"./arrayEqualityCheck-CVVcuOqH.js";import"./resolveDefaultProps-DUh5CxZw.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BIoyKUdn.js";import"./axisSelectors-C9fo5mxJ.js";import"./ComposedChart-Bs1sqtrj.js";import"./RechartsWrapper-BglxN53s.js";import"./zIndexSlice-C8yB0SjJ.js";import"./CartesianChart-Di7ZLiW9.js";import"./chartDataContext-C3H726Iv.js";import"./CategoricalChart-BpFyN0NS.js";import"./Line-B74ZxJWW.js";import"./Layer-Dpjv3Z7H.js";import"./ReactUtils-DdWnBm1Y.js";import"./Label-BFw783un.js";import"./Text-Ch2i1yLS.js";import"./DOMUtils-BYd--jqE.js";import"./ZIndexLayer-DtdorfOg.js";import"./ActivePoints-Dejn0HsJ.js";import"./Dot-Bjvjl7Nl.js";import"./types-46Crnp6z.js";import"./RegisterGraphicalItemId-B2X6SVeo.js";import"./ErrorBarContext-B0bCUlMx.js";import"./GraphicalItemClipPath-D9qCdAxL.js";import"./SetGraphicalItem-BpO8akWh.js";import"./useAnimationId-Pi9wCxwd.js";import"./getRadiusAndStrokeWidthFromDot-aysjhdrr.js";import"./ActiveShapeUtils-D5tQ5sxS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClBH0-aW.js";import"./Trapezoid-BgHkPCBK.js";import"./Sector-JtnSW-LM.js";import"./Symbols-DWbc74gd.js";import"./Curve-DzPn9elm.js";import"./XAxis-y9KwpsE4.js";import"./CartesianAxis-CWMaA0v8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BLaSPofG.js";import"./Legend-CY90PPf5.js";import"./useElementOffset-DsT0Vt7J.js";import"./iteratee-DBpy2Zkw.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(s,{of:void 0,layout:"padded"}),`
`,e.jsx(t.h2,{id:"description",children:"Description"}),`
`,e.jsx("p",{children:"Returns the offset of the chart in pixels."}),`
`,e.jsx("p",{children:e.jsx(t.p,{children:`Offset defines the blank space between the chart and the plot area. This blank space is occupied by supporting
elements like axes, legends, and brushes.`})}),`
`,e.jsx("p",{children:"The offset includes:"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Margins"}),e.jsx("li",{children:"Width and height of the axes"}),e.jsx("li",{children:"Width and height of the legend"}),e.jsx("li",{children:"Brush height"})]}),`
`,e.jsx("p",{children:"If you are interested in the margin alone, use useMargin instead."}),`
`,e.jsx("p",{children:e.jsx(t.p,{children:`The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or
resized.`})}),`
`,e.jsx("p",{children:e.jsx(t.p,{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out, the numbers will not change
as the chart gets visually larger or smaller.`})}),`
`,e.jsx("p",{children:e.jsxs(t.p,{children:["This hook must be used within a chart context (inside a ",e.jsx("code",{children:"<LineChart>"}),", ",e.jsx("code",{children:"<BarChart>"}),`,
etc.). This hook returns `,e.jsx("code",{children:"undefined"})," if used outside a chart context."]})}),`
`,e.jsx("p",{children:"Available since Recharts 3.1"}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(p,{of:void 0})]})}function se(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{se as default};

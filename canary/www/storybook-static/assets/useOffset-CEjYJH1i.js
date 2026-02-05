import{j as e}from"./jsx-runtime-DlaSrxEi.js";import{useMDXComponents as r}from"./index-B6Z7g-Ly.js";import{M as o,C as s,a as p}from"./blocks-Dgjf2UjC.js";import{C as h}from"./useOffset.stories-Dsx9tt6D.js";import"./iframe-DerYKIzi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Baa4xFqo.js";import"./OffsetShower-CcEDeZ1H.js";import"./ChartSizeDimensions-CJTC7XUM.js";import"./arrayEqualityCheck-BjVe0Fqi.js";import"./resolveDefaultProps-D_i-pIL4.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Bufm5eM3.js";import"./axisSelectors-D2mivk7c.js";import"./ComposedChart-DIipW_Ve.js";import"./RechartsWrapper-Dp6BNSyV.js";import"./zIndexSlice-Dl8TZiao.js";import"./CartesianChart-D0F_6B8F.js";import"./chartDataContext-BIeWUiZ4.js";import"./CategoricalChart-SAQ8s2cq.js";import"./Line-BHRwnsUf.js";import"./Layer-D3SGVv1F.js";import"./ReactUtils-C811ViG8.js";import"./Label-Dcc5xZ5Y.js";import"./Text-D2gYoFny.js";import"./DOMUtils-6QLScgDd.js";import"./ZIndexLayer-B4AZig9C.js";import"./ActivePoints-CnKH4Xhf.js";import"./Dot-B8Z8LHGX.js";import"./types-aH4hB60Y.js";import"./RegisterGraphicalItemId-55_HnQyg.js";import"./ErrorBarContext-B9auALKr.js";import"./GraphicalItemClipPath-nQyCcZZw.js";import"./SetGraphicalItem-y1gBA4Wm.js";import"./useAnimationId-Q_ju2aFP.js";import"./getRadiusAndStrokeWidthFromDot-JmC9apyq.js";import"./ActiveShapeUtils-BHypxLS_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2nS0zsop.js";import"./Trapezoid-BqTiWmsP.js";import"./Sector-KrvgbNAg.js";import"./Symbols-BsidgTnn.js";import"./Curve-HbHV5hCk.js";import"./XAxis-Bgvn5DCx.js";import"./CartesianAxis-CgnzR7dE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-D6MwvlMv.js";import"./Legend-oOwdWAco.js";import"./useElementOffset-BQTTbTDB.js";import"./iteratee-B5c8PfHS.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

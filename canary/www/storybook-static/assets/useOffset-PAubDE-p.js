import{j as e}from"./jsx-runtime-DOHObFrQ.js";import{useMDXComponents as r}from"./index-D1ryuIj7.js";import{M as o,C as s,a as p}from"./blocks-CeUpSbUC.js";import{C as h}from"./useOffset.stories-B2yc-HHt.js";import"./iframe-b3l0oylc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKFod4yn.js";import"./OffsetShower-DDSZRjCY.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./arrayEqualityCheck-CjMmMQbn.js";import"./resolveDefaultProps-DcvR48Du.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./ComposedChart-Ci_ymdae.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./zIndexSlice-6dxWRD0w.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./Line-wmhGAa8E.js";import"./Layer-2yxRimi5.js";import"./ReactUtils-BwdRCLdj.js";import"./Label-DllavO7s.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./ZIndexLayer-CtStE837.js";import"./ActivePoints-DgMTYwE1.js";import"./Dot-CRE9dNM4.js";import"./types-DcS7TQb1.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./ErrorBarContext-4m-euoOZ.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./useAnimationId-DdymZr7z.js";import"./getRadiusAndStrokeWidthFromDot-BXhx89qn.js";import"./ActiveShapeUtils-S04EWH8U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDSw7OX0.js";import"./Trapezoid-DOQrObtz.js";import"./Sector-BhL684me.js";import"./Symbols-CncGFVbc.js";import"./Curve-1kQ3M0AJ.js";import"./XAxis-DQI4GC2q.js";import"./CartesianAxis-BaEBZn5E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DBt_3tXp.js";import"./Legend-lYl_YH7_.js";import"./useElementOffset-DmRsiLis.js";import"./iteratee-iYPIXGSq.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

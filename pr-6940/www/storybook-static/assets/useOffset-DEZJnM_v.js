import{j as e}from"./jsx-runtime-CQvYWa6q.js";import{useMDXComponents as r}from"./index-CDgPl6-y.js";import{M as o,C as s,a as p}from"./blocks-CdIhFSnh.js";import{C as h}from"./useOffset.stories-CVv_tnsL.js";import"./iframe-C0b843bJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lXdD0Nzr.js";import"./OffsetShower-1eskoS1A.js";import"./ChartSizeDimensions-DcGIh6Y9.js";import"./arrayEqualityCheck-Cbemodpd.js";import"./resolveDefaultProps-DhRhZ63O.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-dTw7M1vz.js";import"./axisSelectors-qWILVFYf.js";import"./ComposedChart-E69Ihgri.js";import"./RechartsWrapper-CO19iou7.js";import"./zIndexSlice-B8FeRzdW.js";import"./CartesianChart-7cy0WoRj.js";import"./chartDataContext-Btc_iGmV.js";import"./CategoricalChart-Bd7xSF-i.js";import"./Line-CONzMbmN.js";import"./Layer-purCCvV2.js";import"./ReactUtils-BUf380BK.js";import"./Label-2fZ2yvU7.js";import"./Text-rJUU6KZ4.js";import"./DOMUtils-C0s6ZPvi.js";import"./ZIndexLayer-_DstmVXN.js";import"./ActivePoints-CAaIfO7d.js";import"./Dot-Cu4RS_WI.js";import"./types-B5P-qikU.js";import"./RegisterGraphicalItemId-BWOfQp6C.js";import"./ErrorBarContext-CEzzcyRd.js";import"./GraphicalItemClipPath-BXQrJ9Pv.js";import"./SetGraphicalItem-BrMK-Pyd.js";import"./useAnimationId-D7FQIEyi.js";import"./getRadiusAndStrokeWidthFromDot-lRyTFf8t.js";import"./ActiveShapeUtils-BcJOrbCg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4tB6UmQ.js";import"./Trapezoid-CtFJUH4H.js";import"./Sector-C0mFPEM4.js";import"./Symbols-C_e-ILSN.js";import"./Curve-Bs2FAeTM.js";import"./XAxis-ARyNq3Ww.js";import"./CartesianAxis-By4zoTN4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DsEQlDV3.js";import"./Legend-CFViJuik.js";import"./useElementOffset-BImbuk4D.js";import"./iteratee-DzRKZnWZ.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

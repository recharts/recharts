import{j as e}from"./jsx-runtime--i8onJxV.js";import{useMDXComponents as o}from"./index-QKALeE7T.js";import{M as r,C as s,a as p}from"./blocks-BJocNxsd.js";import{C as h}from"./useOffset.stories-OSyL7RIK.js";import"./iframe-CoxmJKyj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjMwiY7v.js";import"./OffsetShower-BIEGpqN_.js";import"./ChartSizeDimensions-CtAc8nGI.js";import"./arrayEqualityCheck-BiMa-XSg.js";import"./resolveDefaultProps-sn4NzjIu.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-C3tSBkhO.js";import"./axisSelectors-Cx1Cm9h8.js";import"./ComposedChart-CnWrvDY-.js";import"./RechartsWrapper-BeGnBw32.js";import"./zIndexSlice-BS5hTNaN.js";import"./CartesianChart-TnRBDpKI.js";import"./chartDataContext-88-zaTIw.js";import"./CategoricalChart-CyysacNR.js";import"./Line-BdzKDbXD.js";import"./Layer-FnVtSY9f.js";import"./ReactUtils-DelGq7vW.js";import"./Label-BaauyrMN.js";import"./Text-CbKrSYiu.js";import"./DOMUtils-p48KsCFt.js";import"./ZIndexLayer-C9Rpc0HU.js";import"./ActivePoints-D0nFSc_H.js";import"./Dot-BifkMnm9.js";import"./types-VgYnwRoj.js";import"./RegisterGraphicalItemId-CJCmzU4Y.js";import"./ErrorBarContext-Ce5dqlrV.js";import"./GraphicalItemClipPath-B39q-JPL.js";import"./SetGraphicalItem-_WwZUCgQ.js";import"./useAnimationId-DMb1Vy6w.js";import"./getRadiusAndStrokeWidthFromDot-k8J8eAkm.js";import"./ActiveShapeUtils-DHfcpEHc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KCszVTMh.js";import"./Trapezoid-CHWx_77j.js";import"./Sector-De_XHewT.js";import"./Symbols-3p0hcDOB.js";import"./Curve-BcGu8BmK.js";import"./XAxis-ByfqRbuq.js";import"./CartesianAxis-C3XzKlXq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CBdXzckK.js";import"./Legend-D_gOoCGt.js";import"./useElementOffset-lvwsgQgc.js";import"./iteratee-BEESgXf_.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s,{of:void 0,layout:"padded"}),`
`,e.jsx(i.h2,{id:"description",children:"Description"}),`
`,e.jsx("p",{children:"Returns the offset of the chart in pixels."}),`
`,e.jsx("p",{children:`Offset defines the blank space between the chart and the plot area.
This blank space is occupied by supporting elements like axes, legends, and brushes.`}),`
`,e.jsx("p",{children:"The offset includes:"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Margins"}),e.jsx("li",{children:"Width and height of the axes"}),e.jsx("li",{children:"Width and height of the legend"}),e.jsx("li",{children:"Brush height"})]}),`
`,e.jsx("p",{children:"If you are interested in the margin alone, use useMargin instead."}),`
`,e.jsx("p",{children:"The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized."}),`
`,e.jsx("p",{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out,
the numbers will not change as the chart gets visually larger or smaller.`}),`
`,e.jsxs("p",{children:["This hook must be used within a chart context (inside a ",e.jsx("code",{children:"<LineChart>"}),", ",e.jsx("code",{children:"<BarChart>"}),`, etc.).
This hook returns `,e.jsx("code",{children:"undefined"})," if used outside a chart context."]}),`
`,e.jsx("p",{children:"Available since Recharts 3.1"}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(p,{of:void 0})]})}function se(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{se as default};

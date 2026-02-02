import{j as e}from"./jsx-runtime-ZKX-0IvB.js";import{useMDXComponents as r}from"./index-CQQ-XKiP.js";import{M as o,C as s,a as p}from"./blocks-D-bxKn4u.js";import{C as h}from"./useOffset.stories-DTCO4MOP.js";import"./iframe-CBadok3R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AunjJ6Z9.js";import"./OffsetShower-Dh3F56nH.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./arrayEqualityCheck-D8DZf4E7.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CvcnYJr5.js";import"./axisSelectors-7aa3p4xy.js";import"./ComposedChart-Dc_UJsoP.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./zIndexSlice-Cb0fYcD4.js";import"./CartesianChart-DhdNdBtI.js";import"./chartDataContext-PjfwFb0T.js";import"./CategoricalChart-DgHJ04hm.js";import"./Line-vL2LKnJQ.js";import"./Layer-CZpxdYtD.js";import"./ReactUtils-BQuPA_dW.js";import"./Label-B9arnFZu.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./ZIndexLayer-gNsJWqo_.js";import"./ActivePoints-C4zMx6Rr.js";import"./Dot-D8cjCII1.js";import"./types-D0Nc3U-x.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./ErrorBarContext-DNzUHuOB.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./useAnimationId-DFBNL1tZ.js";import"./getRadiusAndStrokeWidthFromDot-B43QJ_Z5.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./Symbols-mEW1LXrD.js";import"./Curve-D-ytcwuR.js";import"./XAxis-CuDJTYDf.js";import"./CartesianAxis-BWCbP_kU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CkBODHFa.js";import"./Legend-_sja8EIY.js";import"./useElementOffset-CRBaCWHR.js";import"./iteratee-9Y6z12tH.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

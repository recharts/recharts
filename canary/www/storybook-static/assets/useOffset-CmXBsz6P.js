import{j as e}from"./jsx-runtime-B4evxZC5.js";import{useMDXComponents as o}from"./index-g5jvKK9i.js";import{M as r,C as s,a as p}from"./blocks-DKVa1zlC.js";import{C as h}from"./useOffset.stories-DLVfvveS.js";import"./iframe-Byw-Ecda.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bq4G09kn.js";import"./OffsetShower-BbVu_iXB.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./arrayEqualityCheck-DJZ_H245.js";import"./resolveDefaultProps-DghbljUc.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CRVJYPCv.js";import"./axisSelectors-CfRyBf_k.js";import"./ComposedChart-CAduK1a5.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./zIndexSlice-BBcvffed.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./CategoricalChart-Dg1jHZIf.js";import"./Line-DgOW2saj.js";import"./Layer-BCc3Ql-7.js";import"./ReactUtils-Cjy_uT2w.js";import"./Label-BqnP7yRk.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./ZIndexLayer-CyfG8XIl.js";import"./ActivePoints-CxQ9IJdy.js";import"./Dot-DJVqn8HA.js";import"./types-C-BvOMCj.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./ErrorBarContext-Cl5G60_X.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./useAnimationId-QmVedw8X.js";import"./getRadiusAndStrokeWidthFromDot-1lozLBiZ.js";import"./ActiveShapeUtils-Dp9WPNg-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cx7cLZFF.js";import"./Trapezoid-CmsPiWji.js";import"./Sector-DvNfR6cX.js";import"./Symbols-BEvrU7lm.js";import"./Curve-Dgc9kazX.js";import"./XAxis-DKuVnBhX.js";import"./CartesianAxis-C435YXcQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CD7xJu8W.js";import"./Legend-BSRpbxl-.js";import"./useElementOffset-74fnwz2l.js";import"./iteratee-CQ84vpct.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

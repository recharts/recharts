import{j as e}from"./jsx-runtime-BD-WEGcu.js";import{useMDXComponents as o}from"./index-CtRL42xd.js";import{M as r,C as s,a as p}from"./blocks-C1-2gEDd.js";import{C as h}from"./useOffset.stories-Ca5bWeED.js";import"./iframe-BQPEMrXd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIjwufBA.js";import"./OffsetShower-DTE5GBb5.js";import"./ChartSizeDimensions-CVrNRa4B.js";import"./arrayEqualityCheck-CslLKJ6H.js";import"./resolveDefaultProps-BDNWBHNP.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Bdj8JxEZ.js";import"./axisSelectors-CtzL1lJc.js";import"./ComposedChart-CWFkdeSx.js";import"./RechartsWrapper-DACGaUhd.js";import"./zIndexSlice-CdQy2W3n.js";import"./CartesianChart-BMe1DD5u.js";import"./chartDataContext-Bf7gL6YI.js";import"./CategoricalChart-Do_dOtlr.js";import"./Line-8JUB1lNz.js";import"./Layer-DxbBzKq7.js";import"./ReactUtils-Ctv4TrHD.js";import"./Label-CJDR703l.js";import"./Text-40tQThuO.js";import"./DOMUtils-CBEPLavF.js";import"./ZIndexLayer-BhdUGqn6.js";import"./ActivePoints-CBPMI_KV.js";import"./Dot-Dad_gt4k.js";import"./types-BQWi4mRQ.js";import"./RegisterGraphicalItemId-DGfNttgy.js";import"./ErrorBarContext-DCh3UuB4.js";import"./GraphicalItemClipPath-BhozllE_.js";import"./SetGraphicalItem-Dib0kNEx.js";import"./useAnimationId-BxGZeVYE.js";import"./getRadiusAndStrokeWidthFromDot-DDWPUI43.js";import"./ActiveShapeUtils-BLcBZx_i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmEiGd0_.js";import"./Trapezoid-uvUeJozR.js";import"./Sector-gJW5kDSo.js";import"./Symbols-zJ2C1Rrw.js";import"./Curve-CkSquOYK.js";import"./XAxis-mF1pALMt.js";import"./CartesianAxis-CNEc1nbZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CIcAGIvo.js";import"./Legend-25dK6D8H.js";import"./useElementOffset-CQ61oo7Y.js";import"./iteratee-Bw969CDs.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

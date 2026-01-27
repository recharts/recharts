import{j as e}from"./jsx-runtime-I9L8lrv5.js";import{useMDXComponents as o}from"./index-08dGANYb.js";import{M as r,C as s,a as p}from"./blocks-B7jlDFe9.js";import{C as h}from"./useOffset.stories-BCZ18w79.js";import"./iframe-DwqRYk2I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B__3XDnp.js";import"./OffsetShower-CMnq-Zau.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./arrayEqualityCheck-DgzFlSOI.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./ComposedChart-CeV-pGSf.js";import"./RechartsWrapper-C7VpHEZH.js";import"./zIndexSlice-CZHcI390.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./Line-C1vhcH5u.js";import"./Layer-CKGvS6fh.js";import"./ReactUtils-CSQ_QEna.js";import"./Label-BBrY7asM.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./ZIndexLayer-14WaUFCY.js";import"./ActivePoints-DqfquW36.js";import"./Dot-NTY7DyyV.js";import"./types-DQBQm6yM.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./ErrorBarContext-DWBN2nFH.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./useAnimationId-BgtwKRIK.js";import"./getRadiusAndStrokeWidthFromDot-JPp-nKPZ.js";import"./ActiveShapeUtils-DqRUZVTG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bp9O5e-s.js";import"./Trapezoid-DufcdAFp.js";import"./Sector-0XUVx_Z1.js";import"./Symbols--4uQfBg4.js";import"./Curve-MGg7iv1Z.js";import"./XAxis-Cyh_YOcY.js";import"./CartesianAxis-0yio1lEn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-QYWka3EJ.js";import"./Legend-C5eJuXMe.js";import"./useElementOffset-BIde8PX1.js";import"./iteratee-Czloof4i.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

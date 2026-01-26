import{j as e}from"./jsx-runtime-DoNBrXlS.js";import{useMDXComponents as o}from"./index-D_QnqnjR.js";import{M as r,C as s,a as p}from"./blocks-DrsSeHfZ.js";import{C as h}from"./useOffset.stories-fmwtuT77.js";import"./iframe-BfI_ST9A.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ChuKY9XN.js";import"./OffsetShower-SG_pY0kd.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./arrayEqualityCheck-Dpn6Yh1q.js";import"./resolveDefaultProps-AaslCT8i.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DvK6IaUs.js";import"./axisSelectors-DDmdM9p6.js";import"./ComposedChart-C5RXmCa-.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./zIndexSlice-DXwF7pA6.js";import"./CartesianChart-DXCnOxpF.js";import"./chartDataContext-CeBJp2Px.js";import"./CategoricalChart-DD3vhlwU.js";import"./Line-DGppnglh.js";import"./Layer-Y7LjbTmX.js";import"./ReactUtils-DCNpXtNn.js";import"./Label-bNYHk-eM.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./ZIndexLayer-BqmPWyE4.js";import"./ActivePoints-2nVhg-uB.js";import"./Dot-4aiHSk1j.js";import"./types-C63RoX8s.js";import"./RegisterGraphicalItemId-B5NRYeBm.js";import"./ErrorBarContext-Dkb4HGWS.js";import"./GraphicalItemClipPath-Dc-fHHFr.js";import"./SetGraphicalItem-CI8DucV2.js";import"./useAnimationId-COKmXqbi.js";import"./getRadiusAndStrokeWidthFromDot-gYu2i8Au.js";import"./ActiveShapeUtils-DHutry9j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClKhcP1j.js";import"./Trapezoid-BD9djYD6.js";import"./Sector-65rnMIz8.js";import"./Symbols-BZnP9syB.js";import"./Curve-CQI60C70.js";import"./XAxis-BmtgQOLB.js";import"./CartesianAxis-DmSsZovB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DTgMZjXd.js";import"./Legend-DSv1DviZ.js";import"./useElementOffset-B9zSC1oG.js";import"./iteratee-BtHt7oJb.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

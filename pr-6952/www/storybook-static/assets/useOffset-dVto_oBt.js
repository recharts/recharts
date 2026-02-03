import{j as e}from"./jsx-runtime-812x3qrY.js";import{useMDXComponents as r}from"./index-Dk-7Siqm.js";import{M as o,C as s,a as p}from"./blocks-Xo8jHJUc.js";import{C as h}from"./useOffset.stories-uWIZl-Pm.js";import"./iframe-ildNGUcB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bl4fk5Ry.js";import"./OffsetShower-DLkMsMHT.js";import"./ChartSizeDimensions-DAfFC157.js";import"./arrayEqualityCheck-DoW--ad2.js";import"./resolveDefaultProps-D_1HjOLi.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-B29HBlTR.js";import"./axisSelectors-5o1CXUr3.js";import"./ComposedChart-DO5A4L0f.js";import"./RechartsWrapper-BhDWMvuB.js";import"./zIndexSlice-D5G-T-vj.js";import"./CartesianChart-042kikpZ.js";import"./chartDataContext-Bqk6xP9U.js";import"./CategoricalChart-C6m-VrJe.js";import"./Line-Cn-oM2ey.js";import"./Layer-C1Vpqy4i.js";import"./ReactUtils-DZ7Bf0_2.js";import"./Label-hP_NWlrR.js";import"./Text-BJp862GC.js";import"./DOMUtils-BS9doNjR.js";import"./ZIndexLayer-Dxr4KK3S.js";import"./ActivePoints-VRWpag3q.js";import"./Dot-BbvpQGB8.js";import"./types-C_F-U0PG.js";import"./RegisterGraphicalItemId-cvEVRPza.js";import"./ErrorBarContext-Bjz9qEy8.js";import"./GraphicalItemClipPath-Cuzcod5_.js";import"./SetGraphicalItem-DnK5n2LJ.js";import"./useAnimationId-BnV1d9M_.js";import"./getRadiusAndStrokeWidthFromDot-DZOYBeyk.js";import"./ActiveShapeUtils-BXCOQYub.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dt6Qepe_.js";import"./Trapezoid-BeDQjyAm.js";import"./Sector-0N1SRZV_.js";import"./Symbols-DUzk_pf6.js";import"./Curve-C50TS3eJ.js";import"./XAxis-BpmpMVxP.js";import"./CartesianAxis-BT55_pa3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CynyduVr.js";import"./Legend-CoVLDyKg.js";import"./useElementOffset-BYF9do47.js";import"./iteratee-Dd1-lgM9.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

import{j as e}from"./jsx-runtime-5SCZrT7n.js";import{useMDXComponents as o}from"./index-txfl7j83.js";import{M as r,C as s,a as p}from"./blocks-D5VU1LIP.js";import{C as h}from"./useOffset.stories-CL5Lr5H9.js";import"./iframe-BGOJmNjB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CbiKP7W2.js";import"./OffsetShower-CQ-BgPhh.js";import"./ChartSizeDimensions-DlrFd0zO.js";import"./arrayEqualityCheck-BjRvnt0s.js";import"./resolveDefaultProps-BSJBVX4C.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Nz6DJ1YN.js";import"./axisSelectors-Lz_2OI8_.js";import"./ComposedChart-DGq6XYiu.js";import"./RechartsWrapper-h16g3EQQ.js";import"./zIndexSlice-DAfFf7yA.js";import"./CartesianChart-OgoW6u2Y.js";import"./chartDataContext-aYFPQGqf.js";import"./CategoricalChart-DgJaNq2v.js";import"./Line-BD6OPy20.js";import"./Layer-LxxzUP-k.js";import"./ReactUtils-BB1AONhv.js";import"./Label-Bv9s524x.js";import"./Text-BhvB3_o-.js";import"./DOMUtils-CB_Ew6lr.js";import"./ZIndexLayer-4QAOL5IQ.js";import"./ActivePoints-Cito15fk.js";import"./Dot-L7IF6gmL.js";import"./types-DLAnyyDj.js";import"./RegisterGraphicalItemId-BpPOmR2M.js";import"./ErrorBarContext-5jw4fggF.js";import"./GraphicalItemClipPath-CldBUZWH.js";import"./SetGraphicalItem-CMM_HPdn.js";import"./useAnimationId-G8K3lY41.js";import"./getRadiusAndStrokeWidthFromDot-haPIcnOU.js";import"./ActiveShapeUtils-DNGFFUmc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChTFz8xc.js";import"./Trapezoid-DXqtA9Y7.js";import"./Sector-Bdq99Tgd.js";import"./Symbols-NLXHxAGu.js";import"./Curve-Bf5GHIVx.js";import"./XAxis-CH74Oy12.js";import"./CartesianAxis-CTaqfxTH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BYgICbJJ.js";import"./Legend-DeXNp1Dk.js";import"./useElementOffset-Dfmg7vr2.js";import"./iteratee-BGQoj0hh.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

import{j as e}from"./jsx-runtime-UIXbJy2p.js";import{useMDXComponents as o}from"./index-Cse-BH3X.js";import{M as r,C as s,a as p}from"./blocks-Dbn4BluL.js";import{C as h}from"./useOffset.stories-RQmdENKI.js";import"./iframe-IlsB_rJq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bb2whpql.js";import"./OffsetShower-CdxkHZVP.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./arrayEqualityCheck-DRku3AZG.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DcodrmVZ.js";import"./axisSelectors-DKjWCzWL.js";import"./ComposedChart-CyYwEyzP.js";import"./RechartsWrapper-C3UkR7qf.js";import"./zIndexSlice-CKbt9tj5.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./CategoricalChart-Bh-A6rTf.js";import"./Line-CDm7gB2t.js";import"./Layer-vBbFq665.js";import"./ReactUtils-Pssbr3N2.js";import"./Label-DZIMKlIj.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./ZIndexLayer-9CrWluzk.js";import"./ActivePoints-Cr8soWVC.js";import"./Dot-BxXnrLYt.js";import"./types-tqXwELcn.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./ErrorBarContext-XG0EPrx-.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./useAnimationId-Bms0uFs7.js";import"./getRadiusAndStrokeWidthFromDot-De11iLXV.js";import"./ActiveShapeUtils-Cv3IrxQk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxgUhFQy.js";import"./Trapezoid-CcrDALRL.js";import"./Sector-D5hYxMFM.js";import"./Symbols-DKmDvY-C.js";import"./Curve-BktJTjWe.js";import"./XAxis-BQuXAPTr.js";import"./CartesianAxis-SxT37-Os.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-454ehxbM.js";import"./Legend-BG2d7PVa.js";import"./useElementOffset-CdX39lF8.js";import"./iteratee-wUxeLBjz.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

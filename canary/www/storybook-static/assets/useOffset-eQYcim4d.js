import{j as e}from"./jsx-runtime-CXC5Ic1E.js";import{useMDXComponents as o}from"./index-yPWOFaH1.js";import{M as r,C as s,a as p}from"./blocks-B1INJgKo.js";import{C as h}from"./useOffset.stories--g3CgaCF.js";import"./iframe-D1Hwi0RI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BkDkQzlc.js";import"./OffsetShower-7LYmniyx.js";import"./ChartSizeDimensions-CUepdASc.js";import"./arrayEqualityCheck-DQEOD_zw.js";import"./resolveDefaultProps-Bz6XhQRL.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CSIs-51X.js";import"./axisSelectors-GEJN5kco.js";import"./ComposedChart-DgxcfSQu.js";import"./RechartsWrapper-CXtEZB_H.js";import"./zIndexSlice-D8jnnygc.js";import"./CartesianChart-Dc2mELGa.js";import"./chartDataContext-GCfI3aAK.js";import"./CategoricalChart-DQ6b8iW8.js";import"./Line-DpHBAjCF.js";import"./Layer-Di0VROrF.js";import"./ReactUtils-hNtx3_VI.js";import"./Label-Bb86ILB8.js";import"./Text-DLOnQ8zM.js";import"./DOMUtils-dbB3jEW_.js";import"./ZIndexLayer-By5F7TF9.js";import"./ActivePoints-DbTDI5Wq.js";import"./Dot-BxaODjLb.js";import"./types-C-uSS9Dl.js";import"./RegisterGraphicalItemId-Pd4SqxWN.js";import"./ErrorBarContext-DWrqh2-_.js";import"./GraphicalItemClipPath-Ba1a27e_.js";import"./SetGraphicalItem-DLoBPGEI.js";import"./useAnimationId-CwGlJXjy.js";import"./getRadiusAndStrokeWidthFromDot-CJ731Roi.js";import"./ActiveShapeUtils-CoHlE8BH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-YjLZgqxG.js";import"./Trapezoid-CD3SuCZk.js";import"./Sector-Dr9-p71P.js";import"./Symbols-0go88kKd.js";import"./Curve-CF532csu.js";import"./XAxis-BuTZpXCP.js";import"./CartesianAxis-CyxUGwT-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Bdw8XaXe.js";import"./Legend--HvhgAdS.js";import"./useElementOffset-C88bX5-D.js";import"./iteratee-CzoMm9Y3.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

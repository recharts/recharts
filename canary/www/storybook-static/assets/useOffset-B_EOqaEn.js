import{j as e}from"./jsx-runtime-DO35SsBJ.js";import{useMDXComponents as o}from"./index-CtihkLPt.js";import{M as r,C as s,a as p}from"./blocks-BboiZT-H.js";import{C as h}from"./useOffset.stories-C82Atf9A.js";import"./iframe-B_h1eZxb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-iiBRXnxx.js";import"./OffsetShower-DZ8KqkSb.js";import"./ChartSizeDimensions-KhnO1Uhi.js";import"./arrayEqualityCheck-BQ7vn4Fs.js";import"./resolveDefaultProps-B1vNlzd5.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-tOZxoK0e.js";import"./axisSelectors-BH0L-ggM.js";import"./ComposedChart-DmYHdEo-.js";import"./RechartsWrapper-GoD8D7jd.js";import"./zIndexSlice-DBtbpS_b.js";import"./CartesianChart-BDgEI9ov.js";import"./chartDataContext-BQaQDl0i.js";import"./CategoricalChart-Ba1gSjPg.js";import"./Line-DqbVJ-Iu.js";import"./Layer-YFSiP5O_.js";import"./ReactUtils-DsQBac2C.js";import"./Label-B4qm1C3r.js";import"./Text-3ZnKfMzL.js";import"./DOMUtils-CPt0eNTU.js";import"./ZIndexLayer-O03ayMNB.js";import"./ActivePoints-BWqrE6Pi.js";import"./Dot-5EH031rg.js";import"./types-DbDrWtQW.js";import"./RegisterGraphicalItemId-DWqCI4mY.js";import"./ErrorBarContext-hJIAPStP.js";import"./GraphicalItemClipPath-CYkgNVtV.js";import"./SetGraphicalItem-BXR0TSlG.js";import"./useAnimationId-BJhibfpC.js";import"./getRadiusAndStrokeWidthFromDot-B64kjpoC.js";import"./ActiveShapeUtils-CedxEX3v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EuLtLzS8.js";import"./Trapezoid-CJEFZDfs.js";import"./Sector-CFscv7k5.js";import"./Symbols-3gLai2FA.js";import"./Curve-BIskmgLq.js";import"./XAxis-Mxp9ktjo.js";import"./CartesianAxis-DOEAGTwm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DgW-EgkF.js";import"./Legend-CyfSve0g.js";import"./useElementOffset-C7pRLK6G.js";import"./iteratee-JecoT9nP.js";import"./Page-Cj8EiXz7.js";function n(t){const i={h1:"h1",h2:"h2",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"useoffset",children:"useOffset"}),`
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

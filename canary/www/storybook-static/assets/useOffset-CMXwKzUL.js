import{j as e}from"./jsx-runtime-DiPmrdb8.js";import{useMDXComponents as r}from"./index-C-93G_c1.js";import{M as o,C as s,a as p}from"./blocks-D_sxn7i9.js";import{C as h}from"./useOffset.stories-DNlHol7E.js";import"./iframe-Isp5DByQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DhR5oTPc.js";import"./OffsetShower-34zfbzoW.js";import"./ChartSizeDimensions-CbTBC7na.js";import"./arrayEqualityCheck-DcSZTGrK.js";import"./resolveDefaultProps-CktQcWs0.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CPGRTKzd.js";import"./axisSelectors-DKneri-4.js";import"./ComposedChart-8E_kMa2M.js";import"./RechartsWrapper-DJiHoXCP.js";import"./zIndexSlice-Kir1u83y.js";import"./CartesianChart-Ad36dtSp.js";import"./chartDataContext-CCLXwYwB.js";import"./CategoricalChart-Cd3v81B-.js";import"./Line-iXWiESHH.js";import"./Layer-BzTi7EcX.js";import"./ReactUtils-BG9wPH-d.js";import"./Label-BIeSPvzh.js";import"./Text-B3hJnr-O.js";import"./DOMUtils-DDV6GWvc.js";import"./ZIndexLayer-B7yLevK6.js";import"./ActivePoints-CEokwuvu.js";import"./Dot-CxDulsX9.js";import"./types-BUXZfUBK.js";import"./RegisterGraphicalItemId-C0G4e2t3.js";import"./ErrorBarContext-CqPa7Fo7.js";import"./GraphicalItemClipPath-DhI7dbsH.js";import"./SetGraphicalItem-CEyRhP7A.js";import"./useAnimationId-BH36Yv-4.js";import"./getRadiusAndStrokeWidthFromDot-DQQ1a1Ar.js";import"./ActiveShapeUtils-Ch4UNesV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMTNFeQ6.js";import"./Trapezoid-BhaWvkYr.js";import"./Sector-DXk8yocg.js";import"./Symbols-CRejWEVT.js";import"./Curve-BVujXptJ.js";import"./XAxis-DbS-5SMi.js";import"./CartesianAxis-CtKR5av8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Earp8u6b.js";import"./Legend-DLS_raL_.js";import"./useElementOffset-CNEWPoc2.js";import"./iteratee-BCfRLSuG.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

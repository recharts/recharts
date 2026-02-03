import{j as e}from"./jsx-runtime-BPRO0oCx.js";import{useMDXComponents as r}from"./index-CmYRjRic.js";import{M as o,C as s,a as p}from"./blocks-Dxvo9Xbe.js";import{C as h}from"./useOffset.stories-DPpjqc-Y.js";import"./iframe-BnXWjslm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BDMR2Hui.js";import"./OffsetShower-CSNclTFq.js";import"./ChartSizeDimensions-DTPwYyQJ.js";import"./arrayEqualityCheck-DUiNH6C9.js";import"./resolveDefaultProps-UG4fDJsJ.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-06paRXDN.js";import"./axisSelectors-R9DAlT6p.js";import"./ComposedChart-DYkYyYwm.js";import"./RechartsWrapper-BfUKOtD7.js";import"./zIndexSlice-p0C6ErDf.js";import"./CartesianChart-CyZ2OCbR.js";import"./chartDataContext-BqTaz2vx.js";import"./CategoricalChart-C3XXqFmy.js";import"./Line-BPeNZJ5S.js";import"./Layer-A6Fuc82i.js";import"./ReactUtils-R08Tgf5F.js";import"./Label-Znit4TkG.js";import"./Text-CJLcOIOl.js";import"./DOMUtils-DE1nvb87.js";import"./ZIndexLayer-BvBrZyR1.js";import"./ActivePoints-C3JJMy4k.js";import"./Dot-D3x_k9xg.js";import"./types-TTX5RUO9.js";import"./RegisterGraphicalItemId-CW94G04M.js";import"./ErrorBarContext-CDqLcMo6.js";import"./GraphicalItemClipPath--41PL7k1.js";import"./SetGraphicalItem-jWEfPCy0.js";import"./useAnimationId-cDAtDGt9.js";import"./getRadiusAndStrokeWidthFromDot-QVWsL0nH.js";import"./ActiveShapeUtils-B_6IBG-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DiN3KyDm.js";import"./Trapezoid-DoyDZqd_.js";import"./Sector-CE4yIiKS.js";import"./Symbols-yqo_ZORc.js";import"./Curve-Bkc50DRF.js";import"./XAxis-CmdVCSMA.js";import"./CartesianAxis-RUdXwPBb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B7_xgRPt.js";import"./Legend-DQuskGTn.js";import"./useElementOffset-Da6MIgAg.js";import"./iteratee-xPJqHmHf.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

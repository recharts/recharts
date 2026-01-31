import{j as e}from"./jsx-runtime-CC0novw7.js";import{useMDXComponents as r}from"./index-BCkpboEX.js";import{M as o,C as s,a as p}from"./blocks-CuM-stmw.js";import{C as h}from"./useOffset.stories-C9vAfMif.js";import"./iframe-BsuuU2ac.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhAql3N3.js";import"./OffsetShower-BRn6lv3J.js";import"./ChartSizeDimensions-DrD8f1Su.js";import"./arrayEqualityCheck-BjO3Er2E.js";import"./resolveDefaultProps-saNtUn-1.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-k3ZaWThG.js";import"./axisSelectors-jwf3irWh.js";import"./ComposedChart-CPJ4puZ0.js";import"./RechartsWrapper-BH32z_Kk.js";import"./zIndexSlice-Bir2u6Kx.js";import"./CartesianChart-CfWYFhMG.js";import"./chartDataContext-C2F3ksi1.js";import"./CategoricalChart-nOJreIrp.js";import"./Line-DjevUKl6.js";import"./Layer-DM57kvBs.js";import"./ReactUtils-D7uw0LSD.js";import"./Label-DXc_GGWc.js";import"./Text-Bg2YicUS.js";import"./DOMUtils-oSkPNF4I.js";import"./ZIndexLayer-DAoCiEXG.js";import"./ActivePoints-C8qSTMe2.js";import"./Dot-C89l6B9O.js";import"./types-DmRJx57M.js";import"./RegisterGraphicalItemId-DrCtvza9.js";import"./ErrorBarContext-CA3TWQkR.js";import"./GraphicalItemClipPath-CSReekSQ.js";import"./SetGraphicalItem-asJ_Ikn_.js";import"./useAnimationId-WGg8-jRM.js";import"./getRadiusAndStrokeWidthFromDot-Dsdre15A.js";import"./ActiveShapeUtils-Drd0OeIB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D5Cka5hS.js";import"./Trapezoid-Ds5p844S.js";import"./Sector-CZIlwJfI.js";import"./Symbols-CcIdb3bs.js";import"./Curve-C6_JEQin.js";import"./XAxis-CsIw1iGz.js";import"./CartesianAxis-CECRCtr2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BTKigBpk.js";import"./Legend-BeaGcWNT.js";import"./useElementOffset-HAHdxBZO.js";import"./iteratee-DhvHonxm.js";import"./Page-Cj8EiXz7.js";function n(i){const t={h1:"h1",h2:"h2",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useoffset",children:"useOffset"}),`
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

import{u as n,j as e}from"./index-BDSVba2F.js";import{M as o,C as h}from"./blocks-CXa7E3uZ.js";import{C as d,W as s}from"./dimensions.stories-tW4DahrT.js";import"./iframe-Ds6TFLkC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ClPOgP6S.js";import"./index-C9niY2XO.js";import"./index-BuCwMnJX.js";import"./ChartSizeDimensions-4z75vax6.js";import"./zIndexSlice-BKrqz3Xt.js";import"./throttle-5Eq1kaaq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7a2m4Ka.js";import"./isWellBehavedNumber-LBH0mcE-.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BETzNKL8.js";import"./RechartsWrapper-CJwlXMvA.js";import"./axisSelectors-CNkxeY96.js";import"./d3-scale-CUyqRA-V.js";import"./index-CVuBNUrf.js";import"./renderedTicksSlice-F4QCvYob.js";import"./index-BK5RQvEH.js";import"./CartesianChart-CQ_Lc8CK.js";import"./chartDataContext-8-sBB6AR.js";import"./CategoricalChart-mnoE3YYU.js";import"./Page-Cj8EiXz7.js";import"./Line-DZDTbY-k.js";import"./Layer-DsMiZb8_.js";import"./Curve-dfqdvFF3.js";import"./types-DqUBeAy_.js";import"./step-DGJiOV5Z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bite-60b.js";import"./Label-2c4G7wLB.js";import"./Text-CQENvntP.js";import"./DOMUtils-CAtVF91U.js";import"./useId-DhelI0MM.js";import"./useBackwardsCompatibleTheme-eHtj-G5x.js";import"./ZIndexLayer-BVTJP5jP.js";import"./useAnimationId-wJ9zl-lu.js";import"./ActivePoints-BxShO8-B.js";import"./Dot-BCPXm70l.js";import"./RegisterGraphicalItemId-B4xTnp7Z.js";import"./ErrorBarContext-CEkkj6v_.js";import"./GraphicalItemClipPath-C-q0-wOK.js";import"./SetGraphicalItem-A2_dyvg9.js";import"./getRadiusAndStrokeWidthFromDot-C9T1jis-.js";import"./ActiveShapeUtils-BJP1sGvV.js";import"./useGraphicalItemIdentity-onk1vmff.js";import"./XAxis-DBKmF-Ih.js";import"./CartesianAxis-CuptNImc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CXDThil-.js";import"./Legend-BVnU9Ijg.js";import"./Symbols-VKhkKzLe.js";import"./symbol-jtj50zes.js";import"./useElementOffset-BoqsUzu9.js";import"./uniqBy-BeoGAbMd.js";import"./iteratee-B_8zsxBW.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs(i.h1,{id:"usechartwidth-usechartheight",children:[e.jsx(i.code,{children:"useChartWidth"}),", ",e.jsx(i.code,{children:"useChartHeight"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"useChartWidth"})," hook returns the width of the chart in pixels. ",e.jsx(i.code,{children:"useChartHeight"})," returns the height of the chart in pixels."]}),`
`,e.jsxs(i.p,{children:["If you are using chart with hardcoded ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` props, then the width returned will be the same
as the `,e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"})," prop on the main chart element."]}),`
`,e.jsxs(i.p,{children:["If you are using a chart with a ",e.jsx(i.code,{children:"ResponsiveContainer"}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,e.jsxs(i.p,{children:["If the chart has any axes or legend, the ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` will be the size of the chart
including the axes and legend.`]}),`
`,e.jsx(i.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,e.jsx(h,{of:s,layout:"padded"}),`
`,e.jsx(i.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(i.p,{children:"The hooks can be used within any chart:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<AreaChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<BarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<LineChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<PieChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Sankey/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Treemap/>"})}),`
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

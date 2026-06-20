import{u as n,j as e}from"./index-DXv1FdY5.js";import{M as o,C as h}from"./blocks-LJMti6or.js";import{C as d,W as s}from"./dimensions.stories-73Yq_BSs.js";import"./iframe-DktoyP0I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Be24bbvM.js";import"./index-BFyGHYnF.js";import"./index-B91yukul.js";import"./ChartSizeDimensions-cx-gbwCY.js";import"./zIndexSlice-BqxjHKrS.js";import"./immer-yOjEFYCA.js";import"./get-DZQ4X22M.js";import"./resolveDefaultProps-Bs_-cxps.js";import"./isWellBehavedNumber-D7-lB0Sk.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BDFJsZWU.js";import"./RechartsWrapper-C48Z7D7H.js";import"./index-CjF-Q638.js";import"./renderedTicksSlice-Cd_bo-5U.js";import"./axisSelectors-C830vntb.js";import"./d3-scale-BMKK7LPO.js";import"./CartesianChart-cbrKpDvd.js";import"./chartDataContext-BtRoA9Zg.js";import"./CategoricalChart-DGVvOUvV.js";import"./Page-Cj8EiXz7.js";import"./Line-DuA8ymif.js";import"./Layer-DxVIdqTA.js";import"./Curve-BuI6DO-B.js";import"./types-CkRwSSe-.js";import"./step-8xNYZUMK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-cIeOyNA6.js";import"./Label-BR89T_1_.js";import"./Text-DAKApr79.js";import"./DOMUtils-JSCS2paE.js";import"./ZIndexLayer-CSsqT-BM.js";import"./useAnimationId-Dyo3RN72.js";import"./ActivePoints-DwkLjVpS.js";import"./Dot-C1QvqJ8t.js";import"./RegisterGraphicalItemId-B1XaVUU9.js";import"./ErrorBarContext-CKA9kOcR.js";import"./GraphicalItemClipPath-DYdMpFC-.js";import"./SetGraphicalItem-BCAQvLzI.js";import"./getRadiusAndStrokeWidthFromDot-ByATIymF.js";import"./ActiveShapeUtils-BN2Pn2NB.js";import"./XAxis-BxV59Hhm.js";import"./CartesianAxis-DrMR96cw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BLG3LfpU.js";import"./Legend-D_vAGg8j.js";import"./Symbols-DQImXh-h.js";import"./symbol-BtGhTASL.js";import"./useElementOffset-DtCbKcDO.js";import"./uniqBy-CohtIUwX.js";import"./iteratee-CM3ogl-V.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

import{u as n,j as e}from"./index-BwbmKi_G.js";import{M as o,C as h}from"./blocks-COlS5M98.js";import{C as d,W as s}from"./dimensions.stories-B-QoZj-g.js";import"./iframe-yZAwGisL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bt1GAe6_.js";import"./index-BTDWI4JQ.js";import"./index-DoEg_2wF.js";import"./ChartSizeDimensions-CAhcD8qF.js";import"./zIndexSlice-vFKh36uD.js";import"./throttle-IYJcPlE6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpOUXIWy.js";import"./isWellBehavedNumber-BKIZfdbp.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CsZfHT2l.js";import"./RechartsWrapper-BFLcsvAk.js";import"./axisSelectors-CjnrZFGM.js";import"./d3-scale-BEY7rAMO.js";import"./index-Ds4u8dOy.js";import"./renderedTicksSlice-C_b5HfBN.js";import"./index-CX6Jn8F9.js";import"./CartesianChart-CRAui4vE.js";import"./chartDataContext-x9qaucVY.js";import"./CategoricalChart-BgiEDQst.js";import"./Page-Cj8EiXz7.js";import"./Line-CIo2HQB8.js";import"./Layer-CD9hCFBU.js";import"./Curve-DFleLHdr.js";import"./types-BDgd-zTs.js";import"./step-6P7iPqmC.js";import"./path-DyVhHtw_.js";import"./activeStyles-CKbiEpkz.js";import"./Label-DlvpoYCy.js";import"./Text-DCZHKK2-.js";import"./pageBackground-CPn-UXC2.js";import"./useId-fCPF8DLN.js";import"./useBackwardsCompatibleTheme-BEC80JP4.js";import"./ZIndexLayer-jYmr7Pld.js";import"./useAnimationId-D2NnZ8n8.js";import"./dataEntryStyles-heCtjgf8.js";import"./ActivePoints-X-te6dVp.js";import"./Dot-B6Z_ObGU.js";import"./ErrorBarContext-BaomqVzA.js";import"./GraphicalItemClipPath-CTekJVv_.js";import"./SetGraphicalItem-BAzuu_AW.js";import"./getRadiusAndStrokeWidthFromDot-C8mMcy-b.js";import"./ActiveShapeUtils-Bka3d7Ur.js";import"./useGraphicalItemIdentity-C_H0JivC.js";import"./XAxis-6ip0YWM4.js";import"./CartesianAxis-BfrfszGM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-GuJUd4De.js";import"./Legend-zigVBtRG.js";import"./Symbols-CEACwPi4.js";import"./symbol-DNKzqBP-.js";import"./useElementOffset-DXDe4gtV.js";import"./uniqBy-Dx2h-_lS.js";import"./iteratee-Boanqjnt.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

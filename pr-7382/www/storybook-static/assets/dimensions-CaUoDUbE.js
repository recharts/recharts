import{j as e}from"./jsx-runtime-DyThKI-A.js";import{useMDXComponents as n}from"./index-cnTG-xB5.js";import{c as o,C as h}from"./blocks-Ceo0gnK5.js";import{C as d,W as s}from"./dimensions.stories-Awiuo1ye.js";import"./iframe-Dq2D9WMR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./ChartSizeDimensions-7KHegUyo.js";import"./zIndexSlice-CMIgpwRl.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Ctt5r4_8.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./Page-DPte-9pC.js";import"./Line-ElG_lwe6.js";import"./Curve-B4KKsiQU.js";import"./types-C93vTFKm.js";import"./step-uPZi_6ZX.js";import"./path-DyVhHtw_.js";import"./Layer-CNg3jf3H.js";import"./ReactUtils-CnckncOE.js";import"./Label-DafpBHua.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./ZIndexLayer-BazpBvjE.js";import"./ActivePoints-Cd1Z09h4.js";import"./Dot-CjWxaC-Q.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./ErrorBarContext-ClYGb34v.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./useAnimationId-uSyAtuoQ.js";import"./getRadiusAndStrokeWidthFromDot-D25HmC7L.js";import"./ActiveShapeUtils-C8zRj9nc.js";import"./XAxis-BEqsZJa-.js";import"./CartesianAxis-9djuB4O0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CJVhWVm-.js";import"./Legend-OStlbhf3.js";import"./Symbols-CDSRvdpp.js";import"./symbol-CuF7W8Ad.js";import"./useElementOffset-CBQMpBJe.js";import"./uniqBy-Bftont1e.js";import"./iteratee-4ZWKoi0K.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

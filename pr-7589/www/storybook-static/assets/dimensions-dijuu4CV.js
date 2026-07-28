import{u as n,j as e}from"./index-6hMf_B0f.js";import{M as o,C as h}from"./blocks-WZRQdlMl.js";import{C as d,W as s}from"./dimensions.stories-CuTN4C28.js";import"./iframe-DUrhAGem.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DCvD1AlG.js";import"./index-Ci9yztB-.js";import"./index-CNLWSLM9.js";import"./ChartSizeDimensions-C3JUB9_b.js";import"./zIndexSlice-DdMK3B0N.js";import"./throttle-D3vyfJ8U.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BTGu5wQu.js";import"./isWellBehavedNumber-DFEWDh2V.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ymO5UTEI.js";import"./RechartsWrapper-BnFDuvuz.js";import"./index-Cpmma9TD.js";import"./renderedTicksSlice-DZdK350N.js";import"./axisSelectors-DZbM2Ze4.js";import"./d3-scale-SkNolWO8.js";import"./CartesianChart-CWlmKWcs.js";import"./chartDataContext-DaAbIer4.js";import"./CategoricalChart-CpTQxP4M.js";import"./Page-Cj8EiXz7.js";import"./Line-CBMbg85k.js";import"./Layer-Dt-vE1vN.js";import"./Curve-95W41D07.js";import"./types-ClGgKr9E.js";import"./step-1cVCQ5Jl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wThfzOGn.js";import"./Label-Y4Dm0VZ7.js";import"./Text-BrHlFoZT.js";import"./DOMUtils-CoHfxK0O.js";import"./ZIndexLayer-CXa7SyiJ.js";import"./useAnimationId-VITr_DdB.js";import"./ActivePoints-CwAypjqz.js";import"./Dot-pQkDRCWY.js";import"./RegisterGraphicalItemId-Ck0eBYhQ.js";import"./ErrorBarContext-1rKXFGMB.js";import"./GraphicalItemClipPath-DZHG2jah.js";import"./SetGraphicalItem-D3CB3LDo.js";import"./getRadiusAndStrokeWidthFromDot-CJOj0WiY.js";import"./ActiveShapeUtils-0ZcDx16I.js";import"./RechartsThemeContext-DPqqk1vy.js";import"./XAxis-RIRw3T0L.js";import"./CartesianAxis-IffF52gj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis--wp8j7v5.js";import"./Legend-C6612Dil.js";import"./Symbols-DFoWMewR.js";import"./symbol-BhNE3Frx.js";import"./useElementOffset-G25gOvED.js";import"./uniqBy-jcaqdoDx.js";import"./iteratee-B2QDbcSu.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};

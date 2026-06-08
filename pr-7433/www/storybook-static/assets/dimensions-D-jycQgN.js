import{u as n,j as e}from"./index-CBMNbH-B.js";import{M as o,C as h}from"./blocks-DUkyS4_2.js";import{C as d,W as s}from"./dimensions.stories-BsgVCM4b.js";import"./iframe-CT_on4dN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-gBOeA-qD.js";import"./index-DQkieKcs.js";import"./index-BLrAz-7b.js";import"./ChartSizeDimensions-7Rq_XJpu.js";import"./zIndexSlice-9YwY2T6T.js";import"./immer-MMHbxa5P.js";import"./get-DAlxn1Zj.js";import"./resolveDefaultProps-Ngbi67w9.js";import"./isWellBehavedNumber-DcXfDBUW.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CqZcgDJh.js";import"./RechartsWrapper-C-4qOiYS.js";import"./index-B37YLZmy.js";import"./renderedTicksSlice-Bp1Fmq8H.js";import"./axisSelectors-CiriuU2L.js";import"./d3-scale-B0V457C8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CPDAsd82.js";import"./chartDataContext-BNQnQ5VT.js";import"./CategoricalChart-BJTL86x_.js";import"./Page-Cj8EiXz7.js";import"./Line-DjA4uRiB.js";import"./Layer-BDukNzPA.js";import"./Curve-D3g77UHX.js";import"./types-BSLS2Rfw.js";import"./step-D6LclrFL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B___w46g.js";import"./Label-DK-X0Mes.js";import"./Text-CMIOZbxn.js";import"./DOMUtils-CLh3lutj.js";import"./ZIndexLayer-BBvvwP5n.js";import"./useAnimationId-DfgP8Qzr.js";import"./ActivePoints-DaxBQcxo.js";import"./Dot-LnWMvtRz.js";import"./RegisterGraphicalItemId-aTaFmyQg.js";import"./ErrorBarContext-BWZYzIr8.js";import"./GraphicalItemClipPath-BI7LHR9E.js";import"./SetGraphicalItem-Cgc_8Ru0.js";import"./getRadiusAndStrokeWidthFromDot-1x2538jp.js";import"./ActiveShapeUtils-7HjO8Td_.js";import"./XAxis-DM4CuZe_.js";import"./CartesianAxis-Dqr_Wojb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-C8PhcMfF.js";import"./Legend-CsXBchnl.js";import"./Symbols-DXCrjgw-.js";import"./symbol-Cr5BIINB.js";import"./useElementOffset-BcUuC6UH.js";import"./uniqBy-DJ-FcwmE.js";import"./iteratee-BUWsjaYF.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

import{u as n,j as e}from"./index-ehHwWT7W.js";import{M as o,C as h}from"./blocks-C0FgoeRQ.js";import{C as d,W as s}from"./dimensions.stories-C_D_j0nZ.js";import"./iframe-DsM5Snoh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1bUMSNa.js";import"./index-Cpv94xK3.js";import"./index-Dme9ADAC.js";import"./ChartSizeDimensions-BfR-21Ki.js";import"./zIndexSlice-Bw64GR0n.js";import"./throttle-BxJwdddW.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B889QW7F.js";import"./isWellBehavedNumber-BL4XxRG3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CAcZP5zH.js";import"./RechartsWrapper-DCACJiBR.js";import"./index-DzyEvv1d.js";import"./renderedTicksSlice-C2lYgmQd.js";import"./axisSelectors-ZbRe1Fr2.js";import"./d3-scale-5xoUdZXJ.js";import"./CartesianChart-DHkgxIBG.js";import"./chartDataContext-ChNOSR4m.js";import"./CategoricalChart-C7zh0Rx-.js";import"./Page-Cj8EiXz7.js";import"./Line-CbSm--Jp.js";import"./Layer-DJ-_hZeS.js";import"./Curve-DtFyS1kb.js";import"./types-C3s_AHHw.js";import"./step-DmgaGYb6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9cLBWaU.js";import"./Label-COWFM_3h.js";import"./Text-DTpoJfmA.js";import"./DOMUtils-bol6pq_B.js";import"./ZIndexLayer-8J4UOhVH.js";import"./useAnimationId-C3tGSe4h.js";import"./ActivePoints-jmPmXIfv.js";import"./Dot-F9GzLPgD.js";import"./RegisterGraphicalItemId-B77AAmB8.js";import"./ErrorBarContext-SZrR3kne.js";import"./GraphicalItemClipPath-DkDzGEyf.js";import"./SetGraphicalItem-HftiDrim.js";import"./getRadiusAndStrokeWidthFromDot-Bt2ychRU.js";import"./ActiveShapeUtils-Crk25mmB.js";import"./XAxis-BP59MRl4.js";import"./CartesianAxis-CVbxoQSN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-AiKtCrqX.js";import"./Legend-qZpYFHxv.js";import"./Symbols-BASV0N3J.js";import"./symbol-DgUa4s6j.js";import"./useElementOffset-D3ItBwVb.js";import"./uniqBy-DHqhlZDI.js";import"./iteratee-C3LESQL9.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

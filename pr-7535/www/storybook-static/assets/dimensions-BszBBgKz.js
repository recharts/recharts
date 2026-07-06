import{u as n,j as e}from"./index-B_bNGSiZ.js";import{M as o,C as h}from"./blocks-GeK2_nTM.js";import{C as d,W as s}from"./dimensions.stories-DmSVH7XJ.js";import"./iframe-7XJ2xcaa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./index-WU_oH4BO.js";import"./ChartSizeDimensions-DvmhU-Kd.js";import"./zIndexSlice-Smyg0ZdR.js";import"./throttle-D4811UcH.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CsOZpoaR.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./renderedTicksSlice-C2Tixweq.js";import"./axisSelectors-BEWMGkmB.js";import"./d3-scale-BuuUT6V5.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./Page-Cj8EiXz7.js";import"./Line-D0ZPViAT.js";import"./Layer-BGcXXZrK.js";import"./Curve-CHo9cgN6.js";import"./types-CCvMXBAG.js";import"./step-CE2G1JBn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXPDcN2s.js";import"./Label-kaLCkxIc.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./ZIndexLayer-CzQjP_gg.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./ActivePoints-DwDpt2dv.js";import"./Dot-CdCHNKxE.js";import"./RegisterGraphicalItemId-ezS9CDrB.js";import"./ErrorBarContext-BQCQT8xU.js";import"./GraphicalItemClipPath-8cnbCE1N.js";import"./SetGraphicalItem-BkRk4aVf.js";import"./getRadiusAndStrokeWidthFromDot-DV9FgO6_.js";import"./ActiveShapeUtils-CUzuZPCF.js";import"./XAxis-C1fpfCfO.js";import"./CartesianAxis-OiUDsUEB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BG1hFypZ.js";import"./Legend-BaHRoIPM.js";import"./Symbols-DQCEJqHR.js";import"./symbol-B0FARq78.js";import"./useElementOffset-C-vskSZV.js";import"./uniqBy-Big4MVsT.js";import"./iteratee-BpHsmV36.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

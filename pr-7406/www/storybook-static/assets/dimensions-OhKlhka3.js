import{u as n,j as e}from"./index-CSJRjcic.js";import{M as o,C as h}from"./blocks-C3D1TBlM.js";import{C as d,W as s}from"./dimensions.stories-CpDqZ8Xb.js";import"./iframe-Bzk7zQca.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./index-OXAI-BjX.js";import"./ChartSizeDimensions-DnkrARIC.js";import"./zIndexSlice-CmFEWq1r.js";import"./immer-CcXYFoUI.js";import"./get-CihDQax7.js";import"./resolveDefaultProps-CJmyog69.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BwJ5t2t4.js";import"./RechartsWrapper-DcMBMMpz.js";import"./index-CKgE1yXu.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./axisSelectors-BZF8A_qV.js";import"./d3-scale-MuAf3A9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./Page-Cj8EiXz7.js";import"./Line-D_KoWL_N.js";import"./Layer-C58in0aX.js";import"./Curve-QDW-Shr1.js";import"./types-BYFlfVWD.js";import"./step-BsT6z54w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bm1dVVre.js";import"./Label-CTPsCXr1.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./ZIndexLayer-DxzvrsVM.js";import"./useAnimationId-3u1Yr1gs.js";import"./ActivePoints-BuHZiJPV.js";import"./Dot-CLahKtoI.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./ErrorBarContext-C883JGGF.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./getRadiusAndStrokeWidthFromDot-CmnydJOh.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./XAxis-BwFTdCod.js";import"./CartesianAxis-BuH3LaY7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-SS3sg1KC.js";import"./Legend-BPmG3xhd.js";import"./Symbols-iwAfdcfd.js";import"./symbol-BjkRgUq5.js";import"./useElementOffset-C3YrErby.js";import"./uniqBy-20cDpXHs.js";import"./iteratee-BHx8gBfP.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

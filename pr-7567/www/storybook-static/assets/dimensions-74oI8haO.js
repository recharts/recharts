import{u as n,j as e}from"./index-CJfBXSBW.js";import{M as o,C as h}from"./blocks-DcM8RPPv.js";import{C as d,W as s}from"./dimensions.stories-CnWsCyFG.js";import"./iframe-BUBMop56.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CySDvqVz.js";import"./index-CgGvCayo.js";import"./index-CYnUHsqF.js";import"./ChartSizeDimensions-B0z7JEx4.js";import"./zIndexSlice-BFOCeNjP.js";import"./throttle-D75nL504.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C_KdVhp0.js";import"./isWellBehavedNumber-CCPoxx8d.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Co9cxOOG.js";import"./RechartsWrapper-DIZMbcTA.js";import"./index-D9WH3_pB.js";import"./renderedTicksSlice-BpqvL_BB.js";import"./axisSelectors-CCSlXmRc.js";import"./d3-scale-BKS6cnWE.js";import"./CartesianChart-BmaucleZ.js";import"./chartDataContext-BpFZdk1W.js";import"./CategoricalChart-a6ycapdr.js";import"./Page-Cj8EiXz7.js";import"./Line-ChQucypc.js";import"./Layer-CEgjWxAQ.js";import"./Curve-B8ZzY9nf.js";import"./types-CIINUjJb.js";import"./step-nlwLlUk8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-T6oPSFaY.js";import"./Label-C8PySNEK.js";import"./Text-DL-t9yLw.js";import"./DOMUtils-Bej4Btff.js";import"./ZIndexLayer-BKbyZAtu.js";import"./useAnimationId-BjgoYA5x.js";import"./ActivePoints-DFwLh6HZ.js";import"./Dot-3ZhUHudT.js";import"./RegisterGraphicalItemId-BChVYVcH.js";import"./ErrorBarContext-D15ZYdOL.js";import"./GraphicalItemClipPath-0CoE9plv.js";import"./SetGraphicalItem-DM6DkeHR.js";import"./getRadiusAndStrokeWidthFromDot-BMrKZbwO.js";import"./ActiveShapeUtils-Dow-vWc_.js";import"./XAxis-Beu0D676.js";import"./CartesianAxis-DqkvNHf2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-CNB6NWqV.js";import"./Legend-Br77Zx9_.js";import"./Symbols-BWIrY5M4.js";import"./symbol-2MYH5UYO.js";import"./useElementOffset-Bc8UoZ8e.js";import"./uniqBy-GaWKKGJl.js";import"./iteratee-oR2_Mtz0.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

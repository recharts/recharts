import{u as n,j as e}from"./index-wbUS17eB.js";import{M as o,C as h}from"./blocks-B6OjEXo8.js";import{C as d,W as s}from"./dimensions.stories-jFjfgIeP.js";import"./iframe-DdGnkOFo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CLyHvciH.js";import"./index-Z1BsW0X1.js";import"./index-Ikz32X_R.js";import"./ChartSizeDimensions-BcvozWnX.js";import"./zIndexSlice-Coao54AN.js";import"./throttle-zZssU-Yn.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Btuog99o.js";import"./isWellBehavedNumber-vlfZeEqT.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-A-lxRNNH.js";import"./RechartsWrapper-CWAtSdtd.js";import"./index-BT6JmE6p.js";import"./renderedTicksSlice-BOOh9KOs.js";import"./axisSelectors-Cd50OEg7.js";import"./d3-scale-BvrGgEa2.js";import"./CartesianChart-BEpSJ7tS.js";import"./chartDataContext-DAj5ZKMQ.js";import"./CategoricalChart-B-_DRhy8.js";import"./Page-Cj8EiXz7.js";import"./Line-DbTGCsdD.js";import"./Layer-C_y1fxvr.js";import"./Curve-BxYGAEW6.js";import"./types-D3VR5HmA.js";import"./step-B8IQ9ApF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUboBg0D.js";import"./Label-BhIy96Hp.js";import"./Text-DAM87njj.js";import"./DOMUtils-DV9Ec2hx.js";import"./ZIndexLayer-Ohjg-EB3.js";import"./useAnimationId-6rr0uMBz.js";import"./ActivePoints-fBjIF9Nl.js";import"./Dot-CqaCoBUP.js";import"./RegisterGraphicalItemId-COu7yO2P.js";import"./ErrorBarContext-BD7rxjgN.js";import"./GraphicalItemClipPath-DAEO1IcC.js";import"./SetGraphicalItem-2sM575PE.js";import"./getRadiusAndStrokeWidthFromDot-D5R5gYG2.js";import"./ActiveShapeUtils-D54fuxpr.js";import"./XAxis-CwjUQWj_.js";import"./CartesianAxis-Bo84uroF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BBZ_UVPr.js";import"./Legend-j7wP2bqS.js";import"./Symbols-SKeYRtHY.js";import"./symbol-CcoCMD-R.js";import"./useElementOffset-4OHFNcW2.js";import"./uniqBy-CXPCyF4-.js";import"./iteratee-aK0dWx0L.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

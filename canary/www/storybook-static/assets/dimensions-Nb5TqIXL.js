import{u as n,j as e}from"./index-GmDh9LLS.js";import{M as o,C as h}from"./blocks-DybJBhLe.js";import{C as d,W as s}from"./dimensions.stories-Do4iE9kd.js";import"./iframe-B5suke5B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-nx8SRU.js";import"./index-0E1UP6ea.js";import"./index-QzaRG_bO.js";import"./ChartSizeDimensions-Z1NiIlqI.js";import"./zIndexSlice-D0kihEsS.js";import"./throttle-yXst2GNy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLTE-4Yl.js";import"./isWellBehavedNumber-BdM77gE7.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-sXWnmRwm.js";import"./RechartsWrapper-xDK7h46M.js";import"./axisSelectors-Bxd1L_G4.js";import"./d3-scale-lqW361z6.js";import"./index-AUvHwQMM.js";import"./renderedTicksSlice-DN6DkPzy.js";import"./index-BJ8eFwlr.js";import"./CartesianChart-an0uCQ19.js";import"./chartDataContext-7ysfjD_K.js";import"./CategoricalChart-am3Id38i.js";import"./Page-Cj8EiXz7.js";import"./Line-C5jas6pR.js";import"./Layer-TMg83YAh.js";import"./Curve-BEbKvH6j.js";import"./types-AnLHRdTF.js";import"./step-DAq7_1My.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-vhEGvzj0.js";import"./Label-BAgGrzQX.js";import"./Text-rc7ZZmS8.js";import"./DOMUtils-W5ZSww-v.js";import"./useId-BWjKNL9O.js";import"./useBackwardsCompatibleTheme-D8o_0ZGr.js";import"./ZIndexLayer-BCqg4Zz6.js";import"./useAnimationId-rfQUB_TF.js";import"./ActivePoints-BHQL7RSY.js";import"./Dot-i8VNrcLy.js";import"./RegisterGraphicalItemId-BgozNBK6.js";import"./ErrorBarContext-DlJnMayP.js";import"./GraphicalItemClipPath-DRG66VTj.js";import"./SetGraphicalItem-CVhYGG_S.js";import"./getRadiusAndStrokeWidthFromDot-YwdC5Jzm.js";import"./ActiveShapeUtils-CHch558p.js";import"./useGraphicalItemIdentity-Caq5Yc5Z.js";import"./XAxis-CtU2ba0a.js";import"./CartesianAxis-DDYqByWb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-6eL7FIQY.js";import"./Legend-CpOpOjXS.js";import"./Symbols-DOwKCdtX.js";import"./symbol-0gW64JLT.js";import"./useElementOffset-CZkTpHRI.js";import"./uniqBy-CKyk2yaQ.js";import"./iteratee-DqYRbI4z.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

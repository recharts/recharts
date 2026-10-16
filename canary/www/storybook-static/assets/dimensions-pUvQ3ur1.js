import{u as n,j as e}from"./index-CYm2Gjxe.js";import{M as o,C as h}from"./blocks-YuEGqiWj.js";import{C as d,W as s}from"./dimensions.stories-CtBAi4YE.js";import"./iframe-Cuc-3wmn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dr1iXWUa.js";import"./index-DGxMJQlb.js";import"./index-Do_NM7xQ.js";import"./ChartSizeDimensions-B6b_441P.js";import"./zIndexSlice-BsVN3Oy1.js";import"./throttle-BHv1OzUd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DeE8fKkX.js";import"./isWellBehavedNumber-BQdzkgjM.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CD6T7lY1.js";import"./RechartsWrapper-3cu-hXPY.js";import"./axisSelectors-DM_2WB9O.js";import"./d3-scale-BS_R9TF_.js";import"./index-Dz3k4zem.js";import"./renderedTicksSlice-BXySsU0c.js";import"./index-CYT75Ewh.js";import"./CartesianChart-C6H_Qcxl.js";import"./chartDataContext-B7_SZBh7.js";import"./CategoricalChart-DrO7g7YL.js";import"./Page-Cj8EiXz7.js";import"./Line-AdV0akim.js";import"./Layer-D8rIily6.js";import"./Curve-DkDc-div.js";import"./types-GMU9tJsf.js";import"./step-DLRB17DG.js";import"./path-DyVhHtw_.js";import"./activeStyles-CdxeGYpW.js";import"./Label-CIwD5k1e.js";import"./Text-BXtcMZ2N.js";import"./pageBackground-DrpZqn_y.js";import"./useId-CpeFYMDs.js";import"./useBackwardsCompatibleTheme-Cg1iNggS.js";import"./ZIndexLayer-LfSwjZQ4.js";import"./useAnimationId-BpVC87C1.js";import"./dataEntryStyles-BJ1Gca6t.js";import"./ActivePoints-CVhx80tt.js";import"./Dot-DyPF6Lbp.js";import"./ErrorBarContext-DdAUPC4x.js";import"./GraphicalItemClipPath-SJq0vZIV.js";import"./SetGraphicalItem-CaNq7kdy.js";import"./getRadiusAndStrokeWidthFromDot-iwqqPDMx.js";import"./ActiveShapeUtils-CkArj8ub.js";import"./useEffectiveDataKey-rVy1qnot.js";import"./XAxis-BqOzDVbT.js";import"./CartesianAxis-D_D6u5e-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D3vkb_pr.js";import"./Legend-BR4IrO2g.js";import"./Symbols-DK1QeJ4B.js";import"./symbol-DzBkfLCR.js";import"./useElementOffset-DWSWPlh_.js";import"./uniqBy-miHMS1-h.js";import"./iteratee-DHIVVYG7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

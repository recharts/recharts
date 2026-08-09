import{u as n,j as e}from"./index-CqZ5zKMj.js";import{M as o,C as h}from"./blocks-sSJM2i3W.js";import{C as d,W as s}from"./dimensions.stories-BGE_r71c.js";import"./iframe-CRyknHcV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./index-_DeEburD.js";import"./ChartSizeDimensions-Bx0_LMHi.js";import"./zIndexSlice-D94J06pN.js";import"./throttle-CdnYcrez.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./isWellBehavedNumber-BT2IcqCv.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DHhrqJQt.js";import"./RechartsWrapper-BtW47C_U.js";import"./index-BH8DbImd.js";import"./axisSelectors-HI2cMDW5.js";import"./d3-scale-BQSgkEBA.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./CategoricalChart-C5pYrdFP.js";import"./Page-Cj8EiXz7.js";import"./Line-BKwpqhNN.js";import"./Layer-tFywX8jB.js";import"./Curve-Cx7OO1Tc.js";import"./types-CgTXGcnU.js";import"./step-CoZJp4zn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuJcIC8o.js";import"./Label-Bb81vEf3.js";import"./Text-AosieIGC.js";import"./DOMUtils-DDmVxA4T.js";import"./ZIndexLayer-CO71XxiU.js";import"./useAnimationId-B3genVAW.js";import"./ActivePoints-DQSPDrQl.js";import"./Dot-Cg5Ch71G.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./ErrorBarContext-isXdoWCJ.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./getRadiusAndStrokeWidthFromDot-CPUyhS2F.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CQvMjduc.js";import"./CartesianAxis-Czm-DLiC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DKnjJQyk.js";import"./Legend-C3KuxZ0g.js";import"./Symbols-CzYfCG8Y.js";import"./symbol-BGzG6k2R.js";import"./useElementOffset-B-3hZY7P.js";import"./uniqBy-D-IDiSzi.js";import"./iteratee-CVU5dPYq.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

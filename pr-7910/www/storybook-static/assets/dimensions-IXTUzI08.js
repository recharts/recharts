import{u as n,j as e}from"./index-PFY2VQIX.js";import{M as o,C as h}from"./blocks-BxuGa7G_.js";import{C as d,W as s}from"./dimensions.stories-BWcs78JA.js";import"./iframe-C6yJYV4z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yxNm8k9x.js";import"./index-DRfGxCUi.js";import"./index-nciU1bgU.js";import"./ChartSizeDimensions-BUGUQht9.js";import"./zIndexSlice-mBP7ycwT.js";import"./throttle-BxZZQXD3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DmIaNxK6.js";import"./isWellBehavedNumber-ovfPMeKD.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-6mo15iiQ.js";import"./RechartsWrapper-_g--7_B0.js";import"./axisSelectors-D_pqJ7Ai.js";import"./d3-scale-U4E3X2xZ.js";import"./index-DqnMLpa_.js";import"./renderedTicksSlice-Ju5mjaas.js";import"./index-DhjcBG7u.js";import"./CartesianChart-CP9Fvg-3.js";import"./chartDataContext-E_YlGMud.js";import"./CategoricalChart-e6KCKA8N.js";import"./Page-Cj8EiXz7.js";import"./Line-DkJ7OpB5.js";import"./Layer-C3EX9flk.js";import"./Curve-BUAb8EfH.js";import"./types--kLCfUVs.js";import"./step-C-IligCD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-5jNEDjqz.js";import"./Label-xmY0FOhv.js";import"./Text-DjSFzWjg.js";import"./DOMUtils-DIjRf9zs.js";import"./useId-BXkBt9SK.js";import"./useBackwardsCompatibleTheme-BmZuK7R_.js";import"./ZIndexLayer-bw7pXUay.js";import"./useAnimationId-C3itl5g8.js";import"./ActivePoints-Dm2yavg5.js";import"./Dot-kJhNeSCF.js";import"./RegisterGraphicalItemId-CCRb1xbW.js";import"./ErrorBarContext-Iszmpeof.js";import"./GraphicalItemClipPath-S_9K0RuN.js";import"./SetGraphicalItem-Be6goNI2.js";import"./getRadiusAndStrokeWidthFromDot-C5C4oMko.js";import"./ActiveShapeUtils-B6ISajHR.js";import"./useGraphicalItemIdentity-CR7heWJW.js";import"./XAxis-gLEHw-pb.js";import"./CartesianAxis-DAfwjJLC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CkYznIce.js";import"./Legend-Dp76ecjt.js";import"./Symbols-CXDQjHSt.js";import"./symbol-CRHXui2p.js";import"./useElementOffset-8O56CP7s.js";import"./uniqBy-mjkakhsi.js";import"./iteratee-DvNTUumB.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

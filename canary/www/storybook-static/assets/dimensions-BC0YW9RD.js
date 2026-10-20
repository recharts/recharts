import{u as n,j as e}from"./index-iPnrK2ik.js";import{M as o,C as h}from"./blocks-DbH8mV5T.js";import{C as d,W as s}from"./dimensions.stories-CnX8jm8r.js";import"./iframe-CZEQ_wjd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BbxbGDW7.js";import"./index-CRdNX2-K.js";import"./index-JtUUyrZR.js";import"./ChartSizeDimensions-BF1hy1Lk.js";import"./zIndexSlice-CGZbBTjh.js";import"./throttle-DA2J31XT.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CHpCBz4P.js";import"./isWellBehavedNumber-B8rPL1qd.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DVaTaaXl.js";import"./RechartsWrapper-CLkKKSWb.js";import"./axisSelectors-BfF4ImUe.js";import"./d3-scale-er3AEJAE.js";import"./index-B-hyiig3.js";import"./renderedTicksSlice-BMpJvFdR.js";import"./index-C8Xv27VY.js";import"./CartesianChart-BSz7TA42.js";import"./chartDataContext-BAAQoJGX.js";import"./CategoricalChart-DuqmwY6B.js";import"./Page-Cj8EiXz7.js";import"./Line-BfeaFnBY.js";import"./Layer-D6WM8pRX.js";import"./Curve-XL3ybND_.js";import"./types-CKK75Clx.js";import"./step-BKPm417p.js";import"./path-DyVhHtw_.js";import"./activeStyles-BfHlsJSZ.js";import"./Label-COoLstIf.js";import"./Text-Dsq3-wjY.js";import"./pageBackground-CKNOMxYJ.js";import"./useId-rjEqgZ2X.js";import"./useBackwardsCompatibleTheme-Bh5QeLej.js";import"./ZIndexLayer-Dn2bo3WS.js";import"./useAnimationId-Eb1qMFFs.js";import"./dataEntryStyles-y-eKYJRz.js";import"./ActivePoints-DAIZAef7.js";import"./Dot-D8BQdXw6.js";import"./ErrorBarContext-BhJCUijj.js";import"./GraphicalItemClipPath-iEKWMFl6.js";import"./SetGraphicalItem-DS-LfVWp.js";import"./getRadiusAndStrokeWidthFromDot-CEOY72lw.js";import"./ActiveShapeUtils-Dfohsprr.js";import"./useEffectiveDataKey-BUx5XxQj.js";import"./XAxis-GN6jnA3k.js";import"./CartesianAxis-DTwSBZEB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BLT7Ik9Z.js";import"./Legend-CBZkI5K2.js";import"./Symbols-ptZJXXcr.js";import"./symbol-m8ordAaR.js";import"./useElementOffset-Cbe50vsH.js";import"./uniqBy-CMc1aoPt.js";import"./iteratee-mBcul4dm.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

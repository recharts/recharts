import{u as n,j as e}from"./index-YdqBVM9c.js";import{M as o,C as h}from"./blocks-DlN-rTCo.js";import{C as d,W as s}from"./dimensions.stories-FMOR8_L-.js";import"./iframe-DBZHgkHz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGbD_6uH.js";import"./index-EJLKzrUV.js";import"./index-BWY5Ai4-.js";import"./ChartSizeDimensions-B3ua1pEK.js";import"./zIndexSlice-CCEect8Y.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bvsyp51I.js";import"./throttle-VBcNMDCY.js";import"./ComposedChart-69aI63gR.js";import"./RechartsWrapper-CdEOi8nf.js";import"./axisSelectors-CuFbzFkp.js";import"./polarAxisSelectors-BLShzrWN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CCNti6RY.js";import"./index-CyqgVO8h.js";import"./renderedTicksSlice-DsR53_S1.js";import"./index-D7sJrNgb.js";import"./fillDefinitions-CJlHmTcA.js";import"./CartesianChart-B8ylmrv_.js";import"./chartDataContext-l1L_LONz.js";import"./CategoricalChart-Bed811or.js";import"./Page-Cj8EiXz7.js";import"./Line-R8h2aTlS.js";import"./Layer-D9n5kKSs.js";import"./Curve-BXZ-CwEQ.js";import"./types-CiZDyVvS.js";import"./step-Dfu77DD6.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C2eRsswd.js";import"./Label-rCJ8JAiM.js";import"./Text-DbdJ2rHF.js";import"./ZIndexLayer-BEGts5gU.js";import"./ActivePoints-DL3AO8Rf.js";import"./Dot-BMzut5pd.js";import"./activeStyles-Ccn_YinS.js";import"./useAnimationId-DSFmvkxj.js";import"./Symbols-Dffl-I8q.js";import"./symbol-BsRW9Z6s.js";import"./ErrorBarContext-D4CjkMQU.js";import"./SetGraphicalItem-CyD7jeIx.js";import"./getRadiusAndStrokeWidthFromDot-B9CvVbbz.js";import"./ActiveShapeUtils-DHVoZWQX.js";import"./useEffectiveDataKey-jt0Z3g1O.js";import"./XAxis-Bnvf5Lo_.js";import"./CartesianAxis-BUQjH22T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-qEVvtCkb.js";import"./Legend-yxNncvKz.js";import"./useElementOffset-lqrBTYbX.js";import"./uniqBy-4s5Lfnt3.js";import"./iteratee-DHow2gXt.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-NBvryjeG.js";import{M as o,C as h}from"./blocks-Cj2-EAhH.js";import{C as d,W as s}from"./dimensions.stories-D6AOe-gj.js";import"./iframe-PHc5u_Go.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CENrQ3Fo.js";import"./index-BL548a5i.js";import"./index-B8MUftfu.js";import"./ChartSizeDimensions-6WgkMueI.js";import"./zIndexSlice-O7J7Jeos.js";import"./resolveDefaultProps-CtovE_6b.js";import"./get-CjriyByo.js";import"./throttle-B7fmfrhU.js";import"./ComposedChart-CJW-bEl0.js";import"./RechartsWrapper-0aodawEv.js";import"./axisSelectors-D8A3lwIR.js";import"./polarAxisSelectors-C8shuSpM.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ca8JIZw_.js";import"./index-B6C2iRoi.js";import"./renderedTicksSlice-B_HpVp09.js";import"./index-B4O5QRRq.js";import"./fillDefinitions-CfETDC7a.js";import"./CartesianChart-B8odkp-B.js";import"./chartDataContext-uHFtVhR5.js";import"./CategoricalChart-BjWAqdhB.js";import"./Page-Cj8EiXz7.js";import"./Line-CScqX6gb.js";import"./getRadiusAndStrokeWidthFromDot-L9UGnbtt.js";import"./Layer-DvHcP4X_.js";import"./Curve-5DP7CstF.js";import"./types-DsQO6Yiz.js";import"./step-BRWBSxqC.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B0gayhW-.js";import"./Label-B_2vkxlb.js";import"./Text-B4WGoEXs.js";import"./ZIndexLayer-jWs-pX7J.js";import"./ActivePoints-BJNvDjHC.js";import"./Dot-CLPkuyBC.js";import"./activeStyles-C4EAX3cB.js";import"./useAnimationId-Crie2Rxs.js";import"./Symbols-jKk-8HGk.js";import"./symbol-Bn8bSYai.js";import"./ErrorBarContext-DX7Uypjj.js";import"./SetGraphicalItem-CpbhBJBp.js";import"./ActiveShapeUtils-4zLzrPeO.js";import"./useEffectiveDataKey-Br4Rw_9X.js";import"./XAxis-CwnWWi2T.js";import"./CartesianAxis-DA5HtWf2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-W1GxgUQy.js";import"./Legend-BoIqYOYs.js";import"./useElementOffset-D5tMp2PA.js";import"./uniqBy-2OtzGgB3.js";import"./iteratee-Oda0bPnm.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

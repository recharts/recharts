import{u as n,j as e}from"./index-D2jnjak9.js";import{M as o,C as h}from"./blocks-7LQVgbUL.js";import{C as d,W as s}from"./dimensions.stories-CPpT3JKy.js";import"./iframe-CMzJyxaT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CHmRWuG6.js";import"./index-CsXUOZ6h.js";import"./index-Ihh44ZOg.js";import"./ChartSizeDimensions-CgBaIZSF.js";import"./zIndexSlice-Dud0JIgm.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D90TgEnc.js";import"./throttle-BTIGJM4c.js";import"./ComposedChart-D637W0rC.js";import"./RechartsWrapper-CfktXOMD.js";import"./axisSelectors-Bq81Ao7M.js";import"./polarAxisSelectors-DrN1Djr4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRT9BUPN.js";import"./index-BuF3Ul7s.js";import"./renderedTicksSlice-DM-R4GMo.js";import"./index-CNV21azp.js";import"./fillDefinitions-BTSqEgwz.js";import"./CartesianChart-BO8uDP04.js";import"./chartDataContext-CDPuAaqS.js";import"./CategoricalChart-DPQZGg1m.js";import"./Page-Cj8EiXz7.js";import"./Line-Be4wWJHL.js";import"./Layer-AKX63atr.js";import"./Curve-Be5_WgCt.js";import"./types-Dl8VwStK.js";import"./step-Bwzmrw1Q.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-bJA9yLxO.js";import"./Label-BnlLNWzo.js";import"./Text-RRbVz4t0.js";import"./ZIndexLayer-D9_6vJMt.js";import"./ActivePoints-C14hYzDD.js";import"./Dot-CJPE3X0k.js";import"./activeStyles-D3ZF14ZM.js";import"./useAnimationId-CAh3JWUx.js";import"./Symbols-d_VeINkv.js";import"./symbol-DKhDQ6iW.js";import"./ErrorBarContext-DaqV69Oh.js";import"./SetGraphicalItem-DihoZDul.js";import"./getRadiusAndStrokeWidthFromDot-DeK2Mko4.js";import"./ActiveShapeUtils-q9dSSXz9.js";import"./useEffectiveDataKey-DeMvidhj.js";import"./XAxis-IIW9Jscf.js";import"./CartesianAxis-CqeHr0V2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-fzMCOkqh.js";import"./Legend-CiOxER4p.js";import"./useElementOffset-BbjAediX.js";import"./uniqBy-BYP-xu74.js";import"./iteratee-DHrbjV55.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

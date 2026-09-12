import{u as n,j as e}from"./index-B-w7HxxA.js";import{M as o,C as h}from"./blocks-C_rGYW5o.js";import{C as d,W as s}from"./dimensions.stories-DMKIvOZ7.js";import"./iframe-CbFuLFtu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-KwOlWhXR.js";import"./index-BJNLJA8n.js";import"./index-KFI10z6J.js";import"./ChartSizeDimensions-CQMpSWa0.js";import"./zIndexSlice-D_moIlDh.js";import"./throttle-B61_h2S2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CPfR2KLv.js";import"./isWellBehavedNumber-I93tJShS.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DrqR_TZs.js";import"./RechartsWrapper-mkS7ocZy.js";import"./axisSelectors-rEOj_nFC.js";import"./d3-scale-Dx3NsH5I.js";import"./index-BqC7Dl52.js";import"./renderedTicksSlice-DX_n3Vj3.js";import"./index-Cqx3EeHn.js";import"./CartesianChart-B3yIAK9J.js";import"./chartDataContext-D0ZC99YL.js";import"./CategoricalChart-Bc2ATxVj.js";import"./Page-Cj8EiXz7.js";import"./Line-BaLTgSTX.js";import"./Layer-DrMT32rq.js";import"./Curve-_JdbhAIS.js";import"./types-CI87_xcK.js";import"./step-DlCZnSaC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-pPCGFSQU.js";import"./Label-B0AIyR8e.js";import"./Text-Cl3vVdZy.js";import"./DOMUtils-ac9yPFyL.js";import"./useId-eR1BXb0O.js";import"./useBackwardsCompatibleTheme-CAlV4td3.js";import"./ZIndexLayer-DLo3iEV5.js";import"./useAnimationId-B7x_KCom.js";import"./ActivePoints-Ba6uCDOF.js";import"./Dot-BGjmzY1b.js";import"./RegisterGraphicalItemId-Bfab39Ve.js";import"./ErrorBarContext-u6MEnxN0.js";import"./GraphicalItemClipPath-Cc0KTnBN.js";import"./SetGraphicalItem-Ga4RFH-2.js";import"./getRadiusAndStrokeWidthFromDot-Dp4xn9Uf.js";import"./ActiveShapeUtils-C1bQLB6k.js";import"./useGraphicalItemIdentity-WLgpMifT.js";import"./XAxis-DNc-Fb9p.js";import"./CartesianAxis-DmdL1NlC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-o1yfQ20q.js";import"./Legend-CzT_dOOi.js";import"./Symbols-wEHpObTA.js";import"./symbol-DzlCbcpp.js";import"./useElementOffset-D0ssS32b.js";import"./uniqBy-qMnMoCvD.js";import"./iteratee-C1nM4-Ch.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

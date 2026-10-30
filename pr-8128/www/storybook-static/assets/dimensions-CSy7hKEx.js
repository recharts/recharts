import{u as n,j as e}from"./index-CTkfXW7t.js";import{M as o,C as h}from"./blocks-CB1t9cfY.js";import{C as d,W as s}from"./dimensions.stories-CTYC3OQB.js";import"./iframe-C9xnj3fa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-HR2zHK1s.js";import"./index-CGQL5uib.js";import"./index-DsrYsm3j.js";import"./ChartSizeDimensions-D3mMZQzI.js";import"./zIndexSlice-CcurngJa.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Brqxe2vY.js";import"./throttle-Brv_8OQk.js";import"./ComposedChart-CPJRa0Xe.js";import"./RechartsWrapper-BTsf-RRm.js";import"./axisSelectors-Ci_X7Owa.js";import"./polarAxisSelectors-D4sMq_tB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bt8PJZEG.js";import"./index-jCX_JL39.js";import"./renderedTicksSlice-w5XdGCx4.js";import"./index-HliY0Ktb.js";import"./CartesianChart-ZuYtKyhz.js";import"./ZIndexPortal-CioIZ4EI.js";import"./CategoricalChart-Dkc5AhoM.js";import"./Page-Cj8EiXz7.js";import"./Line-CeHzBY0l.js";import"./Layer-DDMBpFba.js";import"./Curve-CKzhw-Lm.js";import"./fillDefinitions-JiW6eW7Z.js";import"./pageBackground-BZHE6_vS.js";import"./types-DG6esOZW.js";import"./step-FdCzkuxT.js";import"./path-DyVhHtw_.js";import"./LabelList-Dl-1RIBv.js";import"./Label-BDFDhH9S.js";import"./Text-BlDPHkKw.js";import"./DOMUtils-rMdb-gP0.js";import"./ZIndexLayer-BqHotqUl.js";import"./ActivePoints-CONJtR6k.js";import"./Dot-GKhzlTQm.js";import"./activeStyles-D9Ul1Rn7.js";import"./useAnimationId-CE3S5svQ.js";import"./dataEntryStyles-DUCKxZ4T.js";import"./Symbols-Cm6DVkmF.js";import"./symbol-B6aiZ8Bc.js";import"./ErrorBarContext-CpFpfUyn.js";import"./SetGraphicalItem-CW9QGr42.js";import"./getRadiusAndStrokeWidthFromDot-BiTQJ7fn.js";import"./ActiveShapeUtils-3CPPp2aV.js";import"./useEffectiveDataKey-Bl0Ac7JR.js";import"./XAxis-CqLpIx_r.js";import"./CartesianAxis-CWptnmGh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CZieiH3_.js";import"./Legend-EgzWNiBX.js";import"./useElementOffset-BFo0ivMe.js";import"./uniqBy-DEkhL1Ig.js";import"./iteratee-BNbt2Vfj.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

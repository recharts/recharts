import{u as n,j as e}from"./index-CLMU9kWy.js";import{M as o,C as h}from"./blocks-DqYXyF2D.js";import{C as d,W as s}from"./dimensions.stories-BMbgAtZU.js";import"./iframe-C9H6nb8O.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DkNU9Jwj.js";import"./index-BTq_b2hA.js";import"./index-d48a0T_2.js";import"./ChartSizeDimensions-DREuAzKm.js";import"./zIndexSlice-86DFZZsp.js";import"./throttle-BnpdZ0b3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_vS2EyS.js";import"./isWellBehavedNumber-BxcMlH1H.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-cpeiS7Qx.js";import"./RechartsWrapper-Bh_nwwHr.js";import"./axisSelectors-CaDgI8Oc.js";import"./d3-scale-BBLrtWMa.js";import"./index-DOD7xHyz.js";import"./renderedTicksSlice-TzJYRiTZ.js";import"./index-ByTGeVXQ.js";import"./CartesianChart-Dy945WYe.js";import"./chartDataContext-BNqh0ME9.js";import"./CategoricalChart-BRBdOICb.js";import"./Page-Cj8EiXz7.js";import"./Line-CmfR4dPi.js";import"./Layer-DNW7nupE.js";import"./Curve-CQId5eMN.js";import"./types-oEFxgIut.js";import"./step-C5UsVhDs.js";import"./path-DyVhHtw_.js";import"./activeStyles-Dwr5_xBc.js";import"./Label-6glZLWD6.js";import"./Text-BU8Is9rY.js";import"./pageBackground-DsggDmpK.js";import"./useId-pZk3BoDa.js";import"./useBackwardsCompatibleTheme-K49OtSF_.js";import"./ZIndexLayer-DL3up6PN.js";import"./useAnimationId-k6lITT5p.js";import"./dataEntryStyles-CmzRurqC.js";import"./ActivePoints-xNyBthG2.js";import"./Dot-CRvB7d-n.js";import"./ErrorBarContext-CBrxfbC1.js";import"./GraphicalItemClipPath-Cizji_0l.js";import"./SetGraphicalItem-B5C7hWKX.js";import"./getRadiusAndStrokeWidthFromDot-C0Lx-uc8.js";import"./ActiveShapeUtils-Cv1ZH2em.js";import"./useEffectiveDataKey-BpO8_klP.js";import"./XAxis-CywV301b.js";import"./CartesianAxis-BWYBJgMt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DXEeaYcv.js";import"./Legend-DjtNBXa7.js";import"./Symbols-CF_zrpHv.js";import"./symbol-BDtWPoty.js";import"./useElementOffset-KKareHqY.js";import"./uniqBy-1ZQrBMnQ.js";import"./iteratee-BR3KUAK-.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

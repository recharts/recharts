import{u as n,j as e}from"./index-TGP_kSpk.js";import{M as o,C as h}from"./blocks-jIUKroHu.js";import{C as d,W as s}from"./dimensions.stories-BOm358JA.js";import"./iframe-DpFoyu2v.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./index-DPbLagXs.js";import"./ChartSizeDimensions-CELo3axf.js";import"./zIndexSlice-BR5-by35.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./throttle-CbL9mvVE.js";import"./ComposedChart-DYhdzMG2.js";import"./RechartsWrapper-BNB2siqp.js";import"./axisSelectors-DsRIuzGY.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DFMCrQku.js";import"./index-CQQQihly.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./Page-Cj8EiXz7.js";import"./Line-DsODaGkU.js";import"./Layer-C27d_lJh.js";import"./Curve-CrBw6Qm3.js";import"./types-nITqZw6s.js";import"./step-DIzEC01T.js";import"./path-DyVhHtw_.js";import"./LabelList-BcqFX_Cs.js";import"./Label-RSQOEDTQ.js";import"./Text-B1i7DvDe.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./ActivePoints--ch9wTnx.js";import"./Dot-BBDn528y.js";import"./activeStyles-Dlv-kHFt.js";import"./useAnimationId-DcTYtpTG.js";import"./dataEntryStyles-BSD8zeo1.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./ErrorBarContext-C0P4PP3P.js";import"./SetGraphicalItem-BiUFphqr.js";import"./getRadiusAndStrokeWidthFromDot-DS-6kW0Q.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./XAxis-B0PuBmnr.js";import"./CartesianAxis-C3Cmf1pW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-UjIlgdkn.js";import"./Legend-m6bZE-oV.js";import"./fillDefinitions-CLwCi-e2.js";import"./useElementOffset-wTrI9o3y.js";import"./uniqBy-Bawyhepk.js";import"./iteratee-BD3h7MYT.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

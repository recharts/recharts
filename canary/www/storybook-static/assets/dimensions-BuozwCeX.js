import{u as n,j as e}from"./index-p5sTED48.js";import{M as o,C as h}from"./blocks-DXX8x4UY.js";import{C as d,W as s}from"./dimensions.stories-B5T-AhMz.js";import"./iframe-WNWxHA5w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./index-CN82-OMW.js";import"./ChartSizeDimensions-bekPQ5Z1.js";import"./zIndexSlice-BVgHV45y.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./throttle-DWlA00LM.js";import"./ComposedChart-DpKMEvwE.js";import"./RechartsWrapper-MLPBuzwi.js";import"./axisSelectors-DqPRQxzX.js";import"./polarAxisSelectors-CgU14Zha.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-zFOgTZT_.js";import"./index-CWM66Coj.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./Page-Cj8EiXz7.js";import"./Line-lsf5adcu.js";import"./getRadiusAndStrokeWidthFromDot-7Ou40HZN.js";import"./Layer-DaOdaJ8o.js";import"./Curve-aBjBuLLa.js";import"./types-jc9vmIop.js";import"./step-QSf3RYd6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./Label-CezBD4yi.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./ActivePoints-Dr8JqR2c.js";import"./Dot-DNElWDLL.js";import"./activeStyles-CeKhNTWp.js";import"./useAnimationId-PYVmWLIg.js";import"./Symbols-DIUF60nI.js";import"./symbol-Cx8bofxp.js";import"./ErrorBarContext-Bqg4FQ8M.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./XAxis-DfMY5qBP.js";import"./CartesianAxis-BHmhgeQf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-C2XMsDVi.js";import"./Legend-Dh7TdA43.js";import"./useElementOffset-Ds0hVeZw.js";import"./uniqBy-BzMIYtmN.js";import"./iteratee-Dl7MZIU4.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

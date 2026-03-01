import{j as e}from"./jsx-runtime-DOBHsvQd.js";import{useMDXComponents as n}from"./index-LRwpsLRR.js";import{M as o,C as h}from"./blocks-BsgsvKoW.js";import{C as d,W as s}from"./dimensions.stories-zjGEqkRg.js";import"./iframe-DjYpiCK1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DQOJXr3R.js";import"./ChartSizeDimensions-Bar3NlUL.js";import"./arrayEqualityCheck-ChWij-6b.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BKyQYHPq.js";import"./immer-Q7LYndgz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DGjTVrS3.js";import"./RechartsWrapper-BsT6E87M.js";import"./index-Dcc_DcJs.js";import"./hooks-DA7ZLRAz.js";import"./axisSelectors-DRA31YxA.js";import"./d3-scale-D4J-_PMg.js";import"./zIndexSlice-DD29w02m.js";import"./renderedTicksSlice-CQl_TKKG.js";import"./CartesianChart-DMb_0zJ6.js";import"./chartDataContext-A4NUbCSz.js";import"./CategoricalChart-DDH3jH2P.js";import"./Line-D6X_hrn4.js";import"./Layer-DTpB7dpX.js";import"./ReactUtils-Bc2S-2Ko.js";import"./Label-BjhhnV9x.js";import"./Text-tzBe5md3.js";import"./DOMUtils-C_4MXzyf.js";import"./ZIndexLayer-DPHhTAxg.js";import"./ActivePoints-CFK0b_hi.js";import"./Dot-Dv-nlLLJ.js";import"./types-uugzObvO.js";import"./RegisterGraphicalItemId-CzheeRaZ.js";import"./ErrorBarContext-D-vVpbAT.js";import"./GraphicalItemClipPath-BAi4t0TL.js";import"./SetGraphicalItem-DCV_XwVp.js";import"./useAnimationId-DKdTeHc-.js";import"./getRadiusAndStrokeWidthFromDot-BlTuKxo4.js";import"./ActiveShapeUtils-BB_vNw8U.js";import"./isPlainObject-COujrb7r.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJnZMjz6.js";import"./Trapezoid-ljRWXtqg.js";import"./Sector-lipzQdUB.js";import"./Symbols-CkWT8iKr.js";import"./symbol-CHsY7JKe.js";import"./step-e2Z4FnHn.js";import"./Curve-CcdovDiP.js";import"./XAxis-BAlFokgy.js";import"./CartesianAxis-C5b0QVvJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-bUcTdGAX.js";import"./Legend-Bm8rNxAk.js";import"./useElementOffset-CFnM-Vwx.js";import"./uniqBy-C94NeD_o.js";import"./iteratee-BJG9ItkJ.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};

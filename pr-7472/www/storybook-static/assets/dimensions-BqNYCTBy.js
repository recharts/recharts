import{u as n,j as e}from"./index-dga3H80G.js";import{M as o,C as h}from"./blocks-CGc7G9zS.js";import{C as d,W as s}from"./dimensions.stories-D-yvjfdT.js";import"./iframe-BY-61mf3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DbrznSTp.js";import"./index-CqG97JZW.js";import"./index-Bdv48GrD.js";import"./ChartSizeDimensions-B2I3bVpn.js";import"./zIndexSlice-D5LeFsJF.js";import"./immer-B9G3_Kxy.js";import"./get-CrMrHDfL.js";import"./resolveDefaultProps-BvLTVmPU.js";import"./isWellBehavedNumber-CxSUDioC.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bx2_Wy5f.js";import"./RechartsWrapper-TrezbvJj.js";import"./index-CGSMpc0u.js";import"./renderedTicksSlice-JT8za5Hk.js";import"./axisSelectors-BLK3CBL0.js";import"./d3-scale-BkYTXwQ3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-wc_TuFln.js";import"./chartDataContext-CBgaHz3-.js";import"./CategoricalChart-g-2efyUa.js";import"./Page-Cj8EiXz7.js";import"./Line-6gkt-kev.js";import"./Layer-o5jG4U6-.js";import"./Curve-BtPdoVvO.js";import"./types-hvByNsoa.js";import"./step-BuJXjF2w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ByNYS0z8.js";import"./Label-TO2FniFg.js";import"./Text-A8PySNC6.js";import"./DOMUtils-Dx1NP75k.js";import"./ZIndexLayer-BYFtOnRb.js";import"./useAnimationId-RV371va_.js";import"./ActivePoints-gSNPH_nK.js";import"./Dot-zxBqnqxW.js";import"./RegisterGraphicalItemId-BSHaYjsq.js";import"./ErrorBarContext-BTw4S1-S.js";import"./GraphicalItemClipPath-cu7yJN5z.js";import"./SetGraphicalItem-30kWDCTB.js";import"./getRadiusAndStrokeWidthFromDot-D4DkYcfN.js";import"./ActiveShapeUtils-CLaqj2t-.js";import"./XAxis-BqqI2L9m.js";import"./CartesianAxis-DQMh9jmY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Dnu2jnBx.js";import"./Legend-jKZ9U16e.js";import"./Symbols-CrRfkKVb.js";import"./symbol-DcuOcYR2.js";import"./useElementOffset-Bk35APbE.js";import"./uniqBy-quBZy4V-.js";import"./iteratee-DAmws9Pf.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

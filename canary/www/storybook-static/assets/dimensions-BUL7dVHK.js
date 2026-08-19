import{u as n,j as e}from"./index-FW1ucSTQ.js";import{M as o,C as h}from"./blocks-CLWVDVW0.js";import{C as d,W as s}from"./dimensions.stories-BN0boOFw.js";import"./iframe-CO2wOmL3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C2bFqevd.js";import"./index-vFvBy9sc.js";import"./index-_W7z4BVf.js";import"./ChartSizeDimensions-DoZRgXen.js";import"./zIndexSlice-CjYLmU03.js";import"./throttle-BF_C9j3I.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jUsiawGP.js";import"./isWellBehavedNumber-BQRlzWpP.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BmaCVHl6.js";import"./RechartsWrapper-QtML1m_J.js";import"./index-di8y7Hm0.js";import"./axisSelectors-CX7Lxi19.js";import"./d3-scale-C9Gp2SJN.js";import"./renderedTicksSlice-BFOY10tL.js";import"./CartesianChart-CWwcrxvU.js";import"./chartDataContext-XcRgiNTG.js";import"./CategoricalChart-shIifM_V.js";import"./Page-Cj8EiXz7.js";import"./Line-C3rvXVP2.js";import"./Layer-wYmixdFE.js";import"./Curve-C6VcPqEA.js";import"./types-m7U1KOoZ.js";import"./step-Cwr2l1xw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8MD0Tf6.js";import"./Label-DQLK-wuU.js";import"./Text-D02hyY3C.js";import"./DOMUtils-C9bi6LZn.js";import"./useBackwardsCompatibleTheme-DeUToV_i.js";import"./ZIndexLayer-hD4R9Zay.js";import"./useAnimationId-C-2OrkuN.js";import"./ActivePoints-MUpudru6.js";import"./Dot-CFoQsseu.js";import"./RegisterGraphicalItemId-CYj5gZOD.js";import"./ErrorBarContext-CkVZ1uFV.js";import"./GraphicalItemClipPath-Bz34Vg6G.js";import"./SetGraphicalItem-BUOFB7Tk.js";import"./getRadiusAndStrokeWidthFromDot-XN5RTrZo.js";import"./ActiveShapeUtils-CGE1F6kM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-D8l1zj0t.js";import"./CartesianAxis-B8e0zgyu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DEg_MfYL.js";import"./Legend-CIC-APY1.js";import"./Symbols-Bw6Lb_U6.js";import"./symbol-BB5e3oBF.js";import"./useElementOffset-U-2NXguD.js";import"./uniqBy-DnW7J1Px.js";import"./iteratee-BI2qvuKr.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

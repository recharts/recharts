import{u as n,j as e}from"./index-BtVHdJ3J.js";import{M as o,C as h}from"./blocks-LpcMWDYj.js";import{C as d,W as s}from"./dimensions.stories-C8RA6BqM.js";import"./iframe-ClcrwGuW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./index-DNzarm0L.js";import"./ChartSizeDimensions-Bw0N_Wrl.js";import"./zIndexSlice-BIGnlmU8.js";import"./throttle-CCS8xgZt.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-QFp2QUo8.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./Page-Cj8EiXz7.js";import"./Line-A183MaDD.js";import"./Layer-3ZpdhJcS.js";import"./Curve-CrblFnpJ.js";import"./types-BTRTN-qV.js";import"./step-Kzlz86Dk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./Label-Dq1bNHIu.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./ZIndexLayer-ktmCEwYK.js";import"./useAnimationId-Dr2V8ESg.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./XAxis-DBark8Vy.js";import"./CartesianAxis-ByEdCDio.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-XJItrttK.js";import"./Legend-BS7RA_N3.js";import"./Symbols-D815RcxC.js";import"./symbol-9zs_gWxT.js";import"./useElementOffset-0hht_3Y4.js";import"./uniqBy-BWkjWHs1.js";import"./iteratee-D67nRlPy.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

import{j as e}from"./jsx-runtime-9GQvXmdB.js";import{useMDXComponents as n}from"./index-BIzHRgtK.js";import{M as h,C as o}from"./blocks-1oxIQafP.js";import{C as d,W as s}from"./dimensions.stories-DU-9EMWv.js";import"./iframe-Bm_dlztP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DBvu736D.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./arrayEqualityCheck-BKx_y40S.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DyBYNAPL.js";import"./RechartsWrapper-BufFVb6a.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./Line-CLMa4j3x.js";import"./Layer-DqzpUDSE.js";import"./ReactUtils-278YW1x2.js";import"./Label-CDVZMFBi.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./ZIndexLayer-BWJMOT1A.js";import"./ActivePoints-CYA336oa.js";import"./Dot-DVC6PvDp.js";import"./types-DmFvG4SC.js";import"./RegisterGraphicalItemId-Fy4B400g.js";import"./ErrorBarContext-DrNk0Egn.js";import"./GraphicalItemClipPath-DBcACHox.js";import"./SetGraphicalItem-C3DJs7FG.js";import"./useAnimationId-DL43TA5B.js";import"./getRadiusAndStrokeWidthFromDot-zhMizOQu.js";import"./ActiveShapeUtils-CdMwlbl5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CF3NoYDn.js";import"./Trapezoid-BcjTe3fL.js";import"./Sector-Tp_jaJNZ.js";import"./Symbols-CIac5k7Z.js";import"./Curve-D1sI4FDZ.js";import"./XAxis-DiBdkzoV.js";import"./CartesianAxis-Df-SQWPS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dt19AUea.js";import"./Legend-Dzh3BOn7.js";import"./useElementOffset-H-NWySai.js";import"./iteratee-C4Ua_ZlD.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};

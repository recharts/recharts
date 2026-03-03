import{j as e}from"./jsx-runtime-BibHpxEz.js";import{useMDXComponents as n}from"./index-Bb44ssM5.js";import{M as o,C as h}from"./blocks-BLgNTd9p.js";import{C as d,W as s}from"./dimensions.stories-B2_DMwKg.js";import"./iframe-q7EKBh7o.js";import"./preload-helper-Dp1pzeXC.js";import"./index-z6UB51wB.js";import"./ChartSizeDimensions-xzO8bMu2.js";import"./arrayEqualityCheck-CNeXmyp-.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7X7PXgS.js";import"./immer-so6Ulnev.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DSwqeICk.js";import"./RechartsWrapper-B22qLPQG.js";import"./index-C4-9aL-F.js";import"./hooks-BZKkCtfI.js";import"./axisSelectors-D3C9QRtF.js";import"./d3-scale-C3h6liLe.js";import"./zIndexSlice-FB6DIKIg.js";import"./renderedTicksSlice-egFijHun.js";import"./CartesianChart-B_NqAGOq.js";import"./chartDataContext-KwgMu4Lm.js";import"./CategoricalChart-BZ540HIN.js";import"./Line-BWfPW2C0.js";import"./Layer-QiojE74q.js";import"./ReactUtils-CCO8h_ST.js";import"./Label-D0Yxhrga.js";import"./Text-Df64Y-kP.js";import"./DOMUtils-CVphFinv.js";import"./ZIndexLayer-CyDdrDhA.js";import"./ActivePoints-DPbjwaD_.js";import"./Dot-DPAcQCLX.js";import"./types-8fLOkEDP.js";import"./RegisterGraphicalItemId-CxyJNLVz.js";import"./ErrorBarContext-B0wOEolD.js";import"./GraphicalItemClipPath-CMf4z5s0.js";import"./SetGraphicalItem-D3d8G_vE.js";import"./useAnimationId-CVW780SS.js";import"./getRadiusAndStrokeWidthFromDot-D64HU0Nx.js";import"./ActiveShapeUtils-BUcYuJvN.js";import"./isPlainObject-DABaG52Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9CBwic5.js";import"./Trapezoid-C9zo0qDT.js";import"./Sector-CO_u1rWF.js";import"./Symbols-BiDhCEPu.js";import"./symbol-BD_3EPYV.js";import"./step-BUn93TOQ.js";import"./Curve-CMEBV0h5.js";import"./XAxis-Cc06MLaN.js";import"./CartesianAxis-DgR0v-Eb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dzu9zp52.js";import"./Legend-L2aYPyi0.js";import"./useElementOffset-w_DRWkBd.js";import"./uniqBy-C9c8NOE5.js";import"./iteratee-DCcyxzVq.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-cCiAG_Uq.js";import{M as o,C as h}from"./blocks-PMRdzM-y.js";import{C as d,W as s}from"./dimensions.stories-DQkHfR23.js";import"./iframe-B_vrQl8R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./index-HEwSZYID.js";import"./ChartSizeDimensions-CcUYrlp5.js";import"./zIndexSlice-Cxwz8Tl-.js";import"./throttle-Dyk5owXH.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-yc7O9hvj.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./Page-Cj8EiXz7.js";import"./Line-DxooT10C.js";import"./Layer-Gd_R9sAX.js";import"./Curve-4ICuXbwR.js";import"./types-B9Larr1k.js";import"./step-Ct9Ha3sC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CSL9mSPk.js";import"./Label-CvVA6TIG.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./ZIndexLayer-DUE9jsMX.js";import"./useAnimationId-DAjnsWww.js";import"./ActivePoints-DphU-K4M.js";import"./Dot-D8Lfcwc2.js";import"./RegisterGraphicalItemId-Be581UAk.js";import"./ErrorBarContext-DjPqL-MC.js";import"./GraphicalItemClipPath-Bv2rP4gQ.js";import"./SetGraphicalItem-BqgYDJXb.js";import"./getRadiusAndStrokeWidthFromDot-BJX3V8Wn.js";import"./ActiveShapeUtils-a0kgZEBq.js";import"./XAxis-Ci68TUER.js";import"./CartesianAxis-BAwOMXAP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BnsZeISF.js";import"./Legend-Du6_K_PV.js";import"./Symbols-CPIDLIMe.js";import"./symbol-BCVeltSM.js";import"./useElementOffset-B_HGDiJC.js";import"./uniqBy-DUbYgYPG.js";import"./iteratee-D-mRmhpM.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

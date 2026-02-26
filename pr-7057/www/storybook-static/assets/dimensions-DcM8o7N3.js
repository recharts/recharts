import{j as e}from"./jsx-runtime-DnJcU5n2.js";import{useMDXComponents as n}from"./index-DKsiHYUR.js";import{M as o,C as h}from"./blocks-CuFWFhqr.js";import{C as d,W as s}from"./dimensions.stories-QiWAEMkh.js";import"./iframe-D4_kWiik.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dx5VrxvW.js";import"./ChartSizeDimensions-DSAP6Fpc.js";import"./arrayEqualityCheck-B3HrMvOJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DooOk0ZG.js";import"./immer-0ruqGMtg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Ba8l5vfK.js";import"./RechartsWrapper-CPReM4TO.js";import"./index-DoPLCw_p.js";import"./hooks-6jZB3yL2.js";import"./axisSelectors-BmHnRFxW.js";import"./d3-scale-n7QD4WrB.js";import"./zIndexSlice-C4SzCaYD.js";import"./renderedTicksSlice-CIXKwc0U.js";import"./CartesianChart-sfWAfsuQ.js";import"./chartDataContext-jjjOdAEg.js";import"./CategoricalChart-Csqo5QVJ.js";import"./Line-mudUiiQW.js";import"./Layer-hulGBcYw.js";import"./ReactUtils-B0Tr3Kw3.js";import"./Label-CWL13-o_.js";import"./Text-CoLcKwL4.js";import"./DOMUtils-Dzu75jG0.js";import"./ZIndexLayer-sXRztW1g.js";import"./ActivePoints-CdDYwwSa.js";import"./Dot-BsouI4yi.js";import"./types-BCRPpXrS.js";import"./RegisterGraphicalItemId-DxmtI7AP.js";import"./ErrorBarContext-KX3UjoPN.js";import"./GraphicalItemClipPath-VQWjMwSl.js";import"./SetGraphicalItem-B_khJyid.js";import"./useAnimationId-Dur5dtsq.js";import"./getRadiusAndStrokeWidthFromDot-DxXAf3lX.js";import"./ActiveShapeUtils-DVInz7Qi.js";import"./isPlainObject-Bzk1EvI7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGtDGrdk.js";import"./Trapezoid-BH067hRN.js";import"./Sector-D-XRTfZm.js";import"./Symbols-CHUFq9Ay.js";import"./symbol-BoxvpimM.js";import"./step-9zWUSiR2.js";import"./Curve-DIMr1GZI.js";import"./XAxis-DYXsWNnz.js";import"./CartesianAxis-Lz5XVqBq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DgOR7wnS.js";import"./Legend-DIkplBgv.js";import"./useElementOffset-CbtwGd1l.js";import"./uniqBy-BOQHR2T6.js";import"./iteratee-kN7lKKky.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

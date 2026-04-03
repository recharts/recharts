import{j as e}from"./jsx-runtime-CuUclOGy.js";import{useMDXComponents as n}from"./index-obQSAgvK.js";import{M as o,C as h}from"./blocks-FBs11mfs.js";import{C as d,W as s}from"./dimensions.stories-_n32VBXS.js";import"./iframe-DzQrtuqC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DkvclcRw.js";import"./ChartSizeDimensions-BpnzS4UN.js";import"./arrayEqualityCheck-CcYQ3TlE.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cBec3zUl.js";import"./immer-BG5eRMY4.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-EMFpw5dv.js";import"./RechartsWrapper-12D3Dnhb.js";import"./index-BWU1iYbm.js";import"./hooks-D1HOa-TD.js";import"./axisSelectors-C3BshaU1.js";import"./d3-scale-CxHdo-Jz.js";import"./zIndexSlice-B16G16Z8.js";import"./renderedTicksSlice-rqGxM86U.js";import"./CartesianChart-CLLa3Dnc.js";import"./chartDataContext-BI_W2HnQ.js";import"./CategoricalChart-BSh5BNmY.js";import"./Page-Cj8EiXz7.js";import"./Line-Crc5gtVU.js";import"./Layer-OTa1RIrC.js";import"./ReactUtils-QGOY_45A.js";import"./Label-1lnwpSMQ.js";import"./Text-Boh5u1VK.js";import"./DOMUtils-Bn_VANWj.js";import"./ZIndexLayer-DjjOHeZ_.js";import"./ActivePoints-C5TcXqSX.js";import"./Dot-DPafLRI7.js";import"./types-BgvOUMxI.js";import"./RegisterGraphicalItemId-DtvVzUCB.js";import"./ErrorBarContext-BM7URJDC.js";import"./GraphicalItemClipPath-eGbWt4-y.js";import"./SetGraphicalItem-Bcmgk1GN.js";import"./useAnimationId-KT1IxfUT.js";import"./getRadiusAndStrokeWidthFromDot-DbVHh2EC.js";import"./ActiveShapeUtils-B77F2Y7E.js";import"./isPlainObject-C8qmWClL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6c5ofir.js";import"./Trapezoid-rdFilDCH.js";import"./Sector-lNcT2dw2.js";import"./Symbols-CrC1lk7K.js";import"./symbol-BXGJBtQL.js";import"./step-B5omXXrI.js";import"./Curve-DTTWJNZu.js";import"./XAxis-1ARD5tua.js";import"./CartesianAxis-kUZksY3_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-22Z8oCxY.js";import"./Legend-Bs5q-XAk.js";import"./useElementOffset-DuP6OLBs.js";import"./uniqBy-Bat9ka49.js";import"./iteratee-Cilelzxb.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

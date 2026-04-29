import{j as e}from"./jsx-runtime-CTcg3MIu.js";import{useMDXComponents as n}from"./index-4KH40nUN.js";import{M as o,C as h}from"./blocks-CvwuSkK5.js";import{C as d,W as s}from"./dimensions.stories-BT-6hOdg.js";import"./iframe-Nsc2sN17.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CbA-Jv17.js";import"./ChartSizeDimensions-B1kQCCeW.js";import"./arrayEqualityCheck-D9Zyw2Zw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-gmbWhtkI.js";import"./immer-DLWrz67V.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DvVLDS0_.js";import"./RechartsWrapper-Ckv5DlpI.js";import"./index-BHVPN82s.js";import"./hooks-C0EC2ajp.js";import"./axisSelectors-QpAjWyBl.js";import"./d3-scale-CHgSPW8E.js";import"./zIndexSlice-CNqGo6m1.js";import"./renderedTicksSlice-CYv0XDQO.js";import"./CartesianChart-CYxY5vz3.js";import"./chartDataContext-C4GxecVY.js";import"./CategoricalChart-Br-qLSqo.js";import"./Page-Cj8EiXz7.js";import"./Line-BY3dOxaM.js";import"./Layer-B6Mh8xHG.js";import"./ReactUtils-SHh5MmVx.js";import"./Label-DZXeJJGm.js";import"./Text-DiHUiXMK.js";import"./DOMUtils-P4LKJ49W.js";import"./ZIndexLayer-Czi-cF3Q.js";import"./ActivePoints-CcWtEpvO.js";import"./Dot-BFU4rXWL.js";import"./types-DgV3fJv5.js";import"./RegisterGraphicalItemId-QStBr5Ie.js";import"./ErrorBarContext-BXu4nXIY.js";import"./GraphicalItemClipPath-2cdy-pu2.js";import"./SetGraphicalItem-DiLWJVic.js";import"./useAnimationId-D34EikED.js";import"./getRadiusAndStrokeWidthFromDot-OoBawEuA.js";import"./ActiveShapeUtils-j_PWExYP.js";import"./isPlainObject-WYrKXhh8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaywoHil.js";import"./Trapezoid-BwRKBAFI.js";import"./Sector-DfnrbS26.js";import"./Symbols-eFyCyhDx.js";import"./symbol-DFqSkUaY.js";import"./step-BW4WvIvQ.js";import"./Curve-DvjoiG0X.js";import"./XAxis-DyA8Ake-.js";import"./CartesianAxis-C30xEFKB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-D_irT6px.js";import"./Legend-BbpG2r1H.js";import"./useElementOffset-DoqCYwW4.js";import"./uniqBy-CZWkvbYT.js";import"./iteratee-DNurm-y3.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{j as e}from"./jsx-runtime-Bz_W57OA.js";import{useMDXComponents as n}from"./index-5TQ15AVC.js";import{M as o,C as h}from"./blocks-D7a9CMqn.js";import{C as d,W as s}from"./dimensions.stories-Djl5pE3Q.js";import"./iframe-BNMXyeq9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dh6m6MB-.js";import"./ChartSizeDimensions-CH4qJAUd.js";import"./arrayEqualityCheck-Beh0vaeo.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqK5jQb8.js";import"./immer-DLDegpHz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-q2ScdQ2B.js";import"./RechartsWrapper-p99nh58x.js";import"./index-CqHAUX4Y.js";import"./hooks-CxmJQzvA.js";import"./axisSelectors-Bjzn5CZG.js";import"./d3-scale-jx-p6VOM.js";import"./zIndexSlice-BXAFsMol.js";import"./renderedTicksSlice-BOGp2GeV.js";import"./CartesianChart-BotaMIv-.js";import"./chartDataContext-C7KiXxa1.js";import"./CategoricalChart-Ced0NDVQ.js";import"./Page-Cj8EiXz7.js";import"./Line-gdwjxtB7.js";import"./Layer-9B5krggT.js";import"./ReactUtils-BiDFqrgq.js";import"./Label-CmY8D_Vk.js";import"./Text-DpT8fH0_.js";import"./DOMUtils-bKs0Y9ns.js";import"./ZIndexLayer-rfj-vOql.js";import"./ActivePoints-BNreOZF9.js";import"./Dot-C8tx3hOP.js";import"./types-C7VY0BRq.js";import"./RegisterGraphicalItemId-qopa_Nsy.js";import"./ErrorBarContext-DocAQmKI.js";import"./GraphicalItemClipPath-BN3M0qNc.js";import"./SetGraphicalItem-CpGjwelu.js";import"./useAnimationId-BIOuiTZH.js";import"./getRadiusAndStrokeWidthFromDot-lM7t1HK-.js";import"./ActiveShapeUtils-D0ia5i81.js";import"./isPlainObject-B18GKfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DjmVhQIC.js";import"./Trapezoid-CbRqZG4l.js";import"./Sector-CWORy7MA.js";import"./Symbols-BX6LNW-t.js";import"./symbol-CO4n4duV.js";import"./step-BVNiQCr9.js";import"./Curve-CIYQTlJO.js";import"./XAxis-BQQS4Uyr.js";import"./CartesianAxis-CFKApKAY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BzqiKsmD.js";import"./Legend-D-c46KFD.js";import"./useElementOffset-DBo3BKsc.js";import"./uniqBy-BkkLROVl.js";import"./iteratee-DR_LWlIn.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

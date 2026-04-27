import{j as e}from"./jsx-runtime-D8GX8zmn.js";import{useMDXComponents as n}from"./index-Cv4Y_UQH.js";import{M as o,C as h}from"./blocks-BtChYBLn.js";import{C as d,W as s}from"./dimensions.stories-C-rdVInU.js";import"./iframe-DPQQART2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-OSeNAWG6.js";import"./ChartSizeDimensions-BOwpJgjF.js";import"./arrayEqualityCheck-BDVhVf-C.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cd3pKSWq.js";import"./immer-dq55Rz5k.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-n9wi2Vp2.js";import"./RechartsWrapper-DC_xWfRE.js";import"./index-nGRWTrxk.js";import"./hooks-DXcftTpV.js";import"./axisSelectors-B504aTlT.js";import"./d3-scale-C2yFoO5R.js";import"./zIndexSlice-BUoZyNAT.js";import"./renderedTicksSlice-C1JV7OFv.js";import"./CartesianChart-CLNhkIDU.js";import"./chartDataContext-0uWjrM7s.js";import"./CategoricalChart-7Dzr-wy0.js";import"./Page-Cj8EiXz7.js";import"./Line-DOKzQF_j.js";import"./Layer-BYcIhrnl.js";import"./ReactUtils-D4DJGTqa.js";import"./Label-C8kv474W.js";import"./Text-CViQHWzm.js";import"./DOMUtils-6osebbE8.js";import"./ZIndexLayer-Cp0zJDZz.js";import"./ActivePoints-CNiBL0AU.js";import"./Dot-CndRCnyF.js";import"./types-DnHa4Bsr.js";import"./RegisterGraphicalItemId-DOISCJhn.js";import"./ErrorBarContext-CyeM8Knn.js";import"./GraphicalItemClipPath-CE5KwO2y.js";import"./SetGraphicalItem-CxDeYlaA.js";import"./useAnimationId-DxUodg7H.js";import"./getRadiusAndStrokeWidthFromDot-CI-CHUDp.js";import"./ActiveShapeUtils-DelvD5C5.js";import"./isPlainObject-Cbsg7i00.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D56HZ_ik.js";import"./Trapezoid-BQHGElUM.js";import"./Sector-QSKBV-oi.js";import"./Symbols-DyAchY7x.js";import"./symbol-Dha6D-sP.js";import"./step-De3ZEy02.js";import"./Curve-D9PoEc7H.js";import"./XAxis-Dg1K6_fH.js";import"./CartesianAxis-CKdFXiLA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BOA_nsSD.js";import"./Legend-BHwh_5Cc.js";import"./useElementOffset-DIzHmNft.js";import"./uniqBy-UOcraiRG.js";import"./iteratee-CLdQ3gon.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

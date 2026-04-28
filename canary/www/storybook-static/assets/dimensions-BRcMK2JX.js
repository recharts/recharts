import{j as e}from"./jsx-runtime-DJllxvKt.js";import{useMDXComponents as n}from"./index-BkiQF0eH.js";import{M as o,C as h}from"./blocks-8QpbYQ_2.js";import{C as d,W as s}from"./dimensions.stories-BF2N7rVg.js";import"./iframe-CGwC73OO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CF2MM-Q8.js";import"./ChartSizeDimensions-BPnl0leJ.js";import"./arrayEqualityCheck-BlziNjUk.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2h9cia6B.js";import"./immer-CURee86N.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-8-UPKNFd.js";import"./RechartsWrapper-DMSzhStw.js";import"./index-CByG6IuO.js";import"./hooks-C-sNjqxb.js";import"./axisSelectors-ClgkNKcu.js";import"./d3-scale-BH0-xThR.js";import"./zIndexSlice-Pvig-liy.js";import"./renderedTicksSlice-DBon5NFb.js";import"./CartesianChart-ChaOc86m.js";import"./chartDataContext-CmWRMrC9.js";import"./CategoricalChart-DtqXk2xy.js";import"./Page-Cj8EiXz7.js";import"./Line-B0ozFG-e.js";import"./Layer-BBc4ESPC.js";import"./ReactUtils-CYVZdurj.js";import"./Label-CE6Oihdn.js";import"./Text-DyJrB0G7.js";import"./DOMUtils-C1ZRgIwE.js";import"./ZIndexLayer-CAqiJgLq.js";import"./ActivePoints-BTOrd9Zd.js";import"./Dot-By1SCY7k.js";import"./types-C_6Vkwi_.js";import"./RegisterGraphicalItemId-yX1pqnM-.js";import"./ErrorBarContext-a8CrbqxK.js";import"./GraphicalItemClipPath-CuaCHgKU.js";import"./SetGraphicalItem-CRoX03qV.js";import"./useAnimationId-B3H-bs7p.js";import"./getRadiusAndStrokeWidthFromDot--GB1IBDa.js";import"./ActiveShapeUtils-BoZw7F6l.js";import"./isPlainObject-CMDmT6Oo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Qmwzuu0_.js";import"./Trapezoid-3CdzbHVF.js";import"./Sector-C4mEqCcR.js";import"./Symbols-DVb7nCyx.js";import"./symbol-zQKMiMKl.js";import"./step-zq2neHnY.js";import"./Curve-C4VRfueh.js";import"./XAxis-KheqwHPS.js";import"./CartesianAxis-Bw03X_Zl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DJqKmGik.js";import"./Legend-Bb9qczM4.js";import"./useElementOffset-DjtirxfO.js";import"./uniqBy-CKpTCRET.js";import"./iteratee-B30x_xh4.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

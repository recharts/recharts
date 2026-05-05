import{j as e}from"./jsx-runtime-DA26yleY.js";import{useMDXComponents as n}from"./index-BXG_zkm8.js";import{M as o,C as h}from"./blocks-ryN1ZsS5.js";import{C as d,W as s}from"./dimensions.stories-h5pOTFjU.js";import"./iframe-r2w7kZeJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dof6etCE.js";import"./ChartSizeDimensions-lBZtOA5X.js";import"./arrayEqualityCheck-0L0A4nkz.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-EjMTnW0n.js";import"./immer-CfvCTpDj.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-LwEwWDis.js";import"./RechartsWrapper-1HJqk7Yh.js";import"./index-W-AgMbp-.js";import"./hooks-B_Z23ri5.js";import"./axisSelectors-CJgn9_ry.js";import"./d3-scale-CTtR7bXz.js";import"./zIndexSlice-DqYPZFIv.js";import"./renderedTicksSlice-B-NBeGNG.js";import"./CartesianChart-BFAKYLf8.js";import"./chartDataContext-BjsyC2cu.js";import"./CategoricalChart-Beyzarg4.js";import"./Page-Cj8EiXz7.js";import"./Line-z9zeEmq5.js";import"./Layer-CMwqxUY2.js";import"./ReactUtils-BYDoU0L1.js";import"./Label-m6h3W7WS.js";import"./Text-DLc1wT1a.js";import"./DOMUtils-KJq6QJZu.js";import"./ZIndexLayer-CC246p5z.js";import"./ActivePoints-Ddlw9Tet.js";import"./Dot-JZESmYel.js";import"./types-ywkvGoUt.js";import"./RegisterGraphicalItemId-Bf-Aw6v0.js";import"./ErrorBarContext--RrhajOR.js";import"./GraphicalItemClipPath-uc4YpIA_.js";import"./SetGraphicalItem-C7uPVjvE.js";import"./useAnimationId-BkxSeEj0.js";import"./getRadiusAndStrokeWidthFromDot-B1ykn1OV.js";import"./ActiveShapeUtils-Df9SSVU9.js";import"./isPlainObject--i_1cxYd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvpuUb1d.js";import"./Trapezoid-BCSEHN2t.js";import"./Sector-D4bQnZgU.js";import"./Symbols-CbDfRlok.js";import"./symbol-JIUkL0GL.js";import"./step-CB3ZoZU9.js";import"./Curve-E_V9yRSe.js";import"./XAxis-CW9ZaA2b.js";import"./CartesianAxis-DqNMO4sJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-I9saElLN.js";import"./Legend-05jea6bq.js";import"./useElementOffset-Cp48T0Gk.js";import"./uniqBy-DkZlGKl-.js";import"./iteratee-BY0-7en0.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

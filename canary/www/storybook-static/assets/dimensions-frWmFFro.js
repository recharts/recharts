import{j as e}from"./jsx-runtime-zYMd04gK.js";import{useMDXComponents as n}from"./index-CqHGtW-m.js";import{M as o,C as h}from"./blocks-CtT1J-do.js";import{C as d,W as s}from"./dimensions.stories-BGFIl-Mt.js";import"./iframe-DrGUwCNH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-3x6YcQkr.js";import"./ChartSizeDimensions-DRKtapfC.js";import"./arrayEqualityCheck-B-thuthJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8l4f8zq.js";import"./immer-BtgqId3I.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BhneGLLj.js";import"./RechartsWrapper-B5QstiPk.js";import"./index-BPQwAQcQ.js";import"./hooks-MsD78rw6.js";import"./axisSelectors-DWkWWbr7.js";import"./d3-scale-ByzzBKwW.js";import"./zIndexSlice-C-eL6wuf.js";import"./renderedTicksSlice-BCPFeSIm.js";import"./CartesianChart-BEBwYk77.js";import"./chartDataContext-DU0L_61O.js";import"./CategoricalChart-CUzGTCjp.js";import"./Line-CrfGTrAG.js";import"./Layer-DOWBbL5h.js";import"./ReactUtils-C94_zE_J.js";import"./Label-B7C6-KkD.js";import"./Text-D0fVjYHK.js";import"./DOMUtils-Jzh5BZY9.js";import"./ZIndexLayer-CBw-SdHg.js";import"./ActivePoints-jvJhuq8B.js";import"./Dot-BB3Ssy69.js";import"./types-P3EO869A.js";import"./RegisterGraphicalItemId-CU0Tu66M.js";import"./ErrorBarContext-Bia10oLS.js";import"./GraphicalItemClipPath-DHoOCBG2.js";import"./SetGraphicalItem-BU2rvKVc.js";import"./useAnimationId-CM7jQqD0.js";import"./getRadiusAndStrokeWidthFromDot-Cc6LxlfS.js";import"./ActiveShapeUtils-xJQks6Bh.js";import"./isPlainObject-Bv08dW3C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DeFl-4jd.js";import"./Trapezoid-BR-nBhBU.js";import"./Sector-2SvHHXh3.js";import"./Symbols-DUBAqkb2.js";import"./symbol-Bc0Cydwk.js";import"./step-DKLDrfb1.js";import"./Curve-ywtP4oOQ.js";import"./XAxis-DG0gA5yQ.js";import"./CartesianAxis-BAqDA5_7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CXzGtzv8.js";import"./Legend-CeHj8nhf.js";import"./useElementOffset-BHZsEqBf.js";import"./uniqBy-BKy-up6l.js";import"./iteratee-WrN9iqVE.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

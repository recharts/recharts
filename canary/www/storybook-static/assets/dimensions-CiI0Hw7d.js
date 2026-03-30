import{j as e}from"./jsx-runtime-BYIrFm4e.js";import{useMDXComponents as n}from"./index-B_b7RXab.js";import{M as o,C as h}from"./blocks-BU3IagSB.js";import{C as d,W as s}from"./dimensions.stories-Cl61Jr8K.js";import"./iframe-DggZKTRy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-87ty5-MJ.js";import"./ChartSizeDimensions-DI522ei_.js";import"./arrayEqualityCheck-DnZLtMf6.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXkRukFF.js";import"./immer-DqkR2i4r.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-8cXw1Wpu.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./hooks-6phBN8Fl.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./Page-Cj8EiXz7.js";import"./Line-02UcdPyY.js";import"./Layer-BuKRQch4.js";import"./ReactUtils-D9Ez5HAk.js";import"./Label-Dxk2zJHG.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./ZIndexLayer-D85cG2g2.js";import"./ActivePoints-DUFygyVE.js";import"./Dot-9vL981FZ.js";import"./types-CBaBaM7i.js";import"./RegisterGraphicalItemId-uoq7pQPM.js";import"./ErrorBarContext-YFVjhS9M.js";import"./GraphicalItemClipPath-P03t5XLI.js";import"./SetGraphicalItem-Cc6rdJSS.js";import"./useAnimationId-C-Fijf5f.js";import"./getRadiusAndStrokeWidthFromDot-CUJVymlV.js";import"./ActiveShapeUtils-DDWUau3o.js";import"./isPlainObject-CasrDXFD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-mU1cjLaJ.js";import"./Trapezoid-CpShvAQC.js";import"./Sector-BKRhbQqJ.js";import"./Symbols-CzX1PTb6.js";import"./symbol-DdAFiUIg.js";import"./step-IN4trDru.js";import"./Curve-DpzeZUSQ.js";import"./XAxis-Dbhs6mKo.js";import"./CartesianAxis-BXbHKKX1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dp9rJ-_E.js";import"./Legend-zdcB5Bes.js";import"./useElementOffset-CmFu-JrW.js";import"./uniqBy-Bv-E6IG_.js";import"./iteratee-BGmnQGqa.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

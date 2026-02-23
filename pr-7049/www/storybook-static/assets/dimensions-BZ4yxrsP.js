import{j as e}from"./jsx-runtime-RswFpi5N.js";import{useMDXComponents as n}from"./index-Ctic5PBj.js";import{M as o,C as h}from"./blocks-DMDAl1mE.js";import{C as d,W as s}from"./dimensions.stories-Dzj_1Iyd.js";import"./iframe-BSrWh3Tm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7iJ4ctw.js";import"./ChartSizeDimensions-DsBX0MPa.js";import"./arrayEqualityCheck-Bi3wam60.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uX8ktvRe.js";import"./immer-o57FzM7P.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CrYrETUO.js";import"./RechartsWrapper-Cv7vOboh.js";import"./index-BKQB3IdD.js";import"./hooks-_Zpl3P7b.js";import"./axisSelectors-DaFs4qrj.js";import"./d3-scale-B1u95Bta.js";import"./zIndexSlice-DiVky1C5.js";import"./renderedTicksSlice-XfGhYDN5.js";import"./CartesianChart-C6stOvQo.js";import"./chartDataContext-BZoBhnnC.js";import"./CategoricalChart-K47yLqM7.js";import"./Line-CHf68RI_.js";import"./Layer-QGYU9n-M.js";import"./ReactUtils-CJRrmQRl.js";import"./Label-Bl_LjQTl.js";import"./Text-DUnGW5EL.js";import"./DOMUtils-BZKI_dtW.js";import"./ZIndexLayer-D38UhR7u.js";import"./ActivePoints-CNGhXiVX.js";import"./Dot-CDS9zqsC.js";import"./types-CM9WDYf0.js";import"./RegisterGraphicalItemId-otp8Qv4N.js";import"./ErrorBarContext-CUS8wCir.js";import"./GraphicalItemClipPath-K1LYOcWQ.js";import"./SetGraphicalItem-DrkBT3YT.js";import"./useAnimationId-DcrpwOmI.js";import"./getRadiusAndStrokeWidthFromDot-MRSXLGiq.js";import"./ActiveShapeUtils-CHgfreMM.js";import"./isPlainObject-D_XWLGeo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZDPWd6o.js";import"./Trapezoid-DEogtWZp.js";import"./Sector-Clje0fKa.js";import"./Symbols-DUq2FcPQ.js";import"./symbol-Bmu8h110.js";import"./step-D7Xw_JZz.js";import"./Curve-Y05R0_Dg.js";import"./XAxis-B42vfkRT.js";import"./CartesianAxis-DpJRxyLl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-C6UXDRpG.js";import"./Legend-C2VwFVez.js";import"./useElementOffset-DSe2TnxD.js";import"./uniqBy-C5sONUWO.js";import"./iteratee-Dnsy_OoO.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

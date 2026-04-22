import{j as e}from"./jsx-runtime-BUcT3Fw0.js";import{useMDXComponents as n}from"./index-DAGMqHq9.js";import{M as o,C as h}from"./blocks-G8t-TOb-.js";import{C as d,W as s}from"./dimensions.stories-BUO19hAk.js";import"./iframe-ARz8mg4k.js";import"./preload-helper-Dp1pzeXC.js";import"./index-L5czeD9H.js";import"./ChartSizeDimensions-CD-DU66p.js";import"./arrayEqualityCheck-DrcNi_LJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-6s3uHj.js";import"./immer-DTctj60x.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DRBeqEP-.js";import"./RechartsWrapper-Blzvisg2.js";import"./index-rdZdQMAv.js";import"./hooks-BYzsfUc2.js";import"./axisSelectors-BVUGHvar.js";import"./d3-scale-C0EL32h-.js";import"./zIndexSlice-DS03Ah9k.js";import"./renderedTicksSlice-CVTh0NIO.js";import"./CartesianChart-BUThqtKP.js";import"./chartDataContext-DOtajESI.js";import"./CategoricalChart-B_WLpA_O.js";import"./Page-Cj8EiXz7.js";import"./Line-DEIZCqut.js";import"./Layer-DVzuE_pH.js";import"./ReactUtils-hXOLhjEf.js";import"./Label-Cu7mDpGK.js";import"./Text-D-6uYGdc.js";import"./DOMUtils-CE-5408s.js";import"./ZIndexLayer-C2oPn4PG.js";import"./ActivePoints-DPEPJ12U.js";import"./Dot-D4Exawvu.js";import"./types-DqkCHGa8.js";import"./RegisterGraphicalItemId-BXvuLG6J.js";import"./ErrorBarContext-DDh6r-dJ.js";import"./GraphicalItemClipPath-Bz4PQaQE.js";import"./SetGraphicalItem-CxI49ViB.js";import"./useAnimationId-C0fVDb8C.js";import"./getRadiusAndStrokeWidthFromDot-CsRHkFbH.js";import"./ActiveShapeUtils-wYDV2nzn.js";import"./isPlainObject-B1moSef3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--sGlWkza.js";import"./Trapezoid-Cyk80hbt.js";import"./Sector-DhlBySFK.js";import"./Symbols-DEV19KB2.js";import"./symbol-DfbaKguC.js";import"./step-CP_r1PA8.js";import"./Curve-BzlOSzH0.js";import"./XAxis-BTtzk9-i.js";import"./CartesianAxis-BXpWNIc5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-nFfmrEBY.js";import"./Legend-B9KXuqvN.js";import"./useElementOffset-CSKRZ4dE.js";import"./uniqBy-ASh7y_L6.js";import"./iteratee-BNnjrYcR.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

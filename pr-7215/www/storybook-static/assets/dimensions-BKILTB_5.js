import{j as e}from"./jsx-runtime-BkXwHaO8.js";import{useMDXComponents as n}from"./index-C0NLvQhM.js";import{M as o,C as h}from"./blocks-WzbQ4wkq.js";import{C as d,W as s}from"./dimensions.stories-CoVGrTe-.js";import"./iframe-W4Sx2LmA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXRjpi5i.js";import"./ChartSizeDimensions-BbncuPUL.js";import"./arrayEqualityCheck-nt69rbNg.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2Cae6Gg7.js";import"./immer-B5uHt3-v.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DVlgHodQ.js";import"./RechartsWrapper-V_uqMe0M.js";import"./index-C0P2H7BI.js";import"./hooks-Dtno9pbE.js";import"./axisSelectors-CLSq_PV7.js";import"./d3-scale-Cc2KV_M4.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-B4A5_8Yi.js";import"./renderedTicksSlice-dCK1eX84.js";import"./CartesianChart-v8Cliy-Y.js";import"./chartDataContext-D35ia9Nl.js";import"./CategoricalChart-BDjWSCBE.js";import"./Page-Cj8EiXz7.js";import"./Line-s9XItNsd.js";import"./Layer-BaLfWC67.js";import"./Curve-BQ0Kb0jt.js";import"./types-C7u7ujMp.js";import"./step-01ontriS.js";import"./AnimatedItems-ORWSBWd2.js";import"./Label-aDrplQOD.js";import"./Text-CLwKs2sm.js";import"./DOMUtils-D7MEc4ch.js";import"./ZIndexLayer-Icro7Prq.js";import"./useAnimationId-BhZqgZTb.js";import"./ActivePoints-C0fyqzJF.js";import"./Dot-BiRIcMlM.js";import"./RegisterGraphicalItemId-CmKLmlaQ.js";import"./ErrorBarContext-y_IxfPjr.js";import"./GraphicalItemClipPath-DGbYSZbB.js";import"./SetGraphicalItem-DZ57qSXA.js";import"./getRadiusAndStrokeWidthFromDot-CMxbT_Fy.js";import"./ActiveShapeUtils-B164ljio.js";import"./isPlainObject-OTvoF1ix.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJERAndb.js";import"./Trapezoid-U3hbbJ2B.js";import"./Sector-CSPavfQA.js";import"./Symbols-DLTvK8m8.js";import"./symbol-DpMzgL8C.js";import"./XAxis-Do-NADlR.js";import"./CartesianAxis-QtM7KOVk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DWdWWCmD.js";import"./Legend-YPyrgm_o.js";import"./useElementOffset-B3_Nt53P.js";import"./uniqBy-D-4CZTX9.js";import"./iteratee-BU-pMtOK.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

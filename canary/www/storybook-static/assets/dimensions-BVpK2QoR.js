import{u as n,j as e}from"./index-78ushrAw.js";import{M as o,C as h}from"./blocks-CW71T-FY.js";import{C as d,W as s}from"./dimensions.stories-C0b4Tsng.js";import"./iframe-C55y8OzM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./index-DnfvrK_t.js";import"./ChartSizeDimensions-CC-gVF8Q.js";import"./zIndexSlice-mi5wuovt.js";import"./throttle-zPKptILV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DsJNQyNb.js";import"./RechartsWrapper-DsEVXtD9.js";import"./axisSelectors-DyDkozWt.js";import"./d3-scale-CwLPJ1sG.js";import"./index-kqQD3Gpu.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-Dykf-EVS.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./Page-Cj8EiXz7.js";import"./Line-DWmuFfd6.js";import"./Layer-D0VzgPFA.js";import"./Curve-B6Vmc8K0.js";import"./types-BjarwEzr.js";import"./step-CWyhxLD0.js";import"./path-DyVhHtw_.js";import"./activeStyles-DVnALFej.js";import"./Label-BceBwSRN.js";import"./Text-BSBFwZ1P.js";import"./pageBackground-D6U7S1qf.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./ZIndexLayer-BdI7uft_.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./ActivePoints-B8YNryID.js";import"./Dot-Co-mG1jW.js";import"./ErrorBarContext-DIbssQ08.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./getRadiusAndStrokeWidthFromDot-D-jKdLSh.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./useEffectiveDataKey-BY6K7cit.js";import"./XAxis-BhP0mslG.js";import"./CartesianAxis-UMkVq4pL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DGa7nV3z.js";import"./Legend-DyRKl7qb.js";import"./Symbols-Brox2qm_.js";import"./symbol-Btd-f6kS.js";import"./useElementOffset--zSzp9Ca.js";import"./uniqBy-Cvg7I5_E.js";import"./iteratee-B67uZlwB.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

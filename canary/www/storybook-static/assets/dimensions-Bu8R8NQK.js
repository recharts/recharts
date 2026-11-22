import{u as n,j as e}from"./index-4cgEv8Ol.js";import{M as o,C as h}from"./blocks-DFQ_YWk8.js";import{C as d,W as s}from"./dimensions.stories-BaEl0RRU.js";import"./iframe-CGGZfnCV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./index-gZNixUu0.js";import"./ChartSizeDimensions-DMYm2jgS.js";import"./zIndexSlice-BqswsCB2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DB16si7p.js";import"./throttle-CPPktxFr.js";import"./ComposedChart-BcV6dG2I.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./axisSelectors-ClqRDW4l.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH0gLY6W.js";import"./index-DZ2zDC6C.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./Page-Cj8EiXz7.js";import"./Line-B9-Nh0Th.js";import"./getRadiusAndStrokeWidthFromDot-B05KFCuA.js";import"./Layer-BEhjTHM-.js";import"./Curve-CCF7pO5F.js";import"./types-D01_wvtH.js";import"./step-CUQPzItX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./Label-BodzTsEv.js";import"./Text-BWSViN8b.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./ActivePoints-xFZqNI2F.js";import"./Dot-DwUXPQPe.js";import"./activeStyles-C8mJMGZo.js";import"./useAnimationId-CKpnbEUf.js";import"./Symbols-BkuE8ueA.js";import"./symbol-CmPSaat-.js";import"./ErrorBarContext-C-uWWZZj.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./useEffectiveDataKey-CaAnzbHC.js";import"./XAxis-D0RGLID7.js";import"./CartesianAxis-BDMs3FLV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DBOKklMV.js";import"./Legend-B6u0LYsj.js";import"./useElementOffset-BSU2Mggc.js";import"./uniqBy-awSaeX3A.js";import"./iteratee-CqSBOUYa.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

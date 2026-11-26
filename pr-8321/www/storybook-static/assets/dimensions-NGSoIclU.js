import{u as n,j as e}from"./index-Blwmib0_.js";import{M as o,C as h}from"./blocks-B0oYxdEk.js";import{C as d,W as s}from"./dimensions.stories-Wh4kTKWA.js";import"./iframe-CvaFu5-c.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./index-DnvnPPwe.js";import"./ChartSizeDimensions-D8uPfvLo.js";import"./zIndexSlice-BCgb8eXa.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./throttle-CPKsFv9V.js";import"./ComposedChart-CJeqweUj.js";import"./RechartsWrapper-B-sPOqKb.js";import"./axisSelectors-BvhvBZte.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-1_Z3dmgw.js";import"./index-gm9J6V3Z.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./Page-Cj8EiXz7.js";import"./Line-Bo0hpeCk.js";import"./getRadiusAndStrokeWidthFromDot-9zV8sg_8.js";import"./Layer-GSzXSKza.js";import"./Curve-CMLV0YB3.js";import"./types-B8ocCfqn.js";import"./step-C9qQ8yhV.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B7SMVv85.js";import"./Label-D9P4cAWK.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./ActivePoints-DxXTbZF0.js";import"./Dot-C2Vb3upB.js";import"./activeStyles-TP9Js-Ix.js";import"./useAnimationId-UMR0vx8i.js";import"./Symbols-BJcGRvsQ.js";import"./symbol-CBJm44QG.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./XAxis-DQoNxyYu.js";import"./CartesianAxis-71DKFDGT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-3HuEzFma.js";import"./Legend-vLngwb9Y.js";import"./useElementOffset-CPc3MDMB.js";import"./uniqBy-DqEP9E_e.js";import"./iteratee-BOojH3GU.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

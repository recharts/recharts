import{u as n,j as e}from"./index-BWAEGgsI.js";import{M as o,C as h}from"./blocks-8M2KnRaF.js";import{C as d,W as s}from"./dimensions.stories-CtgzfkOz.js";import"./iframe-ChMBHEXU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-hGd76TNN.js";import"./index-SyLToHDG.js";import"./index-B193mqnD.js";import"./ChartSizeDimensions-Cj2wQjSY.js";import"./zIndexSlice-Cd2z3Eer.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-X_3NC_87.js";import"./throttle-Cnp_ppL_.js";import"./ComposedChart-B7Dgc5aq.js";import"./RechartsWrapper-DPxS5GGe.js";import"./axisSelectors-CyYfX19F.js";import"./polarAxisSelectors-D-ZNarpI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_LSdR1o.js";import"./index-DyVFOlJ7.js";import"./renderedTicksSlice-BLUfpxyl.js";import"./index-Dyev39ZM.js";import"./fillDefinitions-BXMuCbY2.js";import"./CartesianChart-AmmyZjSo.js";import"./chartDataContext-Q7_H0Fyo.js";import"./CategoricalChart-mubfvuGW.js";import"./Page-Cj8EiXz7.js";import"./Line-DFvVHptl.js";import"./Layer-Db_exIRl.js";import"./Curve-C_M0JkPD.js";import"./types-DgDe6MQb.js";import"./step-BAe_ZTJZ.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BARWQZ2-.js";import"./Label-ZGXU1are.js";import"./Text-BiLv0S0Y.js";import"./ZIndexLayer-OHuleK-j.js";import"./ActivePoints-mf0f4bpo.js";import"./Dot-DD7kJ9X3.js";import"./activeStyles-BxZootHE.js";import"./useAnimationId-CSNfiiSW.js";import"./Symbols-DH6a8AH_.js";import"./symbol-CSHS3Q6e.js";import"./ErrorBarContext-BeNGW58S.js";import"./SetGraphicalItem-RJE-RN3x.js";import"./getRadiusAndStrokeWidthFromDot-CwS8CmXh.js";import"./ActiveShapeUtils-Dx41DMd2.js";import"./useEffectiveDataKey-Djw6ESIG.js";import"./XAxis-BEcsoff8.js";import"./CartesianAxis-8eiEJoC1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CnSUrpEe.js";import"./Legend-B268yQK2.js";import"./useElementOffset-CendnaSI.js";import"./uniqBy-CLumAGO5.js";import"./iteratee-B1mbQ6FI.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

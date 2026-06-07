import{u as n,j as e}from"./index-iD2Qr8pB.js";import{M as o,C as h}from"./blocks-Dtr4kebS.js";import{C as d,W as s}from"./dimensions.stories-CxtuELNR.js";import"./iframe-BqYy1R0H.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aB2rylH4.js";import"./index-C5sdWpfd.js";import"./index--UqKWgbM.js";import"./ChartSizeDimensions-DX7n87J7.js";import"./zIndexSlice-V534Dm1F.js";import"./immer-Bl4OFMGN.js";import"./get-BmpbLRXi.js";import"./resolveDefaultProps-DF5EmNm0.js";import"./isWellBehavedNumber-Bh7WW-St.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CrNF5qca.js";import"./RechartsWrapper-Cr-pgoDs.js";import"./index-Bep5EplS.js";import"./renderedTicksSlice-DUFmYLd3.js";import"./axisSelectors-B5gEtu2k.js";import"./d3-scale-x-g3_XS_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-nuuk7Fog.js";import"./chartDataContext-Cg_GXcDk.js";import"./CategoricalChart-DKKEuBf1.js";import"./Page-Cj8EiXz7.js";import"./Line-B-irt6PV.js";import"./Layer-FvXx8y_M.js";import"./Curve-CjCX_hKZ.js";import"./types-CKi3J98u.js";import"./step-eDccUZNe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BbE46Kp8.js";import"./Label-NYQMjqVT.js";import"./Text-Bb7f-h23.js";import"./DOMUtils-BM94Xuwo.js";import"./ZIndexLayer-COarhLNo.js";import"./useAnimationId-BGeq3Yxk.js";import"./ActivePoints-CUtjERgT.js";import"./Dot-CRjCuWT2.js";import"./RegisterGraphicalItemId-CLltNWrh.js";import"./ErrorBarContext-DTNv6sWg.js";import"./GraphicalItemClipPath-CsvgNQl2.js";import"./SetGraphicalItem-CBYRQcWu.js";import"./getRadiusAndStrokeWidthFromDot-C-NmK4oc.js";import"./ActiveShapeUtils--vnzUd2H.js";import"./XAxis-BqSBdy-L.js";import"./CartesianAxis-x5MMDJHG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BqslSc7g.js";import"./Legend-i4-julgt.js";import"./Symbols-DGpoRht8.js";import"./symbol-DAUjfM40.js";import"./useElementOffset-ChEgaNUP.js";import"./uniqBy-CaGUEiLV.js";import"./iteratee-QgNCt4oW.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

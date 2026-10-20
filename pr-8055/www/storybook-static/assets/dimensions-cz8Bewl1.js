import{u as n,j as e}from"./index-Bi-Q_8nk.js";import{M as o,C as h}from"./blocks-CN1Nhn_b.js";import{C as d,W as s}from"./dimensions.stories-C4KfG74c.js";import"./iframe-CugsIFqT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DnmvEXz4.js";import"./index-D41sdL0q.js";import"./index-SsBOmTOW.js";import"./ChartSizeDimensions-B6AYpHVI.js";import"./zIndexSlice-DhzbqJ4_.js";import"./throttle-DcWQ2VKw.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-SYQsUzr-.js";import"./isWellBehavedNumber-De17yvdK.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B19W0OVJ.js";import"./RechartsWrapper-B8Omcwd_.js";import"./axisSelectors-v31N2mNx.js";import"./d3-scale-BE1RrYdy.js";import"./index-DZRNoO74.js";import"./renderedTicksSlice-CiqEuPYb.js";import"./index-DwBMtOAp.js";import"./CartesianChart-C9o0hhbA.js";import"./chartDataContext-BvCoW6A3.js";import"./CategoricalChart-B7Q725c1.js";import"./Page-Cj8EiXz7.js";import"./Line-CaiOsEW_.js";import"./Layer-Cn8FVO5-.js";import"./Curve-TcJOrOAj.js";import"./types-D00HSLdz.js";import"./step-B1Iay_8G.js";import"./path-DyVhHtw_.js";import"./activeStyles-_GUbXh9K.js";import"./Label-Bo3nl74y.js";import"./Text-B6xMGXMn.js";import"./pageBackground-CAJ4za5K.js";import"./useId-CrLN3MoL.js";import"./useBackwardsCompatibleTheme-IzBt0VQP.js";import"./ZIndexLayer-DwmQuX8A.js";import"./useAnimationId-D9Q9XIBx.js";import"./dataEntryStyles-Be_CuUea.js";import"./ActivePoints-DdTGUghp.js";import"./Dot-CBYwyJvt.js";import"./ErrorBarContext-XAjwvqyS.js";import"./GraphicalItemClipPath-TUVXgEo2.js";import"./SetGraphicalItem-CIhe_dEk.js";import"./getRadiusAndStrokeWidthFromDot-1Vrisa5h.js";import"./ActiveShapeUtils-5nThOoH4.js";import"./useEffectiveDataKey-CDLJWg00.js";import"./XAxis-6HDBvGN1.js";import"./CartesianAxis-BJ-39moG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DaK5xoY3.js";import"./Legend-D8bcbKXA.js";import"./Symbols-CsFdNTJ7.js";import"./symbol-Cs2NCsK1.js";import"./useElementOffset-BZwJ3BKY.js";import"./uniqBy-CE_ecxrY.js";import"./iteratee-Pb6iGz9n.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

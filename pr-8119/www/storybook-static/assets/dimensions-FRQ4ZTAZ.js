import{u as n,j as e}from"./index-DmQOdJgg.js";import{M as o,C as h}from"./blocks-CbuKuUtA.js";import{C as d,W as s}from"./dimensions.stories-DzlqViAl.js";import"./iframe-C3rzwJQL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CqOvaYTW.js";import"./index-PmjQNdGh.js";import"./index-Bhn-1pm4.js";import"./ChartSizeDimensions-87zpgAe7.js";import"./zIndexSlice-6U0v4l7r.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BMfVJcK1.js";import"./throttle-B7FABENa.js";import"./ComposedChart-DMrHliN6.js";import"./RechartsWrapper--Ro5bVbm.js";import"./axisSelectors-_YduxGmH.js";import"./polarAxisSelectors-BUo1SW6c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C-_ks2ZK.js";import"./index-BmfKzQXT.js";import"./renderedTicksSlice-D3LNjura.js";import"./index-Dht9kxea.js";import"./CartesianChart-DMkGZMTo.js";import"./ZIndexPortal-x0Q6q0h0.js";import"./CategoricalChart-DxpiyG_I.js";import"./Page-Cj8EiXz7.js";import"./Line-BD2mjSH_.js";import"./Layer-B6-xlzoZ.js";import"./Curve-NLRniG8O.js";import"./types-BKor_cCv.js";import"./step-B3ivcKoR.js";import"./path-DyVhHtw_.js";import"./LabelList-CqZcLqEs.js";import"./Label-CBpcK4i6.js";import"./Text-X-wYRMmx.js";import"./DOMUtils-PuY_kSj_.js";import"./ZIndexLayer-NyRG-f9x.js";import"./ActivePoints-1KuvikUF.js";import"./Dot-obmqUtS4.js";import"./activeStyles-DlQJ4xNs.js";import"./useAnimationId-Dn06_oTK.js";import"./dataEntryStyles-CekGYxzv.js";import"./Symbols-53MnXipr.js";import"./symbol-C4d-r7qM.js";import"./ErrorBarContext-BUzY2WBc.js";import"./SetGraphicalItem-CPBOF30a.js";import"./getRadiusAndStrokeWidthFromDot-CUcYHW0t.js";import"./ActiveShapeUtils-C4p3bqvh.js";import"./useEffectiveDataKey-CP5SXjqP.js";import"./XAxis-DiB8sdSh.js";import"./CartesianAxis-CD4CCpjb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Bi88dWrW.js";import"./Legend-B7oMtHG8.js";import"./fillDefinitions-Cpwg_wUg.js";import"./useElementOffset-CADieQbP.js";import"./uniqBy-rOz66M2B.js";import"./iteratee-DVf-SFr-.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-Bqj8ekmV.js";import{M as o,C as h}from"./blocks-Ci3CJRxA.js";import{C as d,W as s}from"./dimensions.stories-DQTUr7bd.js";import"./iframe-i0tdfO-S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1dNy9AB.js";import"./index-BlLn1ZJf.js";import"./index-BBdkxuke.js";import"./ChartSizeDimensions-CDO1-t_7.js";import"./zIndexSlice-kcLB36p_.js";import"./throttle-yuh6eqF5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cqgjjt0o.js";import"./isWellBehavedNumber-BGsBu9W1.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CzSoXaYq.js";import"./RechartsWrapper-CQ-K3_cR.js";import"./index-BsuycueP.js";import"./axisSelectors-C9dKusfX.js";import"./d3-scale-Clxk0FTV.js";import"./renderedTicksSlice-xuaKpSF7.js";import"./CartesianChart-B95UWo8G.js";import"./chartDataContext-DuTDnpGx.js";import"./CategoricalChart-DFB3mzsf.js";import"./Page-Cj8EiXz7.js";import"./Line-Cm9DvNYq.js";import"./Layer-CsmYaDC8.js";import"./Curve-Dy9EB64d.js";import"./types-CcIZQOYN.js";import"./step-hH_hNvlA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHFbNXP7.js";import"./Label-DT2Ych2e.js";import"./Text-BMlLhZu5.js";import"./DOMUtils-CUxE2jbS.js";import"./ZIndexLayer-CZv5OG2W.js";import"./useAnimationId-OfLHi_5O.js";import"./ActivePoints-pXtGf72N.js";import"./Dot-CtPF4Cca.js";import"./RegisterGraphicalItemId-DtBmeLcC.js";import"./ErrorBarContext-FzqsPEvI.js";import"./GraphicalItemClipPath-BsfG3uc-.js";import"./SetGraphicalItem-DW3yQoWV.js";import"./graphicalItemIdentity-wnXl2DYz.js";import"./ActiveShapeUtils-EZQtDmwK.js";import"./RechartsThemeContext-C7h8s25b.js";import"./XAxis-DVXCxOsO.js";import"./CartesianAxis-CDi0h_Ul.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DpT96wDN.js";import"./Legend-De9VUwMG.js";import"./Symbols-BI3PLQUq.js";import"./symbol-CkQQR2Y2.js";import"./useElementOffset-CSiJWWdb.js";import"./uniqBy-CKF-LbxF.js";import"./iteratee-DkO0J_ik.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};

import{j as e}from"./jsx-runtime-CE0Xl6aQ.js";import{useMDXComponents as n}from"./index-CWxcNkVG.js";import{M as o,C as h}from"./blocks-Bxb9NINr.js";import{C as d,W as s}from"./dimensions.stories-85Ed6kk1.js";import"./iframe-DT_QfCX6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cn6U4qah.js";import"./ChartSizeDimensions-Dwz-fLgS.js";import"./arrayEqualityCheck-DgclqCQe.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CM621BjQ.js";import"./immer-Dm_eTc-x.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Yu-wXtxo.js";import"./RechartsWrapper-BjKAVIgx.js";import"./index-B5fX5g4a.js";import"./hooks-hb3YajwI.js";import"./axisSelectors-DEJjMxLA.js";import"./d3-scale-DdauB95s.js";import"./zIndexSlice-St67sYO3.js";import"./renderedTicksSlice-C-8YagrD.js";import"./CartesianChart-DSP5L81p.js";import"./chartDataContext-CtAEKjsT.js";import"./CategoricalChart-Dym2TIuH.js";import"./Line-C5NbBdSO.js";import"./Layer-V2SZsz4R.js";import"./ReactUtils-DiJ6wwjh.js";import"./Label-HvHa-kvb.js";import"./Text-Btk8OOuM.js";import"./DOMUtils-CXMayvsd.js";import"./ZIndexLayer-LaPkRlL4.js";import"./ActivePoints-Dhpi1IY5.js";import"./Dot-C_3CCWU2.js";import"./types-BFIPf9k1.js";import"./RegisterGraphicalItemId-C3WllrLT.js";import"./ErrorBarContext-DjRWnVpQ.js";import"./GraphicalItemClipPath-CjwarN2Z.js";import"./SetGraphicalItem-DaPsLcNS.js";import"./useAnimationId-Kk_Sm5qp.js";import"./getRadiusAndStrokeWidthFromDot-DWNytFT8.js";import"./ActiveShapeUtils-5Z9knZsD.js";import"./isPlainObject-CkHzR63e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR7QntkE.js";import"./Trapezoid-DBAlB0P9.js";import"./Sector-c2ULWy9q.js";import"./Symbols-LHeYuxni.js";import"./symbol-D2MJ3HO9.js";import"./step-BvjBdR90.js";import"./Curve-DVqXjtuH.js";import"./XAxis-BE7dRx6e.js";import"./CartesianAxis-BXsDKsAg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-8Bgwa54a.js";import"./Legend-1CNKIUyY.js";import"./useElementOffset-BKvtVAYG.js";import"./uniqBy-7Wuh8TV7.js";import"./iteratee-BqkoQ9iH.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

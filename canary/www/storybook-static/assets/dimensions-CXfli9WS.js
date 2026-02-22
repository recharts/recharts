import{j as e}from"./jsx-runtime-BH75SPlg.js";import{useMDXComponents as n}from"./index-pQKrvNJQ.js";import{M as o,C as h}from"./blocks-qy_MJTkf.js";import{C as d,W as s}from"./dimensions.stories-BqH6Ljbd.js";import"./iframe-C2QqRKe7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BnZqoCYA.js";import"./ChartSizeDimensions-BWtVWwLO.js";import"./arrayEqualityCheck-PWQDmerQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7LXz8kjz.js";import"./immer-CHIvT254.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-XS1PtTuL.js";import"./RechartsWrapper-uOO6_n61.js";import"./index-rLwxE0hv.js";import"./hooks-mESitlr_.js";import"./axisSelectors-BKaUJCrd.js";import"./d3-scale-dRIxyhfO.js";import"./zIndexSlice-BpAhelXi.js";import"./renderedTicksSlice-psJG_LWq.js";import"./CartesianChart-_z898-at.js";import"./chartDataContext-Cua8pUoe.js";import"./CategoricalChart-DTUutzp0.js";import"./Line-Bg3EL3qc.js";import"./Layer-DCLj2Osy.js";import"./ReactUtils-D05HJqIj.js";import"./Label-s7jamoYW.js";import"./Text-DIlIMQQ1.js";import"./DOMUtils-9UeuBFxq.js";import"./ZIndexLayer-DIR-sv8W.js";import"./ActivePoints-DEfaZ0g5.js";import"./Dot-CoSgEVxE.js";import"./types-DlfTkI4e.js";import"./RegisterGraphicalItemId-j0z2KBnl.js";import"./ErrorBarContext-C3fSByYS.js";import"./GraphicalItemClipPath-IOucdNEs.js";import"./SetGraphicalItem-C5oBx3dN.js";import"./useAnimationId-Bi88RhdV.js";import"./getRadiusAndStrokeWidthFromDot-BGZ245Ii.js";import"./ActiveShapeUtils-CkOZGg75.js";import"./isPlainObject-DLKiFJlX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOyb4uG2.js";import"./Trapezoid-Dk1NLMTJ.js";import"./Sector-BVmDGxYU.js";import"./Symbols-B81oQNtv.js";import"./symbol-CnCwPTjr.js";import"./step--bjVkvqq.js";import"./Curve-CBR7IDRo.js";import"./XAxis-DNcvFPfK.js";import"./CartesianAxis-se2SzLtu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-21rUvSzF.js";import"./Legend-ClNQMLK0.js";import"./useElementOffset-BzleAjZ-.js";import"./uniqBy-CS1JI9OO.js";import"./iteratee-G7IUGyAd.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

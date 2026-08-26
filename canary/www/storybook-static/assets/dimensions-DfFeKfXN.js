import{u as n,j as e}from"./index-DHQyLCXi.js";import{M as o,C as h}from"./blocks-DVUuin6_.js";import{C as d,W as s}from"./dimensions.stories-BOq6BNCs.js";import"./iframe-NSpsGxr3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./index-DWO3hHqn.js";import"./ChartSizeDimensions-DfSzG7WF.js";import"./zIndexSlice-CegrvH4P.js";import"./throttle-oOh5DhdY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BSbO4QCj.js";import"./RechartsWrapper-DtJCjJYR.js";import"./axisSelectors-BkwFONEa.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./Page-Cj8EiXz7.js";import"./Line-Di8fBUgO.js";import"./Layer-BnG363as.js";import"./Curve-CaqAetYK.js";import"./types-Co_GWDov.js";import"./step-Drtb2meU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BkT2_sP2.js";import"./Label-BIdOyJIr.js";import"./Text-BtwC4msG.js";import"./DOMUtils-CWTrI1E5.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./ZIndexLayer-C4urMDBy.js";import"./useAnimationId-N_fuM4i0.js";import"./ActivePoints-KPsJbcKk.js";import"./Dot-DjaeVWdC.js";import"./RegisterGraphicalItemId-wt0KspV9.js";import"./ErrorBarContext-CEiAdeUz.js";import"./GraphicalItemClipPath-CcSo6wES.js";import"./SetGraphicalItem-C1qAtScX.js";import"./getRadiusAndStrokeWidthFromDot-DkEHurz6.js";import"./ActiveShapeUtils-pIseDvg-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DNhoou9P.js";import"./CartesianAxis-BwBDYPDu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-s1ngqAL7.js";import"./Legend-CBMEHQx2.js";import"./Symbols-9rD-zr54.js";import"./symbol-B_V30F_Z.js";import"./useElementOffset-DnaqijmP.js";import"./uniqBy-BO5ZjA6J.js";import"./iteratee-C2lnqyuZ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

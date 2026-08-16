import{u as n,j as e}from"./index-B1eboDiS.js";import{M as o,C as h}from"./blocks-crBwYugy.js";import{C as d,W as s}from"./dimensions.stories-OH15dRqm.js";import"./iframe-Ci96e1sZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPCYaABA.js";import"./index-BOr38y8s.js";import"./index-DH9mueDN.js";import"./ChartSizeDimensions-BFz2whjq.js";import"./zIndexSlice-B1EQFXas.js";import"./throttle-Dnh15uFS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BzIfhmsg.js";import"./isWellBehavedNumber-CF2GCTfq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CsnMi2po.js";import"./RechartsWrapper-DZtweL3y.js";import"./index-7lcQp6iI.js";import"./axisSelectors-Bjs83WTa.js";import"./d3-scale-B0NLrUrx.js";import"./renderedTicksSlice-DNsJLMW0.js";import"./CartesianChart-CCAPJMRK.js";import"./chartDataContext-BYKHEhUl.js";import"./CategoricalChart--GJhAkst.js";import"./Page-Cj8EiXz7.js";import"./Line-CNdoo1PD.js";import"./Layer-CZ2F14sW.js";import"./Curve-BysAQY9m.js";import"./types-D2o80dZ0.js";import"./step-pm8cM45a.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BGUr9OQF.js";import"./Label-CF4xlS6j.js";import"./Text-B3nSPEiT.js";import"./DOMUtils-BbVSTVZx.js";import"./useBackwardsCompatibleTheme-D2Fw4B1K.js";import"./ZIndexLayer-DwZny_eu.js";import"./useAnimationId-BzCTa_4t.js";import"./ActivePoints-CcMPEi3Q.js";import"./Dot-CNczHnMS.js";import"./RegisterGraphicalItemId-CEOZLZl3.js";import"./ErrorBarContext-MBgpuxtH.js";import"./GraphicalItemClipPath-wdGuOIwS.js";import"./SetGraphicalItem-C5ta0dz_.js";import"./getRadiusAndStrokeWidthFromDot-BH_CgfJ4.js";import"./ActiveShapeUtils-Bmp4Kv1_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-sNeLDR5W.js";import"./CartesianAxis-D8l6BhAe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BeupBiv_.js";import"./Legend-BCp85ZfU.js";import"./Symbols-Di4l6aUk.js";import"./symbol-DrFKkU6g.js";import"./useElementOffset-BdkJ1pFB.js";import"./uniqBy-CHZeAJXB.js";import"./iteratee-C-mJOptL.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-CMBqLlmT.js";import{M as o,C as h}from"./blocks-Ct_4RYfl.js";import{C as d,W as s}from"./dimensions.stories-c0iGJxLM.js";import"./iframe-DM7I_Yyj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-tOsCsIz0.js";import"./index-BSGAosA0.js";import"./index-CtbzcRhJ.js";import"./ChartSizeDimensions-D7fSFo-w.js";import"./zIndexSlice-fCEc0s5F.js";import"./throttle-D9z--FMJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-juvHZLkB.js";import"./isWellBehavedNumber-CD6T6Jdg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C0efLOGA.js";import"./RechartsWrapper-8avap2Ow.js";import"./axisSelectors-C4a64MXg.js";import"./d3-scale-BeCTSUmZ.js";import"./index-BPHh1qic.js";import"./renderedTicksSlice-D73l8EHs.js";import"./index-1HyAGRae.js";import"./CartesianChart-BtvlbeE8.js";import"./chartDataContext-Bv5z90Vo.js";import"./CategoricalChart-DChxHazb.js";import"./Page-Cj8EiXz7.js";import"./Line-BuB5QTku.js";import"./Layer-BuDBFoKe.js";import"./Curve-DCsdrtWm.js";import"./types-C2i2rvmz.js";import"./step-BWu1v0QN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bps8ucZ8.js";import"./Label-D7T4Ye9K.js";import"./Text-BHb-71ue.js";import"./DOMUtils-x3LNgLWi.js";import"./useId-Cqy_j9lJ.js";import"./useBackwardsCompatibleTheme-ZcFSMvkr.js";import"./ZIndexLayer-DKb6XHFw.js";import"./useAnimationId-ByMoBfgF.js";import"./ActivePoints-6ohdy_Z2.js";import"./Dot-C28FoeNl.js";import"./RegisterGraphicalItemId-CHv-hOW4.js";import"./ErrorBarContext-u65-Bu8d.js";import"./GraphicalItemClipPath-ByPtBGRG.js";import"./SetGraphicalItem-BuE0ytWh.js";import"./getRadiusAndStrokeWidthFromDot-Bx2TZeXM.js";import"./ActiveShapeUtils-C8wHq7T4.js";import"./useGraphicalItemIdentity-w6WnNdhF.js";import"./XAxis-C9bS5ZnW.js";import"./CartesianAxis-CnfqwB17.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Cygy87Ha.js";import"./Legend-CLQ6_jIb.js";import"./Symbols-BsmPOwYr.js";import"./symbol-BTIK3SpD.js";import"./useElementOffset-D2TnO8Yd.js";import"./uniqBy-DrK2h0sx.js";import"./iteratee-CmV4JHhh.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-Dtk-N8Hk.js";import{M as o,C as h}from"./blocks-CX4roD-y.js";import{C as d,W as s}from"./dimensions.stories-CPhR6D4f.js";import"./iframe-AVXfkv0w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DVRYbkUW.js";import"./index-CAfC1Ith.js";import"./index-Dd93-if2.js";import"./ChartSizeDimensions-DQq15cZs.js";import"./zIndexSlice-Cpy73fEL.js";import"./throttle-CElZ_OGC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dkqh2Ws0.js";import"./isWellBehavedNumber-C_0WrTwr.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-T6jMjzBh.js";import"./RechartsWrapper-Bri81Hil.js";import"./index-CFZrGIxH.js";import"./renderedTicksSlice-BWAQroks.js";import"./axisSelectors-D5sH7YSt.js";import"./d3-scale-BOPObWse.js";import"./CartesianChart-DosAg0hI.js";import"./chartDataContext-bVF6MeRR.js";import"./CategoricalChart-B23xHRz2.js";import"./Page-Cj8EiXz7.js";import"./Line-Cq09MVYd.js";import"./Layer-ht4prXr-.js";import"./Curve-B8QEUj55.js";import"./types-3aWcalA-.js";import"./step-0iQNMmmi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-XdBOicHp.js";import"./Label-Bn0N3T-p.js";import"./Text-Cc6gSuDY.js";import"./DOMUtils-BVwM3Jdl.js";import"./ZIndexLayer-B0wR3MRM.js";import"./useAnimationId-DI1PqqVk.js";import"./ActivePoints-Bwfb1T53.js";import"./Dot-B1Np5YQX.js";import"./RegisterGraphicalItemId-Ba7mqd93.js";import"./ErrorBarContext-DhRbE3HA.js";import"./GraphicalItemClipPath-CZYMuLkO.js";import"./SetGraphicalItem-BnjtQKWx.js";import"./getRadiusAndStrokeWidthFromDot-DI-Ci7Ho.js";import"./ActiveShapeUtils-CFy0QQ1U.js";import"./XAxis-Ccg3sENg.js";import"./CartesianAxis-CUHI9zvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-IC2DAOXe.js";import"./Legend-CrCKt3md.js";import"./Symbols-dI54hGBN.js";import"./symbol-DmI7JuN2.js";import"./useElementOffset-DyzLG0E2.js";import"./uniqBy-CdBEraEs.js";import"./iteratee-uAse0fea.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

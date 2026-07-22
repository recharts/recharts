import{u as n,j as e}from"./index-tmplqDH7.js";import{M as o,C as h}from"./blocks-Y73TQ0Ef.js";import{C as d,W as s}from"./dimensions.stories-DJhNbm_W.js";import"./iframe-Cy6UHwH8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./index-CqwtYJ2E.js";import"./ChartSizeDimensions-CoQD8NnF.js";import"./zIndexSlice-Dv2HqMCj.js";import"./throttle-CrXcydw9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dm8MO2Et.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./axisSelectors-DXOe3ZcM.js";import"./d3-scale-Bvw0bMMA.js";import"./CartesianChart-C_8s1Ao-.js";import"./chartDataContext-BQ-bLF-q.js";import"./CategoricalChart-Bl-8OvLS.js";import"./Page-Cj8EiXz7.js";import"./Line-BzhYL1rQ.js";import"./Layer-Ju7yA9Ak.js";import"./Curve-l3wqrsuS.js";import"./types-Wlq7LyUb.js";import"./step-CuI5m1Cq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-P3TyXGJ4.js";import"./Label-D4x62xM0.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./ZIndexLayer-BhFWLYxf.js";import"./useAnimationId-q_i8pRM6.js";import"./ActivePoints-DwOS4gGn.js";import"./Dot-Coa1b26v.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./ErrorBarContext-DbNi8xqP.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getRadiusAndStrokeWidthFromDot-BnXETLA5.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./XAxis-BEHj4vqI.js";import"./CartesianAxis-D4Lg0Pka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-Czbc2cL9.js";import"./Legend-CHfq6ixo.js";import"./Symbols-COXnL47l.js";import"./symbol-CcEOpE0b.js";import"./useElementOffset-CogvFxV1.js";import"./uniqBy-BpJlFfbc.js";import"./iteratee-DsECz__7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-UjnU9T3Q.js";import{M as o,C as h}from"./blocks-BTzHFnnn.js";import{C as d,W as s}from"./dimensions.stories--snii2FO.js";import"./iframe-5yXyXnaZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./index-sztAkQPC.js";import"./ChartSizeDimensions-C92Qm8JA.js";import"./zIndexSlice-BDAt33KO.js";import"./throttle-Cv9w3d5_.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dwgw5DNZ.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./axisSelectors-BXq32W01.js";import"./d3-scale-qreNZqM_.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./Page-Cj8EiXz7.js";import"./Line-DVLh0I7m.js";import"./Layer-DvsJVPiG.js";import"./Curve-BJjaxUht.js";import"./types-D9gPTTpR.js";import"./step-7JpJFPkO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B7Ugi4uF.js";import"./Label-BYYKCmSa.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./ZIndexLayer-DtzoUjMA.js";import"./useAnimationId-C0yd1tvr.js";import"./ActivePoints-CqHCG0xk.js";import"./Dot-Dqwh_5PD.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getRadiusAndStrokeWidthFromDot-CDO922ey.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./XAxis-DBNQ58f8.js";import"./CartesianAxis-B2yef_ws.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-DrQXbr6a.js";import"./Legend-ehOQxrBj.js";import"./Symbols-CHIguC1u.js";import"./symbol-DQ9BiUzn.js";import"./useElementOffset-CD3Qxymn.js";import"./uniqBy-BUqkqiyG.js";import"./iteratee-_t3hDaip.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

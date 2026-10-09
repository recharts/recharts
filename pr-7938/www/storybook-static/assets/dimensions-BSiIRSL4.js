import{u as n,j as e}from"./index-ArQmo5de.js";import{M as o,C as h}from"./blocks-CzjJE6-u.js";import{C as d,W as s}from"./dimensions.stories-Io9sOFUu.js";import"./iframe-DuKrJ0zn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-UXVF2SDl.js";import"./index--f_yOVNJ.js";import"./index-CQPSgdXH.js";import"./ChartSizeDimensions-CMfOPpwh.js";import"./zIndexSlice-CLjLalaX.js";import"./throttle-DtzmWgqu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-teTym_le.js";import"./isWellBehavedNumber-C1SokatK.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-1NZsUFmO.js";import"./RechartsWrapper-BEffPtCf.js";import"./axisSelectors-C-iDc9ZD.js";import"./d3-scale-DZyfBumm.js";import"./index-Bw0d1gq_.js";import"./renderedTicksSlice-DC-eZxTj.js";import"./index-BP-prfso.js";import"./CartesianChart-Dmo_0Xna.js";import"./chartDataContext-UIg6E7lh.js";import"./CategoricalChart-C3GMMeRH.js";import"./Page-Cj8EiXz7.js";import"./Line-foXAM9pQ.js";import"./Layer-DzPACqXk.js";import"./Curve-C7E_1QuT.js";import"./types-C0puMKP8.js";import"./step-CGQ88gSo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UVqcjqe1.js";import"./Label-T3-RQcya.js";import"./Text-BsbcFYx2.js";import"./DOMUtils-Bn1l__ER.js";import"./useId-DlXJwOUw.js";import"./useBackwardsCompatibleTheme-BxDCx_m8.js";import"./ZIndexLayer-F_xMErBH.js";import"./useAnimationId-BEtuyajc.js";import"./ActivePoints-DZ7JKpsC.js";import"./Dot-CnU97eIy.js";import"./dataEntryStyles-CQWLZIwm.js";import"./ErrorBarContext-DC_DRovh.js";import"./GraphicalItemClipPath-BH1_5J3a.js";import"./SetGraphicalItem-DHruVb1s.js";import"./getRadiusAndStrokeWidthFromDot-Dp-k2N1-.js";import"./ActiveShapeUtils-Ng0jEWa8.js";import"./useGraphicalItemIdentity-zknNX3FR.js";import"./XAxis-DcN8Db4p.js";import"./CartesianAxis-KhOJh8Ny.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DQojOnyt.js";import"./Legend-DNaZwaSw.js";import"./Symbols-MbuRQEw2.js";import"./symbol-CYfzeges.js";import"./useElementOffset-Be-W7NB-.js";import"./uniqBy-DyfRyEMq.js";import"./iteratee-CBPmjXP9.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

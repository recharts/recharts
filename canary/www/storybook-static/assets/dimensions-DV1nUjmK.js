import{u as n,j as e}from"./index-Cmzd0qwF.js";import{M as o,C as h}from"./blocks-zHnD7ygK.js";import{C as d,W as s}from"./dimensions.stories-CYS-lZqR.js";import"./iframe-EacBJx3u.js";import"./preload-helper-Dp1pzeXC.js";import"./index-zONtSjtR.js";import"./index-Cp5XPxNK.js";import"./index-DAXn18Z3.js";import"./ChartSizeDimensions-BdvqFETP.js";import"./zIndexSlice-BiNX82M2.js";import"./throttle-CQWyIvYS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Pp64jnNu.js";import"./isWellBehavedNumber-cllAzHLG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DLV9kOGF.js";import"./RechartsWrapper-DvnaJvMy.js";import"./axisSelectors-BsKbaT3c.js";import"./d3-scale-XN8I2g_L.js";import"./index-Cjnu8Ghr.js";import"./renderedTicksSlice-Bi45b659.js";import"./index-BWFLwSJj.js";import"./CartesianChart-CpkU4zi_.js";import"./chartDataContext-6_AZEoRj.js";import"./CategoricalChart-DR3NAbyi.js";import"./Page-Cj8EiXz7.js";import"./Line-CgqeytmG.js";import"./Layer-BUsl6vHA.js";import"./Curve-DXkxZuR3.js";import"./types-CDt3wtpt.js";import"./step--LIF_hlk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CgPok0XL.js";import"./Label-DrX_jEaz.js";import"./Text-DusUwDRl.js";import"./DOMUtils-R4-PljPA.js";import"./useId-Cx3ryNMd.js";import"./useBackwardsCompatibleTheme-C878E-FF.js";import"./ZIndexLayer-CbjobkdE.js";import"./useAnimationId-BrvpB7V7.js";import"./ActivePoints-BKu6KFOZ.js";import"./Dot-Dlf7mAE0.js";import"./RegisterGraphicalItemId-C6xi7qpR.js";import"./ErrorBarContext-Di28pWGd.js";import"./GraphicalItemClipPath-DdpslyMR.js";import"./SetGraphicalItem-DIVfOwKJ.js";import"./getRadiusAndStrokeWidthFromDot-D1gfmqoH.js";import"./ActiveShapeUtils-D1Q_UPVj.js";import"./useGraphicalItemIdentity-PgG_6CLw.js";import"./XAxis-Cl6K2xWP.js";import"./CartesianAxis-DHoeZLWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-qieo9xUf.js";import"./Legend-DUal1kSr.js";import"./Symbols-DQqKkMeQ.js";import"./symbol-Gpg8Q1c8.js";import"./useElementOffset-CW3PsA1I.js";import"./uniqBy-DulbN1k2.js";import"./iteratee-CZcssftL.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

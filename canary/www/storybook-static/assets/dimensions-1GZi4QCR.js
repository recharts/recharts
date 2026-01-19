import{j as e}from"./jsx-runtime-DxNQgo_M.js";import{useMDXComponents as n}from"./index-DQsjE7VW.js";import{M as h,C as o}from"./blocks-BVIMXuba.js";import{C as d,W as s}from"./dimensions.stories-C6NULl_x.js";import"./iframe-BfEeuf29.js";import"./preload-helper-Dp1pzeXC.js";import"./index-n-fO4kHm.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./arrayEqualityCheck-CQTYn8oK.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./PolarUtils-B3A4Bn44.js";import"./ComposedChart-PLvFJZNy.js";import"./RechartsWrapper-DsA4AxRI.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./zIndexSlice-DJbSQN7A.js";import"./CartesianChart-Ded3Vhag.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./Line-BeWiuKbx.js";import"./Layer-WUPrCNhO.js";import"./ReactUtils-Dy1dqhtA.js";import"./Label-BQL_xh_a.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./ZIndexLayer-nNaEVjlH.js";import"./ActivePoints-BLQCmbLM.js";import"./Dot-CJLw0pnw.js";import"./types-B9h6Osdn.js";import"./RegisterGraphicalItemId-BNJoKXDB.js";import"./ErrorBarContext-D7bWjwna.js";import"./GraphicalItemClipPath-BkoIn00V.js";import"./SetGraphicalItem-D6lIAA2e.js";import"./useAnimationId-593qmaql.js";import"./getRadiusAndStrokeWidthFromDot-7aN4YOPs.js";import"./ActiveShapeUtils-DAJHbM11.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLgB_eL-.js";import"./Trapezoid-D5AU_-Tp.js";import"./Sector-Bpai8LVK.js";import"./Symbols-DTph50Q3.js";import"./Curve-QDibvidp.js";import"./XAxis-DCok0cmX.js";import"./CartesianAxis-D11Z6FnG.js";import"./YAxis-Dk-NUqCy.js";import"./Legend-DV-YA5se.js";import"./useElementOffset-C3xH1JMH.js";import"./iteratee-D9HA3Tju.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};

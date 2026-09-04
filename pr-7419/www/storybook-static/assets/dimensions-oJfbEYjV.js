import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,n,s as r}from"./blocks-Dxa5NFUD.js";import{i,r as a,t as o}from"./jsx-runtime-5HYsnxpu.js";import{n as s,r as c,t as l}from"./dimensions.stories-CrVs2i51.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{of:s}),`
`,(0,f.jsxs)(t.h1,{id:`usechartwidth-usechartheight`,children:[(0,f.jsx)(t.code,{children:`useChartWidth`}),`, `,(0,f.jsx)(t.code,{children:`useChartHeight`})]}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`useChartWidth`}),` hook returns the width of the chart in pixels. `,(0,f.jsx)(t.code,{children:`useChartHeight`}),` returns the height of the chart in pixels.`]}),`
`,(0,f.jsxs)(t.p,{children:[`If you are using chart with hardcoded `,(0,f.jsx)(t.code,{children:`width`}),` and `,(0,f.jsx)(t.code,{children:`height`}),` props, then the width returned will be the same
as the `,(0,f.jsx)(t.code,{children:`width`}),` and `,(0,f.jsx)(t.code,{children:`height`}),` prop on the main chart element.`]}),`
`,(0,f.jsxs)(t.p,{children:[`If you are using a chart with a `,(0,f.jsx)(t.code,{children:`ResponsiveContainer`}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,(0,f.jsxs)(t.p,{children:[`If the chart has any axes or legend, the `,(0,f.jsx)(t.code,{children:`width`}),` and `,(0,f.jsx)(t.code,{children:`height`}),` will be the size of the chart
including the axes and legend.`]}),`
`,(0,f.jsx)(t.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,(0,f.jsx)(n,{of:l,layout:`padded`}),`
`,(0,f.jsx)(t.h2,{id:`parent-component`,children:`Parent Component`}),`
`,(0,f.jsx)(t.p,{children:`The hooks can be used within any chart:`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<AreaChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<BarChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<ComposedChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<FunnelChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<LineChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<PieChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<RadarChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<RadialBarChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<Sankey/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<ScatterChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<SunburstChart/>`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.code,{children:`<Treemap/>`})}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=o(),a(),t(),c()})))()}p();export{d as default};
import{u as n,j as e}from"./index-Cvm3_kWd.js";import{M as o,C as h}from"./blocks-Csq9cmbe.js";import{C as d,W as s}from"./dimensions.stories-C2GD0w6I.js";import"./iframe-D7yt-ZhS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./index-8zJni8A2.js";import"./ChartSizeDimensions-p7-a4lL1.js";import"./zIndexSlice-B3_xMC6k.js";import"./immer-HxqS16dW.js";import"./get-Cebs6l6-.js";import"./resolveDefaultProps-BUJk688E.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bl4WegRH.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./renderedTicksSlice-DNerh-qI.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./CategoricalChart-CMCxIWsh.js";import"./Page-Cj8EiXz7.js";import"./Line-CuD-m0Re.js";import"./Layer-B34T8oTs.js";import"./Curve-DbP7_Dvx.js";import"./types-CuLQosun.js";import"./step-OtS6f_xO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CUAQ84gk.js";import"./Label-C0p1CWe9.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./ZIndexLayer-BjlE0UF2.js";import"./useAnimationId-gSm0_FsD.js";import"./ActivePoints-KBOJcLZ_.js";import"./Dot-CAfCQdRP.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./ErrorBarContext-BCc7VHSV.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";import"./getRadiusAndStrokeWidthFromDot-BmHXs1fo.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./XAxis-dYNJxVBm.js";import"./CartesianAxis-CuPdOLrD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-C5MIsZgm.js";import"./Legend-BuS0gEvx.js";import"./Symbols-CgBZX9Up.js";import"./symbol-DAthuMSh.js";import"./useElementOffset-DEe0y9L2.js";import"./uniqBy-C2rlrQ-8.js";import"./iteratee-DZxnX6Pq.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

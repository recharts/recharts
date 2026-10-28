import{u as n,j as e}from"./index-wcyFzzGw.js";import{M as o,C as h}from"./blocks-CbX-aDe_.js";import{C as d,W as s}from"./dimensions.stories-DBa2YcLA.js";import"./iframe-BPaILHrg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./index-B04q1BNb.js";import"./ChartSizeDimensions-C3DHEm77.js";import"./zIndexSlice-Bmw1fph3.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./throttle-B9kMlkpl.js";import"./ComposedChart-DU4uZiCB.js";import"./RechartsWrapper-D7MXGog1.js";import"./axisSelectors-BgmzCmWH.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CvctqLlv.js";import"./index-CnIUZT6I.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./Page-Cj8EiXz7.js";import"./Line-cHlCiH4v.js";import"./Layer-BYN-xjEA.js";import"./Curve-DgfwLhV2.js";import"./types-DUbTKtwp.js";import"./step-D2WZnOIE.js";import"./path-DyVhHtw_.js";import"./LabelList-BA53HbEo.js";import"./Label-r7ey19qR.js";import"./Text-CtKpv6li.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./ActivePoints-BAgIMyf9.js";import"./Dot-Eg6Ew0GK.js";import"./activeStyles-BRvUZ3GA.js";import"./useAnimationId-BDqdHn7D.js";import"./dataEntryStyles-DyygVVmF.js";import"./Symbols-Dk1_zaB2.js";import"./symbol-hCExAh31.js";import"./ErrorBarContext-CUfKSzjm.js";import"./SetGraphicalItem-CsCmCIZL.js";import"./getRadiusAndStrokeWidthFromDot-DTWprENN.js";import"./ActiveShapeUtils-By1qTU3M.js";import"./useEffectiveDataKey-Bbwl3GsC.js";import"./XAxis-Bp49XRaF.js";import"./CartesianAxis-DqZBHpVR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CZAlOOP6.js";import"./Legend-uniXBVqh.js";import"./useElementOffset-CYi5LIP9.js";import"./uniqBy-CQUkPewS.js";import"./iteratee-BSjHlBKG.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};

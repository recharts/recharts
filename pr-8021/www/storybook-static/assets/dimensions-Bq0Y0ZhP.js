import{u as n,j as e}from"./index-CbkYfDFR.js";import{M as o,C as h}from"./blocks-nW3YTyOy.js";import{C as d,W as s}from"./dimensions.stories-DBtkJQYg.js";import"./iframe-wnwgjoCj.js";import"./preload-helper-Dp1pzeXC.js";import"./index--oPyKjHy.js";import"./index-B1dVEDKi.js";import"./index-2cwaP_WN.js";import"./ChartSizeDimensions-BAvXsnbQ.js";import"./zIndexSlice-BfQZJe7w.js";import"./throttle-Bu0PLbpB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CdGDq9Vj.js";import"./isWellBehavedNumber-DvYM1ftp.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ByvlJzyD.js";import"./RechartsWrapper-DrgosUQO.js";import"./axisSelectors-Dv0Cy_aQ.js";import"./d3-scale-n5yhpKoa.js";import"./index-C6zbwdmq.js";import"./renderedTicksSlice-Cn46HOnO.js";import"./index-Cq1ZqvVj.js";import"./CartesianChart-9oQUjO4z.js";import"./chartDataContext-CoZTTCWp.js";import"./CategoricalChart-CFXgb39d.js";import"./Page-Cj8EiXz7.js";import"./Line-C_qaKzYo.js";import"./Layer-BgNSosTV.js";import"./Curve-Cxo9gi5h.js";import"./types-D9qqzEWR.js";import"./step-DmpFhtYe.js";import"./path-DyVhHtw_.js";import"./activeStyles-eWYsa4HP.js";import"./Label-BPPVHUQ9.js";import"./Text-ObnDDpE8.js";import"./pageBackground-BTX1FgdM.js";import"./useId-Bld63G6d.js";import"./useBackwardsCompatibleTheme-CSSDROrC.js";import"./ZIndexLayer-BcVUzqGJ.js";import"./useAnimationId-B2QPH2im.js";import"./dataEntryStyles-_WoJg0hd.js";import"./ActivePoints-uC3uusPe.js";import"./Dot-BkQ3hL0p.js";import"./ErrorBarContext-cvkea_Ls.js";import"./GraphicalItemClipPath-B95PfJCu.js";import"./SetGraphicalItem-CAbcIlZe.js";import"./getRadiusAndStrokeWidthFromDot-Bze8938_.js";import"./ActiveShapeUtils-YpG0tVZY.js";import"./useEffectiveDataKey-D9X2vego.js";import"./XAxis-OfYaBnId.js";import"./CartesianAxis-CUGdPJVD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DhrqAxya.js";import"./Legend-B0dXj_IF.js";import"./Symbols-CtP0pqPx.js";import"./symbol-DPKZCZYD.js";import"./useElementOffset-yolstnoz.js";import"./uniqBy-CW7TvLNO.js";import"./iteratee-CpII3xDe.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

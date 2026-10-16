import{u as n,j as e}from"./index-3ApLoIk6.js";import{M as o,C as h}from"./blocks-Cnl6Uj2l.js";import{C as d,W as s}from"./dimensions.stories-Cj16Gqyk.js";import"./iframe-83g2bT9h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9-kpgN8.js";import"./index-HFr4exi0.js";import"./index-DLYfmWnd.js";import"./ChartSizeDimensions-CoQ4wsyK.js";import"./zIndexSlice-CfRH_Gkg.js";import"./throttle-4AZ4DRQb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpxedNkM.js";import"./isWellBehavedNumber-BgkxdIs4.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-MoKKZ9CA.js";import"./RechartsWrapper-p2KZrAJR.js";import"./axisSelectors-C8tSZ6WQ.js";import"./d3-scale-CVvcmCdK.js";import"./index-B7VmcSkv.js";import"./renderedTicksSlice-xHtkKbmz.js";import"./index-D-OQyWuZ.js";import"./CartesianChart-D1Nmaq06.js";import"./chartDataContext-sHdkOGNI.js";import"./CategoricalChart-D7JsCRcw.js";import"./Page-Cj8EiXz7.js";import"./Line-D5Z7nKk5.js";import"./Layer-B91IFUVw.js";import"./Curve-BzUWFYb9.js";import"./types-CMZudBWv.js";import"./step-BklymoVp.js";import"./path-DyVhHtw_.js";import"./activeStyles-CdFniEfO.js";import"./Label-DfuHALhb.js";import"./Text-DUBqVL79.js";import"./pageBackground-DKLyt_8U.js";import"./useId-zomQiW43.js";import"./useBackwardsCompatibleTheme-BcLG_xbs.js";import"./ZIndexLayer-DeHUv8B_.js";import"./useAnimationId-DUwxwMTt.js";import"./dataEntryStyles-B1gd_eml.js";import"./ActivePoints-DPZpTkVA.js";import"./Dot-CmrA2XZR.js";import"./ErrorBarContext-6HrkNfKi.js";import"./GraphicalItemClipPath-qo2wW-Qb.js";import"./SetGraphicalItem-BS6yKsvN.js";import"./getRadiusAndStrokeWidthFromDot-CQHfNXLK.js";import"./ActiveShapeUtils-CYOV0Fte.js";import"./useEffectiveDataKey-B2aQWgd3.js";import"./XAxis-CPLb-uD7.js";import"./CartesianAxis-DvK2UzOE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DKEYM08g.js";import"./Legend-DZLtHiBu.js";import"./Symbols-C8qv3YMP.js";import"./symbol-C8Q_sjCu.js";import"./useElementOffset-BnQIDSYq.js";import"./uniqBy-B2Rp8ZH2.js";import"./iteratee-CXHp8yUW.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

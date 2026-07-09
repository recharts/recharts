import{u as n,j as e}from"./index-VWXRFhNZ.js";import{M as o,C as h}from"./blocks-Tk1OtmAN.js";import{C as d,W as s}from"./dimensions.stories-ByAujyZy.js";import"./iframe-DTfUMuxI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C6ZCQ8Cr.js";import"./index-dA-GAX4g.js";import"./index-C-gVZ3HS.js";import"./ChartSizeDimensions-CKjoud6Z.js";import"./zIndexSlice-DgbTd9h0.js";import"./throttle-DSBiY2UW.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2iqIMJj.js";import"./isWellBehavedNumber-CJoo6Zl9.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-OGPUNqC6.js";import"./RechartsWrapper-n6ARRQU-.js";import"./index-Cd9XPR7L.js";import"./renderedTicksSlice-DsiYN-l1.js";import"./axisSelectors-D0YyYzBU.js";import"./d3-scale-DrphVPA4.js";import"./CartesianChart-b6kMC5fp.js";import"./chartDataContext-DbVx922-.js";import"./CategoricalChart-DjP0Xpt7.js";import"./Page-Cj8EiXz7.js";import"./Line-B98wDZe7.js";import"./Layer-fCILtQSz.js";import"./Curve-CDLgz_Rx.js";import"./types-CausIaox.js";import"./step-D8Xe5eP9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DnEACLZT.js";import"./Label-Sgtp5mjO.js";import"./Text-8vykb6TY.js";import"./DOMUtils-CP4go6fM.js";import"./ZIndexLayer-BhQOtpEj.js";import"./useAnimationId-BT6QlGBk.js";import"./ActivePoints-1q3Ryxbz.js";import"./Dot-Br2mhGeX.js";import"./RegisterGraphicalItemId-1AKHmh8R.js";import"./ErrorBarContext-4arHz5n6.js";import"./GraphicalItemClipPath-Bk6qs07-.js";import"./SetGraphicalItem-BNqcqmMc.js";import"./getRadiusAndStrokeWidthFromDot-D9ottDdP.js";import"./ActiveShapeUtils-DX8BqYxQ.js";import"./XAxis-CKFG07JY.js";import"./CartesianAxis-CzVgKTyr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DiRZk9gW.js";import"./Legend-Bt2iSyJP.js";import"./Symbols-BOI72eZ2.js";import"./symbol-CpDIKgsQ.js";import"./useElementOffset-DrOTra1T.js";import"./uniqBy-C0UbEHN4.js";import"./iteratee-DaP6RRgm.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

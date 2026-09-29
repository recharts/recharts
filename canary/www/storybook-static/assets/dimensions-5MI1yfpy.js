import{u as n,j as e}from"./index-BVh7EHQL.js";import{M as o,C as h}from"./blocks-Ds_9PzBa.js";import{C as d,W as s}from"./dimensions.stories-BfIdJYvN.js";import"./iframe-CKQALtMh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DtLHkBI_.js";import"./index-D_AzU2dp.js";import"./index-B2SRoqlS.js";import"./ChartSizeDimensions-DkVqK2yl.js";import"./zIndexSlice-DfJvDCP6.js";import"./throttle-CNY-gU5B.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bte-Mlhe.js";import"./isWellBehavedNumber-B4yKamKp.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B57mEn44.js";import"./RechartsWrapper-C-mneK7p.js";import"./axisSelectors-BxBnek0X.js";import"./d3-scale-CKl8FJgi.js";import"./index-DzcUKgoB.js";import"./renderedTicksSlice-CPhSvJpG.js";import"./index-YCl9Eg2B.js";import"./CartesianChart-RyjjLogs.js";import"./chartDataContext-DKpOqV2G.js";import"./CategoricalChart-BidV4bcI.js";import"./Page-Cj8EiXz7.js";import"./Line-CTa1vzcP.js";import"./Layer-B9JOU9_x.js";import"./Curve-BfhgeL_q.js";import"./types-CDJ3ls6u.js";import"./step-D4hLR-8L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DTXdR5ab.js";import"./Label-CkbIGog0.js";import"./Text-DyEflBvv.js";import"./DOMUtils-CBXByqiO.js";import"./useId-DvyhJk_e.js";import"./useBackwardsCompatibleTheme-Bv93_XfL.js";import"./ZIndexLayer-Crva3HCE.js";import"./useAnimationId-CKMmFYBQ.js";import"./ActivePoints-B_BVBzV5.js";import"./Dot-Bwc0vAX6.js";import"./RegisterGraphicalItemId-C8MFR-IS.js";import"./ErrorBarContext-rH9p4zIJ.js";import"./GraphicalItemClipPath-CinvHRPZ.js";import"./SetGraphicalItem-DsCqUb4K.js";import"./getRadiusAndStrokeWidthFromDot-DxuuP8od.js";import"./ActiveShapeUtils-CE5-o2on.js";import"./useGraphicalItemIdentity-DFDwkf_7.js";import"./XAxis-B1w-DAje.js";import"./CartesianAxis-D4n_YP7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-qP5Po20_.js";import"./Legend-BN-SMuns.js";import"./Symbols-DPTV3bc9.js";import"./symbol-3Q6SdgaO.js";import"./useElementOffset-DRkOZJXl.js";import"./uniqBy-9yJLU1-D.js";import"./iteratee-jIVZW5Io.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

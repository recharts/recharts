import{u as n,j as e}from"./index-CaQAEB-F.js";import{M as o,C as h}from"./blocks-BZyvoqr-.js";import{C as d,W as s}from"./dimensions.stories-CAG_ZeAQ.js";import"./iframe-C-D94QkC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BIeQrv2Z.js";import"./index-CTfmrlJH.js";import"./index-Dq3qqcGT.js";import"./ChartSizeDimensions-Btab41KS.js";import"./zIndexSlice-BKwIbV_L.js";import"./throttle-2piy3LIT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I0oO3hVe.js";import"./isWellBehavedNumber-CW3dwjTv.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B8BsA69h.js";import"./RechartsWrapper-C8SdZUxr.js";import"./index-CVumJag_.js";import"./renderedTicksSlice-DheIhU3o.js";import"./axisSelectors-RkZJ2biJ.js";import"./d3-scale-DDXy3r7j.js";import"./CartesianChart-DbK0sv1B.js";import"./chartDataContext-BuH_IHSv.js";import"./CategoricalChart-ChFoWP6Y.js";import"./Page-Cj8EiXz7.js";import"./Line-CdnILgMU.js";import"./Layer-CmhR3M6w.js";import"./Curve-CdyB7qtw.js";import"./types-BVMbYXvi.js";import"./step-C--YvIRl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CNnKFhUF.js";import"./Label-CEdJYykS.js";import"./Text-BGLH01e4.js";import"./DOMUtils-CTJUeuSO.js";import"./ZIndexLayer-D0m4rTFg.js";import"./useAnimationId-Qux1tHbm.js";import"./ActivePoints-DZjXqzdI.js";import"./Dot-BeDd8SJ_.js";import"./RegisterGraphicalItemId-BEroCjsR.js";import"./ErrorBarContext-xYFd4kf3.js";import"./GraphicalItemClipPath-D86AO83t.js";import"./SetGraphicalItem-D38tmZrb.js";import"./getRadiusAndStrokeWidthFromDot-B5yZBW7E.js";import"./ActiveShapeUtils-mVYQLGWO.js";import"./RechartsThemeContext-FU4W4bTr.js";import"./XAxis-CUwTyuxs.js";import"./CartesianAxis-DdUGRqEL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-gSjGcUn4.js";import"./Legend-CM_99vEO.js";import"./Symbols-Cww2ej7G.js";import"./symbol-DQDhapF0.js";import"./useElementOffset-DvCPVQU2.js";import"./uniqBy-Dbcfcj0B.js";import"./iteratee-DSgJFqTf.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};

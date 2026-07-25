import{u as n,j as e}from"./index-GznBSCd1.js";import{M as o,C as h}from"./blocks-DrYZ_GTr.js";import{C as d,W as s}from"./dimensions.stories-CLQVPgx8.js";import"./iframe-DX-hRh6v.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C_co4uh9.js";import"./index-qEhkJMvm.js";import"./index-BityOqCw.js";import"./ChartSizeDimensions-BHF1tNt3.js";import"./zIndexSlice-CF9qsbsG.js";import"./throttle-C3bKSARL.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dl_-nEqR.js";import"./isWellBehavedNumber-B2WkM8vL.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C2X6i1Aj.js";import"./RechartsWrapper-Ccwce-LO.js";import"./index-BkRrDgeK.js";import"./renderedTicksSlice-Cdw3MVyO.js";import"./axisSelectors-CnUP3J5o.js";import"./d3-scale-CyRwSV0J.js";import"./CartesianChart-nrO7ZyU0.js";import"./chartDataContext-BrdpOtNY.js";import"./CategoricalChart-wLfPHTeT.js";import"./Page-Cj8EiXz7.js";import"./Line-BH8HaOE7.js";import"./Layer-CI3urb_2.js";import"./Curve-DBTqjj17.js";import"./types-B5ssIei3.js";import"./step-ghZz1pkQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D1fsZDjw.js";import"./Label-C_1G92on.js";import"./Text-DrQewChW.js";import"./DOMUtils-DdDZ08pJ.js";import"./ZIndexLayer-BUVc2LfK.js";import"./useAnimationId-oXOpEwNt.js";import"./ActivePoints-C0NUOkGZ.js";import"./Dot-Dn04Kjs0.js";import"./RegisterGraphicalItemId-CpEpaHjk.js";import"./ErrorBarContext-DCgqaVYx.js";import"./GraphicalItemClipPath-DgEtuK8_.js";import"./SetGraphicalItem-BVTByb6H.js";import"./getRadiusAndStrokeWidthFromDot-k00jkWeK.js";import"./ActiveShapeUtils-CgP8l6zk.js";import"./XAxis-CYn79B9K.js";import"./CartesianAxis-D-d2ZuWG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-DIovWrSv.js";import"./Legend-JB80EPRp.js";import"./Symbols-Bm5DempA.js";import"./symbol-5pOLizhZ.js";import"./useElementOffset-Tj-Qp8PQ.js";import"./uniqBy-BOqCl2hX.js";import"./iteratee-QMX4YEQu.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

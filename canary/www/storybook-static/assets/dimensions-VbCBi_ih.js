import{j as e}from"./jsx-runtime-DUTSIAQy.js";import{useMDXComponents as n}from"./index-Dvw2eObP.js";import{M as o,C as h}from"./blocks-ahKe2k2R.js";import{C as d,W as s}from"./dimensions.stories-DFbT8hu8.js";import"./iframe-DSZ2QiJB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDQU038C.js";import"./ChartSizeDimensions-Cqws91-P.js";import"./arrayEqualityCheck-rt-62tKM.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_H3sYQ_H.js";import"./immer-D42ZyI8P.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B_grCv6v.js";import"./RechartsWrapper-BWBPYC1r.js";import"./index-1kC-pV_c.js";import"./hooks-Bla0K3sY.js";import"./axisSelectors-DvTXpJxJ.js";import"./d3-scale-Bj0Wd2Rm.js";import"./zIndexSlice-Dv9Y9W3b.js";import"./renderedTicksSlice-C2PuzhHM.js";import"./CartesianChart-YjLZrE0S.js";import"./chartDataContext-BuXntJJ8.js";import"./CategoricalChart-3Wrbo8_n.js";import"./Line-CsqiaEo_.js";import"./Layer-CfeiBM7_.js";import"./ReactUtils-BPco_pTv.js";import"./Label-DwmX4z8O.js";import"./Text-Dt_FG9bq.js";import"./DOMUtils-n5N7L4PT.js";import"./ZIndexLayer-BB6UhYUp.js";import"./ActivePoints-DGvp93MP.js";import"./Dot-DvBHW_pK.js";import"./types-DHG31Cql.js";import"./RegisterGraphicalItemId-DpTWPNPm.js";import"./ErrorBarContext-BIl6qq4l.js";import"./GraphicalItemClipPath-DGAu4crQ.js";import"./SetGraphicalItem-A8lByKkr.js";import"./useAnimationId-CVC-EATQ.js";import"./getRadiusAndStrokeWidthFromDot-3P602oOp.js";import"./ActiveShapeUtils-atDgqYom.js";import"./isPlainObject-eGyZT97o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-U6qmZG0w.js";import"./Trapezoid-eVJamGS1.js";import"./Sector-Cw_z1t88.js";import"./Symbols-D1J3is_N.js";import"./symbol-Bi67EGLP.js";import"./step-28_znSZY.js";import"./Curve-1v3U2npm.js";import"./XAxis-C40iw1gZ.js";import"./CartesianAxis-BOemEoe1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-x1YS6WwT.js";import"./Legend-BvZZgudz.js";import"./useElementOffset-DO-lVvkB.js";import"./uniqBy-aig2Gkf7.js";import"./iteratee-CEjlmyDu.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

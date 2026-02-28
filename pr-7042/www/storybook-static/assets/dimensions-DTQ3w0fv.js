import{j as e}from"./jsx-runtime-CZtxBwkB.js";import{useMDXComponents as n}from"./index-hbXPspBU.js";import{M as o,C as h}from"./blocks-DtFM3XJR.js";import{C as d,W as s}from"./dimensions.stories-BxK9x0A3.js";import"./iframe-DRzfceQj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DKayDJ64.js";import"./ChartSizeDimensions-BcANsdLL.js";import"./arrayEqualityCheck-rosVEDiH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Yo3rtldJ.js";import"./immer-CpErEFQU.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-cRVCNOzO.js";import"./RechartsWrapper-Cr19GrQC.js";import"./index-DhdVzYen.js";import"./hooks-BGhayb2I.js";import"./axisSelectors-KcSamBS9.js";import"./d3-scale-DMFBv7ef.js";import"./zIndexSlice-DFfzt0na.js";import"./renderedTicksSlice-WbT8TKLW.js";import"./CartesianChart-BpAHu02o.js";import"./chartDataContext-uibfkBE8.js";import"./CategoricalChart-BFsoF5NC.js";import"./Line-CrboDBA_.js";import"./Layer-sUtHTMZe.js";import"./ReactUtils-BLIIVErJ.js";import"./Label-CCBnxLca.js";import"./Text-5VoS0hOZ.js";import"./DOMUtils-D7MRyEG_.js";import"./ZIndexLayer-rLB6bkwI.js";import"./ActivePoints-CuDefpBg.js";import"./Dot-Dx5TMf-G.js";import"./types-BIqkUGja.js";import"./RegisterGraphicalItemId-CA-NkALt.js";import"./ErrorBarContext-CVJ7HQM6.js";import"./GraphicalItemClipPath-C-4x0c47.js";import"./SetGraphicalItem-DmvCdKvK.js";import"./useAnimationId-B4oBcBYL.js";import"./getRadiusAndStrokeWidthFromDot-geV46oeC.js";import"./ActiveShapeUtils-sMNt0TF2.js";import"./isPlainObject-8xjKwYHh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbvKmtU7.js";import"./Trapezoid-DfLXoIUq.js";import"./Sector-BA0kpTkH.js";import"./Symbols-DyXfCvIa.js";import"./symbol-CU4mK3u6.js";import"./step-vYfigx3D.js";import"./Curve-BAw1ZqwZ.js";import"./XAxis-sc_rEheo.js";import"./CartesianAxis-BV4F2Vv5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BpCe0zSN.js";import"./Legend-DwKEpTo-.js";import"./useElementOffset-wTQHzrQk.js";import"./uniqBy-ZzEWeyVO.js";import"./iteratee-C0r1GGCu.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

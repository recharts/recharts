import{j as e}from"./jsx-runtime--i8onJxV.js";import{useMDXComponents as n}from"./index-QKALeE7T.js";import{M as h,C as o}from"./blocks-BJocNxsd.js";import{C as d,W as s}from"./dimensions.stories-BCz3LUQz.js";import"./iframe-CoxmJKyj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjMwiY7v.js";import"./ChartSizeDimensions-CtAc8nGI.js";import"./arrayEqualityCheck-BiMa-XSg.js";import"./resolveDefaultProps-sn4NzjIu.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-CnWrvDY-.js";import"./RechartsWrapper-BeGnBw32.js";import"./hooks-C3tSBkhO.js";import"./axisSelectors-Cx1Cm9h8.js";import"./zIndexSlice-BS5hTNaN.js";import"./CartesianChart-TnRBDpKI.js";import"./chartDataContext-88-zaTIw.js";import"./CategoricalChart-CyysacNR.js";import"./Line-BdzKDbXD.js";import"./Layer-FnVtSY9f.js";import"./ReactUtils-DelGq7vW.js";import"./Label-BaauyrMN.js";import"./Text-CbKrSYiu.js";import"./DOMUtils-p48KsCFt.js";import"./ZIndexLayer-C9Rpc0HU.js";import"./ActivePoints-D0nFSc_H.js";import"./Dot-BifkMnm9.js";import"./types-VgYnwRoj.js";import"./RegisterGraphicalItemId-CJCmzU4Y.js";import"./ErrorBarContext-Ce5dqlrV.js";import"./GraphicalItemClipPath-B39q-JPL.js";import"./SetGraphicalItem-_WwZUCgQ.js";import"./useAnimationId-DMb1Vy6w.js";import"./getRadiusAndStrokeWidthFromDot-k8J8eAkm.js";import"./ActiveShapeUtils-DHfcpEHc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KCszVTMh.js";import"./Trapezoid-CHWx_77j.js";import"./Sector-De_XHewT.js";import"./Symbols-3p0hcDOB.js";import"./Curve-BcGu8BmK.js";import"./XAxis-ByfqRbuq.js";import"./CartesianAxis-C3XzKlXq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CBdXzckK.js";import"./Legend-D_gOoCGt.js";import"./useElementOffset-lvwsgQgc.js";import"./iteratee-BEESgXf_.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};

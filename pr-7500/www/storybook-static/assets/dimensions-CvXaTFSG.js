import{u as n,j as e}from"./index-Cbj8gUx6.js";import{M as o,C as h}from"./blocks-FY68XTwU.js";import{C as d,W as s}from"./dimensions.stories-CKnsuyNp.js";import"./iframe-Cz3m2SJ3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ch8SxpQ7.js";import"./index-NxrJrzZn.js";import"./index-CMdFAdtp.js";import"./ChartSizeDimensions-DZ71X4JR.js";import"./zIndexSlice-Cjh-3nYc.js";import"./immer-BpZE7kkB.js";import"./get-DnJGsTBL.js";import"./resolveDefaultProps-C8QIhMpF.js";import"./isWellBehavedNumber-CDOyudGY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CSmCvL3U.js";import"./RechartsWrapper-B4Ii8FQX.js";import"./index-BaDzCXFV.js";import"./renderedTicksSlice-CFzmMv1J.js";import"./axisSelectors-kRjEmRJx.js";import"./d3-scale-WEKEQNVu.js";import"./CartesianChart-BLcm5KGH.js";import"./chartDataContext-BYln8BgM.js";import"./CategoricalChart-DoGmIe9w.js";import"./Page-Cj8EiXz7.js";import"./Line-C1Jzdpj9.js";import"./Layer-DT2BS3Fo.js";import"./Curve-Bwoz_RSs.js";import"./types-CfBB8f9x.js";import"./step-Cw3d9gls.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHx4y2NH.js";import"./Label-DtW8Frf2.js";import"./Text-CM8vLpAR.js";import"./DOMUtils-DZThnrL0.js";import"./ZIndexLayer-dXuwT3rZ.js";import"./useAnimationId-BTiOYTQB.js";import"./ActivePoints-CgF4v4_S.js";import"./Dot-D0XFaE4d.js";import"./RegisterGraphicalItemId-CDGD75SL.js";import"./ErrorBarContext--7X7cLyV.js";import"./GraphicalItemClipPath-Bz4IuZP3.js";import"./SetGraphicalItem-Ci_nDVmD.js";import"./getRadiusAndStrokeWidthFromDot-C8BKdMCZ.js";import"./ActiveShapeUtils-CXFbPlV-.js";import"./XAxis-BOtH_Bb_.js";import"./CartesianAxis-C3-vjNSw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DcGNi3Zk.js";import"./Legend-DUVvpxnh.js";import"./Symbols-BFmTZdyG.js";import"./symbol-CIafXP9T.js";import"./useElementOffset-DWoELxA5.js";import"./uniqBy-C-5jUlDv.js";import"./iteratee-BYbJoUdv.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

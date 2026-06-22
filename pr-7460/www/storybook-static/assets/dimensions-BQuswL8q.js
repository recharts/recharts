import{u as n,j as e}from"./index-DQ2tGWrd.js";import{M as o,C as h}from"./blocks-BDCkkh_c.js";import{C as d,W as s}from"./dimensions.stories-BOpIP0MN.js";import"./iframe-BaabCOfo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B1UijuQJ.js";import"./index-vSeH92Tc.js";import"./index-CADxnCms.js";import"./ChartSizeDimensions-J7IavCG-.js";import"./zIndexSlice-CWxxXgIH.js";import"./immer-BLHHDgig.js";import"./get-C9kPOoUz.js";import"./resolveDefaultProps-m6H7CCvK.js";import"./isWellBehavedNumber-B34pSeK5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D9WOh2Dq.js";import"./RechartsWrapper-BzVbI7QS.js";import"./index-DXTcRTSc.js";import"./renderedTicksSlice-qKkoa7Pp.js";import"./axisSelectors-BaT59QoB.js";import"./d3-scale-xd-t_SLV.js";import"./CartesianChart-C9YeuOyj.js";import"./chartDataContext-DaAkZdG0.js";import"./CategoricalChart-_HoXNLFS.js";import"./Page-Cj8EiXz7.js";import"./Line-DqlgNAdm.js";import"./Layer-64CGscPm.js";import"./Curve-Dz8p7kZF.js";import"./types-hBJB7bDz.js";import"./step-Bn04m8nP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CREItNhG.js";import"./Label-C7hyOp5H.js";import"./Text-BmSZi3Hk.js";import"./DOMUtils-CUUTvSW3.js";import"./ZIndexLayer-qDXxNkeJ.js";import"./useAnimationId-DievnnW1.js";import"./ActivePoints-DsUWTgVX.js";import"./Dot-Cxl_B4ln.js";import"./RegisterGraphicalItemId-CuBJ-yCL.js";import"./ErrorBarContext-BTWgR7nJ.js";import"./GraphicalItemClipPath-BPT-cS9W.js";import"./SetGraphicalItem-DPRJSznG.js";import"./getRadiusAndStrokeWidthFromDot-VrSFbMxb.js";import"./ActiveShapeUtils-DcOcWj43.js";import"./XAxis-BXlMIHd8.js";import"./CartesianAxis-DzzVwONF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-q_zljZs-.js";import"./Legend-Bbr4IjRc.js";import"./Symbols-I2hzscMR.js";import"./symbol-C7BRuArB.js";import"./useElementOffset-85rrli-w.js";import"./uniqBy-BJyco1_Z.js";import"./iteratee-DXjRqzC3.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

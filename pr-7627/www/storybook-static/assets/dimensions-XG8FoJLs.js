import{u as n,j as e}from"./index-8szQ6f_1.js";import{M as o,C as h}from"./blocks-SN0k0QUU.js";import{C as d,W as s}from"./dimensions.stories-BrDXxDk1.js";import"./iframe-BYCrCSPO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CduSCjJO.js";import"./index-DeTARG9l.js";import"./index-CO8tfkky.js";import"./ChartSizeDimensions-Czfp4SCd.js";import"./zIndexSlice-DfD_-yb8.js";import"./throttle-CwGaa8bA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_hnhA8j.js";import"./isWellBehavedNumber-CtO4Dltx.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C0GfYFLm.js";import"./RechartsWrapper-1VDCfeR5.js";import"./index-B9LnnU9V.js";import"./axisSelectors-DCnkJbPP.js";import"./d3-scale-CNobyPqZ.js";import"./renderedTicksSlice-D3LgmkWg.js";import"./CartesianChart-D_hO4lZa.js";import"./chartDataContext-BmXIjLQW.js";import"./CategoricalChart-DdsYRdkY.js";import"./Page-Cj8EiXz7.js";import"./Line-I8NQ2nSn.js";import"./Layer-B3NuQ3iV.js";import"./Curve-BSapy3_T.js";import"./types-FnkeMo1L.js";import"./step-C66rBaoI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1rFvs0f.js";import"./Label-KQ9JDhJq.js";import"./Text-C7UGFNRC.js";import"./DOMUtils-_2tJTcuL.js";import"./ZIndexLayer-DS2x7pWW.js";import"./useAnimationId-BrMFsthS.js";import"./ActivePoints-BBy5laGi.js";import"./Dot-DcT0usF1.js";import"./RegisterGraphicalItemId-QO0ldivF.js";import"./ErrorBarContext-P2qv3dNI.js";import"./GraphicalItemClipPath-Co8e0UKg.js";import"./SetGraphicalItem-BOoa7F9Y.js";import"./getRadiusAndStrokeWidthFromDot-RcpXGE2w.js";import"./ActiveShapeUtils-DetheFMa.js";import"./RechartsThemeContext-BUhvh7zS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-3U1NuGne.js";import"./CartesianAxis-DLhz-nrZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BHhfAWGr.js";import"./Legend-Chf9Y7Al.js";import"./Symbols-CoPXceqk.js";import"./symbol-CLcBLlqF.js";import"./useElementOffset-DAm24c5a.js";import"./uniqBy-C0-aqpga.js";import"./iteratee-C5dESqmm.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

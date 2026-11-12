import{u as n,j as e}from"./index-CvUcM-9X.js";import{M as o,C as h}from"./blocks-B19DRVrx.js";import{C as d,W as s}from"./dimensions.stories-BjzR_-0u.js";import"./iframe-Ct1svimm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./index-CGKMaXkl.js";import"./ChartSizeDimensions-xNER-1cU.js";import"./zIndexSlice-DuTNyMvu.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./throttle-pNdBRgo_.js";import"./ComposedChart-Cy6iJ-vC.js";import"./RechartsWrapper-D0VQQHcg.js";import"./axisSelectors-CIwgaX7y.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BL9MDqqK.js";import"./index-LDd6dT7n.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./Page-Cj8EiXz7.js";import"./Line-C_BZS029.js";import"./Layer-CbeDBXuD.js";import"./Curve-D34yK1QN.js";import"./types-EANqWthO.js";import"./step-Cz5QOKdQ.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CHH9ur-w.js";import"./Label-B2Mk85O5.js";import"./Text-VSzLHfPE.js";import"./ZIndexLayer-BltRI-Nr.js";import"./ActivePoints-Bj7-j5Zz.js";import"./Dot-CCM7dYWU.js";import"./activeStyles-DWgBPDlx.js";import"./useAnimationId-CDKCdXQz.js";import"./Symbols-Bnfs-9ht.js";import"./symbol-CiSLDvHg.js";import"./ErrorBarContext-CQBLFEFh.js";import"./SetGraphicalItem-inprgaSw.js";import"./getRadiusAndStrokeWidthFromDot-B2vi1B3A.js";import"./ActiveShapeUtils-BuOJWJdn.js";import"./useEffectiveDataKey-CW73rX9I.js";import"./XAxis-DQtY80zm.js";import"./CartesianAxis-D0Zofcf0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DJ-mdmri.js";import"./Legend-Bd6FU5Xr.js";import"./useElementOffset-CY9fcLag.js";import"./uniqBy-BMmxp9UC.js";import"./iteratee-BWHT356U.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

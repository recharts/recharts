import{j as e}from"./jsx-runtime-qrP7-dMD.js";import{useMDXComponents as n}from"./index-8nBcNthG.js";import{M as o,C as h}from"./blocks-BlbJo5hx.js";import{C as d,W as s}from"./dimensions.stories-DqV-D9kQ.js";import"./iframe-CGYv0J_P.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfugQJAU.js";import"./ChartSizeDimensions-CWNsHALg.js";import"./arrayEqualityCheck-BZetwlMO.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDCzLOgk.js";import"./immer-Dq3_p8cl.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CquHM9WR.js";import"./RechartsWrapper-BFBg4H1i.js";import"./index-DCXgcjyB.js";import"./hooks-BYcy2WEI.js";import"./axisSelectors-d1jnmTLI.js";import"./d3-scale-CFFcqd30.js";import"./zIndexSlice-DscQ2UEO.js";import"./renderedTicksSlice-BB6lYCOP.js";import"./CartesianChart-cuEjJLA1.js";import"./chartDataContext-DAOXspfa.js";import"./CategoricalChart-DJ2ZS2wS.js";import"./Line-R4kryobQ.js";import"./Layer-Gk-yVd_6.js";import"./ReactUtils-e-fTpbBc.js";import"./Label-CLm-GmRY.js";import"./Text-DbZ5XXQf.js";import"./DOMUtils-CmrzvfdE.js";import"./ZIndexLayer-ChWoeJD6.js";import"./ActivePoints-DuCztam3.js";import"./Dot-B2QyCy--.js";import"./types-DA895aOk.js";import"./RegisterGraphicalItemId-Br_SJebF.js";import"./ErrorBarContext-Cs8TC5a2.js";import"./GraphicalItemClipPath-CH3RqnTG.js";import"./SetGraphicalItem-BJId-qpW.js";import"./useAnimationId-DzTM1tK7.js";import"./getRadiusAndStrokeWidthFromDot-Cp2r1Hxi.js";import"./ActiveShapeUtils-D3fNYChL.js";import"./isPlainObject-CRVi6C8E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-iQ4syW.js";import"./Trapezoid-C3Q-7u80.js";import"./Sector-DG9owPHZ.js";import"./Symbols-wA8q_wPX.js";import"./symbol-BMJz3y-1.js";import"./step-WNwAxyX5.js";import"./Curve-NAJ5RvpG.js";import"./XAxis-BBLpBgR2.js";import"./CartesianAxis-Cu0bgGrg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CJylCvLo.js";import"./Legend-Zwt5uMi7.js";import"./useElementOffset-Dg7ksT9H.js";import"./uniqBy-C4EJXCv-.js";import"./iteratee-XiLYEPtC.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

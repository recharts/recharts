import{u as n,j as e}from"./index-B6Z4epuK.js";import{M as o,C as h}from"./blocks-qmnvWoBE.js";import{C as d,W as s}from"./dimensions.stories-BkiVSP-r.js";import"./iframe-UUS7gS8r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./index-BEWOexqM.js";import"./ChartSizeDimensions-Dx2JCp4F.js";import"./zIndexSlice-DC8Mmyu0.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./throttle-CgxVsgWn.js";import"./ComposedChart-DyYzfQP5.js";import"./RechartsWrapper-CpoOBNO8.js";import"./axisSelectors-BhKtxZfo.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXJSpI4F.js";import"./index-DlU_WMoq.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./Page-Cj8EiXz7.js";import"./Line-BhGsVkF7.js";import"./Layer-CAt7TJL2.js";import"./Curve-C4dbZ49s.js";import"./fillDefinitions-TYLf-280.js";import"./pageBackground-BJvSTYQp.js";import"./types-CpFwJGls.js";import"./step-TKY5Ryld.js";import"./path-DyVhHtw_.js";import"./LabelList-BfhKeSlq.js";import"./Label-Cr7fVLhy.js";import"./Text-Dm1h-qE_.js";import"./DOMUtils-dYR_cylo.js";import"./ZIndexLayer-CHgyGuEd.js";import"./ActivePoints-CKMzfD8D.js";import"./Dot-CwQJh2C3.js";import"./activeStyles-C25hf-sM.js";import"./useAnimationId-BqxzW97i.js";import"./dataEntryStyles-D0nTu1H4.js";import"./Symbols-fRcdzfv5.js";import"./symbol-BFpIpW6Y.js";import"./ErrorBarContext-BNmRSNHp.js";import"./SetGraphicalItem-DsTeZeM0.js";import"./getRadiusAndStrokeWidthFromDot-CyVRyLxc.js";import"./ActiveShapeUtils-Df31_mcI.js";import"./useEffectiveDataKey-4NPbYdMg.js";import"./XAxis-Cy2DOw7O.js";import"./CartesianAxis-CqSL8oIY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Cy8DgzpK.js";import"./Legend-Cj8r2L5c.js";import"./useElementOffset-BT8ie4xh.js";import"./uniqBy-pgmiU_pf.js";import"./iteratee-D62UJLHy.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

import{u as n,j as e}from"./index-BcTMRfNk.js";import{M as o,C as h}from"./blocks-CHNQCcT1.js";import{C as d,W as s}from"./dimensions.stories-bIEBZBx5.js";import"./iframe-XIWN-8LW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./index-DUogMgN_.js";import"./ChartSizeDimensions-Cmq7dyI-.js";import"./zIndexSlice-CeTDvnmV.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B5b48pxf.js";import"./throttle-DRx8DeZx.js";import"./ComposedChart-FUL524Wp.js";import"./RechartsWrapper-BeCgk11S.js";import"./axisSelectors-Ct9ZEPSa.js";import"./polarAxisSelectors-DQxdihyW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BvS2o_Zb.js";import"./index-CLmLkjoe.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./Page-Cj8EiXz7.js";import"./Line-B6hIzkaB.js";import"./Layer-CxaTRkgO.js";import"./Curve-BDW_2Enz.js";import"./types-CnZsW2lD.js";import"./step-D7Gnf8qO.js";import"./path-DyVhHtw_.js";import"./LabelList-DPGWqLfL.js";import"./Label-DO8sqqdZ.js";import"./Text-DltUF9fa.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./ActivePoints-CytZfQ5l.js";import"./Dot-8IXYnCyr.js";import"./activeStyles-C-BzGRm8.js";import"./useAnimationId-BQkOAk0c.js";import"./dataEntryStyles-GFsHahL2.js";import"./Symbols-Cwdzyt52.js";import"./symbol-DWZ08l1L.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./SetGraphicalItem-DypkohdD.js";import"./getRadiusAndStrokeWidthFromDot-DRDDou6B.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./useEffectiveDataKey-qss65ryL.js";import"./XAxis-xF4zDX5U.js";import"./CartesianAxis-BxPz-Jvl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DaPhatN5.js";import"./Legend-uzuxOhM0.js";import"./useElementOffset-BeOaSn6a.js";import"./uniqBy-DWstni_N.js";import"./iteratee-D75QKWW0.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

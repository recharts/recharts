import{u as n,j as e}from"./index-DD5nr8jo.js";import{M as o,C as h}from"./blocks-Cd70GB43.js";import{C as d,W as s}from"./dimensions.stories-CvnFBk6A.js";import"./iframe-C-Iuj2CY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BYGjDTj5.js";import"./index-CKdK4Tlm.js";import"./index-8RkzDuen.js";import"./ChartSizeDimensions-DfekRsDT.js";import"./zIndexSlice-C4JSr5KN.js";import"./throttle-Bp4liTDw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DL7WVnFH.js";import"./isWellBehavedNumber-Ku-m6vnz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-nt2Gmc-a.js";import"./RechartsWrapper-7_EuFQF-.js";import"./axisSelectors-BMEelndQ.js";import"./d3-scale-C4GnCzHc.js";import"./index-C4z0ADpB.js";import"./renderedTicksSlice-Cor1xeVL.js";import"./index-DFGRvPnn.js";import"./CartesianChart-BAWmemtm.js";import"./chartDataContext-oGc_LYLd.js";import"./CategoricalChart-CSHLIlSH.js";import"./Page-Cj8EiXz7.js";import"./Line-Dew_1rVx.js";import"./Layer-CTC_B_AO.js";import"./Curve-A3JiVHPQ.js";import"./types-DTCaWYmj.js";import"./step-CDAaK65-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BJhHPNtS.js";import"./Label-BQbGJ4sW.js";import"./Text-CuFXobZ8.js";import"./DOMUtils-D1JEdLYA.js";import"./useId-DB-RDK5Y.js";import"./useBackwardsCompatibleTheme-CO0ZmmTO.js";import"./ZIndexLayer-ChUJUaqX.js";import"./useAnimationId-Cs7J9c_D.js";import"./ActivePoints-D8XBSWMg.js";import"./Dot-BlUpubQM.js";import"./RegisterGraphicalItemId-C_gzfzaw.js";import"./ErrorBarContext-LN9zzfth.js";import"./GraphicalItemClipPath-D1JmIf9k.js";import"./SetGraphicalItem-CVWA9VpP.js";import"./getRadiusAndStrokeWidthFromDot-D9zL_eAZ.js";import"./ActiveShapeUtils-DE2-A3Sf.js";import"./useGraphicalItemIdentity-_eCurvUA.js";import"./XAxis-d6u4l33E.js";import"./CartesianAxis-kD5DlR3-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CH97-ORP.js";import"./Legend-BIvnt31n.js";import"./Symbols-CkEXkoTn.js";import"./symbol-l9rlzWv-.js";import"./useElementOffset-CrkLBw9h.js";import"./uniqBy-rSYIRPWX.js";import"./iteratee-DCxMM0MI.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

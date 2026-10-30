import{u as n,j as e}from"./index-Cz-sZ2Ul.js";import{M as o,C as h}from"./blocks-D15ZL9lL.js";import{C as d,W as s}from"./dimensions.stories-DSYHShWs.js";import"./iframe-C_yGAyrl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DrbolqVI.js";import"./index-ddpbYnm-.js";import"./index-RS1OPqlJ.js";import"./ChartSizeDimensions-Cdo5vIfh.js";import"./zIndexSlice-BJ-JuQhh.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B8DgtWv7.js";import"./throttle-BAXAw3D6.js";import"./ComposedChart-CFLgoo8z.js";import"./RechartsWrapper-BSGXC4_F.js";import"./axisSelectors-5FYthY9Y.js";import"./polarAxisSelectors-ut8KXzAo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PQcr3dQu.js";import"./index-C36DrKNt.js";import"./renderedTicksSlice-DkVAJH0_.js";import"./index-ClVDXgD6.js";import"./CartesianChart-CokpCbyl.js";import"./ZIndexPortal-BbHy9i_X.js";import"./CategoricalChart-vhidTTy9.js";import"./Page-Cj8EiXz7.js";import"./Line-LkXq5rRh.js";import"./Layer-DRwTYvg4.js";import"./Curve-B5j0Jet-.js";import"./types-Cxyr58RE.js";import"./step-DDESiMvu.js";import"./path-DyVhHtw_.js";import"./LabelList-o4uUgS5K.js";import"./Label-BnQGI-qv.js";import"./Text-DzacdUSY.js";import"./DOMUtils-DAgrf4y-.js";import"./ZIndexLayer-B7Tlmy9n.js";import"./ActivePoints-CjSi-VTr.js";import"./Dot-M2gDFPx3.js";import"./activeStyles-B0RsKEFJ.js";import"./useAnimationId-HAfaQzyp.js";import"./dataEntryStyles-DACXFNb8.js";import"./Symbols-Bbax-3ST.js";import"./symbol-CWSoe6BS.js";import"./ErrorBarContext-BFE3xm4o.js";import"./SetGraphicalItem-ByCBXbFB.js";import"./getRadiusAndStrokeWidthFromDot-COLPDuwt.js";import"./ActiveShapeUtils-CHVm68Z9.js";import"./useEffectiveDataKey-DU6lMzAC.js";import"./XAxis-BCyVXA2-.js";import"./CartesianAxis-DMLFVqxV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-lwhG3-Lu.js";import"./Legend-DckLNiaV.js";import"./fillDefinitions-BmGKFoo3.js";import"./useElementOffset-DY-j2w8T.js";import"./uniqBy-CNLZexsa.js";import"./iteratee-DpnVvTvv.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

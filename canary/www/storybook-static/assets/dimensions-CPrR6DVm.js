import{u as n,j as e}from"./index-CIb7cUOB.js";import{M as o,C as h}from"./blocks-sjLsuwhX.js";import{C as d,W as s}from"./dimensions.stories-ODjP1S_X.js";import"./iframe-Dpjo95BT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LdQYXtG7.js";import"./index-B9X1zGtL.js";import"./index-CQjokYOg.js";import"./ChartSizeDimensions-CGIBotey.js";import"./zIndexSlice-Bz9FHg4X.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C9kA-MT8.js";import"./throttle-CgrRaOJs.js";import"./ComposedChart-BechDuQ5.js";import"./RechartsWrapper-BpzLbtwc.js";import"./axisSelectors-DSxvh8IJ.js";import"./polarAxisSelectors-DlnF8AFa.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C6Aj8r2L.js";import"./index-B-kkbwvl.js";import"./renderedTicksSlice-DCa6WqoI.js";import"./index-_bw4WA6x.js";import"./fillDefinitions-puythMDx.js";import"./CartesianChart-D0GXIpob.js";import"./ZIndexPortal-1jnT8grk.js";import"./CategoricalChart-EHcc8AGs.js";import"./Page-Cj8EiXz7.js";import"./Line-CKn7Dq4x.js";import"./Layer-dEC3lxZB.js";import"./Curve-DESeTImr.js";import"./types-CB3DqoLS.js";import"./step-CnW6P3zf.js";import"./path-DyVhHtw_.js";import"./LabelList-DJoHLEEy.js";import"./Label-DulCRYKX.js";import"./Text-8qrIJHOF.js";import"./DOMUtils-DrYchlqm.js";import"./ZIndexLayer-CS37SN-4.js";import"./ActivePoints-CqWN2Rf1.js";import"./Dot-CyMu6wKR.js";import"./activeStyles-lY2Wk3Pa.js";import"./useAnimationId-DXZwJd8h.js";import"./dataEntryStyles-0BlaoxRC.js";import"./Symbols-DoRtyuXb.js";import"./symbol-WOMD01oz.js";import"./ErrorBarContext-zCJLcJsR.js";import"./SetGraphicalItem-BBgSrgVm.js";import"./getRadiusAndStrokeWidthFromDot-BbnzhDU0.js";import"./ActiveShapeUtils-DlizSa8y.js";import"./useEffectiveDataKey-DYwpBPAM.js";import"./XAxis-BTXqWGnk.js";import"./CartesianAxis-BKOwU02Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-D506yA8K.js";import"./Legend-Cl_iyn0Y.js";import"./useElementOffset-DDmleafX.js";import"./uniqBy-C9-llrOR.js";import"./iteratee-CNDxe9py.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

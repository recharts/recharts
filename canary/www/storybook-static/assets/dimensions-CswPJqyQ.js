import{u as n,j as e}from"./index-btE61QWy.js";import{M as o,C as h}from"./blocks-Em288Cav.js";import{C as d,W as s}from"./dimensions.stories-iOv1B8Rs.js";import"./iframe-BquPZQZR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./index-DeLNFakb.js";import"./ChartSizeDimensions-D9WFyh7V.js";import"./zIndexSlice-DfoMGwwJ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./throttle-Ifciv68t.js";import"./ComposedChart-FnXBnX6v.js";import"./RechartsWrapper-BOh7Al31.js";import"./axisSelectors-Ra6SuVrn.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B2Z3tDr8.js";import"./index-BBIQOsY9.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./Page-Cj8EiXz7.js";import"./Line-BUXIJhlS.js";import"./Layer-DgCLyWmw.js";import"./Curve-DPOrxZAK.js";import"./types-HVxQrabK.js";import"./step-CUnUoUW9.js";import"./path-DyVhHtw_.js";import"./LabelList-c67UtHfn.js";import"./Label-QfyPAwEN.js";import"./Text-Cz9Qm4K-.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./ActivePoints-BzSHcWj6.js";import"./Dot-B5ySELDq.js";import"./activeStyles-7MX0jGA5.js";import"./useAnimationId-BAgUZZzE.js";import"./dataEntryStyles-DcYBdp4K.js";import"./Symbols-BOEhDLOF.js";import"./symbol-BytJGu2b.js";import"./ErrorBarContext-LEjhprcI.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getRadiusAndStrokeWidthFromDot-Dz2gbesP.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./XAxis-B0NTBS_i.js";import"./CartesianAxis-G--oVlcc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DU99c4NY.js";import"./Legend-NxBULrUy.js";import"./useElementOffset-v0E65nTN.js";import"./uniqBy-Dp4AeUu6.js";import"./iteratee-CvxwxQ4E.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

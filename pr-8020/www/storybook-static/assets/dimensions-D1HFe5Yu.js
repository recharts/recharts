import{u as n,j as e}from"./index-BrJ-NDkt.js";import{M as o,C as h}from"./blocks-BBgqrf6Y.js";import{C as d,W as s}from"./dimensions.stories-CyzYOcXe.js";import"./iframe-BYNQK8LM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-PSgPxbx_.js";import"./index-C0msNLyf.js";import"./index-CsXf8i4B.js";import"./ChartSizeDimensions-DZaXSSBj.js";import"./zIndexSlice-CnKvPC-T.js";import"./throttle-DlEVZZqo.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-e-zsAsB1.js";import"./isWellBehavedNumber-BZZV9Me7.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CliK5bO3.js";import"./RechartsWrapper-Di3THVkM.js";import"./axisSelectors-f_hhqOEQ.js";import"./d3-scale-D4yBTTO3.js";import"./index-Cg_72k7E.js";import"./renderedTicksSlice-D3c5wsjJ.js";import"./index-C5WITlKt.js";import"./CartesianChart-C_kwKDBD.js";import"./chartDataContext-clQVsdi0.js";import"./CategoricalChart-CJdqn6cX.js";import"./Page-Cj8EiXz7.js";import"./Line-Bz6FXF4d.js";import"./Layer-CWziNCLd.js";import"./Curve-CjpgSr7n.js";import"./types-8Tp7AoeZ.js";import"./step-CHupxKkt.js";import"./path-DyVhHtw_.js";import"./activeStyles-CDuvBT6X.js";import"./Label--8HpHVT6.js";import"./Text-uEN8Pqjn.js";import"./pageBackground-ezRX3My0.js";import"./useId-Dpi4gaCB.js";import"./useBackwardsCompatibleTheme-Dydi4_BE.js";import"./ZIndexLayer-DnQxIb9c.js";import"./useAnimationId-BA2hTS6j.js";import"./dataEntryStyles-BhOKhuEL.js";import"./ActivePoints-Cvp-MGqu.js";import"./Dot-Dz9YgpZb.js";import"./ErrorBarContext-ymRWszCz.js";import"./GraphicalItemClipPath-BzYQ5qPw.js";import"./SetGraphicalItem-C56xRO9a.js";import"./getRadiusAndStrokeWidthFromDot-B9dFz0h2.js";import"./ActiveShapeUtils-CozVnlhs.js";import"./useEffectiveDataKey-Cq2dQ4RC.js";import"./XAxis-CBcIWiwv.js";import"./CartesianAxis-DHgd3hOW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CHFcgGbi.js";import"./Legend-BksFtpyC.js";import"./Symbols-DryRVk5L.js";import"./symbol-CDBfvHL7.js";import"./useElementOffset-Dn-sBbsw.js";import"./uniqBy-CHpNcSg2.js";import"./iteratee-CAw-gtof.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

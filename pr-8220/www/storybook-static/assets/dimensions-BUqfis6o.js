import{u as n,j as e}from"./index-DwKJGffp.js";import{M as o,C as h}from"./blocks-ByP6Jp0N.js";import{C as d,W as s}from"./dimensions.stories-Dp7RjwM_.js";import"./iframe-DNXhgPY2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./index-BBIEjaB7.js";import"./ChartSizeDimensions-DU1jG2_V.js";import"./zIndexSlice-C_G2hm8X.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./throttle-OaXA1Z9W.js";import"./ComposedChart-X9xQAOg_.js";import"./RechartsWrapper-C4y6DVLx.js";import"./axisSelectors-CTPBeHC3.js";import"./polarAxisSelectors-z81ryBra.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8LWxob5.js";import"./index-BF5Wrxm3.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./Page-Cj8EiXz7.js";import"./Line-DrXCd3ny.js";import"./Layer-EsfR_jDG.js";import"./Curve-DQsYvz2A.js";import"./types-DuvV7zSt.js";import"./step-DKewonm6.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./Label-Ds6wWWz7.js";import"./Text-_51Pk49J.js";import"./ZIndexLayer-wMGGFAui.js";import"./ActivePoints-B_3_DJ4t.js";import"./Dot-BLhlTrFS.js";import"./activeStyles-DSoUr8Vz.js";import"./useAnimationId-CljrEDcm.js";import"./Symbols-d0jhdEjn.js";import"./symbol-D8br0DPp.js";import"./ErrorBarContext-j0Aj2Uq7.js";import"./SetGraphicalItem-COzEpMHH.js";import"./getRadiusAndStrokeWidthFromDot-CP6kgx-1.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./useEffectiveDataKey-CcJJJpcL.js";import"./XAxis-CJs7Huhu.js";import"./CartesianAxis-Dr28b-wt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DAJ4SxQ-.js";import"./Legend-Dw3LDK1m.js";import"./useElementOffset-D5YMnEix.js";import"./uniqBy-ClVkJmze.js";import"./iteratee-DgvxGvrf.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

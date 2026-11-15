import{u as n,j as e}from"./index-BrnTJ5HR.js";import{M as o,C as h}from"./blocks-WmW4-8KZ.js";import{C as d,W as s}from"./dimensions.stories-CGm8xs1M.js";import"./iframe-C75BlFXB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./index-EzgMka2g.js";import"./ChartSizeDimensions-Bnbgq0ta.js";import"./zIndexSlice-4GxCw66H.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./throttle-BrgJpY2A.js";import"./ComposedChart-Bw6iA5fE.js";import"./RechartsWrapper-Di9_KxKG.js";import"./axisSelectors-DvLkyA4P.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PhqlfAou.js";import"./index-BoIFErVW.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-aBb4My7l.js";import"./fillDefinitions-Bn6BAHMd.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./Page-Cj8EiXz7.js";import"./Line-BTHOdtzg.js";import"./Layer-9txovic7.js";import"./Curve-BlWbOZj8.js";import"./types-B1z8Z6Cy.js";import"./step--aXjfd4u.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./Label-D2Ecv790.js";import"./Text-CFNdT-9W.js";import"./ZIndexLayer-SbUjc4VB.js";import"./ActivePoints-CHWcM_kG.js";import"./Dot-DNLFUQdl.js";import"./activeStyles-DZYHYdm_.js";import"./useAnimationId-BsyXEGTp.js";import"./Symbols-DWw2Hw6G.js";import"./symbol-BbI-T7nn.js";import"./ErrorBarContext-C2oPAhQ2.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getRadiusAndStrokeWidthFromDot-DHebNLcs.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./useEffectiveDataKey-8cfDXulc.js";import"./XAxis-bu4t9p5Z.js";import"./CartesianAxis-Cq0K36Zo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CM0RKDPz.js";import"./Legend-tyGKAzo8.js";import"./useElementOffset-ryIYl6el.js";import"./uniqBy-IpgSihwf.js";import"./iteratee-BtVXkLhx.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

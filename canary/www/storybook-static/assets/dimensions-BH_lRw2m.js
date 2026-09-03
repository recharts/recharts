import{u as n,j as e}from"./index-xVVed8i0.js";import{M as o,C as h}from"./blocks-BBlVNe6S.js";import{C as d,W as s}from"./dimensions.stories-Bxp1sOM4.js";import"./iframe-DUU2nC7E.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DfISOqFY.js";import"./index-BweKhhB8.js";import"./index-BLrpc9iL.js";import"./ChartSizeDimensions-BRr7P-PF.js";import"./zIndexSlice-B1qxAnWW.js";import"./throttle-DU8m77oh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BqMh5-lE.js";import"./isWellBehavedNumber-QUwuvSMb.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DbguBWi6.js";import"./RechartsWrapper-DlUPtncW.js";import"./axisSelectors-oYeY2Mwn.js";import"./d3-scale-cKq8MwgY.js";import"./index-By0b-RMY.js";import"./renderedTicksSlice-CQmIW09G.js";import"./index-eVEWj-zV.js";import"./CartesianChart-D01briWp.js";import"./chartDataContext-DFaXfB60.js";import"./CategoricalChart-CP242KCm.js";import"./Page-Cj8EiXz7.js";import"./Line-kXxR1dvE.js";import"./Layer-CpTHNZLk.js";import"./Curve-Dejht0kU.js";import"./types-D26lJf4n.js";import"./step-DsOIwvhZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtOvBSOT.js";import"./Label-BpgemmXF.js";import"./Text-Dq73j3Z8.js";import"./DOMUtils-CWtn717I.js";import"./useId-D3HKJv3C.js";import"./useBackwardsCompatibleTheme-i7diorAo.js";import"./ZIndexLayer-09JGIcjO.js";import"./useAnimationId-Hor1kczP.js";import"./ActivePoints-Wt40jbbC.js";import"./Dot-DSPh_RO_.js";import"./RegisterGraphicalItemId-DH-o1j-9.js";import"./ErrorBarContext-ql3O-cNM.js";import"./GraphicalItemClipPath-CFHEX7Zj.js";import"./SetGraphicalItem-DSRKMZ7M.js";import"./getRadiusAndStrokeWidthFromDot-D_T6WBHX.js";import"./ActiveShapeUtils-DXSvZ-3T.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-C5ZNeLXM.js";import"./CartesianAxis-D6Xv7Kst.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Ba7XqdaR.js";import"./Legend-DWw1TWPW.js";import"./Symbols-BDrFNT0n.js";import"./symbol-66LGfBly.js";import"./useElementOffset-CVQocJ2R.js";import"./uniqBy-BjaaEqQ9.js";import"./iteratee-DLKh6RnP.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

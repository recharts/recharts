import{u as n,j as e}from"./index-QzhU2ATG.js";import{M as o,C as h}from"./blocks-DHSiKQZv.js";import{C as d,W as s}from"./dimensions.stories-DhxgBlfd.js";import"./iframe-BP-lIJn6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./index-j3_diSu4.js";import"./ChartSizeDimensions-q8z3q5v1.js";import"./zIndexSlice-D3RgJgQF.js";import"./throttle-CRwrBkn8.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpLU83gk.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Di3osW4J.js";import"./RechartsWrapper-BGn36pC9.js";import"./axisSelectors-B6bM08CR.js";import"./d3-scale-BUOxWIbI.js";import"./index-BOoGZrpB.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./index-BmFIm_LJ.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./Page-Cj8EiXz7.js";import"./Line-Do4a8iV9.js";import"./Layer-Dh6XQbJK.js";import"./Curve-B-WHWf6z.js";import"./types-BDcuyNFB.js";import"./step-1Avpntyj.js";import"./path-DyVhHtw_.js";import"./activeStyles-CaOdi5W_.js";import"./Label-eMzNaTJc.js";import"./Text-sFd385s3.js";import"./pageBackground-BxeZOm5U.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./dataEntryStyles-DtR4SG-M.js";import"./useAnimationId-BeUNfbh5.js";import"./ActivePoints-BnUbRfQW.js";import"./Dot-B-Fku2ox.js";import"./RegisterGraphicalItemId-CJi8bpow.js";import"./ErrorBarContext-BVsxDLFP.js";import"./GraphicalItemClipPath-_Vh94eGb.js";import"./SetGraphicalItem-CL36LKX_.js";import"./getRadiusAndStrokeWidthFromDot-Bcq6fsJt.js";import"./ActiveShapeUtils-QZxg5z0Q.js";import"./useEffectiveDataKey-C-3Q7bIW.js";import"./XAxis-D7UL0yEG.js";import"./CartesianAxis-B7dTibl7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Dyx7Nivk.js";import"./Legend-CqS47HBY.js";import"./Symbols-D9c9uDF_.js";import"./symbol-DhQfft-S.js";import"./useElementOffset-B4j4ZMKA.js";import"./uniqBy-4sj4Loax.js";import"./iteratee-SNrVc_V2.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function Ce(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{Ce as default};

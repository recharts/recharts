import{u as n,j as e}from"./index-CBj4KHox.js";import{M as o,C as h}from"./blocks-BbL1thE6.js";import{C as d,W as s}from"./dimensions.stories-DIAFbYIx.js";import"./iframe-CKMzUQLl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./index-Cl9-JK-G.js";import"./ChartSizeDimensions-DNbZ27j1.js";import"./zIndexSlice-COhM5Ssb.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./throttle-cmQF6pk6.js";import"./ComposedChart-Br4fGf2D.js";import"./RechartsWrapper-bg3MvxI9.js";import"./axisSelectors-BSZ3SCPn.js";import"./polarAxisSelectors-BANjW4O_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uc_I_mt7.js";import"./index-D6eYg-36.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./Page-Cj8EiXz7.js";import"./Line-BotpFDCu.js";import"./Layer-VHBsdASS.js";import"./Curve-B0phiZsH.js";import"./fillDefinitions-D5lwwS81.js";import"./pageBackground-DxYgqm3W.js";import"./types-DgiI7KOn.js";import"./step-Wrr8d7OB.js";import"./path-DyVhHtw_.js";import"./LabelList-DO8MwQV1.js";import"./Label-DwblDDwh.js";import"./Text-CUuCMSti.js";import"./DOMUtils-CShcNi4q.js";import"./ZIndexLayer-B6POVY0e.js";import"./ActivePoints-DBk2T96T.js";import"./Dot-Da_BOClg.js";import"./activeStyles-CT0hkTay.js";import"./useAnimationId-DKuDzs92.js";import"./dataEntryStyles-2pl_sY7K.js";import"./Symbols-Bp34LNU2.js";import"./symbol-FynIgkai.js";import"./ErrorBarContext-CFogFGPo.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getRadiusAndStrokeWidthFromDot-CkpjOgWX.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./useEffectiveDataKey-3-wTW5Lh.js";import"./XAxis-BDBlWxDf.js";import"./CartesianAxis-BPlDbcHH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DB4YGo7q.js";import"./Legend-BbIVnfVR.js";import"./useElementOffset-BGehcf2H.js";import"./uniqBy-qDOcKTVS.js";import"./iteratee-DrtJv-M1.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

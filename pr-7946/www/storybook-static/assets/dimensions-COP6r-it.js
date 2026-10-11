import{u as n,j as e}from"./index-CdwMrYfX.js";import{M as o,C as h}from"./blocks-DTtsTpcK.js";import{C as d,W as s}from"./dimensions.stories-B6j6Qwov.js";import"./iframe-Cz1yxjbp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dy-7Z4OS.js";import"./index-BeLMDhbN.js";import"./index-CrhYCmzz.js";import"./ChartSizeDimensions-CvgWYM6a.js";import"./zIndexSlice-DX3VWAAP.js";import"./throttle-C8kMLDgG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4uWhlBE.js";import"./isWellBehavedNumber-DJ2sQW5i.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B3FIpviW.js";import"./RechartsWrapper-DNAVCaGG.js";import"./axisSelectors-aNzSC39T.js";import"./d3-scale-DcjoLk-1.js";import"./index-Cvw52HpG.js";import"./renderedTicksSlice-B4zhNEhU.js";import"./index-BH1YgSAq.js";import"./CartesianChart-Bs3sClFN.js";import"./chartDataContext-D9TeAJoj.js";import"./CategoricalChart-L3mAew-j.js";import"./Page-Cj8EiXz7.js";import"./Line-DOXtn5Fz.js";import"./Layer-DX0-A7eX.js";import"./Curve-BuFNKnyX.js";import"./types-CaS-TM-K.js";import"./step-BxjwmJ_I.js";import"./path-DyVhHtw_.js";import"./activeStyles-DBmoV7wT.js";import"./Label-CKYWHIAB.js";import"./Text-Ct14p3WC.js";import"./pageBackground-Aluj06Yi.js";import"./useId-BgDV8Bbk.js";import"./useBackwardsCompatibleTheme-DMuqWF8p.js";import"./ZIndexLayer-CpvAEusS.js";import"./useAnimationId-Bstcgfr3.js";import"./dataEntryStyles-Cvogs2XX.js";import"./ActivePoints-fNvRWKnn.js";import"./Dot-FtP_Pc_K.js";import"./ErrorBarContext-Dxzs7LXM.js";import"./GraphicalItemClipPath-C4RVkUJq.js";import"./SetGraphicalItem-DcIBNzJU.js";import"./getRadiusAndStrokeWidthFromDot-CVKuJNBK.js";import"./ActiveShapeUtils-TTXriytS.js";import"./useGraphicalItemIdentity-D9IvhHId.js";import"./XAxis-DTtwNRvk.js";import"./CartesianAxis-C6EZvJj2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-YGbQi-tl.js";import"./Legend-ASL-GeNA.js";import"./Symbols-886amtI8.js";import"./symbol-BehYzhqn.js";import"./useElementOffset-CcHwamEz.js";import"./uniqBy-BPDtNAS2.js";import"./iteratee-DKkbZcMa.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-BW26AWB8.js";import{M as o,C as h}from"./blocks-Zc3hdUNJ.js";import{C as d,W as s}from"./dimensions.stories-Duy6tOw3.js";import"./iframe-Dw3JnrOz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AkdZgKxJ.js";import"./index-Df7xC6ih.js";import"./index-eNZ0M5_3.js";import"./ChartSizeDimensions-zH0Yi7AL.js";import"./zIndexSlice-DzgPoe88.js";import"./throttle-KuOt2oEs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK31nY-V.js";import"./isWellBehavedNumber-OYIp1mp-.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dn-ywIPu.js";import"./RechartsWrapper-DgRfQaZT.js";import"./axisSelectors-BViTer26.js";import"./d3-scale-DtTNlvys.js";import"./index-NzzUdmM6.js";import"./renderedTicksSlice-CkYrDZg9.js";import"./index-6yBVDhmv.js";import"./CartesianChart-jDDHmd1k.js";import"./chartDataContext-DUv1rr29.js";import"./CategoricalChart-CiCkCm9Q.js";import"./Page-Cj8EiXz7.js";import"./Line-DnOr9vmN.js";import"./Layer-L7RVOPKy.js";import"./Curve-CzvKCniC.js";import"./types-B5MEMPd3.js";import"./step-D848BMKt.js";import"./path-DyVhHtw_.js";import"./activeStyles-D2NfbCgD.js";import"./Label-Cbir5i7I.js";import"./Text-DV8khfZM.js";import"./pageBackground-tLsrP4n_.js";import"./useId-BKsEmLHH.js";import"./useBackwardsCompatibleTheme-C2fZnq5O.js";import"./ZIndexLayer-BbE4uISJ.js";import"./useAnimationId-w1IecijC.js";import"./dataEntryStyles-BN9XKvZb.js";import"./ActivePoints-BwSbWjwk.js";import"./Dot-BIHGbHYm.js";import"./ErrorBarContext-BDhr-5sg.js";import"./GraphicalItemClipPath-CB4KxVAO.js";import"./SetGraphicalItem-DfUVqQ_3.js";import"./getRadiusAndStrokeWidthFromDot-5uL5_6G5.js";import"./ActiveShapeUtils-BJ0fejl7.js";import"./useEffectiveDataKey-CnfRoJ-A.js";import"./XAxis-CeCu2pnu.js";import"./CartesianAxis-ChIBsRH5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D8Dw7kMb.js";import"./Legend-Bjj8c6w_.js";import"./Symbols-BNc52s_J.js";import"./symbol-Ckk61NXy.js";import"./useElementOffset-CR-G88er.js";import"./uniqBy-rRKFTRx_.js";import"./iteratee-BZWaCfv1.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

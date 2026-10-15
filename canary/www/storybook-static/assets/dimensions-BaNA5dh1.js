import{u as n,j as e}from"./index-TD_gZ5Nl.js";import{M as o,C as h}from"./blocks-BlI-ZHtb.js";import{C as d,W as s}from"./dimensions.stories-Cw5QJ5xy.js";import"./iframe-DMAX8_B_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./index-CBEUuOpp.js";import"./ChartSizeDimensions-c_i0Wr4Y.js";import"./zIndexSlice-BVHCVdkF.js";import"./throttle-B-jnSQsL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DTOc-N3k.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./axisSelectors-xVjud6VL.js";import"./d3-scale-BX29oM_v.js";import"./index-KGIc8sd0.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-BQc2wBrK.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./Page-Cj8EiXz7.js";import"./Line-Baz5RTuv.js";import"./Layer-bgHLcwl9.js";import"./Curve-BI1HfCSQ.js";import"./types-mmDyRX3a.js";import"./step-CY3LQZxJ.js";import"./path-DyVhHtw_.js";import"./activeStyles-B1Ozispl.js";import"./Label-CAcaahuf.js";import"./Text-BwCj1acG.js";import"./pageBackground-BEqOe7lR.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./ZIndexLayer-YH55ha4J.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./ActivePoints-C7MlG4p_.js";import"./Dot-CxQ4QLtB.js";import"./ErrorBarContext-eOToNj9e.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getRadiusAndStrokeWidthFromDot-CzuCL_No.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./useEffectiveDataKey-BofpFvC7.js";import"./XAxis-C1NK8RoH.js";import"./CartesianAxis-BiWmv3xt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DHMD8bK9.js";import"./Legend-DIOsb75K.js";import"./Symbols-BmVsZEwz.js";import"./symbol-1Eheypgy.js";import"./useElementOffset-irp2r8bU.js";import"./uniqBy-DSnL4fsO.js";import"./iteratee-BgbH2_Qr.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

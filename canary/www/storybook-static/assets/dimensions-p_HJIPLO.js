import{u as n,j as e}from"./index-DyT0B-kN.js";import{M as o,C as h}from"./blocks-DyCu6I2R.js";import{C as d,W as s}from"./dimensions.stories-DIskG6Sa.js";import"./iframe-DPI0lJK_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ccm70UBL.js";import"./index-CCmLOwTb.js";import"./index-DbAySsVp.js";import"./ChartSizeDimensions-CYLY7LCk.js";import"./zIndexSlice-DaD71mPe.js";import"./throttle-Bk9jlA84.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DO_KkPbE.js";import"./isWellBehavedNumber-BdpmJ8W0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DjQUK1Js.js";import"./RechartsWrapper-9a7fYH3g.js";import"./axisSelectors-Cch7lJrg.js";import"./d3-scale-CLDzT5En.js";import"./index-DBJXL9j6.js";import"./renderedTicksSlice-CXjOM9N8.js";import"./index-BlnGx-VT.js";import"./CartesianChart-BZZn2Q8U.js";import"./chartDataContext-BIJOOMrT.js";import"./CategoricalChart-DSBOz4pd.js";import"./Page-Cj8EiXz7.js";import"./Line-D2DmyDPo.js";import"./Layer-vYxXJLXx.js";import"./Curve-CU38nB5d.js";import"./types-BLM3hXld.js";import"./step-V5YLtyHD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DshdCAFR.js";import"./Label-BtlIETXs.js";import"./Text-C3fZ5G2B.js";import"./DOMUtils-CbbnwRqi.js";import"./useId-DHEE7UYl.js";import"./useBackwardsCompatibleTheme-BwpcPfQP.js";import"./ZIndexLayer-B60U3eb3.js";import"./useAnimationId-DHeK0bmN.js";import"./ActivePoints-BDBaYtXZ.js";import"./Dot-odAwlToN.js";import"./RegisterGraphicalItemId-D_AIaJ8K.js";import"./ErrorBarContext-DcryNH3m.js";import"./GraphicalItemClipPath-D7kbGJpV.js";import"./SetGraphicalItem-CPTpIfRJ.js";import"./getRadiusAndStrokeWidthFromDot-zTtP77M2.js";import"./ActiveShapeUtils-Bg0Vulpa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DfhI7JxR.js";import"./CartesianAxis-Dt2jxgOw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-kaLm4VRJ.js";import"./Legend-BJ9d-R-S.js";import"./Symbols-Br1RuLoh.js";import"./symbol-Dg22-sA7.js";import"./useElementOffset-BEd0h0Or.js";import"./uniqBy-BrJUdere.js";import"./iteratee-Dj8b9wE-.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

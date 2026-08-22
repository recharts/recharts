import{u as n,j as e}from"./index-CpJgzkGi.js";import{M as o,C as h}from"./blocks-9Gde7uB2.js";import{C as d,W as s}from"./dimensions.stories-ByKzFw3z.js";import"./iframe-COdQ-_i9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-nH6MfLbp.js";import"./index-m-v483sf.js";import"./index-CaZNwhso.js";import"./ChartSizeDimensions-Be6UmyvV.js";import"./zIndexSlice-BAUHEZhm.js";import"./throttle-DRdGH59w.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-dt-7inwK.js";import"./isWellBehavedNumber-B44fORf2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BtTR-vCs.js";import"./RechartsWrapper-BTy3ifzR.js";import"./index-DZp6-Cy2.js";import"./axisSelectors-DbJ1cRpx.js";import"./d3-scale-CMt_xflf.js";import"./renderedTicksSlice-hdjV5rOA.js";import"./CartesianChart--ZzFWipT.js";import"./chartDataContext-C8omdLZa.js";import"./CategoricalChart-BY1Qswpd.js";import"./Page-Cj8EiXz7.js";import"./Line-DFXQ4cY5.js";import"./Layer-LpNLyWgX.js";import"./Curve-K6myfO05.js";import"./types-Blz_Jgjg.js";import"./step-CqirpvzS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ePeQa2pM.js";import"./Label-CFb-_bkR.js";import"./Text-BgPldVXh.js";import"./DOMUtils-Di9E6LdJ.js";import"./useId-CipAwz_I.js";import"./useBackwardsCompatibleTheme-Cu3drd5h.js";import"./ZIndexLayer-BadBbMoS.js";import"./useAnimationId-B94kpDIK.js";import"./ActivePoints-ekgNIGe7.js";import"./Dot-BSGkTFAh.js";import"./RegisterGraphicalItemId-WjWZ93CB.js";import"./ErrorBarContext-C4XMoDIN.js";import"./GraphicalItemClipPath-BoTywd6M.js";import"./SetGraphicalItem-DdM0uyL7.js";import"./getRadiusAndStrokeWidthFromDot-CyRm1MKY.js";import"./ActiveShapeUtils-CaEJ6Khj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-LizApVv-.js";import"./CartesianAxis-gJenpmBs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Dgz3mKRa.js";import"./Legend-f2h2KPX4.js";import"./Symbols-BcWxCTx9.js";import"./symbol-DWJ0aIu5.js";import"./useElementOffset-sZVHnRLq.js";import"./uniqBy-CNCdFAnq.js";import"./iteratee-D1isbkYH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};

import{u as n,j as e}from"./index-XB5uQHy6.js";import{M as o,C as h}from"./blocks-BIkJ7ZlG.js";import{C as d,W as s}from"./dimensions.stories-kWztbAfe.js";import"./iframe-BuZZ6Yg-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-WVpfO-Tt.js";import"./index-rOOSR0qU.js";import"./index-DEZgEKu_.js";import"./ChartSizeDimensions-DdHcjm2F.js";import"./zIndexSlice-D06YYCUt.js";import"./throttle-Dl11hTdc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5JsTaYp.js";import"./isWellBehavedNumber-D8DFMuKm.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-SQYF2RWW.js";import"./RechartsWrapper-BK57Ddxz.js";import"./axisSelectors-BIwvgxsa.js";import"./d3-scale-BuRuIzVX.js";import"./index-pWAlhut8.js";import"./renderedTicksSlice-DeL7aSpi.js";import"./index-BFZDqkK3.js";import"./CartesianChart-D_6fxtY3.js";import"./chartDataContext-CcDIygPN.js";import"./CategoricalChart-4bcFYgeY.js";import"./Page-Cj8EiXz7.js";import"./Line-kFnHHkWn.js";import"./Layer-DuZwtXeM.js";import"./Curve-Cr1UwGdj.js";import"./types-BpoBtvKZ.js";import"./step-CMi7Hoq0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BSKa54qQ.js";import"./Label-Piq6p-kT.js";import"./Text-277W_4gY.js";import"./DOMUtils-C4sKZxSz.js";import"./useId-DaJNh8-T.js";import"./useBackwardsCompatibleTheme-bmPqm5mS.js";import"./ZIndexLayer-CVpPXR5C.js";import"./useAnimationId-BYxS0Ar5.js";import"./ActivePoints-emviVFUJ.js";import"./Dot-B1btJC39.js";import"./RegisterGraphicalItemId-BULnM1Vf.js";import"./ErrorBarContext-BnL_B67S.js";import"./GraphicalItemClipPath-iF12rDlU.js";import"./SetGraphicalItem-B24-ge-L.js";import"./getRadiusAndStrokeWidthFromDot-D4y7gXXI.js";import"./ActiveShapeUtils-DdHa4GQ_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CHYajWYc.js";import"./CartesianAxis-tEidUAUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CIgwtJsC.js";import"./Legend-B9qa9zpU.js";import"./Symbols-kGct_fvo.js";import"./symbol-C8zFc4Hg.js";import"./useElementOffset-CC8KTtc-.js";import"./uniqBy-CBl0CU3M.js";import"./iteratee-4F6o9M4t.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

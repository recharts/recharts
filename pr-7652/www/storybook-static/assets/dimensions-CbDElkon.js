import{u as n,j as e}from"./index-ByD3-Ccj.js";import{M as o,C as h}from"./blocks-DRUBf6Kp.js";import{C as d,W as s}from"./dimensions.stories-mbDYZSh4.js";import"./iframe-B8V7BJ0L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEyD9286.js";import"./index-BrHErK0F.js";import"./index-I3Tcx3uB.js";import"./ChartSizeDimensions-CQgR_EUi.js";import"./zIndexSlice-D-1XQb3V.js";import"./throttle-CesEnXHC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BVc4-u0s.js";import"./isWellBehavedNumber-DJ8Z02p0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-ixqus0AO.js";import"./RechartsWrapper-BnC-Jwam.js";import"./index-CpRh0f3d.js";import"./axisSelectors-CtDpom86.js";import"./d3-scale-C_Pwa9HE.js";import"./renderedTicksSlice-BEoD_C5H.js";import"./CartesianChart-DbV6u1bg.js";import"./chartDataContext-DkhpcBdG.js";import"./CategoricalChart-CRJAPCFd.js";import"./Page-Cj8EiXz7.js";import"./Line-Dm3fZtVe.js";import"./Layer-DSZQNu8u.js";import"./Curve-_vFkPdEp.js";import"./types-Bynmgm1l.js";import"./step-Dn4gXRUd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D2zk6WJL.js";import"./Label-eqtAA7cE.js";import"./Text-DNMx3NKa.js";import"./DOMUtils-BPFNazbq.js";import"./useBackwardsCompatibleTheme-DRsZnCOS.js";import"./ZIndexLayer-D9SG3bxa.js";import"./useAnimationId-D0vrdmF4.js";import"./ActivePoints-Bcxj_Z9o.js";import"./Dot-CtEJdvTp.js";import"./RegisterGraphicalItemId-BrpEQBfx.js";import"./ErrorBarContext-T5Q1bKBI.js";import"./GraphicalItemClipPath-C5JNAsGG.js";import"./SetGraphicalItem-Cww5wWY0.js";import"./getRadiusAndStrokeWidthFromDot-CrG0xVOS.js";import"./ActiveShapeUtils-EzXi-ssF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-R6swZGmX.js";import"./CartesianAxis-BCPc0Lsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BU97uoiQ.js";import"./Legend-J09ZaTSW.js";import"./Symbols-Dn_MwxmN.js";import"./symbol-DCQGgXT5.js";import"./useElementOffset-BQ3aMjmL.js";import"./uniqBy-8Hs_PlTr.js";import"./iteratee-CVu6Uo0K.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

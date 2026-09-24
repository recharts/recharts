import{u as n,j as e}from"./index-CVM0sHEo.js";import{M as o,C as h}from"./blocks-CxmLkfmC.js";import{C as d,W as s}from"./dimensions.stories-BSuDdeXp.js";import"./iframe-B5g3I7ev.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUp993cz.js";import"./index-BAWIKs3X.js";import"./index-wrz3e8tU.js";import"./ChartSizeDimensions-BlkbyNsL.js";import"./zIndexSlice-DGvgy2X6.js";import"./throttle-DboQbEZw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNWhfhMM.js";import"./isWellBehavedNumber-C-qAxBmX.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CF6CWDO9.js";import"./RechartsWrapper-Bo6Jfh5F.js";import"./axisSelectors-DjPo8MIe.js";import"./d3-scale-C7u8uwmP.js";import"./index-Z4LdU3de.js";import"./renderedTicksSlice-BmUG22gY.js";import"./index-DQOAurO-.js";import"./CartesianChart-CCYXF9ai.js";import"./chartDataContext-DiPBxGan.js";import"./CategoricalChart-BprHnfNJ.js";import"./Page-Cj8EiXz7.js";import"./Line-CzGLEasr.js";import"./Layer-BzSrPOIw.js";import"./Curve-CnFbZ5iA.js";import"./types-4J1YdzxR.js";import"./step-CCbudcDx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAgU6T0J.js";import"./Label-T3V6prm0.js";import"./Text-BYK6re_u.js";import"./DOMUtils-BBurC4Bd.js";import"./useId-BeJfkheV.js";import"./useBackwardsCompatibleTheme-BDfv2Eej.js";import"./ZIndexLayer-C61b4tvj.js";import"./useAnimationId-E9ax1yjD.js";import"./ActivePoints-DonB9ZTw.js";import"./Dot-DrD1foSY.js";import"./RegisterGraphicalItemId-B0kmn4VH.js";import"./ErrorBarContext-CUA3MPdo.js";import"./GraphicalItemClipPath-C2l89xTF.js";import"./SetGraphicalItem-B2TqdHsC.js";import"./getRadiusAndStrokeWidthFromDot-lubS4zqJ.js";import"./ActiveShapeUtils-BHMUVdMS.js";import"./useGraphicalItemIdentity-DeD0kRsv.js";import"./XAxis-BhxgbA2b.js";import"./CartesianAxis-CufURV0j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-8glJaMk0.js";import"./Legend-CFeBRj0Y.js";import"./Symbols-BArdl8gR.js";import"./symbol-BI5IrfIV.js";import"./useElementOffset-9_pOD8zc.js";import"./uniqBy-3ryMdrvw.js";import"./iteratee-D8S9d83o.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

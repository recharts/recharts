import{u as n,j as e}from"./index-XDXUALbx.js";import{M as o,C as h}from"./blocks-Q4-4Wayi.js";import{C as d,W as s}from"./dimensions.stories-B0tTu9sV.js";import"./iframe-D6i__LoP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DMFV_hOu.js";import"./index--kg1cBe0.js";import"./index-B0NZAO6k.js";import"./ChartSizeDimensions-Ctj-n7Be.js";import"./zIndexSlice-CyKHeydM.js";import"./throttle-DZkWvGbR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqzBSPJb.js";import"./isWellBehavedNumber-CluTirfv.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CjSU8WGa.js";import"./RechartsWrapper-DCWzk6aO.js";import"./axisSelectors-LrJn1RIt.js";import"./d3-scale-CPAx7ill.js";import"./index-TOqTf9p4.js";import"./renderedTicksSlice-Cqr2zXs_.js";import"./index-CfSh3_es.js";import"./CartesianChart-SH0Bt_l8.js";import"./chartDataContext-DoSIIG4T.js";import"./CategoricalChart-CQsWyxzZ.js";import"./Page-Cj8EiXz7.js";import"./Line-vAyDldKH.js";import"./Layer-g6kXe5Or.js";import"./Curve-BAgXbvIK.js";import"./types-BferblG2.js";import"./step-D_yNlVES.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BhOCoOsB.js";import"./Label-CcM-HFI6.js";import"./Text-hZV3tmbb.js";import"./DOMUtils-DeYJTEnJ.js";import"./useId-tMVNWk8Z.js";import"./useBackwardsCompatibleTheme-CQpTINsS.js";import"./ZIndexLayer-Cgr5Sbcn.js";import"./useAnimationId-Bi456v-E.js";import"./ActivePoints-BQ7megxl.js";import"./Dot-M_mEsxZK.js";import"./RegisterGraphicalItemId-DMF9sTtn.js";import"./ErrorBarContext-CpDc2JTq.js";import"./GraphicalItemClipPath-C4ZotnNz.js";import"./SetGraphicalItem-B41pEGJW.js";import"./getRadiusAndStrokeWidthFromDot-BXIDSkMw.js";import"./ActiveShapeUtils-p-Z4MyM6.js";import"./useGraphicalItemIdentity-CVzdXzJV.js";import"./XAxis-CAx1pIhU.js";import"./CartesianAxis-DBbQlRic.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-B5XPYz7e.js";import"./Legend-bzmj0gXI.js";import"./Symbols-C7sIDB3S.js";import"./symbol-CCdPpWBc.js";import"./useElementOffset-tYvBFPP4.js";import"./uniqBy-DBt7WG7j.js";import"./iteratee-q1Bz0EWx.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

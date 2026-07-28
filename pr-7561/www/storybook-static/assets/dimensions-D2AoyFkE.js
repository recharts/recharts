import{u as n,j as e}from"./index-Ci1oEm5u.js";import{M as o,C as h}from"./blocks-C05VtPY-.js";import{C as d,W as s}from"./dimensions.stories-DCk76hGd.js";import"./iframe-BdYAncLR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CGm2P49p.js";import"./index-B2x5-TIo.js";import"./index-B0-wIR84.js";import"./ChartSizeDimensions-D60r7Gej.js";import"./zIndexSlice-5bpfVQyA.js";import"./throttle-BjujQpzW.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-5h8_lZEQ.js";import"./isWellBehavedNumber-_Cj0WZhc.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CAVG_F2Z.js";import"./RechartsWrapper-B45z8Y-R.js";import"./index-Du0b8e_w.js";import"./renderedTicksSlice-L4Igrea0.js";import"./axisSelectors-zM0j77wa.js";import"./d3-scale-23ottKw2.js";import"./CartesianChart-BhQs_YPC.js";import"./chartDataContext-CgP-nFTi.js";import"./CategoricalChart-Bp8IO2Nw.js";import"./Page-Cj8EiXz7.js";import"./Line-Bpks10ih.js";import"./Layer-DIV0oEbW.js";import"./Curve-Bi7tJxo-.js";import"./types-OsxZUaOH.js";import"./step-DGS-jgb3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dy_aktOc.js";import"./Label-JmhQBV8Y.js";import"./Text-C319EuNs.js";import"./DOMUtils-DBahITf2.js";import"./ZIndexLayer-TIVdTQGS.js";import"./useAnimationId-CVihXN2U.js";import"./ActivePoints-DqzUtciu.js";import"./Dot-axcqS0GT.js";import"./RegisterGraphicalItemId-CwjribNO.js";import"./ErrorBarContext-IO5KIe3b.js";import"./GraphicalItemClipPath-1-xikmiv.js";import"./SetGraphicalItem-QdG8FGgR.js";import"./getRadiusAndStrokeWidthFromDot-B-U7YWSC.js";import"./ActiveShapeUtils-DqTrL5g1.js";import"./RechartsThemeContext-D707JDBS.js";import"./XAxis-CbeL6UmM.js";import"./CartesianAxis-BX7MbhnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-BEJGzNud.js";import"./Legend-Bm_YS8vr.js";import"./Symbols-2xOvz_0s.js";import"./symbol-VDBX55_l.js";import"./useElementOffset-Bq6EO0f-.js";import"./uniqBy-Fvrf5pq2.js";import"./iteratee-BZcOrPZP.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};

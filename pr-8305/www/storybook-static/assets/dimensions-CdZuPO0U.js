import{u as n,j as e}from"./index-BELi1fa6.js";import{M as o,C as h}from"./blocks-BhkeRjQc.js";import{C as d,W as s}from"./dimensions.stories-C95UlJ00.js";import"./iframe-rnrsK-Eh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./index-BcrgJFGN.js";import"./ChartSizeDimensions-RU3zBiU_.js";import"./zIndexSlice-D3HmR0ZR.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./throttle-BHymO33n.js";import"./ComposedChart-D54WX9hH.js";import"./RechartsWrapper-tBuCuUXe.js";import"./axisSelectors-CIZ-q5JG.js";import"./polarAxisSelectors-B1h4eON8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaDfMMmk.js";import"./index-BZjQac1j.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./chartDataContext-BaXmKLtm.js";import"./CategoricalChart-B0mb1tZK.js";import"./Page-Cj8EiXz7.js";import"./Line-BDX7TuS6.js";import"./getRadiusAndStrokeWidthFromDot-Aa26YM9W.js";import"./Layer-D4ktbd_J.js";import"./Curve-B8ieUi4B.js";import"./types-CAJhQIqW.js";import"./step-BNGv-ij0.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DPy91L9k.js";import"./Label-DJYYuUsE.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./ActivePoints-G3nCAY-X.js";import"./Dot-CpkbvyGy.js";import"./activeStyles-9CDj_AEF.js";import"./useAnimationId-COqzWo9S.js";import"./Symbols-CFUB5kvN.js";import"./symbol-B4eSOryt.js";import"./ErrorBarContext-YhaLsFzE.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./useEffectiveDataKey-DftwbdUx.js";import"./XAxis-DcA-2yah.js";import"./CartesianAxis-ZiuFLH_J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CebqVQrE.js";import"./Legend-DCAQZ-xN.js";import"./useElementOffset-BnxZL8WN.js";import"./uniqBy-C0Cq__z-.js";import"./iteratee-CngnK0pj.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

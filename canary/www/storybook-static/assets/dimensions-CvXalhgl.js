import{j as e}from"./jsx-runtime-uJz8Ufl2.js";import{useMDXComponents as n}from"./index-Cn40ES7J.js";import{M as o,C as h}from"./blocks-BMaepUtv.js";import{C as d,W as s}from"./dimensions.stories-nu2oDtan.js";import"./iframe-BBcCu4tW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DwDsLBsF.js";import"./ChartSizeDimensions-B3sIk0p_.js";import"./arrayEqualityCheck-CIoNRuby.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnZaYM7o.js";import"./immer-B-ffdvVM.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D5dvwxje.js";import"./RechartsWrapper-B_0gdr0q.js";import"./index-B4OVM0gu.js";import"./hooks-BezqoFaW.js";import"./axisSelectors-DiO1RUhK.js";import"./d3-scale-wrbXHqm2.js";import"./zIndexSlice-CQ5dV6Tf.js";import"./renderedTicksSlice-qHXvxWkJ.js";import"./CartesianChart-CyTvOQNc.js";import"./chartDataContext-D3FIgu0K.js";import"./CategoricalChart-BMbsuZm1.js";import"./Page-Cj8EiXz7.js";import"./Line-C5n5D2in.js";import"./Layer-BqjItK9e.js";import"./ReactUtils-CK6hPv_Y.js";import"./Label-CVOeCU9m.js";import"./Text-x4pxLanI.js";import"./DOMUtils-BzbpMFLz.js";import"./ZIndexLayer-C7yDhLaY.js";import"./ActivePoints-DtB9X2U8.js";import"./Dot-DIIdBfpA.js";import"./types-BYSx98h-.js";import"./RegisterGraphicalItemId-zcKV7aTa.js";import"./ErrorBarContext-DHR2hShJ.js";import"./GraphicalItemClipPath-C4HnTmHF.js";import"./SetGraphicalItem-nt8-T9NJ.js";import"./useAnimationId-Cz7XNO3G.js";import"./getRadiusAndStrokeWidthFromDot-RM0GOVzs.js";import"./ActiveShapeUtils-CnMsGTMX.js";import"./isPlainObject-ByEPh_9t.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6s0YHElS.js";import"./Trapezoid-CCXIiWsl.js";import"./Sector-V-b8xmGp.js";import"./Symbols-DeFezQUo.js";import"./symbol-dMCmyDlw.js";import"./step-CTgfjT4Z.js";import"./Curve-kTZvT6-S.js";import"./XAxis-BPDxC347.js";import"./CartesianAxis-BamwTcDK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DRaUq3FE.js";import"./Legend-CkUqGqgq.js";import"./useElementOffset-gHkkm38f.js";import"./uniqBy-9uTsqOQj.js";import"./iteratee-CO_ekqp4.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

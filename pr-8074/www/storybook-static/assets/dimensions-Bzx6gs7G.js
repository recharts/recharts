import{u as n,j as e}from"./index-CDoOdaPz.js";import{M as o,C as h}from"./blocks-CNBb1et9.js";import{C as d,W as s}from"./dimensions.stories-YCMp0wfi.js";import"./iframe-B4_QwD1D.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1txtwQs.js";import"./index-BIeiuwDH.js";import"./index-BNmMl_IP.js";import"./ChartSizeDimensions-fjAsIXV_.js";import"./zIndexSlice-CBhoAbgS.js";import"./throttle-CoBiCp2n.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIsbUszc.js";import"./isWellBehavedNumber-D8aaIUAh.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BYrbpJyI.js";import"./RechartsWrapper-D2uM5dQm.js";import"./axisSelectors-BPJ5zN30.js";import"./d3-scale-DbsLf6d-.js";import"./index-DyH5gF1W.js";import"./renderedTicksSlice-Wvzb8C7M.js";import"./index-D5vd9j9o.js";import"./CartesianChart-CP9pEwgo.js";import"./chartDataContext-CzT92l_t.js";import"./CategoricalChart-B_jNXI9Q.js";import"./Page-Cj8EiXz7.js";import"./Line-B7tq3Xvl.js";import"./Layer-Bwh0wvH7.js";import"./Curve-BO_4liKv.js";import"./types-OK8mrrgc.js";import"./step-ChTc0MMg.js";import"./path-DyVhHtw_.js";import"./activeStyles-B6_AFvwr.js";import"./Label-bs3lrZa-.js";import"./Text-D60EpHHD.js";import"./pageBackground-BarjFxCc.js";import"./useId-BGuiMtTj.js";import"./useBackwardsCompatibleTheme-Dg3tMWv0.js";import"./ZIndexLayer-DLJnSwwV.js";import"./dataEntryStyles-C6hQpsCt.js";import"./useAnimationId-Dxw2C04Y.js";import"./ActivePoints-BjOHnkRU.js";import"./Dot-5O5duGce.js";import"./RegisterGraphicalItemId-bXaHC85L.js";import"./ErrorBarContext-pg2dj6kz.js";import"./SetGraphicalItem-rmoRgud5.js";import"./getRadiusAndStrokeWidthFromDot-CaBRrUqE.js";import"./ActiveShapeUtils-Db0-CW4c.js";import"./useEffectiveDataKey-CJ0a7aYn.js";import"./XAxis-ClMwOqtx.js";import"./CartesianAxis-Bl0Fh-eW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BXoC-zzw.js";import"./Legend-DI9r16Hx.js";import"./Symbols-Ci7sUahQ.js";import"./symbol-45SraHnz.js";import"./useElementOffset-BsVVqcI3.js";import"./uniqBy-Cr-9UYKs.js";import"./iteratee-HAqVuPyF.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

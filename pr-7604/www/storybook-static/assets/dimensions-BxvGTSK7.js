import{u as n,j as e}from"./index-CL2COexg.js";import{M as o,C as h}from"./blocks-DY77Sjdi.js";import{C as d,W as s}from"./dimensions.stories-Cy9z6Y7F.js";import"./iframe-Bcp8O5w9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8PiiTqGz.js";import"./index-D5K7XRz9.js";import"./index-CR585iKh.js";import"./ChartSizeDimensions-DhUilmMw.js";import"./zIndexSlice-D89hrw0J.js";import"./throttle-DAyQB-br.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZIqX7HS.js";import"./isWellBehavedNumber-Cv5vkYjV.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BTnoYdrr.js";import"./RechartsWrapper-B5FCNVgo.js";import"./index-BdFtKw5i.js";import"./renderedTicksSlice-DrTN80Ah.js";import"./axisSelectors-CoK9S3rY.js";import"./d3-scale-CsP8i0FA.js";import"./CartesianChart-CD4QeXTd.js";import"./chartDataContext-DNuqophf.js";import"./CategoricalChart-YaAk4iek.js";import"./Page-Cj8EiXz7.js";import"./Line-D5QNWWOp.js";import"./Layer-be5X0p7R.js";import"./Curve-CliZJ8qV.js";import"./types-BoqxM4LK.js";import"./step-BcSwTyGL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dei1yN9c.js";import"./Label-hDShUpMs.js";import"./Text-wdIqEHol.js";import"./DOMUtils-CK1FWe6a.js";import"./ZIndexLayer-DGoKIl_r.js";import"./useAnimationId-BscNfyQw.js";import"./ActivePoints-PTULrlcl.js";import"./Dot-Chi-tYTx.js";import"./RegisterGraphicalItemId-BpEAlExL.js";import"./ErrorBarContext-9-QyAyWc.js";import"./GraphicalItemClipPath-KqXDj0-X.js";import"./SetGraphicalItem-3vj6veQk.js";import"./getRadiusAndStrokeWidthFromDot-CozuNNm5.js";import"./ActiveShapeUtils-BmZAHZJ_.js";import"./RechartsThemeContext-BZ4wBUr5.js";import"./XAxis-BiaLRW8b.js";import"./CartesianAxis-BtWjjBG7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BfwBAog7.js";import"./Legend-Btq_M8Vo.js";import"./Symbols-8OsQeKqu.js";import"./symbol-BW_3rSZb.js";import"./useElementOffset-CqpNhrrP.js";import"./uniqBy-DzHmY-V-.js";import"./iteratee-gle5_reD.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-7f_H3nwC.js";import{M as o,C as h}from"./blocks-C9UZZWGv.js";import{C as d,W as s}from"./dimensions.stories-BGO0Pylw.js";import"./iframe-B87NFlIP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKu5wzsE.js";import"./index-00O5dIdv.js";import"./index-CacHHN54.js";import"./ChartSizeDimensions-BZxP9Cn2.js";import"./zIndexSlice-BXFzXSCA.js";import"./immer-QFj5HQLb.js";import"./get-D4uUMniQ.js";import"./resolveDefaultProps-BYA5JPhb.js";import"./isWellBehavedNumber-BoHGXF6T.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B90Uqp-u.js";import"./RechartsWrapper-BUNisers.js";import"./index-BOjePhwv.js";import"./renderedTicksSlice-Ca7Y29Mx.js";import"./axisSelectors-D4K8gA-k.js";import"./d3-scale-CHNXjue9.js";import"./CartesianChart-C-pJxpsO.js";import"./chartDataContext-CHvUY65z.js";import"./CategoricalChart-C9EAem8i.js";import"./Page-Cj8EiXz7.js";import"./Line-CZqPG8TG.js";import"./Layer-DtWSIRkx.js";import"./Curve-B4_Cj2x_.js";import"./types-D1UBNpSv.js";import"./step-BTnurF1K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D7tPVB1r.js";import"./Label-jdUwmN2T.js";import"./Text-ClNCBjV1.js";import"./DOMUtils-CIzchNYO.js";import"./ZIndexLayer-D6XfIW9f.js";import"./useAnimationId-a9uwME5U.js";import"./ActivePoints-6m2eaavh.js";import"./Dot-BdACAh9E.js";import"./RegisterGraphicalItemId-B6YKmbmq.js";import"./ErrorBarContext-DZxTDSzq.js";import"./GraphicalItemClipPath-q-krKk84.js";import"./SetGraphicalItem-CKmZqTho.js";import"./getRadiusAndStrokeWidthFromDot-D19VTirB.js";import"./ActiveShapeUtils-Ba_G1J2p.js";import"./XAxis-B3Q4Ss-r.js";import"./CartesianAxis-fmozs-7p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DEe_988n.js";import"./Legend-BcdnT74J.js";import"./Symbols-D5uZC9pk.js";import"./symbol-D0afevon.js";import"./useElementOffset-BomvHThz.js";import"./uniqBy-CbnJDgaK.js";import"./iteratee-jyvq17WE.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

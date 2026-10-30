import{u as n,j as e}from"./index-B4auU0uj.js";import{M as o,C as h}from"./blocks-qVYNgz4y.js";import{C as d,W as s}from"./dimensions.stories-BCiHl9KX.js";import"./iframe-DRd8L1ij.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./index-BnUkaxQb.js";import"./ChartSizeDimensions-oMvnoPjB.js";import"./zIndexSlice-DWK0mKBW.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--2iGUKCh.js";import"./throttle-BZHSEq8k.js";import"./ComposedChart-BgiL4Xm-.js";import"./RechartsWrapper-CVHpNPrj.js";import"./axisSelectors-DKYErlU4.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Degm7ixx.js";import"./index-BOBLZBKw.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./Page-Cj8EiXz7.js";import"./Line-CN_lgmVk.js";import"./Layer-C-w_mvnX.js";import"./Curve-B3UG50Pe.js";import"./types-99rmuj1o.js";import"./step-CVL70ILG.js";import"./path-DyVhHtw_.js";import"./LabelList-C56jidjO.js";import"./Label-Dlqk38Aa.js";import"./Text-DOqNkwx7.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./ActivePoints-DpFFg10s.js";import"./Dot-Dinx-ymZ.js";import"./activeStyles-N3dA5laV.js";import"./useAnimationId-C1EYHtHK.js";import"./dataEntryStyles-CMr7JuEI.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./ErrorBarContext-DGvI8kwC.js";import"./SetGraphicalItem-Cted8rHa.js";import"./getRadiusAndStrokeWidthFromDot-CcwRzSoX.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./useEffectiveDataKey-C0wXpfOI.js";import"./XAxis-DYHP_qTD.js";import"./CartesianAxis-BCEsA_1Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Dzj0j6ti.js";import"./Legend-Bzv9SWR0.js";import"./useElementOffset-DvtLZm2w.js";import"./uniqBy-CQ6eO9fT.js";import"./iteratee-0XuJHBpI.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{j as e}from"./jsx-runtime-Ru4TAw7w.js";import{useMDXComponents as n}from"./index-B1J7IaQM.js";import{M as o,C as h}from"./blocks-DUOZ661H.js";import{C as d,W as s}from"./dimensions.stories-KPx8HeIX.js";import"./iframe-CE_u6gw7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BnKoqAo2.js";import"./ChartSizeDimensions-DBXaHco-.js";import"./arrayEqualityCheck-DrWQ_zH1.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_XoAT-1.js";import"./immer-B4lMi1z1.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BtdcIjSh.js";import"./RechartsWrapper-B6u2BPsd.js";import"./index-CxjNEs9W.js";import"./hooks-PVjuMKZG.js";import"./axisSelectors-BIg47fnU.js";import"./d3-scale-DJKgZxBp.js";import"./zIndexSlice-BphKS-MH.js";import"./renderedTicksSlice-PB7f1cWi.js";import"./CartesianChart-Cxn-kkBD.js";import"./chartDataContext-DcP55NXx.js";import"./CategoricalChart-8rYVrRQy.js";import"./Line-C8DzJEYg.js";import"./Layer-DWHUvPCA.js";import"./ReactUtils-DKt0JvWb.js";import"./Label-B0RF5qp9.js";import"./Text-CMYMNHqG.js";import"./DOMUtils-BxWdBvEt.js";import"./ZIndexLayer-DmUZ0Rp1.js";import"./ActivePoints-hrEYGtat.js";import"./Dot-CRKbFyPB.js";import"./types-BY4GBGia.js";import"./RegisterGraphicalItemId-CbUb9Psg.js";import"./ErrorBarContext-Cf8SIugI.js";import"./GraphicalItemClipPath-DEfFS43K.js";import"./SetGraphicalItem-afAcTt-s.js";import"./useAnimationId-Ey9rpLv3.js";import"./getRadiusAndStrokeWidthFromDot-CYfIvNV9.js";import"./ActiveShapeUtils-bsQr1W6P.js";import"./isPlainObject-B1Oby2ns.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CJD0TK60.js";import"./Trapezoid-3IU8o-1x.js";import"./Sector-DrGniStY.js";import"./Symbols-BcL7Z710.js";import"./symbol-CRUhxG3e.js";import"./step-CYcDECZ0.js";import"./Curve-VV1uNtUT.js";import"./XAxis-CLmHv_2r.js";import"./CartesianAxis-CWIyTumo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Bs0Yklvo.js";import"./Legend-Dfcg53g_.js";import"./useElementOffset-CsNs9pCE.js";import"./uniqBy-B6So3ul3.js";import"./iteratee-D0NxlJV3.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

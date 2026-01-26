import{j as e}from"./jsx-runtime-5SCZrT7n.js";import{useMDXComponents as n}from"./index-txfl7j83.js";import{M as h,C as o}from"./blocks-D5VU1LIP.js";import{C as d,W as s}from"./dimensions.stories-DWlufCki.js";import"./iframe-BGOJmNjB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CbiKP7W2.js";import"./ChartSizeDimensions-DlrFd0zO.js";import"./arrayEqualityCheck-BjRvnt0s.js";import"./resolveDefaultProps-BSJBVX4C.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-DGq6XYiu.js";import"./RechartsWrapper-h16g3EQQ.js";import"./hooks-Nz6DJ1YN.js";import"./axisSelectors-Lz_2OI8_.js";import"./zIndexSlice-DAfFf7yA.js";import"./CartesianChart-OgoW6u2Y.js";import"./chartDataContext-aYFPQGqf.js";import"./CategoricalChart-DgJaNq2v.js";import"./Line-BD6OPy20.js";import"./Layer-LxxzUP-k.js";import"./ReactUtils-BB1AONhv.js";import"./Label-Bv9s524x.js";import"./Text-BhvB3_o-.js";import"./DOMUtils-CB_Ew6lr.js";import"./ZIndexLayer-4QAOL5IQ.js";import"./ActivePoints-Cito15fk.js";import"./Dot-L7IF6gmL.js";import"./types-DLAnyyDj.js";import"./RegisterGraphicalItemId-BpPOmR2M.js";import"./ErrorBarContext-5jw4fggF.js";import"./GraphicalItemClipPath-CldBUZWH.js";import"./SetGraphicalItem-CMM_HPdn.js";import"./useAnimationId-G8K3lY41.js";import"./getRadiusAndStrokeWidthFromDot-haPIcnOU.js";import"./ActiveShapeUtils-DNGFFUmc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChTFz8xc.js";import"./Trapezoid-DXqtA9Y7.js";import"./Sector-Bdq99Tgd.js";import"./Symbols-NLXHxAGu.js";import"./Curve-Bf5GHIVx.js";import"./XAxis-CH74Oy12.js";import"./CartesianAxis-CTaqfxTH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BYgICbJJ.js";import"./Legend-DeXNp1Dk.js";import"./useElementOffset-Dfmg7vr2.js";import"./iteratee-BGQoj0hh.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};

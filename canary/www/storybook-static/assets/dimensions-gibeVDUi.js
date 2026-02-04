import{j as e}from"./jsx-runtime-T4XNx38_.js";import{useMDXComponents as n}from"./index-B71C0mAK.js";import{M as h,C as o}from"./blocks-BTAj7rkt.js";import{C as d,W as s}from"./dimensions.stories-DRVuP-gf.js";import"./iframe-2vdihYaA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIOAgVA6.js";import"./ChartSizeDimensions-C8811dw0.js";import"./arrayEqualityCheck-Cz6bem1a.js";import"./resolveDefaultProps-BMo1MjoM.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-owjmqR1m.js";import"./RechartsWrapper-BKqPTBXa.js";import"./hooks-DRq4Dknc.js";import"./axisSelectors-B6I2jDAj.js";import"./zIndexSlice-_CZsqZq4.js";import"./CartesianChart-CgDezk2P.js";import"./chartDataContext-DF08vkso.js";import"./CategoricalChart-CTkRrNay.js";import"./Line-C2YKaF46.js";import"./Layer-BY-fsyoM.js";import"./ReactUtils-YY1V_Sy8.js";import"./Label-DyVMIxDt.js";import"./Text-B79Sux8Q.js";import"./DOMUtils-CHIYEZ9y.js";import"./ZIndexLayer-BhK_pYZk.js";import"./ActivePoints-BSNIUG_f.js";import"./Dot-CgptiLQj.js";import"./types-BVLdKdSl.js";import"./RegisterGraphicalItemId-BxLSDVx1.js";import"./ErrorBarContext-CWPUp6By.js";import"./GraphicalItemClipPath-ZZzgSpw_.js";import"./SetGraphicalItem-B1yLHWtu.js";import"./useAnimationId-C00yQmDC.js";import"./getRadiusAndStrokeWidthFromDot-Ryy3WNXf.js";import"./ActiveShapeUtils-BzwzNQ6E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-LulPmG5i.js";import"./Trapezoid-Csj6mQp9.js";import"./Sector-BfatqE6A.js";import"./Symbols-DySEQhPv.js";import"./Curve-CO1p58ib.js";import"./XAxis-Dj-4Nnot.js";import"./CartesianAxis-BzbcZQiG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DeIibkX2.js";import"./Legend-CFipEMHM.js";import"./useElementOffset-CC3Rdwqu.js";import"./iteratee-BCiuY1w8.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

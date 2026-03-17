import{j as e}from"./jsx-runtime-qSGV98Mv.js";import{useMDXComponents as n}from"./index-kWywXjqW.js";import{M as o,C as h}from"./blocks-Dl6Shmiy.js";import{C as d,W as s}from"./dimensions.stories-CdS2nV-5.js";import"./iframe-C_RKSEYG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYNR1kH5.js";import"./ChartSizeDimensions-Du4NUIhU.js";import"./arrayEqualityCheck-XhN9n2BV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wWOI_tEY.js";import"./immer-BXvw-sb6.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BzOUY-Ur.js";import"./RechartsWrapper-DJ6mrGyY.js";import"./index-BRt1FalZ.js";import"./hooks-BUBBsNP0.js";import"./axisSelectors-octxjJ6L.js";import"./d3-scale-Bly9GB_U.js";import"./zIndexSlice-Dau3iHk3.js";import"./renderedTicksSlice-BsnvkrRv.js";import"./CartesianChart-Dpt-Gkc_.js";import"./chartDataContext-Dj8ePN8G.js";import"./CategoricalChart-BeDTe7Ft.js";import"./Line-CObjJQTD.js";import"./Layer-Bdbbvous.js";import"./ReactUtils-CN-zxxkn.js";import"./Label-DjnSNkR5.js";import"./Text-DZ8oBtno.js";import"./DOMUtils-D3avAUhw.js";import"./ZIndexLayer-C2eZ7492.js";import"./ActivePoints-CR4cquNR.js";import"./Dot-DdhwcviA.js";import"./types-DsqucEgb.js";import"./RegisterGraphicalItemId-BrlGhgM7.js";import"./ErrorBarContext-B6LOYifa.js";import"./GraphicalItemClipPath-mtAKD-sR.js";import"./SetGraphicalItem-DAHF2TwR.js";import"./useAnimationId-A_rRmY4T.js";import"./getRadiusAndStrokeWidthFromDot-wxvSaUa-.js";import"./ActiveShapeUtils-DCdigpXF.js";import"./isPlainObject-DUDNoV38.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR00ZYjW.js";import"./Trapezoid-BcY_848k.js";import"./Sector-C6nUzz_C.js";import"./Symbols-D-Mqycxx.js";import"./symbol-CQ2DdqBk.js";import"./step-CZqcHwF_.js";import"./Curve-C9iWhVEb.js";import"./XAxis-3q4SInU2.js";import"./CartesianAxis-Q9iq7WI3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dw1AfdQf.js";import"./Legend-0q0gcXTg.js";import"./useElementOffset-UIzr0A2v.js";import"./uniqBy-BK5HoLxp.js";import"./iteratee-Dn6k9_7E.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

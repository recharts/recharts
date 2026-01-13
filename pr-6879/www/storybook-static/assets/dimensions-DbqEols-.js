import{j as e}from"./jsx-runtime-B0CwW13p.js";import{useMDXComponents as n}from"./index-C2GN7Wfn.js";import{M as h,C as o}from"./blocks-DFsiqAws.js";import{C as d,W as s}from"./dimensions.stories-vFuib8vz.js";import"./iframe-B6ZCI1X-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYaSePyf.js";import"./ChartSizeDimensions-B6sRHlXe.js";import"./arrayEqualityCheck-Vy2dcV_o.js";import"./resolveDefaultProps-BfRNrOjX.js";import"./PolarUtils-DT5LUPN4.js";import"./ComposedChart-BW4GWPKl.js";import"./RechartsWrapper-Cm4MNb60.js";import"./hooks-B7AKPgu3.js";import"./axisSelectors-B7jgX05e.js";import"./zIndexSlice-CZ608RYy.js";import"./CartesianChart-3kl8J4OM.js";import"./chartDataContext-K1HgDw51.js";import"./CategoricalChart-DmGE5R29.js";import"./Line-B1fwKAvO.js";import"./Layer-fYHElE4I.js";import"./ReactUtils-DztpHcKA.js";import"./Label-D44TMXj3.js";import"./Text-1BcInixy.js";import"./DOMUtils-DnJTSxHK.js";import"./ZIndexLayer-NdV45W3l.js";import"./ActivePoints-Dua7vnpk.js";import"./Dot-BNoOq719.js";import"./types-lQyAqjcM.js";import"./RegisterGraphicalItemId-CkZvvq8r.js";import"./ErrorBarContext-CRJ4zZZo.js";import"./GraphicalItemClipPath-BH-LuHt6.js";import"./SetGraphicalItem-BsBYfoCl.js";import"./useAnimationId-Czd9yhg2.js";import"./getRadiusAndStrokeWidthFromDot-CTkwUqhN.js";import"./ActiveShapeUtils-CayjX_j1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dvu--PZM.js";import"./Trapezoid-CWebkWYz.js";import"./Sector-oW786f9C.js";import"./Symbols-BpZDCS87.js";import"./Curve-xA1LMbbI.js";import"./XAxis-C4uw1-2Q.js";import"./CartesianAxis-Cgh_nqbT.js";import"./YAxis-Bknejqsk.js";import"./Legend-BxFuXWyV.js";import"./useElementOffset-4jS_X3SG.js";import"./iteratee-BH1cr4Fj.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};

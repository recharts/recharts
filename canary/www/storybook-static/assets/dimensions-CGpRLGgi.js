import{j as e}from"./jsx-runtime-DG2PKjR7.js";import{useMDXComponents as n}from"./index-BC8AGuF2.js";import{M as h,C as o}from"./blocks--B7I7gbw.js";import{C as d,W as s}from"./dimensions.stories-CiKY0CH3.js";import"./iframe-BVH8UecD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C-t36GsJ.js";import"./ChartSizeDimensions-C0bbugJp.js";import"./arrayEqualityCheck-vgKGXjJg.js";import"./resolveDefaultProps-Cdk0Kr5w.js";import"./PolarUtils-D3PpCgED.js";import"./ComposedChart-Czj6zW7d.js";import"./RechartsWrapper-BZaLp-vS.js";import"./hooks-EmSSg1xf.js";import"./axisSelectors-CdzAnCbl.js";import"./zIndexSlice-BoigZ-y7.js";import"./CartesianChart-nAdRozku.js";import"./chartDataContext-DfFz62HT.js";import"./CategoricalChart-361vez3Q.js";import"./Line-CbRNLOzP.js";import"./Layer-CdphaBoS.js";import"./ReactUtils-CPhzqwNY.js";import"./Label-DbioSpEE.js";import"./Text-B5hVuEjR.js";import"./DOMUtils-Awr9GIGy.js";import"./ZIndexLayer-Qipy46x2.js";import"./ActivePoints-ieJlvJa7.js";import"./Dot-DwrES-GQ.js";import"./types-iQF7hC2M.js";import"./RegisterGraphicalItemId-BvvWKN3n.js";import"./ErrorBarContext-B2FM21nb.js";import"./GraphicalItemClipPath-Ds_tmloi.js";import"./SetGraphicalItem-B2OXJLzy.js";import"./useAnimationId-B1orywOS.js";import"./getRadiusAndStrokeWidthFromDot-JL7PoPEV.js";import"./ActiveShapeUtils-BkZUQSXK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWlX6cPO.js";import"./Trapezoid-BHTAQ8Mn.js";import"./Sector-DWTAjqin.js";import"./Symbols-Bx3sDerM.js";import"./Curve-5Yzr7IBn.js";import"./XAxis-DOmXqRCS.js";import"./CartesianAxis-DndSeeNX.js";import"./YAxis-Bmsarh4g.js";import"./Legend-DVX0hwCU.js";import"./useElementOffset-DiypH9bb.js";import"./iteratee-DmvGlhfZ.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

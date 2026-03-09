import{j as e}from"./jsx-runtime-B-jYdhI6.js";import{useMDXComponents as n}from"./index-CYAXT5m5.js";import{M as o,C as h}from"./blocks-BD3wXhHJ.js";import{C as d,W as s}from"./dimensions.stories-D3cpwYZf.js";import"./iframe-BMiRdtzi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BxIeWHLt.js";import"./ChartSizeDimensions-CNT6A0OH.js";import"./arrayEqualityCheck-Da9FQhP8.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BbcxzGSI.js";import"./immer-CeUHRJUh.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-A8h7UTh-.js";import"./RechartsWrapper-D1Zuj5aj.js";import"./index-CFZ_txX2.js";import"./hooks-Dj-8y2kZ.js";import"./axisSelectors-Dhmk1Apf.js";import"./d3-scale-lZPJgZrs.js";import"./zIndexSlice-DXZuZUhc.js";import"./renderedTicksSlice-DuZcooa-.js";import"./CartesianChart-hRI6eS0t.js";import"./chartDataContext-FBHrtSoZ.js";import"./CategoricalChart-DDM_7pl3.js";import"./Line-BwxhCkq8.js";import"./Layer-D9Oz3zOW.js";import"./ReactUtils-f9rIQTZx.js";import"./Label-BNGz4hpX.js";import"./Text-KMtMbVYS.js";import"./DOMUtils-D9vxTovY.js";import"./ZIndexLayer-BSi_oIk9.js";import"./ActivePoints-BU8KSqCe.js";import"./Dot-BugqpfmD.js";import"./types-nLF0_SAW.js";import"./RegisterGraphicalItemId-_26M4VR4.js";import"./ErrorBarContext-CzWKH65H.js";import"./GraphicalItemClipPath-DVqZ2J0u.js";import"./SetGraphicalItem-DG59MNm5.js";import"./useAnimationId-5Oa7E8I_.js";import"./getRadiusAndStrokeWidthFromDot-B57zRP1H.js";import"./ActiveShapeUtils-ien1uv2Y.js";import"./isPlainObject-CocMjk2l.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7gjhdc4.js";import"./Trapezoid-YEyIDayp.js";import"./Sector-CiduAPVO.js";import"./Symbols-DfsWCoSA.js";import"./symbol-Dypj6TZZ.js";import"./step-BA38JlTy.js";import"./Curve-B8D8lFuj.js";import"./XAxis-zYIEy4Nj.js";import"./CartesianAxis-B9OgjJ9q.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-4AjIhGFV.js";import"./Legend-BJricVxL.js";import"./useElementOffset-DbucRiGe.js";import"./uniqBy-Cg_cRoCf.js";import"./iteratee-CxSAdzMH.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

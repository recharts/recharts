import{j as e}from"./jsx-runtime-Cpt5fEKu.js";import{useMDXComponents as n}from"./index-hQhR5Jxl.js";import{M as o,C as h}from"./blocks-CQfvmald.js";import{C as d,W as s}from"./dimensions.stories-C0QTj2WI.js";import"./iframe-m8q5t3md.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B_d56yGA.js";import"./ChartSizeDimensions-IBUPmonY.js";import"./arrayEqualityCheck-DrSDqkLD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CRYHZjsP.js";import"./immer-DMxbvvOq.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-mWV3_oXN.js";import"./RechartsWrapper-CZ3jmele.js";import"./index-BL9S6rdM.js";import"./hooks-nzhcMf4x.js";import"./axisSelectors-DSejHMOb.js";import"./d3-scale-CmP5dk1L.js";import"./zIndexSlice-BFsJzxfG.js";import"./renderedTicksSlice-2vEKdn9I.js";import"./CartesianChart-B3HJKIVC.js";import"./chartDataContext-CB7kvdLo.js";import"./CategoricalChart-CgU5MazA.js";import"./Line-D8kr-aJg.js";import"./Layer-C2TdqJIe.js";import"./ReactUtils-Dcz365jx.js";import"./Label-JUKbE3JW.js";import"./Text-CGYPmi9L.js";import"./DOMUtils-BVQX-RMY.js";import"./ZIndexLayer-BMbN4Jmp.js";import"./ActivePoints-D3DuYUxN.js";import"./Dot--mgd1LbI.js";import"./types-C2IIvjb3.js";import"./RegisterGraphicalItemId-QDXXrpkb.js";import"./ErrorBarContext-ExRYnIf4.js";import"./GraphicalItemClipPath-JhKOKnEz.js";import"./SetGraphicalItem-DTrTlaD3.js";import"./useAnimationId-Cp-1L-xj.js";import"./getRadiusAndStrokeWidthFromDot-xB2-LwJw.js";import"./ActiveShapeUtils-BuaI6NWG.js";import"./isPlainObject-glNQFXom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-HTdxKaWE.js";import"./Trapezoid-YBhqI0fM.js";import"./Sector-CqOCHMeq.js";import"./Symbols-Dl-fcwHF.js";import"./symbol-Cmq7mipq.js";import"./step-BQd-JXh1.js";import"./Curve-Clnct1hH.js";import"./XAxis-D9s1UdL9.js";import"./CartesianAxis-B_P6O2DK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-3rVJTeb7.js";import"./Legend-P8tl-8U2.js";import"./useElementOffset-qS0vSeWD.js";import"./uniqBy-CPILqBye.js";import"./iteratee-F2kSi97o.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

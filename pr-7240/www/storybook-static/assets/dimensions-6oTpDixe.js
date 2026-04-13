import{j as e}from"./jsx-runtime-DBVzgpaf.js";import{useMDXComponents as n}from"./index-_DVic-77.js";import{M as o,C as h}from"./blocks-Bpf2A9or.js";import{C as d,W as s}from"./dimensions.stories-BtSvMIV_.js";import"./iframe-BeDGORj6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-qx6-V41S.js";import"./ChartSizeDimensions-W3vYP0Xa.js";import"./arrayEqualityCheck-JsAXyDLr.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C99f34Mc.js";import"./immer-Cq48D3GD.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-4gGlBLIt.js";import"./RechartsWrapper-DzXrp2Yg.js";import"./index-Cjcxel70.js";import"./hooks-CZlzwV4c.js";import"./axisSelectors-BWLPVm14.js";import"./d3-scale-Dn9C_p1J.js";import"./zIndexSlice-f8r1nxA3.js";import"./renderedTicksSlice-sW53jx3E.js";import"./CartesianChart-B5AKLLNj.js";import"./chartDataContext-kI4vfNyg.js";import"./CategoricalChart-BaIwFCUZ.js";import"./Page-Cj8EiXz7.js";import"./Line-CuUIamf-.js";import"./Layer-Cb63g7eE.js";import"./ReactUtils-8jcv2sZp.js";import"./Label-DIDBGhSu.js";import"./Text-DVPNdnrr.js";import"./DOMUtils-BJyHcXDT.js";import"./ZIndexLayer-CzXr4GKG.js";import"./ActivePoints-BtnyqgRD.js";import"./Dot-C6wgbxew.js";import"./types-C_8vdBSO.js";import"./RegisterGraphicalItemId-Be6P2E9J.js";import"./ErrorBarContext-BP-aXdJD.js";import"./GraphicalItemClipPath-DuAL_izP.js";import"./SetGraphicalItem-CByUuzu8.js";import"./useAnimationId-Dpd_sVLz.js";import"./getRadiusAndStrokeWidthFromDot-C4aPZysO.js";import"./ActiveShapeUtils-CKh9-uWL.js";import"./isPlainObject-CPwWoDLp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmD5nffX.js";import"./Trapezoid-C6mcZG1p.js";import"./Sector-CvLn_4ix.js";import"./Symbols-BtXiAqa0.js";import"./symbol-Dz8LJwUL.js";import"./step-CdMW3WL_.js";import"./Curve-Cn7Yw6fj.js";import"./XAxis-BWIHbalc.js";import"./CartesianAxis-Cg9ZZyb5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DVelxUgb.js";import"./Legend-DOiE3cGX.js";import"./useElementOffset-C39f-q29.js";import"./uniqBy-Bxm9P5yL.js";import"./iteratee-BiMAN34M.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

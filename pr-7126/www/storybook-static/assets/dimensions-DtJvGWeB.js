import{j as e}from"./jsx-runtime-BhsRBv7B.js";import{useMDXComponents as n}from"./index-b0R-9gSR.js";import{M as o,C as h}from"./blocks-DhUIhXug.js";import{C as d,W as s}from"./dimensions.stories-B3izv11w.js";import"./iframe-D86QwX9l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhBhI1sn.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./arrayEqualityCheck-CgXO-ZuA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./immer-8-oQo3xP.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CSnYCF8C.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./index-Dlozd1Zf.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./d3-scale-Be_57Quy.js";import"./zIndexSlice-Cs40vUo3.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./Line-CYsao_-4.js";import"./Layer-7ZFhhqEA.js";import"./ReactUtils-BRuRWbDc.js";import"./Label-Db7DMkNg.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./ZIndexLayer-UcIV_jcl.js";import"./ActivePoints-oDQ7pGW6.js";import"./Dot-Bkmwyapo.js";import"./types-BKmbYWQ3.js";import"./RegisterGraphicalItemId-Cb3ALFIQ.js";import"./ErrorBarContext-CuFeAbue.js";import"./GraphicalItemClipPath-DOcGoQ4n.js";import"./SetGraphicalItem-rCG6xPW_.js";import"./useAnimationId-DeGRDsC6.js";import"./getRadiusAndStrokeWidthFromDot-BEX2oyUV.js";import"./ActiveShapeUtils-B0bsImWY.js";import"./isPlainObject-HWQUIItt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlbPkBXV.js";import"./Trapezoid-jhl-5jxc.js";import"./Sector-qJl1uh8Z.js";import"./Symbols-BEczeOkh.js";import"./symbol-C57rPMDp.js";import"./step-lGE8FQDz.js";import"./Curve-r3vqpxAw.js";import"./XAxis-BmsupeL1.js";import"./CartesianAxis-DxWgPgnd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dp7U47F6.js";import"./Legend-B_1fLrVV.js";import"./useElementOffset-D0xWsyXU.js";import"./uniqBy-CXA0falP.js";import"./iteratee-QPPlsimc.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

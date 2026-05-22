import{j as e}from"./jsx-runtime-DkrWirKb.js";import{useMDXComponents as n}from"./index-DLd17_bj.js";import{M as o,C as h}from"./blocks-Khx5VINQ.js";import{C as d,W as s}from"./dimensions.stories-BQAr-hpE.js";import"./iframe-wPjdlMkh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-88IFfxfH.js";import"./ChartSizeDimensions-CSliTc3n.js";import"./arrayEqualityCheck-C2qrry8R.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRV1yjEG.js";import"./immer-BpPfFNPI.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DRK5OR9O.js";import"./RechartsWrapper-B-jo2qpq.js";import"./index-CRU-lK14.js";import"./hooks-DMKFe6xQ.js";import"./axisSelectors-BeV9utXI.js";import"./d3-scale-NFHY5pWC.js";import"./zIndexSlice-CfQuOadn.js";import"./renderedTicksSlice-DSJJKDzx.js";import"./CartesianChart-TFHKXQrQ.js";import"./chartDataContext-Ds7D7t0h.js";import"./CategoricalChart-C7FeICx9.js";import"./Page-DPte-9pC.js";import"./Line-3LeznW14.js";import"./Curve-CTJQqo2b.js";import"./types-D-aEIpto.js";import"./step-BR5xtyiz.js";import"./path-DyVhHtw_.js";import"./Layer-Cueh5NkG.js";import"./ReactUtils-DkGkgP-m.js";import"./Label-BRKSm8Ce.js";import"./Text-D_Ir2n4d.js";import"./DOMUtils-CiWWI4hV.js";import"./ZIndexLayer-D9w89N_j.js";import"./ActivePoints-0zG1dEq0.js";import"./Dot-BxnY7nzN.js";import"./RegisterGraphicalItemId-CMP7i145.js";import"./ErrorBarContext-C8p1ky5C.js";import"./GraphicalItemClipPath-Iqn3z8Uo.js";import"./SetGraphicalItem-FTMP51O8.js";import"./useAnimationId-FpSV_Xeh.js";import"./getRadiusAndStrokeWidthFromDot-BcYs4mGB.js";import"./ActiveShapeUtils-Dm52jN-p.js";import"./XAxis-_OYHLA6K.js";import"./CartesianAxis-BzSAAt9Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CALSYCDu.js";import"./Legend-TABkCGtc.js";import"./Symbols-CxPJ2NK4.js";import"./symbol-0Nqa0CmC.js";import"./useElementOffset-BW7DH_NQ.js";import"./uniqBy-Csen4X-d.js";import"./iteratee-Bu02any-.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

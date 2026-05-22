import{j as e}from"./jsx-runtime-DVQ2n1so.js";import{useMDXComponents as n}from"./index-CPsi8zo8.js";import{M as o,C as h}from"./blocks-DEzRg7cS.js";import{C as d,W as s}from"./dimensions.stories-DbE02WbT.js";import"./iframe-B82q9u-Y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-dYimQAlj.js";import"./ChartSizeDimensions-BGSkMu5K.js";import"./arrayEqualityCheck-CKCQU2qV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-g5aDd7Yf.js";import"./immer-WiujJWUS.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CBqvY07d.js";import"./RechartsWrapper-CBADlju4.js";import"./index-DXyPKPXc.js";import"./hooks-Sri1sPLr.js";import"./axisSelectors-DXfv2Drb.js";import"./d3-scale-B8FZewzC.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-I2t58hxh.js";import"./renderedTicksSlice-CInncnPk.js";import"./CartesianChart-5ApupumH.js";import"./chartDataContext-D6HVVC2S.js";import"./CategoricalChart-DKDPW_6L.js";import"./Page-DPte-9pC.js";import"./Line-CWq30mlj.js";import"./Layer-C2GvyuKR.js";import"./Curve-BwRgum1p.js";import"./types-BjP-coDb.js";import"./step-BxVbCn_a.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-COwEU_uD.js";import"./Label-yJEcHIim.js";import"./Text-DlTF1_pF.js";import"./DOMUtils-CfA92o7z.js";import"./ZIndexLayer-DTDC0Rqe.js";import"./useAnimationId-DLlegLLP.js";import"./ActivePoints-BsAXJsSc.js";import"./Dot-Ca9kKcpV.js";import"./RegisterGraphicalItemId-kL3h8ct-.js";import"./ErrorBarContext-BL5FMVHx.js";import"./GraphicalItemClipPath-BpOAg0aH.js";import"./SetGraphicalItem-BoZe1188.js";import"./getRadiusAndStrokeWidthFromDot-Dgtb5g0j.js";import"./ActiveShapeUtils-D-OS5cJ_.js";import"./XAxis-BRaoe5W0.js";import"./CartesianAxis-U5xnp7fG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CWyiNt5V.js";import"./Legend-DSpSu37z.js";import"./Symbols-D0OvFEPa.js";import"./symbol-BgLdl-Fp.js";import"./useElementOffset-C7Quszb0.js";import"./uniqBy-DRfr_3Tm.js";import"./iteratee-DVb5hUcr.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

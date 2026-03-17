import{j as e}from"./jsx-runtime-D7lCp5WE.js";import{useMDXComponents as n}from"./index-BA6G-cV8.js";import{M as o,C as h}from"./blocks-DZXlMrSl.js";import{C as d,W as s}from"./dimensions.stories-BBjoSp5W.js";import"./iframe-c0lvfgLm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2Ds3Lof.js";import"./ChartSizeDimensions-biGDO6V4.js";import"./arrayEqualityCheck-DNZkspsy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DX2cxMOG.js";import"./immer-DMEI_VCu.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CPVO15gL.js";import"./RechartsWrapper-D7zqAgEz.js";import"./index-JTQ4PF_k.js";import"./hooks-ChUb4DZG.js";import"./axisSelectors-CPhAqa0q.js";import"./d3-scale-DyxWsOri.js";import"./zIndexSlice-B7Te91Jz.js";import"./renderedTicksSlice-CoATx-5v.js";import"./CartesianChart-B0tcceZf.js";import"./chartDataContext-D5ehU8Li.js";import"./CategoricalChart-CZL3Qa9D.js";import"./Line-DKYnlPFY.js";import"./Layer-7iJmeUkd.js";import"./ReactUtils-CueXlXtD.js";import"./Label-BLt0xOi5.js";import"./Text-Bx9IcEZb.js";import"./DOMUtils-lAJ9Yg9q.js";import"./ZIndexLayer-FNmvAVY8.js";import"./ActivePoints-CfmDyciD.js";import"./Dot-BLoL5jCu.js";import"./types-Dylc_TMc.js";import"./RegisterGraphicalItemId-B0SpB0cP.js";import"./ErrorBarContext-BIxtFArD.js";import"./GraphicalItemClipPath-BPFJLqSa.js";import"./SetGraphicalItem-DnhQPEpT.js";import"./useAnimationId-BHpMyUty.js";import"./getRadiusAndStrokeWidthFromDot-DcGd4q7a.js";import"./ActiveShapeUtils-DlPS2wY5.js";import"./isPlainObject-YzH8Qd1R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CcbUzCSE.js";import"./Trapezoid-CQsqSlZw.js";import"./Sector-Bob5xxX4.js";import"./Symbols-DtF8_27w.js";import"./symbol-BFhqOZgB.js";import"./step-BpAcvZss.js";import"./Curve-BXRCCM_V.js";import"./XAxis-BzKnXhRE.js";import"./CartesianAxis-BPHeWl3o.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CpBtSMnf.js";import"./Legend-C6y9z2xK.js";import"./useElementOffset-NhoGt6o4.js";import"./uniqBy-CZAEIT1t.js";import"./iteratee-C5EP3l3E.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

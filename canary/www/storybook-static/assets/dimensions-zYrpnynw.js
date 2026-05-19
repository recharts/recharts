import{j as e}from"./jsx-runtime-Dq6-d0FL.js";import{useMDXComponents as n}from"./index-84WhGOKw.js";import{M as o,C as h}from"./blocks-BNAkmDmE.js";import{C as d,W as s}from"./dimensions.stories-B58s9cFd.js";import"./iframe-Dm92CwFH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BuoG88Tj.js";import"./ChartSizeDimensions-f0wD3mfa.js";import"./arrayEqualityCheck-CILmZ2ng.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-URK34NLy.js";import"./immer-C2lunnZL.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-8hVtFBq4.js";import"./RechartsWrapper-CcwR86Ee.js";import"./index-BZhNoNV_.js";import"./hooks-BzHpEskF.js";import"./axisSelectors-BHYp1qXz.js";import"./d3-scale-irW0mVOo.js";import"./zIndexSlice-CZsiKlhz.js";import"./renderedTicksSlice-Cbab3bWB.js";import"./CartesianChart-mnMBiiJP.js";import"./chartDataContext-BodkpG5F.js";import"./CategoricalChart-VO60zbCA.js";import"./Page-DPte-9pC.js";import"./Line-CsaarKM8.js";import"./Layer-CpozC2HI.js";import"./ReactUtils-vWuNVuHD.js";import"./Label-C3d_UHx_.js";import"./Text-DeU0frga.js";import"./DOMUtils-CrpDH3yL.js";import"./ZIndexLayer-BRpAcZD_.js";import"./ActivePoints-CqTWkagC.js";import"./Dot-D9ItCAkE.js";import"./types-CksUkFiR.js";import"./RegisterGraphicalItemId-Bgnu5jtR.js";import"./ErrorBarContext-DWWXrCiO.js";import"./GraphicalItemClipPath-C8gejsmY.js";import"./SetGraphicalItem-C8FWpJGs.js";import"./useAnimationId-DN3FgicD.js";import"./getRadiusAndStrokeWidthFromDot-EjdN7dQP.js";import"./ActiveShapeUtils-CnNIQnOr.js";import"./isPlainObject-BU4pDjKs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYOH8rGO.js";import"./Trapezoid-CRsqSHYT.js";import"./Sector-BkPUWzJ_.js";import"./Symbols-D8RnZW1D.js";import"./symbol-aLdk9boG.js";import"./step-BOUe13iO.js";import"./Curve-gF21399W.js";import"./XAxis-BxDV4NmS.js";import"./CartesianAxis-DhxbGkzM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-LNhJTikZ.js";import"./Legend-DxpUmIGw.js";import"./useElementOffset-D-mxBOd4.js";import"./uniqBy-CnkbcL_D.js";import"./iteratee-DgYznPUB.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

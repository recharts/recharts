import{j as e}from"./jsx-runtime-Dic_fIb1.js";import{useMDXComponents as n}from"./index-BoYDJJiL.js";import{M as o,C as h}from"./blocks-D5IVk2oO.js";import{C as d,W as s}from"./dimensions.stories-B_Das5xm.js";import"./iframe-aCccIK8W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B0bVpeoD.js";import"./ChartSizeDimensions-6pSaZa--.js";import"./arrayEqualityCheck-ClrrSpKq.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiMbCPR1.js";import"./immer-CMSDbRto.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BI19kJGr.js";import"./RechartsWrapper-KXQQ6Aed.js";import"./index-7BGALgNU.js";import"./hooks-BQl6gm9P.js";import"./axisSelectors-BqKDnBGl.js";import"./d3-scale-CSKaLMYw.js";import"./zIndexSlice-dI_hsE6E.js";import"./renderedTicksSlice-C5CpkahC.js";import"./CartesianChart-Dg_vwzFX.js";import"./chartDataContext-DcZ4BnGt.js";import"./CategoricalChart-43yq3nHJ.js";import"./Line-C_rjhjlW.js";import"./Layer-CmBSmthE.js";import"./ReactUtils-DHbtMuek.js";import"./Label-BjurlKVT.js";import"./Text-CNK9ky3H.js";import"./DOMUtils-6k1qM2nD.js";import"./ZIndexLayer-B0CgEJFf.js";import"./ActivePoints-CPXBnAoH.js";import"./Dot-DtYrWfLR.js";import"./types-BigTFNah.js";import"./RegisterGraphicalItemId-taqDOdbV.js";import"./ErrorBarContext-BYQ7VTEV.js";import"./GraphicalItemClipPath-DFzOqGMg.js";import"./SetGraphicalItem-C9DhQ9yz.js";import"./useAnimationId-DA5IV2DG.js";import"./getRadiusAndStrokeWidthFromDot-BvcMpZcb.js";import"./ActiveShapeUtils-DCYjk_1o.js";import"./isPlainObject-DUQm3b0H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bexr03gH.js";import"./Trapezoid-XFMgvjFP.js";import"./Sector-v0Uu-y4P.js";import"./Symbols-BntmdNmA.js";import"./symbol-CMsEkqSO.js";import"./step-DZfgQXrh.js";import"./Curve-BLf6fQkp.js";import"./XAxis-DiB5K0gp.js";import"./CartesianAxis-DWcQuKap.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DESrMeXh.js";import"./Legend-m0sjU_gO.js";import"./useElementOffset-BcVyS5Gh.js";import"./uniqBy-BmKwTMCS.js";import"./iteratee-BCXX7LqW.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

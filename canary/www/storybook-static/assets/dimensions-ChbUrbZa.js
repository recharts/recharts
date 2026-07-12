import{u as n,j as e}from"./index-EK_6emES.js";import{M as o,C as h}from"./blocks-B2csssqQ.js";import{C as d,W as s}from"./dimensions.stories-gMXjo4W4.js";import"./iframe-U4mOrMwe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUYa25JH.js";import"./index-BegtHHbP.js";import"./index-CnEU82E2.js";import"./ChartSizeDimensions-0goKVQPl.js";import"./zIndexSlice-BlSgM3ea.js";import"./throttle-C66Yjghp.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DeLH2ecz.js";import"./isWellBehavedNumber-K_DMN0Z2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BfGdMqnm.js";import"./RechartsWrapper-Ccy1_TNc.js";import"./index-CECNT87F.js";import"./renderedTicksSlice-DIBgsBMZ.js";import"./axisSelectors-D_j8BHYk.js";import"./d3-scale-DcD2sPeq.js";import"./CartesianChart-BwiXZARa.js";import"./chartDataContext-ClSkA-dc.js";import"./CategoricalChart-wt8G0fhK.js";import"./Page-Cj8EiXz7.js";import"./Line-3uFaqECT.js";import"./Layer-Dh2FttVt.js";import"./Curve-Dsu_AJtV.js";import"./types-B0fbEwRP.js";import"./step-Dg4X7SdR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Moj_u834.js";import"./Label-CcnC99yA.js";import"./Text-5DtlWUUA.js";import"./DOMUtils-CsYBkNDR.js";import"./ZIndexLayer-yVDcLD3J.js";import"./useAnimationId-R6vuYPvP.js";import"./ActivePoints-BNwDYYZl.js";import"./Dot-BvSFkLq2.js";import"./RegisterGraphicalItemId-BryVNAH7.js";import"./ErrorBarContext-_tOLdnG2.js";import"./GraphicalItemClipPath-IA0cC_pI.js";import"./SetGraphicalItem-BzboYsPC.js";import"./getRadiusAndStrokeWidthFromDot-BPAj830K.js";import"./ActiveShapeUtils--yBfM0nT.js";import"./XAxis-DG6xcemZ.js";import"./CartesianAxis-B1Bb8VCA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DLdDDS3Z.js";import"./Legend-DPUZIXCc.js";import"./Symbols-CKuT-4HC.js";import"./symbol-bz0Y9ldF.js";import"./useElementOffset-CN4fPkTB.js";import"./uniqBy-_0mEzY_K.js";import"./iteratee-OYHaUVmV.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-BKPU2itx.js";import{M as o,C as h}from"./blocks-9Wo657O2.js";import{C as d,W as s}from"./dimensions.stories-QqXc8uFp.js";import"./iframe-BFQyqMbU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lcxumIdx.js";import"./index-yqk7rkqd.js";import"./index-Gba51aKu.js";import"./ChartSizeDimensions-CMVauLD6.js";import"./zIndexSlice-jJ_CaBDo.js";import"./immer--b20-lFI.js";import"./get-p4pcudXd.js";import"./resolveDefaultProps-B_ssPDKF.js";import"./isWellBehavedNumber-CXuZhh3h.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Pdj8BLwD.js";import"./RechartsWrapper-BounuTKv.js";import"./index-CDKHoQ9z.js";import"./renderedTicksSlice-HnYJqdGr.js";import"./axisSelectors-CRFbB7ND.js";import"./d3-scale--vDRC-Zz.js";import"./CartesianChart-qgf-TM4c.js";import"./chartDataContext-BM8qcz36.js";import"./CategoricalChart-FqadQC9J.js";import"./Page-Cj8EiXz7.js";import"./Line-Chmj4NtI.js";import"./Layer-BpUtlx2X.js";import"./Curve-BGI4IKSF.js";import"./types-cy48Xvgh.js";import"./step-D-tHTqvJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BA8IgjUl.js";import"./Label-BBfCiCQ6.js";import"./Text-BMugx81A.js";import"./DOMUtils-CzHwSZC9.js";import"./ZIndexLayer-DPawcbSR.js";import"./useAnimationId-D_DRQ5ok.js";import"./ActivePoints-CftO_jkK.js";import"./Dot-BN0Lszie.js";import"./RegisterGraphicalItemId-BEWz97Wy.js";import"./ErrorBarContext-CGoKUjs6.js";import"./GraphicalItemClipPath-B53LZcY2.js";import"./SetGraphicalItem-D0WJt6mF.js";import"./getRadiusAndStrokeWidthFromDot-C2SI6lR2.js";import"./ActiveShapeUtils-BDWRsG1S.js";import"./XAxis-Db3L_JCQ.js";import"./CartesianAxis-JBeJCkI-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Cz8KrmGC.js";import"./Legend-BXiztOAE.js";import"./Symbols-B2TF9-Ed.js";import"./symbol-DiXwW3Zb.js";import"./useElementOffset-iy_d7mMM.js";import"./uniqBy-w3S1ilQh.js";import"./iteratee-cMb-fu6v.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

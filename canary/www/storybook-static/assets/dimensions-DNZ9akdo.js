import{u as n,j as e}from"./index-Bg5d_ptM.js";import{M as o,C as h}from"./blocks-Do4dHjbk.js";import{C as d,W as s}from"./dimensions.stories-DnAzrFHf.js";import"./iframe-D-sDuIqM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./index-DlgBIkPT.js";import"./ChartSizeDimensions-B7b56X4T.js";import"./zIndexSlice-DkRDAG1K.js";import"./throttle-BwwGSoU-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BqFvX779.js";import"./RechartsWrapper-BR0dPwJa.js";import"./axisSelectors-CcFzWzBk.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./Page-Cj8EiXz7.js";import"./Line-Dg79dF8E.js";import"./Layer-C3zxw81n.js";import"./Curve-CiGjQv1I.js";import"./types-D7y8jC37.js";import"./step-CSXkfkZq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CAyQvTlC.js";import"./Label-mzqnfF5y.js";import"./Text-cGP75sAD.js";import"./DOMUtils-BlK1UfYz.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./useAnimationId-BdWTgj5e.js";import"./ActivePoints-Ctj_jtde.js";import"./Dot-nUj7Emhk.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./ErrorBarContext-COUU5Hme.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./getRadiusAndStrokeWidthFromDot-CyWtRfsI.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./useGraphicalItemIdentity-CglCalgl.js";import"./XAxis-C9qauAI0.js";import"./CartesianAxis-Bbla4SrJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-C3R1kIjz.js";import"./Legend-CVfH-3p0.js";import"./Symbols-BZPRKGG7.js";import"./symbol-v3MbjgbN.js";import"./useElementOffset-CnzQeRxh.js";import"./uniqBy-B7ZujxYX.js";import"./iteratee-pAczANug.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

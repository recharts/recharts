import{u as n,j as e}from"./index-2LwhSWFR.js";import{M as o,C as h}from"./blocks-CksO2C_0.js";import{C as d,W as s}from"./dimensions.stories-BZhajTms.js";import"./iframe-DmaTyynO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-OHCUWRAn.js";import"./index-V9EvyoG7.js";import"./index-COAu8Zax.js";import"./ChartSizeDimensions-CMOzekeA.js";import"./zIndexSlice-C61SZGFC.js";import"./throttle-DMA9KLNR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CtyyIUUO.js";import"./isWellBehavedNumber-BK90QDph.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DrMn_Pg_.js";import"./RechartsWrapper-BGC7v2QA.js";import"./axisSelectors-BM_a9F6K.js";import"./d3-scale-DI5fHYPy.js";import"./index-HETsTNte.js";import"./renderedTicksSlice-DqtLTQXs.js";import"./index-C4wr6Lq-.js";import"./CartesianChart-BKxlRmtn.js";import"./chartDataContext-DAmq05uD.js";import"./CategoricalChart-BUSfmukV.js";import"./Page-Cj8EiXz7.js";import"./Line-DxjJsn0p.js";import"./Layer-CKq6pjpc.js";import"./Curve-Bgge_Gh-.js";import"./types-DmC6Y3U4.js";import"./step-D7AfTI4H.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAF8K0tv.js";import"./Label-CMdX73k3.js";import"./Text-2AUGODc6.js";import"./DOMUtils-BpsSUmre.js";import"./useId-3sGAzHtm.js";import"./useBackwardsCompatibleTheme-DqjXKSq9.js";import"./ZIndexLayer-Cc-SqaEZ.js";import"./useAnimationId-DxNsV_0m.js";import"./ActivePoints-CNIiMQe1.js";import"./Dot-CR2DCP22.js";import"./RegisterGraphicalItemId-CDWIwrm3.js";import"./ErrorBarContext-uI5M5418.js";import"./GraphicalItemClipPath-DsQ7p0LM.js";import"./SetGraphicalItem-D6LEIG6h.js";import"./getRadiusAndStrokeWidthFromDot-DfMtRmCC.js";import"./ActiveShapeUtils-BIrsW6YR.js";import"./useGraphicalItemIdentity-Cz-Bal4G.js";import"./XAxis-Nv8Uh7AY.js";import"./CartesianAxis-CUMWkMKo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DzMB2LoA.js";import"./Legend-BzvPZGhO.js";import"./Symbols-Ceoa5jAY.js";import"./symbol-DJiPU_Yr.js";import"./useElementOffset-DgjamZIE.js";import"./uniqBy-CTKPSl-J.js";import"./iteratee-CWLa6CO6.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

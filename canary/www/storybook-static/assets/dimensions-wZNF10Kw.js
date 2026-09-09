import{u as n,j as e}from"./index-B83zJ0vV.js";import{M as o,C as h}from"./blocks-HGZ3hsGb.js";import{C as d,W as s}from"./dimensions.stories-1MuB_3oF.js";import"./iframe-C8yGgO2d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./index-C4w1OcUY.js";import"./ChartSizeDimensions-DFnGUVvz.js";import"./zIndexSlice-CuRdZ-8K.js";import"./throttle-Dr0khojT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D2wyoHi-.js";import"./RechartsWrapper-DxEsBzKb.js";import"./axisSelectors-w7bw2H0b.js";import"./d3-scale-Cb_6Er0t.js";import"./index-_ZrsSmBD.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./index-_435W0Be.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./Page-Cj8EiXz7.js";import"./Line-CY3J4eK2.js";import"./Layer-tDZThP1f.js";import"./Curve-B2EBLnIf.js";import"./types-DDTipNBU.js";import"./step-B4o5Q5Gu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmW46OuC.js";import"./Label-BtCjiiK8.js";import"./Text-N9mhAN-H.js";import"./DOMUtils-BOgsOCmi.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./useAnimationId-Bie7xBo-.js";import"./ActivePoints-C28DYC0S.js";import"./Dot-Ckq5Sos6.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./ErrorBarContext-DNGGPxUD.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getRadiusAndStrokeWidthFromDot-CC1av9L5.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./useGraphicalItemIdentity-B0pPIliE.js";import"./XAxis-DkqGLCT1.js";import"./CartesianAxis-BHyGAXdi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CkFD-fPK.js";import"./Legend-H21iyFgB.js";import"./Symbols-D1NUi6Uu.js";import"./symbol-C1h6pqC-.js";import"./useElementOffset-CgrUACTV.js";import"./uniqBy-DkfDDjH9.js";import"./iteratee-Bma5tZ2w.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

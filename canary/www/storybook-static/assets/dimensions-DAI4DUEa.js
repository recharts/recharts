import{u as n,j as e}from"./index-CxN9LVxV.js";import{M as o,C as h}from"./blocks-DjrKDz-p.js";import{C as d,W as s}from"./dimensions.stories-qA8xLyrs.js";import"./iframe-CEcITxQg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D2_zyIdl.js";import"./index-Bhk23PFU.js";import"./index-DeVAKBla.js";import"./ChartSizeDimensions-CCUOo0Wo.js";import"./zIndexSlice-DG2GpHlE.js";import"./throttle-B3Xibe3Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CkmfyhqW.js";import"./isWellBehavedNumber-DjN2b99T.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-p5v9VmVF.js";import"./RechartsWrapper-BTJ2LZ14.js";import"./axisSelectors-BTQvXZat.js";import"./d3-scale-CwC0nBHM.js";import"./index-D0x1dbK7.js";import"./renderedTicksSlice-Dgfw4xeW.js";import"./index-DeuCtru2.js";import"./CartesianChart-Bf9v-Tj6.js";import"./chartDataContext-BzZyvQEB.js";import"./CategoricalChart-B6S6Zh35.js";import"./Page-Cj8EiXz7.js";import"./Line-BBaVBl_d.js";import"./Layer-DxHA8fzs.js";import"./Curve-k0k5dTsU.js";import"./types-CL5KqLm4.js";import"./step-BOs9b6Ri.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ys-2ZU7Q.js";import"./Label-CAyVtv0N.js";import"./Text-BaR1ZvCW.js";import"./DOMUtils-CRevI1wr.js";import"./useId-BfWHYsCr.js";import"./useBackwardsCompatibleTheme-B-LDULxa.js";import"./ZIndexLayer-Crp9kN4i.js";import"./useAnimationId-Cz0tj6YQ.js";import"./ActivePoints-WAxl0Bv-.js";import"./Dot-BILX6Wzk.js";import"./RegisterGraphicalItemId-CodKeWvn.js";import"./ErrorBarContext-B5kiS63M.js";import"./GraphicalItemClipPath-BwGvKzSp.js";import"./SetGraphicalItem-ZqPAg0_A.js";import"./getRadiusAndStrokeWidthFromDot-DIOfJC8V.js";import"./ActiveShapeUtils-Dx9yEBbu.js";import"./useGraphicalItemIdentity-DDNep2_9.js";import"./XAxis-DpYz8_Dh.js";import"./CartesianAxis-CRhVdfos.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-WtIBmSn8.js";import"./Legend-pC0N9pnS.js";import"./Symbols-wZDO_6SA.js";import"./symbol-CZuDR-tR.js";import"./useElementOffset-BT0tqnsY.js";import"./uniqBy-DqiiQuQc.js";import"./iteratee-D_w4T-w5.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

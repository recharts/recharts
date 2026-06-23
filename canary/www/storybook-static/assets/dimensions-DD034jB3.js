import{u as n,j as e}from"./index-BY-7MwtC.js";import{M as o,C as h}from"./blocks-C465n6cS.js";import{C as d,W as s}from"./dimensions.stories-RQzrFW_Z.js";import"./iframe-BNzhvzzJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7steQeu.js";import"./index-B9gOfTvg.js";import"./index-7GSDLfD9.js";import"./ChartSizeDimensions-pYHAdRsa.js";import"./zIndexSlice-7B2pJ9R1.js";import"./immer-_Il6apPt.js";import"./get-Bo6NWZXP.js";import"./resolveDefaultProps-D9iASVgR.js";import"./isWellBehavedNumber-Bpef6lI6.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C_iTu113.js";import"./RechartsWrapper-DHcZLkJ-.js";import"./index-DJTE4prX.js";import"./renderedTicksSlice-EPo0eGyT.js";import"./axisSelectors-ceyKOVCq.js";import"./d3-scale-DfXMlVb2.js";import"./CartesianChart-CaZD9ouo.js";import"./chartDataContext-BcocN-0J.js";import"./CategoricalChart-C_ukC1b2.js";import"./Page-Cj8EiXz7.js";import"./Line-C2yueNGc.js";import"./Layer-xsjkSAFG.js";import"./Curve-CqMKytty.js";import"./types-DwFKy1TI.js";import"./step-DPliw2Y2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DiPaozpi.js";import"./Label-Cch4VET0.js";import"./Text-B7J48mXb.js";import"./DOMUtils-C0rqppVh.js";import"./ZIndexLayer-DKk9ZSzt.js";import"./useAnimationId-DMdK3Lv6.js";import"./ActivePoints-DK7nKZD0.js";import"./Dot-CBy41HLo.js";import"./RegisterGraphicalItemId-Xkz1LIrr.js";import"./ErrorBarContext-_lt3AQQA.js";import"./GraphicalItemClipPath-BB5MRsg5.js";import"./SetGraphicalItem-Di0ECEKf.js";import"./getRadiusAndStrokeWidthFromDot-TKmNfgfy.js";import"./ActiveShapeUtils-CfEExsMK.js";import"./XAxis-BHRl-pdi.js";import"./CartesianAxis-LIK20Nid.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Cl4-_k6Y.js";import"./Legend-DUtYBeWJ.js";import"./Symbols-Ccx0l1NE.js";import"./symbol-CkvpUqph.js";import"./useElementOffset-BlJIB82n.js";import"./uniqBy-Bjs8gI_C.js";import"./iteratee-BzF2Jcrq.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

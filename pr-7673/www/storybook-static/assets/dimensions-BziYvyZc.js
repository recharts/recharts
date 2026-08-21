import{u as n,j as e}from"./index-DzKABXmw.js";import{M as o,C as h}from"./blocks-PseVkNdq.js";import{C as d,W as s}from"./dimensions.stories-cNHf1x4g.js";import"./iframe-CH2RirRG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CDgfCI1k.js";import"./index-BGjYA4Me.js";import"./index-DCEj_OWD.js";import"./ChartSizeDimensions-DZkugXt7.js";import"./zIndexSlice-EPNgUqra.js";import"./throttle-wiaHzbqm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DE_sbK1H.js";import"./isWellBehavedNumber-DS-LXYSK.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B-gNv-fY.js";import"./RechartsWrapper-BjB8dZxg.js";import"./index-CO5DxbW1.js";import"./axisSelectors-CkKizBw1.js";import"./d3-scale-_MlV87vT.js";import"./renderedTicksSlice-p29IB_-G.js";import"./CartesianChart-RyXtRN5Z.js";import"./chartDataContext-Bjvolui9.js";import"./CategoricalChart-DISzDu-A.js";import"./Page-Cj8EiXz7.js";import"./Line-C8M3PSSl.js";import"./Layer-DUd8J6bA.js";import"./Curve-BsDu1IjD.js";import"./types-BWjPFUtA.js";import"./step-C8By5YWW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CsoBD4nr.js";import"./Label-JTJpVxOG.js";import"./Text-D0Ni_nG3.js";import"./DOMUtils-CjXikq8H.js";import"./useId-rSQwkCR7.js";import"./useBackwardsCompatibleTheme-B43Y9MW-.js";import"./ZIndexLayer-DaLmvsT2.js";import"./useAnimationId-vcXUsSrn.js";import"./ActivePoints-Dg4SvqYZ.js";import"./Dot-DUdZMRdV.js";import"./RegisterGraphicalItemId-CdD2mOwf.js";import"./ErrorBarContext-CEgFqn-G.js";import"./GraphicalItemClipPath-D4fexUqU.js";import"./SetGraphicalItem-CVh4pOat.js";import"./getRadiusAndStrokeWidthFromDot-BtjAJPPD.js";import"./ActiveShapeUtils-CWoQL3Mu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CqEbzlS_.js";import"./CartesianAxis-Bp_3tslY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-8oK4TXT2.js";import"./Legend-cl2YUlXM.js";import"./Symbols-DxsO4tVc.js";import"./symbol-9_1mDMDc.js";import"./useElementOffset-BZbIepG_.js";import"./uniqBy-B9R5xbVR.js";import"./iteratee-DTZfeRvH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

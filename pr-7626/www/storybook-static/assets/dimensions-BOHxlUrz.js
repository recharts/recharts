import{u as n,j as e}from"./index-AcKTwc2A.js";import{M as o,C as h}from"./blocks-IBPQxYuB.js";import{C as d,W as s}from"./dimensions.stories-C2qt8EpX.js";import"./iframe-rYRmlY_w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./index-mkET9CIq.js";import"./ChartSizeDimensions-aCnJdrYb.js";import"./zIndexSlice-CW9g3Df4.js";import"./throttle-DMLB0n1a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpsYi27l.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CJWWrFGv.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./axisSelectors-CawrvlcN.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./Page-Cj8EiXz7.js";import"./Line-OyqWaweM.js";import"./Layer-Dpa7ZKP5.js";import"./Curve-Dde8oLlo.js";import"./types-B2Hj88Lf.js";import"./step-BmztjEzR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CIev447X.js";import"./Label-C_0fnefy.js";import"./Text-yyeh64ow.js";import"./DOMUtils-vuT3ag2A.js";import"./ZIndexLayer-DjuCBj9U.js";import"./useAnimationId-B08Ps5mJ.js";import"./ActivePoints-BM73sJ66.js";import"./Dot-BJyh6EJc.js";import"./RegisterGraphicalItemId-CgoQC8_y.js";import"./ErrorBarContext-D9hFLWDz.js";import"./graphicalItemIdentity-CcyqkVrD.js";import"./SetGraphicalItem-BR2pwaBe.js";import"./getRadiusAndStrokeWidthFromDot-rFO_VTeN.js";import"./ActiveShapeUtils-CwtXXETb.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./XAxis-B2S1kxsc.js";import"./CartesianAxis-BPXoMhkW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BWeWjLFg.js";import"./Legend-DTUQ316l.js";import"./Symbols-hfYUrlaK.js";import"./symbol-Bbig07af.js";import"./useElementOffset-BlBkdftn.js";import"./uniqBy-1Q7zCRmp.js";import"./iteratee-C2W6XbU2.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};

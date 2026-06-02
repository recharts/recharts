import{u as n,j as e}from"./index-C5AjLUev.js";import{e as o,C as h}from"./blocks-CAqolZ9Z.js";import{C as d,W as s}from"./dimensions.stories-CD2rOZkq.js";import"./iframe-CbFBC3pt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ZsssZYUM.js";import"./index-C2rCfHQ6.js";import"./index-TGdP4Icg.js";import"./ChartSizeDimensions-Cboq-NiL.js";import"./zIndexSlice-B8XantvI.js";import"./immer-BwRByMMH.js";import"./get-CeJ-O4Ro.js";import"./resolveDefaultProps-DZFSM3t8.js";import"./isWellBehavedNumber-D0PjXqnv.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bc5HbX-g.js";import"./RechartsWrapper-C8YdywQb.js";import"./index-C4IztgfQ.js";import"./renderedTicksSlice-DaB_pXBU.js";import"./axisSelectors-DV4HNdRQ.js";import"./d3-scale-C98YhsaH.js";import"./CartesianChart-ByXMh7XU.js";import"./chartDataContext-DASovuhK.js";import"./CategoricalChart-BMWFvZBg.js";import"./Page-DPte-9pC.js";import"./Line-D5xEp1_i.js";import"./Curve-BlF3DWpa.js";import"./types-CX4nwvsZ.js";import"./step-NntPL7PC.js";import"./path-DyVhHtw_.js";import"./Layer-DTzSPWpf.js";import"./ReactUtils-PDSB0db_.js";import"./Label-8xdcvYL4.js";import"./Text-BLKgh8ue.js";import"./DOMUtils-rSL8yp4p.js";import"./ZIndexLayer-BgzH297Q.js";import"./ActivePoints-losSAyHn.js";import"./Dot-rYx1Cydy.js";import"./RegisterGraphicalItemId-BWff6MJa.js";import"./ErrorBarContext-eKi9YHyC.js";import"./GraphicalItemClipPath-3Dbzdjfh.js";import"./SetGraphicalItem-D4AnrrJM.js";import"./useAnimationId-B6jMJ5_9.js";import"./getRadiusAndStrokeWidthFromDot-Dg3y-0Vr.js";import"./ActiveShapeUtils-CC3LhhHX.js";import"./XAxis-CuiMGrX2.js";import"./CartesianAxis-CA9u32-P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DVG7yXmp.js";import"./Legend-B3P9K48B.js";import"./Symbols-xbBzb2HM.js";import"./symbol-CDDmFjF_.js";import"./useElementOffset-WNt73Ltm.js";import"./uniqBy-DX3rhGUr.js";import"./iteratee-C94OH8qj.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-Bf1v-N-U.js";import{M as o,C as h}from"./blocks-BLj92yIK.js";import{C as d,W as s}from"./dimensions.stories-DMc2ymaA.js";import"./iframe-CqMmO9Xr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DM7XJZkc.js";import"./index-C7a4ZWQb.js";import"./index-DUkcUndf.js";import"./ChartSizeDimensions-DEcsWUAT.js";import"./zIndexSlice-DFZjSdbQ.js";import"./throttle-QEuO__ZS.js";import"./get-Bd1LrVMt.js";import"./resolveDefaultProps-B4mfWg2L.js";import"./isWellBehavedNumber-BQfelr5r.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-uPkxZ6ZI.js";import"./RechartsWrapper-CnEYhKO1.js";import"./index-4Y0h8bRC.js";import"./renderedTicksSlice-CRwA1chB.js";import"./axisSelectors-DNmvLHVP.js";import"./d3-scale-QPfz2uTg.js";import"./CartesianChart-9yjUQzO4.js";import"./chartDataContext-C_w1UWdz.js";import"./CategoricalChart-D2FUAiwR.js";import"./Page-Cj8EiXz7.js";import"./Line-CB7u-l8s.js";import"./Layer-B_iZYaDE.js";import"./Curve-DqnHYjX3.js";import"./types-DVuTAt9Y.js";import"./step-CnWsiLlx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVpfsiGm.js";import"./Label-I1gAWal3.js";import"./Text-CEmf9w7F.js";import"./DOMUtils-Ds2cGO5I.js";import"./ZIndexLayer-pq6FNmg5.js";import"./useAnimationId-CUS7kjlN.js";import"./ActivePoints-Cv3N35qL.js";import"./Dot-DuJvVQ71.js";import"./RegisterGraphicalItemId-CKAuGKYu.js";import"./ErrorBarContext-BhL3whwn.js";import"./GraphicalItemClipPath-BKxNv1YA.js";import"./SetGraphicalItem-DZlHA3su.js";import"./getRadiusAndStrokeWidthFromDot-Ctxaag6G.js";import"./ActiveShapeUtils-B4C1Nqw7.js";import"./XAxis-D2oZKEvW.js";import"./CartesianAxis-CazwgKuv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-saOkQHhA.js";import"./Legend-4VUwXk4m.js";import"./Symbols-DGe5NEHH.js";import"./symbol-BTAzmh16.js";import"./useElementOffset-DPAYmMQw.js";import"./uniqBy-D3CQlvr-.js";import"./iteratee-iX9KB4Pz.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

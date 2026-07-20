import{u as n,j as e}from"./index-Ue74O7Ax.js";import{M as o,C as h}from"./blocks-DdTh9h2A.js";import{C as d,W as s}from"./dimensions.stories-B4nFhUt8.js";import"./iframe-txLfFnZC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./index-CTiUFbNZ.js";import"./ChartSizeDimensions-CgVYN-_y.js";import"./zIndexSlice-BxlfArAG.js";import"./throttle-q2TDx7Oc.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BBYfN4li.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C3txqyeK.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./axisSelectors-ClpNZRSK.js";import"./d3-scale-C2Ev96_0.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./Page-Cj8EiXz7.js";import"./Line-D0hoDC_i.js";import"./Layer-DgCStFRG.js";import"./Curve-C5z8NQ6L.js";import"./types-DBwOBb8v.js";import"./step-Ca4h6n57.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXTzwQHr.js";import"./Label-Bg0xf_F2.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./ZIndexLayer-CgOQ9duv.js";import"./useAnimationId-BBZuCs7J.js";import"./ActivePoints-CFI3c4jj.js";import"./Dot-BIm_l5LV.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./ErrorBarContext-g-_09_Lv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getRadiusAndStrokeWidthFromDot-B1a7F3Ip.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./XAxis-CUKDl1yE.js";import"./CartesianAxis-Bpg83Llu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-Bqp7D6OE.js";import"./Legend-BQxnnMgC.js";import"./Symbols-hsOVb6JR.js";import"./symbol-DBs6dCEX.js";import"./useElementOffset--duMbzsX.js";import"./uniqBy-mrq-VNPF.js";import"./iteratee-BctTBoA4.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

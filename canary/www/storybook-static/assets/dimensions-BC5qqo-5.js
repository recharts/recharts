import{u as n,j as e}from"./index-puKclxDt.js";import{M as o,C as h}from"./blocks-9f0k3NfF.js";import{C as d,W as s}from"./dimensions.stories-DfSEukAR.js";import"./iframe-DgJplLvS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CuR81imj.js";import"./index-DVtuWZEP.js";import"./index-DBV_c5tC.js";import"./ChartSizeDimensions-BfTLC9KJ.js";import"./zIndexSlice-BEw7ZoBF.js";import"./throttle-BFtjLKgc.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CgspoxK6.js";import"./isWellBehavedNumber-CYMKDc-o.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C92-LZLE.js";import"./RechartsWrapper-DkMI-tV9.js";import"./index-Bwl4xJcj.js";import"./renderedTicksSlice-RcICWtpY.js";import"./axisSelectors-YqbMVrI6.js";import"./d3-scale-T7rND5KE.js";import"./CartesianChart-CDSt_igg.js";import"./chartDataContext-B8YdYa_T.js";import"./CategoricalChart-B_F4Qeg4.js";import"./Page-Cj8EiXz7.js";import"./Line-DVl-UA0H.js";import"./Layer-CDKK6jHZ.js";import"./Curve-BjTIUQH-.js";import"./types-DgMxxOTT.js";import"./step-CkXO2b_C.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hO6Ptiqq.js";import"./Label-DUk5cie5.js";import"./Text-DSQZtkf1.js";import"./DOMUtils-C8GJnqc6.js";import"./ZIndexLayer-DezlpkmC.js";import"./useAnimationId-SGeRDQQf.js";import"./ActivePoints-Dudi51yy.js";import"./Dot-CJqaNK4q.js";import"./RegisterGraphicalItemId-B36x_Amu.js";import"./ErrorBarContext-PVL9kjDM.js";import"./GraphicalItemClipPath-Dn9TF0yr.js";import"./SetGraphicalItem-9qFMsJKM.js";import"./getRadiusAndStrokeWidthFromDot-DkNcCvt4.js";import"./ActiveShapeUtils-Cjw-C0nA.js";import"./XAxis-Cv0cLySm.js";import"./CartesianAxis-iv3hpdCC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-Dq42uhEw.js";import"./Legend-BILwxJ3K.js";import"./Symbols-5r-kjQvx.js";import"./symbol-wGUlUL8e.js";import"./useElementOffset-BA__8TOj.js";import"./uniqBy-BsO6J-fr.js";import"./iteratee-m2OFbEqY.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

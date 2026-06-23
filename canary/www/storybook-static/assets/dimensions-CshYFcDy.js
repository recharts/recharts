import{u as n,j as e}from"./index-CGUUILpC.js";import{M as o,C as h}from"./blocks-CFd7INM2.js";import{C as d,W as s}from"./dimensions.stories-Cx2KhzXi.js";import"./iframe-CGx2OEYg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C4Z_dumW.js";import"./index-BL6WHaeN.js";import"./index-Cey4EIAC.js";import"./ChartSizeDimensions-BIIDQaFi.js";import"./zIndexSlice-pdvjw9VY.js";import"./immer-BdXE1DYA.js";import"./get-CzV2OpXY.js";import"./resolveDefaultProps-D3B6MFw_.js";import"./isWellBehavedNumber-CKQRWs7o.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Fb2MFzqr.js";import"./RechartsWrapper-CnFoLhZv.js";import"./index-CIdFwa8F.js";import"./renderedTicksSlice-CWw-Qe8F.js";import"./axisSelectors-B0UwcuKI.js";import"./d3-scale-DUV6_L5z.js";import"./CartesianChart-BiUQ--Jb.js";import"./chartDataContext-BDew7MkD.js";import"./CategoricalChart-DuzT5byy.js";import"./Page-Cj8EiXz7.js";import"./Line-CifdSMqw.js";import"./Layer-CdlD8-Bq.js";import"./Curve-DLzFalE6.js";import"./types-C4QX8ert.js";import"./step-BRyMFbya.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZpkkXdAG.js";import"./Label-CkpiET6q.js";import"./Text-JACEtH7g.js";import"./DOMUtils-Ccjd7ivz.js";import"./ZIndexLayer-DGG-pQT2.js";import"./useAnimationId-DrQktf3K.js";import"./ActivePoints-N3tMfhSo.js";import"./Dot-CeKZXbQB.js";import"./RegisterGraphicalItemId-xU42uzR6.js";import"./ErrorBarContext-Gbubk7c-.js";import"./GraphicalItemClipPath-CIDK8z3L.js";import"./SetGraphicalItem-CM0l2hGK.js";import"./getRadiusAndStrokeWidthFromDot-2cj_fDMP.js";import"./ActiveShapeUtils-BMsaHZ8h.js";import"./XAxis-DIPoApAz.js";import"./CartesianAxis-CmH7UKiI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BsBoxekz.js";import"./Legend-CWe23moz.js";import"./Symbols-BZnVYgxJ.js";import"./symbol-Bhi30j9H.js";import"./useElementOffset-kXeLLBXV.js";import"./uniqBy-D7gZTNBj.js";import"./iteratee-QFBEUu-H.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

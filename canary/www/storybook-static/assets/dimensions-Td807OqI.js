import{j as e}from"./jsx-runtime-DQjOuEdk.js";import{useMDXComponents as n}from"./index-CIJM32rT.js";import{M as o,C as h}from"./blocks-BTa9RTKW.js";import{C as d,W as s}from"./dimensions.stories-DewAwvIj.js";import"./iframe-BUt3wnEM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vkdvzxS4.js";import"./ChartSizeDimensions-Ch1iJoza.js";import"./arrayEqualityCheck-DNOyFRmd.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk1l2Vo6.js";import"./immer-Djj2d5DN.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D7vv44Nm.js";import"./RechartsWrapper-z5ezD12U.js";import"./index-pWLF-s6P.js";import"./hooks-CaJZCr7l.js";import"./axisSelectors-B8r2gBVy.js";import"./d3-scale-BSxK4JDa.js";import"./zIndexSlice-7peEmfkk.js";import"./renderedTicksSlice-Cr17VpQE.js";import"./CartesianChart-BzRkrrXE.js";import"./chartDataContext-Cyy9MogO.js";import"./CategoricalChart-BpyTrJhB.js";import"./Line-B_R5ro-W.js";import"./Layer-f0MP4yLB.js";import"./ReactUtils-Cta0-SSd.js";import"./Label-BNS9QM1w.js";import"./Text-D2qhx32y.js";import"./DOMUtils-Depo16NU.js";import"./ZIndexLayer-CD2y65wD.js";import"./ActivePoints-QLUPv-Aq.js";import"./Dot-Jhi_4Eo2.js";import"./types-C3jmTsfH.js";import"./RegisterGraphicalItemId-Cwf1Uzb7.js";import"./ErrorBarContext-DOPfAlmD.js";import"./GraphicalItemClipPath-7Tn5wXWU.js";import"./SetGraphicalItem-DIiOAn_y.js";import"./useAnimationId-0NKy_VJI.js";import"./getRadiusAndStrokeWidthFromDot-0A88qvLk.js";import"./ActiveShapeUtils-Cy5NcMU8.js";import"./isPlainObject-BhaX48PC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYFau3NF.js";import"./Trapezoid-Bi5qBDT5.js";import"./Sector-CEgJ3DUB.js";import"./Symbols-1DUTRnJc.js";import"./symbol-x739FVZ2.js";import"./step-CelYc6K9.js";import"./Curve-BEPpct8h.js";import"./XAxis-Ireg13eN.js";import"./CartesianAxis-DLCN0lIN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BhjjKpsZ.js";import"./Legend-BHsCwmQO.js";import"./useElementOffset-BQUAZa3L.js";import"./uniqBy-CsYmUuw-.js";import"./iteratee-CTh-iFMu.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-DHiqP7ko.js";import{M as o,C as h}from"./blocks-D_Gmjp0v.js";import{C as d,W as s}from"./dimensions.stories-D0G-p3dN.js";import"./iframe-CFGBW6xJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./index-DR9UVvVc.js";import"./ChartSizeDimensions-B7dxXrw9.js";import"./zIndexSlice-XhnqXoNc.js";import"./immer-DtmFdOpm.js";import"./get-mKIhZXA3.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CKhdd1T_.js";import"./RechartsWrapper-CeVvleXl.js";import"./index-Ce00Lp11.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";import"./Page-Cj8EiXz7.js";import"./Line-2oU_qbEN.js";import"./Layer-DZ-_1tbp.js";import"./Curve-CuTnLBXp.js";import"./types-CFb2awxA.js";import"./step-Bu8chpKv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-SqXWEHcu.js";import"./Label-Dw9n6-WD.js";import"./Text-DdBs_uLw.js";import"./DOMUtils-DpRJCm6O.js";import"./ZIndexLayer-DWvdc9Et.js";import"./useAnimationId-nIrPYsqA.js";import"./ActivePoints-Ci_EruSJ.js";import"./Dot-6sp_j_Uz.js";import"./RegisterGraphicalItemId-D7MzpaGX.js";import"./ErrorBarContext-qfoo4UXw.js";import"./GraphicalItemClipPath-CKVLZrRA.js";import"./SetGraphicalItem-Bj9a8OJ5.js";import"./getRadiusAndStrokeWidthFromDot-BxgONI-A.js";import"./ActiveShapeUtils-CwRTe6Q2.js";import"./XAxis-B5InI_Kd.js";import"./CartesianAxis-B6GxQRPi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DzdfuxTR.js";import"./Legend-BW69lOtT.js";import"./Symbols-DVPvqcsz.js";import"./symbol-BPUYBBZH.js";import"./useElementOffset-6J8YLqDe.js";import"./uniqBy-CNPIlWYU.js";import"./iteratee-gk_4xeaF.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

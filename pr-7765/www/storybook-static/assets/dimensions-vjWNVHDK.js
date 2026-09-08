import{u as n,j as e}from"./index-C9tSireP.js";import{M as o,C as h}from"./blocks-Ccv0x2jb.js";import{C as d,W as s}from"./dimensions.stories-Dq0QVx6h.js";import"./iframe-ZGGTKsi4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPQC-jNG.js";import"./index-HrJWGj9i.js";import"./index-DsBTLunf.js";import"./ChartSizeDimensions-DRuUr8tZ.js";import"./zIndexSlice-DxfJO5SI.js";import"./throttle-DU3r4hZM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vV3khv5M.js";import"./isWellBehavedNumber-QCZGXLEu.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-HoHDKyYF.js";import"./RechartsWrapper-Bhqr1bRq.js";import"./axisSelectors-sP9dBG4h.js";import"./d3-scale-BsspybO2.js";import"./index-BpyhtFRO.js";import"./renderedTicksSlice-BrYwA8bW.js";import"./index-SSLiRbGX.js";import"./CartesianChart-FipRlzk-.js";import"./chartDataContext-CVwvDOw7.js";import"./CategoricalChart-Da_wyX1Y.js";import"./Page-Cj8EiXz7.js";import"./Line-hyiuMJlU.js";import"./Layer-yZG6HjYa.js";import"./Curve-BGLf-py4.js";import"./types-Cv_7IfEs.js";import"./step-D_M_3p-d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0OCbKtI.js";import"./Label-CuL7W9s2.js";import"./Text-uTHCfqpL.js";import"./DOMUtils-KcdWyv8l.js";import"./useId-BJoAZaHY.js";import"./useBackwardsCompatibleTheme-DiGhz-R4.js";import"./ZIndexLayer-CnUQDGMu.js";import"./useAnimationId-BA-Y1lsT.js";import"./ActivePoints-DW5iFVK5.js";import"./Dot-DrTqTbYy.js";import"./RegisterGraphicalItemId-DAVF2joS.js";import"./ErrorBarContext-DZHL-lpY.js";import"./GraphicalItemClipPath-DOFRcoC3.js";import"./SetGraphicalItem-rcmPBlm0.js";import"./getRadiusAndStrokeWidthFromDot-CtaK0aI-.js";import"./ActiveShapeUtils-CShJY30W.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DNlNZaF2.js";import"./CartesianAxis-y6hYyFes.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D3HJo_sZ.js";import"./Legend-BVslAj_p.js";import"./Symbols-CuqLPjZz.js";import"./symbol-DyWpDIVN.js";import"./useElementOffset-CcFou8CY.js";import"./uniqBy-BAAGpGDY.js";import"./iteratee-CoISyMF-.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

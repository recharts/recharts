import{u as n,j as e}from"./index-B52raX9H.js";import{M as o,C as h}from"./blocks-giM9pXPo.js";import{C as d,W as s}from"./dimensions.stories-DyuIi-yJ.js";import"./iframe-QMSevZ_Z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./index-pi0GgTlW.js";import"./ChartSizeDimensions-Bc796pJ3.js";import"./zIndexSlice-CqmMHsGQ.js";import"./immer-CSWl79hr.js";import"./get-Dt9ZBUsD.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BanYSBKC.js";import"./RechartsWrapper-DMF7GIN4.js";import"./index-CIER62SJ.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./axisSelectors-ClPssgYV.js";import"./d3-scale-BdG0BwVM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./Page-Cj8EiXz7.js";import"./Line-1jaGMewt.js";import"./Layer-BIlvUco-.js";import"./Curve-YfzASo2H.js";import"./types-P1jJ2pmT.js";import"./step-CM1NK0SI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDsdaMkZ.js";import"./Label-CDZiRvSt.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./ZIndexLayer-CEBsGFM8.js";import"./useAnimationId-DlcOUKTA.js";import"./ActivePoints-DxJpOWHz.js";import"./Dot-HKvUxCmw.js";import"./RegisterGraphicalItemId-YPLe9nYm.js";import"./ErrorBarContext-CmLe_bSh.js";import"./GraphicalItemClipPath-D6ZPyI0A.js";import"./SetGraphicalItem-CL5I6sew.js";import"./getRadiusAndStrokeWidthFromDot-ClQ6U8mJ.js";import"./ActiveShapeUtils-Bwe4ExnQ.js";import"./XAxis-C0cN_JCK.js";import"./CartesianAxis-fxCqdamK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CX1GPX_T.js";import"./Legend-wCSof1VH.js";import"./Symbols-BaSB-6_g.js";import"./symbol-D8fjms2j.js";import"./useElementOffset-D_J7pSVP.js";import"./uniqBy-U_isDGby.js";import"./iteratee-DR35FRfo.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

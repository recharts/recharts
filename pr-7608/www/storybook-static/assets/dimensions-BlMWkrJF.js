import{u as n,j as e}from"./index-B56EZ2W5.js";import{M as o,C as h}from"./blocks-LkM-Y4s6.js";import{C as d,W as s}from"./dimensions.stories-LMNBWepX.js";import"./iframe-Dg9AlkU9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DkFl9iqn.js";import"./index-CroN4XyC.js";import"./index-Bo0WYItg.js";import"./ChartSizeDimensions-6ml04A0W.js";import"./zIndexSlice-BMqB4Gyy.js";import"./throttle-DhT8i8lB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cbi8IAhV.js";import"./isWellBehavedNumber-Dlf7mknf.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DdKLVGqR.js";import"./RechartsWrapper-7nbSuF2A.js";import"./index-BE4Y3W85.js";import"./renderedTicksSlice-BJY2ZaZb.js";import"./axisSelectors-Bnxxm030.js";import"./d3-scale-BxAYr4dK.js";import"./CartesianChart-DsbYlNNZ.js";import"./chartDataContext-CTYD4WLT.js";import"./CategoricalChart-Cfe3Pj_n.js";import"./Page-Cj8EiXz7.js";import"./Line-BXzPRIco.js";import"./Layer-BfnZZDJ0.js";import"./Curve-C5hYWQKe.js";import"./types-BOBXQHFv.js";import"./step-DxvJ6z8y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bh9SS3B5.js";import"./Label-c2urfMyQ.js";import"./Text-B-psx-iS.js";import"./DOMUtils-Bk_tuO3J.js";import"./ZIndexLayer-A0r-fd7s.js";import"./useAnimationId-DpUIMGhl.js";import"./ActivePoints-C-VQNown.js";import"./Dot-CpNpS_fm.js";import"./RegisterGraphicalItemId-D2VyX5Qp.js";import"./ErrorBarContext-U9oTNNG2.js";import"./GraphicalItemClipPath-DQk35kuh.js";import"./SetGraphicalItem-CLD5IGSv.js";import"./getRadiusAndStrokeWidthFromDot-CNcpaGrG.js";import"./ActiveShapeUtils-App4amhZ.js";import"./RechartsThemeContext-Bsg2W_jH.js";import"./XAxis-lGCMel2W.js";import"./CartesianAxis-ClvRbJ15.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CGrAoAPm.js";import"./Legend-BtNiGOnl.js";import"./Symbols-D8R954sr.js";import"./symbol-C6xbsDKr.js";import"./useElementOffset-I4cHeDkl.js";import"./uniqBy-D39sA4fz.js";import"./iteratee-BlVn9B3O.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

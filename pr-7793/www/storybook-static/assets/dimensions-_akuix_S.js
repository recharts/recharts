import{u as n,j as e}from"./index-CtMA7N_h.js";import{M as o,C as h}from"./blocks-DFCvFqsd.js";import{C as d,W as s}from"./dimensions.stories-ibDWz0yJ.js";import"./iframe-CkRErbX3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lTKqLNY2.js";import"./index-8q2B2E2Y.js";import"./index-DPOnfHKZ.js";import"./ChartSizeDimensions-ClC3sHdp.js";import"./zIndexSlice-DTmbH2kM.js";import"./throttle-BUNP2xt_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0XcYrnY.js";import"./isWellBehavedNumber-D_Km0wQV.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-NwFDWpH0.js";import"./RechartsWrapper-LX80ZVpP.js";import"./axisSelectors-BQZb9AEv.js";import"./d3-scale-CAyfIE8L.js";import"./index-Cj3PhY3N.js";import"./renderedTicksSlice-BTBGPftx.js";import"./index-CHvbSDPi.js";import"./CartesianChart-D7JoZRAe.js";import"./chartDataContext-C9978EDJ.js";import"./CategoricalChart-BNOSmnxT.js";import"./Page-Cj8EiXz7.js";import"./Line-DO9_PgIv.js";import"./Layer-eVqkjfjk.js";import"./Curve-DD6HoqKB.js";import"./types-ByxJ_946.js";import"./step-ZsLkjyrm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BXDAeM5O.js";import"./Label-Cbc3sDLG.js";import"./Text-CcsMLAiM.js";import"./DOMUtils-ysvCMZ9n.js";import"./useId-BiQAXzmn.js";import"./useBackwardsCompatibleTheme-Z-DwFZxL.js";import"./ZIndexLayer-mbz94-CG.js";import"./useAnimationId-B20w_W1l.js";import"./ActivePoints-DWOGb-Xm.js";import"./Dot-2hkZUwyy.js";import"./RegisterGraphicalItemId-DwpGnQ-i.js";import"./ErrorBarContext-LdHiwwFE.js";import"./GraphicalItemClipPath-osbFejbO.js";import"./SetGraphicalItem-7qiiWKdg.js";import"./getRadiusAndStrokeWidthFromDot-B41JQ_h1.js";import"./ActiveShapeUtils-B8wUCaOd.js";import"./useGraphicalItemIdentity-kWkqpE_r.js";import"./XAxis-B1jTgdYR.js";import"./CartesianAxis-BGltcbGd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CAzXCAfe.js";import"./Legend-DP9QQmLJ.js";import"./Symbols-DXiS9O9j.js";import"./symbol-qt5DuKbX.js";import"./useElementOffset-DggOv2T5.js";import"./uniqBy-BwaEYqQz.js";import"./iteratee-BG9CjH6Z.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

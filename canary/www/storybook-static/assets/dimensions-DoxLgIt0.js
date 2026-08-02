import{u as n,j as e}from"./index-CgEq0Es6.js";import{M as o,C as h}from"./blocks-DztW9QQr.js";import{C as d,W as s}from"./dimensions.stories-CCA4G2RJ.js";import"./iframe-B87Mdf3W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFlriD1l.js";import"./index-DOs9r3IB.js";import"./index-Kzzk0SfL.js";import"./ChartSizeDimensions-fqCu-1jx.js";import"./zIndexSlice-BIRpUMd-.js";import"./throttle-B7C94OgR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DKsQyDke.js";import"./isWellBehavedNumber-B3D8b1zU.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CbdJJgaC.js";import"./RechartsWrapper-CTH97mkX.js";import"./index-DzAi6-mi.js";import"./renderedTicksSlice--g9rzjaW.js";import"./axisSelectors-CjpQ8_nF.js";import"./d3-scale-BOgOxbfH.js";import"./CartesianChart-B1vhIJLv.js";import"./chartDataContext-qB4fiklo.js";import"./CategoricalChart-DkKx3P5s.js";import"./Page-Cj8EiXz7.js";import"./Line-BBdGZ1Gw.js";import"./Layer-rvbR5IlK.js";import"./Curve-DIAAN1K7.js";import"./types-CS4XJdLR.js";import"./step-e5qRx30Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhwNGwGQ.js";import"./Label-D69_s3j-.js";import"./Text-CiS0vhWP.js";import"./DOMUtils-Dj6lanE1.js";import"./ZIndexLayer-CBz7KXzh.js";import"./useAnimationId-B04VzGQY.js";import"./ActivePoints-BuWd44OK.js";import"./Dot-CctAgg2L.js";import"./RegisterGraphicalItemId-B3POwG2t.js";import"./ErrorBarContext-DijL4Xrx.js";import"./GraphicalItemClipPath-DnF4EuGO.js";import"./SetGraphicalItem-BP9VRM5v.js";import"./getRadiusAndStrokeWidthFromDot-Bhl0ZWck.js";import"./ActiveShapeUtils-Dgoc85eT.js";import"./RechartsThemeContext-2ygZrkIo.js";import"./XAxis-CR6bWmBK.js";import"./CartesianAxis-Bnk9r_M-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-vKfYeEWT.js";import"./Legend-mtOs_KCX.js";import"./Symbols-BeMj2ztP.js";import"./symbol-vdpPDQ1v.js";import"./useElementOffset-B4Ud-MT_.js";import"./uniqBy-CB05smHV.js";import"./iteratee-CgJpmMi2.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

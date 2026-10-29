import{u as n,j as e}from"./index-DzcZZo5H.js";import{M as o,C as h}from"./blocks-CfM62IHI.js";import{C as d,W as s}from"./dimensions.stories-B4Nt-lXE.js";import"./iframe-C0OVyiWZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./index-BpCkqUEo.js";import"./ChartSizeDimensions-BOB1kaI2.js";import"./zIndexSlice-8GqqcFEr.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./throttle-D68qy_th.js";import"./ComposedChart-CDKrU3QJ.js";import"./RechartsWrapper-CTQttuVZ.js";import"./axisSelectors-D80ZAqVH.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-P-FUFzKf.js";import"./index-B1LAm-dY.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./Page-Cj8EiXz7.js";import"./Line-dhCJc3l8.js";import"./Layer-OalOUm3Y.js";import"./Curve-C3dcNtoz.js";import"./types-C-qeruIO.js";import"./step-CZORxbW4.js";import"./path-DyVhHtw_.js";import"./LabelList-D0ai-hpm.js";import"./Label-YEc5vJ1L.js";import"./Text-CW0hOv-I.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./ActivePoints-BUz8lbCF.js";import"./Dot-b3sd19D9.js";import"./activeStyles-D_QsSvZV.js";import"./useAnimationId-CezZ2glr.js";import"./dataEntryStyles-Cd6CZepp.js";import"./Symbols-BDZG6tZB.js";import"./symbol-BmFAGqI-.js";import"./ErrorBarContext-Crxfy6Lq.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getRadiusAndStrokeWidthFromDot-DztWYVRU.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./useEffectiveDataKey-AC38WMBQ.js";import"./XAxis-CTdfh09z.js";import"./CartesianAxis-B5NtJHos.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BzGOPf-n.js";import"./Legend-CrVVwmbt.js";import"./useElementOffset-BE4RQkQy.js";import"./uniqBy-Cmw3QRKv.js";import"./iteratee-CPh3NlRT.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

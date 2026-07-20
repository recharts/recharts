import{u as n,j as e}from"./index-Clump2gL.js";import{M as o,C as h}from"./blocks-GUEAQVk5.js";import{C as d,W as s}from"./dimensions.stories-EFVKMR6i.js";import"./iframe-E9cTKeRE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./index-CCDqlq1e.js";import"./ChartSizeDimensions-CBdAOysP.js";import"./zIndexSlice-DgjoBcM4.js";import"./throttle-CGWlJj3Y.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-VcEXnedp.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Blhk5iCf.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./axisSelectors-Cz4e0hh2.js";import"./d3-scale-BKY6FaDv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./Page-Cj8EiXz7.js";import"./Line-oPEUnh-k.js";import"./Layer-gCSDlxX6.js";import"./Curve-CKjkPgN2.js";import"./types-BiCnzAm7.js";import"./step-xjRdG8EV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1DMV_LJ.js";import"./Label-BpZfxLrK.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./ZIndexLayer-T104iiSj.js";import"./useAnimationId-DdQ6zElL.js";import"./ActivePoints-Co1l_Ha9.js";import"./Dot-DCqiO5Z7.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getRadiusAndStrokeWidthFromDot-CZrTH9En.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./XAxis-rRrOlgKo.js";import"./CartesianAxis-X6rLp4nN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-F7YCqO7L.js";import"./Legend-CMoclERr.js";import"./Symbols-DI8xvNSa.js";import"./symbol-Xtd0tGJt.js";import"./useElementOffset-D-VfA5vV.js";import"./uniqBy-BABLZnAx.js";import"./iteratee-CoZ1T3nQ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

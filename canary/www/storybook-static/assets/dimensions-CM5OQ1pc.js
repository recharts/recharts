import{u as n,j as e}from"./index-D4gQgWBI.js";import{M as o,C as h}from"./blocks-OYAdIvLy.js";import{C as d,W as s}from"./dimensions.stories-CoV4r0Nt.js";import"./iframe-DIhQo_8Y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dgm3vG4i.js";import"./index-BF8H9JZN.js";import"./index-RbONCBjN.js";import"./ChartSizeDimensions-CYWwK502.js";import"./zIndexSlice-CGgr09GZ.js";import"./throttle-B5VRQcq4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hi_Ykzi4.js";import"./isWellBehavedNumber-BiD1hUdH.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CJrQmGqR.js";import"./RechartsWrapper-DRimQmLV.js";import"./index-BC5_sjA-.js";import"./axisSelectors-Gg8H4O2J.js";import"./d3-scale-DTMlXSKJ.js";import"./renderedTicksSlice-Co5rDdJd.js";import"./CartesianChart-DwM9PUKm.js";import"./chartDataContext-DFyWuVHZ.js";import"./CategoricalChart-CgO2X-rw.js";import"./Page-Cj8EiXz7.js";import"./Line-DEkyIRox.js";import"./Layer-BQPvkkvd.js";import"./Curve-BXnwyB8Q.js";import"./types-ZiiagxD1.js";import"./step-kN_jTjZP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DEBP1yTo.js";import"./Label-CVkJGixO.js";import"./Text-5eA_PDhZ.js";import"./DOMUtils-Cs86oaAG.js";import"./ZIndexLayer-B8ZTodeV.js";import"./useAnimationId-CRkvHyGK.js";import"./ActivePoints-CJTgILF2.js";import"./Dot-BiDh7UAw.js";import"./RegisterGraphicalItemId-DMf10IHd.js";import"./ErrorBarContext-RhNJ5kjd.js";import"./GraphicalItemClipPath-BlWn4Cda.js";import"./SetGraphicalItem-CDNxzvex.js";import"./getRadiusAndStrokeWidthFromDot-DPHCRHA9.js";import"./ActiveShapeUtils-DPvlIPGu.js";import"./RechartsThemeContext-C_YQ-08p.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BpVdYfJg.js";import"./CartesianAxis-4De8rCJ6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DaA2UazR.js";import"./Legend-Ck9PLJoP.js";import"./Symbols-DuXAJdRg.js";import"./symbol-BW1nMcv9.js";import"./useElementOffset-CD90jGAB.js";import"./uniqBy-DEkqq9OP.js";import"./iteratee-C_S5i7R9.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

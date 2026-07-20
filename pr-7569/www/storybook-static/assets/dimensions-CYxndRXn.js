import{u as n,j as e}from"./index-6IIgSugc.js";import{M as o,C as h}from"./blocks-CStTXslL.js";import{C as d,W as s}from"./dimensions.stories-DOnnyahD.js";import"./iframe-3EJ0a-7l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./index-tuDXSbu0.js";import"./ChartSizeDimensions-ZUbYqugn.js";import"./zIndexSlice-c2FXiYNl.js";import"./throttle-CPX4UzZG.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D-953FuV.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./renderedTicksSlice-gv74no8c.js";import"./axisSelectors-Bmyn61pB.js";import"./d3-scale-iKC8386d.js";import"./CartesianChart-BDgOOMut.js";import"./chartDataContext-D6a_Yhjw.js";import"./CategoricalChart-CxrO1b6T.js";import"./Page-Cj8EiXz7.js";import"./Line-C2MKmrJp.js";import"./Layer-DpkyIzcZ.js";import"./Curve-BO7dzXGY.js";import"./types-CU0G9DUW.js";import"./step-oroBBTM2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_aFnnDci.js";import"./Label-C0w-bdKA.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./ZIndexLayer-DNvDkown.js";import"./useAnimationId-BfMO6PtV.js";import"./ActivePoints-DJDGdwM2.js";import"./Dot-Cv5hb360.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./ErrorBarContext-BbLTkDCO.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";import"./getRadiusAndStrokeWidthFromDot-Ds3sY1DQ.js";import"./ActiveShapeUtils-Cy1FCqFR.js";import"./XAxis-C3QGe7ZQ.js";import"./CartesianAxis-Bfa5m128.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-DWgMRUiY.js";import"./Legend-DLd4l6Y5.js";import"./Symbols-BSONYbmQ.js";import"./symbol-C2xiebrn.js";import"./useElementOffset-9xxsp0Py.js";import"./uniqBy-CgpcgpAe.js";import"./iteratee-CsQVFiVH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

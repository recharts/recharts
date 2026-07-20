import{u as n,j as e}from"./index-7jrGxS1j.js";import{M as o,C as h}from"./blocks-C743t4QJ.js";import{C as d,W as s}from"./dimensions.stories-fdVB9J18.js";import"./iframe-CV15e7az.js";import"./preload-helper-Dp1pzeXC.js";import"./index-93JCPKbn.js";import"./index-CVAE3ToH.js";import"./index-BBpab-Hd.js";import"./ChartSizeDimensions-BGxb4uhi.js";import"./zIndexSlice-CjGsmEi1.js";import"./throttle-CHzP70vu.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C-NTBoJu.js";import"./isWellBehavedNumber-ieBgpEor.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BEyLsXgU.js";import"./RechartsWrapper-DDXDvVK3.js";import"./index-BoM1UPcR.js";import"./renderedTicksSlice-fTbz0eeh.js";import"./axisSelectors-CI8TiAbs.js";import"./d3-scale-BchuFtEx.js";import"./CartesianChart-CvIpxzyO.js";import"./chartDataContext-BjsNRzum.js";import"./CategoricalChart-Cjf4C7PM.js";import"./Page-Cj8EiXz7.js";import"./Line-UnZJBYs0.js";import"./Layer-D7-BURxK.js";import"./Curve-DJiquf3-.js";import"./types-CWD3xXR9.js";import"./step-BDRmzmOQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CwcBVWiQ.js";import"./Label-CWZ2l2lA.js";import"./Text-DlLjmiQX.js";import"./DOMUtils-DvhMIjVB.js";import"./ZIndexLayer-D33L973J.js";import"./useAnimationId-CAqTHHd1.js";import"./ActivePoints-CxfliSLe.js";import"./Dot-CGVhNmXj.js";import"./RegisterGraphicalItemId-CTyQ2SsK.js";import"./ErrorBarContext-DbIUjAn0.js";import"./GraphicalItemClipPath-Cho1rLIH.js";import"./SetGraphicalItem-BMbMD-I2.js";import"./getRadiusAndStrokeWidthFromDot-sVa05Jko.js";import"./ActiveShapeUtils-D4G9dWIO.js";import"./XAxis-DLZMrQJA.js";import"./CartesianAxis-C65u4Bt5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-BGgz64vm.js";import"./Legend-CDcIHQFX.js";import"./Symbols-Cnzawx9f.js";import"./symbol-D3b_j2Zz.js";import"./useElementOffset-CYeD-QhL.js";import"./uniqBy-C1LhrqqD.js";import"./iteratee-OgcCVfTc.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

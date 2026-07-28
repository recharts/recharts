import{u as n,j as e}from"./index-B2_QaKHi.js";import{M as o,C as h}from"./blocks-C6udMd7B.js";import{C as d,W as s}from"./dimensions.stories-BpqD4Zep.js";import"./iframe-DuK0Qil1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-tfefZ_nO.js";import"./index-CKpzsMgh.js";import"./index-DhoW-uSW.js";import"./ChartSizeDimensions-BjFTPCd8.js";import"./zIndexSlice-CDnfQqmd.js";import"./throttle-DSTeDcIR.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-oCmlrVLK.js";import"./isWellBehavedNumber-DX_vizwS.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CoDAatDa.js";import"./RechartsWrapper-DniM3uOm.js";import"./index-DwA8b1Ou.js";import"./renderedTicksSlice-CSJ2A-w6.js";import"./axisSelectors-_6NgKNdR.js";import"./d3-scale-DuTdgHoH.js";import"./CartesianChart-BQw3D51-.js";import"./chartDataContext-CfvZMLTP.js";import"./CategoricalChart-D9Svi6qf.js";import"./Page-Cj8EiXz7.js";import"./Line-DNdMLtbX.js";import"./Layer-DkfKlAwf.js";import"./Curve-CAqM1U-K.js";import"./types-Ch2-4RAi.js";import"./step-BW4Xq2ef.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CBhdDdvc.js";import"./Label-BVUrQ6r5.js";import"./Text-D4DIOP-8.js";import"./DOMUtils-n5aJojsY.js";import"./ZIndexLayer-BaKptJ0d.js";import"./useAnimationId-nnglBd7S.js";import"./ActivePoints-Dq5H8yZY.js";import"./Dot-C7D6mqds.js";import"./RegisterGraphicalItemId-BqmtVyAz.js";import"./ErrorBarContext-84EKHKmH.js";import"./GraphicalItemClipPath-BN5jaNNE.js";import"./SetGraphicalItem-D4hSZyvD.js";import"./getRadiusAndStrokeWidthFromDot-DcB-LW-j.js";import"./ActiveShapeUtils-B7fe-RtC.js";import"./RechartsThemeContext-CZE5IotG.js";import"./XAxis-5-F4R60_.js";import"./CartesianAxis-D2hc_RJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-DUlzRBIx.js";import"./Legend-CFgZ7u0m.js";import"./Symbols-Br9ylzN1.js";import"./symbol-Bg-Ontnx.js";import"./useElementOffset-B2PIp49y.js";import"./uniqBy-eNjjwLbW.js";import"./iteratee-BKzRmdu1.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

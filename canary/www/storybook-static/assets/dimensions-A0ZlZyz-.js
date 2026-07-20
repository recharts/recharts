import{u as n,j as e}from"./index-CLQlTe_d.js";import{M as o,C as h}from"./blocks-D_5M2Y7Y.js";import{C as d,W as s}from"./dimensions.stories-C97FYiyv.js";import"./iframe-C7qTZtPI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./index-Bl3ZtZEI.js";import"./ChartSizeDimensions-C8DyjNDY.js";import"./zIndexSlice-BcOfmYYd.js";import"./throttle-DLOScDmO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ce1865_D.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C_NHVXsk.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./renderedTicksSlice-CqCAs39i.js";import"./axisSelectors-vHpYaHv4.js";import"./d3-scale-BJE91LPh.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./Page-Cj8EiXz7.js";import"./Line-mFW-YMe2.js";import"./Layer-y2Nfuyvg.js";import"./Curve-DiMbH13e.js";import"./types-Bx79eQJf.js";import"./step-THYeIvAN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HRihbpAW.js";import"./Label-DS1cnk1C.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./ZIndexLayer-B8jqXSnt.js";import"./useAnimationId-D4WzgVDK.js";import"./ActivePoints-GVhqjKv2.js";import"./Dot-nbmu8EHp.js";import"./RegisterGraphicalItemId-hstJQcJh.js";import"./ErrorBarContext-BiuHMfT3.js";import"./GraphicalItemClipPath-CJL-G-6t.js";import"./SetGraphicalItem-B6Vsn-QI.js";import"./getRadiusAndStrokeWidthFromDot-DdigNmch.js";import"./ActiveShapeUtils-BJUH9QkP.js";import"./XAxis-CgvkfXIs.js";import"./CartesianAxis-C2LUMKQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-BIekQKnh.js";import"./Legend-Ff-w8olr.js";import"./Symbols-C-I-zc-g.js";import"./symbol-CnfFmLvS.js";import"./useElementOffset-Cn8CKhYV.js";import"./uniqBy-CXC3IJo1.js";import"./iteratee-lJbmW7AH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-CNiRoSa2.js";import{M as o,C as h}from"./blocks-BO6AUlGZ.js";import{C as d,W as s}from"./dimensions.stories-C7Bdi4Lf.js";import"./iframe-BRR_Yx3q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C-RWhaz3.js";import"./index-dwufCIeA.js";import"./index-CJWeDOqD.js";import"./ChartSizeDimensions-DrAB72Ee.js";import"./zIndexSlice-2cKWUmx1.js";import"./throttle-9Cm-XaBZ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BuYHfJJu.js";import"./isWellBehavedNumber-BoZxamXc.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BrQA-1mf.js";import"./RechartsWrapper-Dreti13-.js";import"./index-C7O-rWXn.js";import"./renderedTicksSlice-DsmsDUZ3.js";import"./axisSelectors-BvSj2dv3.js";import"./d3-scale-DiG9HsKp.js";import"./CartesianChart-D7iKBlwo.js";import"./chartDataContext-7uLTjT1t.js";import"./CategoricalChart-Bo9h-nM1.js";import"./Page-Cj8EiXz7.js";import"./Line-DrAvxDeD.js";import"./Layer-DEnO1k0R.js";import"./Curve-CgfofNr-.js";import"./types-DUTL6gmw.js";import"./step-DD-M69WZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BTME76kn.js";import"./Label-BFmCxOLP.js";import"./Text-CNcfggmg.js";import"./DOMUtils-DaLtqU51.js";import"./ZIndexLayer-B_gUHSFj.js";import"./useAnimationId-C1SKzxsx.js";import"./ActivePoints-Du_pXw62.js";import"./Dot-RhTFr113.js";import"./RegisterGraphicalItemId-vR20SUSb.js";import"./ErrorBarContext-DKxut-kF.js";import"./GraphicalItemClipPath-DlaiPyn0.js";import"./SetGraphicalItem-BE7YCbvJ.js";import"./getRadiusAndStrokeWidthFromDot-CtiaEZzs.js";import"./ActiveShapeUtils-BvVAnTtS.js";import"./XAxis-D2YOv_sk.js";import"./CartesianAxis-CtRqWNRX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DT9J28i-.js";import"./Legend-8oAOgQMw.js";import"./Symbols-CNXodT7a.js";import"./symbol-Brgl6U8b.js";import"./useElementOffset-DhJ2uqTW.js";import"./uniqBy-skO6ce2Q.js";import"./iteratee-jFm--KAQ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

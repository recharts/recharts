import{u as n,j as e}from"./index-BoNHXhh-.js";import{M as o,C as h}from"./blocks-CqVg9GJT.js";import{C as d,W as s}from"./dimensions.stories-hA9D0zpc.js";import"./iframe-DnfWaB1B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMtaCruM.js";import"./index-B-M-aHgw.js";import"./index-DwRvwf7P.js";import"./ChartSizeDimensions-Ckjf3Hhj.js";import"./zIndexSlice-BT6q8CVb.js";import"./throttle-BlHdMJGb.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-8EGHXmvb.js";import"./isWellBehavedNumber-B2TPiKzz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BozjqNdW.js";import"./RechartsWrapper-C0Y2iFV1.js";import"./axisSelectors-BzBwCDwa.js";import"./d3-scale-Br-96nR7.js";import"./index-CNOFauDT.js";import"./renderedTicksSlice-Diudvbk0.js";import"./index-BcjfqUW0.js";import"./CartesianChart-C9GO6rC8.js";import"./chartDataContext-C2BaT0xy.js";import"./CategoricalChart-m_cFhWGU.js";import"./Page-Cj8EiXz7.js";import"./Line-S15yyNv0.js";import"./Layer-CESakEtd.js";import"./Curve-g0mln-5B.js";import"./types-vzKdATLY.js";import"./step-CKvXTTBh.js";import"./path-DyVhHtw_.js";import"./activeStyles-yEksTLCx.js";import"./Label-DErBiWtx.js";import"./Text-18vmCMJW.js";import"./pageBackground-BZcgsdhX.js";import"./useId-EMQHPSSh.js";import"./useBackwardsCompatibleTheme-Csjmt-9c.js";import"./ZIndexLayer-CVLoryN8.js";import"./useAnimationId-CAjA_jBW.js";import"./dataEntryStyles-7Y85MSUL.js";import"./ActivePoints-CILYAqb7.js";import"./Dot-_SxShMFA.js";import"./ErrorBarContext-D9Sd4BvK.js";import"./GraphicalItemClipPath-CEAKjsCJ.js";import"./SetGraphicalItem-Me2AFJoT.js";import"./getRadiusAndStrokeWidthFromDot-D2lPL6Sa.js";import"./ActiveShapeUtils-DcV5jonr.js";import"./useEffectiveDataKey-Dum6ZVs0.js";import"./XAxis-CRu44DAQ.js";import"./CartesianAxis-CiEPj5kn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CTXcpKsn.js";import"./Legend-CcC4oay1.js";import"./Symbols-BOZkE8hq.js";import"./symbol-CMK53g7Y.js";import"./useElementOffset-1uwHjJUJ.js";import"./uniqBy-YhWipnCo.js";import"./iteratee-_cPrzxJT.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

import{u as n,j as e}from"./index-Mch5Ffag.js";import{M as o,C as h}from"./blocks-BB_vELyq.js";import{C as d,W as s}from"./dimensions.stories-B9VaccaP.js";import"./iframe-B7zNIrOO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPky1fKm.js";import"./index-DeW5qBsv.js";import"./index-CSG1xziR.js";import"./ChartSizeDimensions-DycNqaqV.js";import"./zIndexSlice-BrXa08HH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DItvlha8.js";import"./throttle-eF_Q2QNr.js";import"./ComposedChart-CwA4XzeT.js";import"./RechartsWrapper-BpqvgZcQ.js";import"./axisSelectors-BpHmVUrQ.js";import"./polarAxisSelectors-DMv2prKV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctmq2SXE.js";import"./index-DvJGiIdF.js";import"./renderedTicksSlice-BaWHA44G.js";import"./index-Bmy_tuVE.js";import"./fillDefinitions-BcvXO95l.js";import"./CartesianChart-DD-p_bEO.js";import"./chartDataContext-BXscOHGM.js";import"./CategoricalChart-eJZPSIID.js";import"./Page-Cj8EiXz7.js";import"./Line-CDQvgmS5.js";import"./Layer-_oO_qD0a.js";import"./Curve-CzZYT27h.js";import"./types-Byak9pOA.js";import"./step-BjjeCzgq.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-m9rMNboQ.js";import"./Label-Chg26k5h.js";import"./Text-RcA031Tp.js";import"./ZIndexLayer-wE65zH98.js";import"./ActivePoints-hyEey0jz.js";import"./Dot-CPebMAD4.js";import"./activeStyles-CDe2Kb4I.js";import"./useAnimationId-kE9HxpHZ.js";import"./Symbols-FG4gFplx.js";import"./symbol-DWqvgSCA.js";import"./ErrorBarContext-Dk6Rlq45.js";import"./SetGraphicalItem-CoOgwPlc.js";import"./getRadiusAndStrokeWidthFromDot-BxhyxoF6.js";import"./ActiveShapeUtils-CLU25TzO.js";import"./useEffectiveDataKey-CezGQrGJ.js";import"./XAxis-vwLDX7Ct.js";import"./CartesianAxis-_HHYfvE8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DDLRqqCt.js";import"./Legend-BfEcUSQ1.js";import"./useElementOffset-Ch1zQzym.js";import"./uniqBy-g_uehvzu.js";import"./iteratee-DcFC9bTU.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

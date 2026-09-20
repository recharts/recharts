import{u as n,j as e}from"./index-C6isK9iZ.js";import{M as o,C as h}from"./blocks-C_0fOOqz.js";import{C as d,W as s}from"./dimensions.stories-ffHxFki2.js";import"./iframe-DqQsSS-D.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dbmbbyfr.js";import"./index-DhKVfvgy.js";import"./index-B4bGAE3u.js";import"./ChartSizeDimensions-ajzDKnHi.js";import"./zIndexSlice-DEwzQEF1.js";import"./throttle-Dfb6FQUp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BBiJzE-S.js";import"./isWellBehavedNumber-DnbbC0Ec.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BtU6IVsu.js";import"./RechartsWrapper-DFStnfMW.js";import"./axisSelectors-B52U77Z-.js";import"./d3-scale-DCqqE6RI.js";import"./index-B8fZ1s7u.js";import"./renderedTicksSlice-TJkJQb3w.js";import"./index-O7IqxgVs.js";import"./CartesianChart-DxivySAt.js";import"./chartDataContext-BlgeEOzh.js";import"./CategoricalChart-BaEimrAw.js";import"./Page-Cj8EiXz7.js";import"./Line-CDjjcyDk.js";import"./Layer-D_OCfv3y.js";import"./Curve-u85x6jSW.js";import"./types-Dtf5SFP2.js";import"./step-B0zbwdDt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DE7FMoaT.js";import"./Label-B79akpip.js";import"./Text-C5ELFOWd.js";import"./DOMUtils-DfpUN1kn.js";import"./useId-CY4qsl1d.js";import"./useBackwardsCompatibleTheme-BgrGij6q.js";import"./ZIndexLayer-CAYm_Ybv.js";import"./useAnimationId-YdFm9roE.js";import"./ActivePoints-CoFSOxUI.js";import"./Dot-mDqKU7lL.js";import"./RegisterGraphicalItemId-B_u3-RKa.js";import"./ErrorBarContext-Bvj5AtLG.js";import"./GraphicalItemClipPath-CH5UCRjx.js";import"./SetGraphicalItem-DiUOXkHE.js";import"./getRadiusAndStrokeWidthFromDot-C_whAPwi.js";import"./ActiveShapeUtils-_QhNTD3X.js";import"./useGraphicalItemIdentity-DdD2mi7M.js";import"./XAxis-BKSYmnyE.js";import"./CartesianAxis-BYaiVNcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Ci8o-AKr.js";import"./Legend-DslYmX1t.js";import"./Symbols-DUeh2Wr4.js";import"./symbol-CqwIHtxo.js";import"./useElementOffset-ey8HlZM7.js";import"./uniqBy-CnV8Kqb8.js";import"./iteratee-3rOeBeVg.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

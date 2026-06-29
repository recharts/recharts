import{u as n,j as e}from"./index-BzNYvZPl.js";import{M as o,C as h}from"./blocks-B-YHdg6M.js";import{C as d,W as s}from"./dimensions.stories-MwxnW5lP.js";import"./iframe-BLwLvMjc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./index-C34Ey_Rg.js";import"./ChartSizeDimensions-CN0N0ble.js";import"./zIndexSlice-f39TItqz.js";import"./immer-D_8Dczsi.js";import"./get-BkG6HND6.js";import"./resolveDefaultProps-BYhifOb3.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CxKCgcGS.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./axisSelectors-D58BkBim.js";import"./d3-scale-DDplI62N.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./Page-Cj8EiXz7.js";import"./Line-1bQ5HATy.js";import"./Layer-Bt0_PYLT.js";import"./Curve-Bgoi8H0P.js";import"./types-WD3PBzf9.js";import"./step-Y_PLHiNv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BZKtZoic.js";import"./Label-pioiAs6J.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./useAnimationId-CqDdhCYT.js";import"./ActivePoints-DpoXb-Tp.js";import"./Dot-DDBvFNxJ.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./ErrorBarContext-DWoI7kQ6.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getRadiusAndStrokeWidthFromDot-BHSa5sI8.js";import"./ActiveShapeUtils-peAesLaa.js";import"./XAxis-ejI-Sa_I.js";import"./CartesianAxis-BaKeQioI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-BeG492ya.js";import"./Legend-BMV_CWpJ.js";import"./Symbols-JaxNqX0a.js";import"./symbol-DoLM06y1.js";import"./useElementOffset-BL78dp6_.js";import"./uniqBy-Du5aieGd.js";import"./iteratee-Wx63tvk5.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-IMy6UyJC.js";import{e as o,C as h}from"./blocks-Cxveio5m.js";import{C as d,W as s}from"./dimensions.stories-Cp_vt8DE.js";import"./iframe-DmBQ8HMz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./index-Drn3R5Q6.js";import"./ChartSizeDimensions-Bb81LfzJ.js";import"./zIndexSlice-DIRHIjeL.js";import"./immer-CvETSy6i.js";import"./get-Ckx5uNL8.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DNElitZJ.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./Page-DPte-9pC.js";import"./Line-DN2wolye.js";import"./Curve-Ddn0Q7My.js";import"./types-DUdiMbO-.js";import"./step-CN9Am_zJ.js";import"./path-DyVhHtw_.js";import"./Layer-BhYZ1XdM.js";import"./ReactUtils-DKCxnkHT.js";import"./Label-C1M61kae.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./ZIndexLayer-eAbRrt0r.js";import"./ActivePoints-BCqOvBdY.js";import"./Dot-nij0AL23.js";import"./RegisterGraphicalItemId-Dup5UL4N.js";import"./ErrorBarContext-DC5ZfMR_.js";import"./GraphicalItemClipPath-pcxJ2TmH.js";import"./SetGraphicalItem-CsbBVlmH.js";import"./useAnimationId-BZ5U8z_o.js";import"./getRadiusAndStrokeWidthFromDot-CZpBgath.js";import"./ActiveShapeUtils-DVhmDt4u.js";import"./XAxis-BaDVYnrk.js";import"./CartesianAxis-B9da2UAY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-D8ss-GGA.js";import"./Legend-CvCXD82i.js";import"./Symbols-L1gtdK7X.js";import"./symbol-D5N6_vHE.js";import"./useElementOffset-DsYLvXSH.js";import"./uniqBy-KElqJvHA.js";import"./iteratee-D3O-hQgd.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

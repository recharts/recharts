import{u as n,j as e}from"./index-Cxth6U3E.js";import{M as o,C as h}from"./blocks-Cwu56DU1.js";import{C as d,W as s}from"./dimensions.stories-cJklH9GE.js";import"./iframe-2CSQwnzh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./index-DiEzMPwb.js";import"./ChartSizeDimensions-ByEc29xZ.js";import"./zIndexSlice-BFAyLu2K.js";import"./throttle-D6AnBAnr.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Drp8NLPv.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./renderedTicksSlice-HMFum7ql.js";import"./axisSelectors-svppWMH6.js";import"./d3-scale-Dt9cpg9w.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./CategoricalChart-DtXBMgKk.js";import"./Page-Cj8EiXz7.js";import"./Line-DawadGfv.js";import"./Layer-whPw80AU.js";import"./Curve-BVeBGaCZ.js";import"./types-Co_C0j8x.js";import"./step-cLfMjHgU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ba6tXj_A.js";import"./Label-BgiiW0df.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./useAnimationId-CkCcxDPT.js";import"./ActivePoints-fb37GVPw.js";import"./Dot-D2O1VtDH.js";import"./RegisterGraphicalItemId-D-cwWngY.js";import"./ErrorBarContext-B19vexPG.js";import"./GraphicalItemClipPath-DcZNtOEm.js";import"./SetGraphicalItem-DiGKkNAO.js";import"./getRadiusAndStrokeWidthFromDot-DvI-6mn5.js";import"./ActiveShapeUtils-CiureFp6.js";import"./XAxis-Q_FxDFmH.js";import"./CartesianAxis-B1LfcQH3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./YAxis-CGxWNSi-.js";import"./Legend-DlgIPDhY.js";import"./Symbols-McDm8XxD.js";import"./symbol-DJbov12X.js";import"./useElementOffset-CbQUl8ho.js";import"./uniqBy-BOeXWsaI.js";import"./iteratee-DeKV1h7S.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-CVEyoAaK.js";import{M as o,C as h}from"./blocks-Bcg3-v9c.js";import{C as d,W as s}from"./dimensions.stories-CEMRLw_l.js";import"./iframe-CVyYUHBB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyYl91DI.js";import"./index-Bu-B5WMy.js";import"./index-DLItSsfJ.js";import"./ChartSizeDimensions-CMC1MAxh.js";import"./zIndexSlice-DQO5Hbgs.js";import"./throttle-BBXZcEly.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C7voaGK7.js";import"./isWellBehavedNumber-BkHFck3s.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-m9fhUeFB.js";import"./RechartsWrapper-B47jb7Bg.js";import"./index-Ck0Bo50f.js";import"./axisSelectors-CMqkaAfm.js";import"./d3-scale-G2cHgOnr.js";import"./renderedTicksSlice-Cdp3Xg1W.js";import"./CartesianChart--y5fp4Ts.js";import"./chartDataContext-CkCkvPBB.js";import"./CategoricalChart-BzwwubIO.js";import"./Page-Cj8EiXz7.js";import"./Line-BPoyEZrU.js";import"./Layer-BB5O4xlv.js";import"./Curve-BDPvfmPk.js";import"./types-DESxFXXj.js";import"./step-Be_wHVCe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Clv-mx2A.js";import"./Label-DUcJCWBn.js";import"./Text-CiA3AAlg.js";import"./DOMUtils-ukWQHZl5.js";import"./RechartsThemeContext-NTsyT9p1.js";import"./ZIndexLayer-DBw3xiu4.js";import"./useAnimationId-_KC_AMgU.js";import"./ActivePoints-D1NkQNgM.js";import"./Dot-D0NdtXSm.js";import"./RegisterGraphicalItemId-BhQ648vE.js";import"./ErrorBarContext-Buq5hkgo.js";import"./GraphicalItemClipPath-JgdFdpvQ.js";import"./SetGraphicalItem-C8TpD4Nn.js";import"./getRadiusAndStrokeWidthFromDot-OHCftA6z.js";import"./ActiveShapeUtils-D5nCu2Hc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-L2wk8rnW.js";import"./CartesianAxis-890WjR3i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Da2JXkbU.js";import"./Legend-DdTk7cU9.js";import"./Symbols-DMTBO25H.js";import"./symbol-BSVPaPlS.js";import"./useElementOffset-BXKfJxEF.js";import"./uniqBy-CHZtDAbM.js";import"./iteratee-CwapYXfW.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

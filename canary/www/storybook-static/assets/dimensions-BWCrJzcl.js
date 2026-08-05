import{u as n,j as e}from"./index-DMhrR0jk.js";import{M as o,C as h}from"./blocks-CmbUOpZ8.js";import{C as d,W as s}from"./dimensions.stories-CTOLjlVt.js";import"./iframe-Cimk_otj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./index-DpbiwnIc.js";import"./ChartSizeDimensions-DUZwOmba.js";import"./zIndexSlice-CzTLX9Ul.js";import"./throttle-QmRScbE8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dtd08tsU.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./index-C-Q8rOGq.js";import"./axisSelectors-BjpwO9gg.js";import"./d3-scale-BqwCILGz.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./Page-Cj8EiXz7.js";import"./Line-CRuVEpLB.js";import"./Layer-CCEBq6CR.js";import"./Curve-VqOwF4YW.js";import"./types-BP4gFlyy.js";import"./step-CBLStXIf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tyjZKRCa.js";import"./Label-DQCQB4o-.js";import"./Text-qgns90rX.js";import"./DOMUtils-702B5NVq.js";import"./ZIndexLayer-DKEQN7E1.js";import"./useAnimationId-CWH9KLrM.js";import"./ActivePoints-DtOrXveG.js";import"./Dot-DcWN47E-.js";import"./RegisterGraphicalItemId-Cwz21l7x.js";import"./ErrorBarContext-BNzrl5kL.js";import"./GraphicalItemClipPath-C4jOZ0zB.js";import"./SetGraphicalItem-BARCofhG.js";import"./graphicalItemIdentity-dpRLTV2V.js";import"./ActiveShapeUtils-BOZkqM_j.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./XAxis-ByDDt0Jf.js";import"./CartesianAxis-GRhBxYn8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Bv-UC-Jk.js";import"./Legend-mJb9ktQo.js";import"./Symbols-BWwzL4bj.js";import"./symbol-D3PRm8fB.js";import"./useElementOffset-CjumVQtv.js";import"./uniqBy-CdIGlW57.js";import"./iteratee-F9gv8B-y.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

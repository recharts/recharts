import{u as n,j as e}from"./index-CaiJHQvi.js";import{M as o,C as h}from"./blocks-BzytFetA.js";import{C as d,W as s}from"./dimensions.stories-UQO_Pk5S.js";import"./iframe-Bw423yT3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./index-Dzxogdh4.js";import"./ChartSizeDimensions-tl5-H79F.js";import"./zIndexSlice-C0Ur0qQv.js";import"./throttle-DoQ6jmeU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DecYMRDs.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cz46LnAr.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./axisSelectors-DvFF09lq.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./Page-Cj8EiXz7.js";import"./Line-BMKWlib2.js";import"./Layer-D4oXIaGo.js";import"./Curve-ROVFdQ-G.js";import"./types-Ds-DwS6F.js";import"./step-BJpmgVSO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hYYLyghD.js";import"./Label-CDuT1dKE.js";import"./Text-C_UyMP2R.js";import"./DOMUtils-B-o7bCMD.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./ZIndexLayer-BMLxUbw3.js";import"./useAnimationId-Ys0eqrlL.js";import"./ActivePoints-Di-vyWVm.js";import"./Dot-BzofvkeI.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./ErrorBarContext-BUSWNFOb.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getRadiusAndStrokeWidthFromDot-BZS_5G6a.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DoB4s5YX.js";import"./CartesianAxis-Crdg7aw6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-OVaFJ7CI.js";import"./Legend-BDuWMGHQ.js";import"./Symbols-BuIuBD8Q.js";import"./symbol-CqIeDhWk.js";import"./useElementOffset-ChV6ndkv.js";import"./uniqBy-DXUX_vZx.js";import"./iteratee-CM1mNqCJ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};

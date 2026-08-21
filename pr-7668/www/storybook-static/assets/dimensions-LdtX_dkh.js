import{u as n,j as e}from"./index-BOJsHOZG.js";import{M as o,C as h}from"./blocks-BBP0AmId.js";import{C as d,W as s}from"./dimensions.stories-DgwbJu-y.js";import"./iframe-CZFgSFnm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DX3tFi2I.js";import"./index-BJs7iDzc.js";import"./index-CW1iMe2m.js";import"./ChartSizeDimensions-BlqvFNTJ.js";import"./zIndexSlice-CTISp4tv.js";import"./throttle-DrSRHMPG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-e55Twtbt.js";import"./isWellBehavedNumber-DUdaibLy.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DvkJAhLc.js";import"./RechartsWrapper-DvRLJ5Qk.js";import"./index-DYK-T1Xx.js";import"./axisSelectors-LF1AULtu.js";import"./d3-scale-Brc85VvE.js";import"./renderedTicksSlice-D-MBTj4C.js";import"./CartesianChart-PmCypDgu.js";import"./chartDataContext-CvAeifx3.js";import"./CategoricalChart-dvJV-_Rh.js";import"./Page-Cj8EiXz7.js";import"./Line-CA3HAZ8y.js";import"./Layer-C6R-wMgD.js";import"./Curve-BnTjqqkL.js";import"./types-C_Z_MS2b.js";import"./step-CY8jqLlm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmVERa1o.js";import"./Label-CMeQeDmk.js";import"./Text-Dna8Rnzv.js";import"./DOMUtils-Ba5sbmYY.js";import"./useId-C0SVDnoD.js";import"./useBackwardsCompatibleTheme-xKYPlRvL.js";import"./ZIndexLayer-Xe1tLTY7.js";import"./useAnimationId-DM0V1ULk.js";import"./ActivePoints-B418SJ-y.js";import"./Dot-CWSN_a_c.js";import"./RegisterGraphicalItemId-CA2MokDU.js";import"./ErrorBarContext-BupfeAir.js";import"./GraphicalItemClipPath-BA_NbQWw.js";import"./SetGraphicalItem-DBiVF70L.js";import"./getRadiusAndStrokeWidthFromDot-195plUkS.js";import"./ActiveShapeUtils-CWrsW3HO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BfXelSpG.js";import"./CartesianAxis-XGvO_fDW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DRz0mmf0.js";import"./Legend-D3th5Mpv.js";import"./Symbols-Df8fkzhw.js";import"./symbol-zDkx850_.js";import"./useElementOffset-Dvg0rJ3O.js";import"./uniqBy-CbHkWAW5.js";import"./iteratee-BfOUB73k.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

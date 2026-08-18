import{u as n,j as e}from"./index-CB8HYzfC.js";import{M as o,C as h}from"./blocks-fzoNPrFx.js";import{C as d,W as s}from"./dimensions.stories-DWwOM9LE.js";import"./iframe-BqyXYbfO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bv49Pgrm.js";import"./index-B9uHeZTZ.js";import"./index-bCeEKDHC.js";import"./ChartSizeDimensions-3pKah8jW.js";import"./zIndexSlice-B01GboJR.js";import"./throttle-CuHL7VMX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3i-Tg0K.js";import"./isWellBehavedNumber-BRVst2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B7zFkt6v.js";import"./RechartsWrapper-D3v9xwCM.js";import"./index-CVfSI7O7.js";import"./axisSelectors-DpUYmlyC.js";import"./d3-scale-YUujBWq4.js";import"./renderedTicksSlice-7sTJiycY.js";import"./CartesianChart-0syXRV9F.js";import"./chartDataContext-D6yTmy2l.js";import"./CategoricalChart-RVKqvA7y.js";import"./Page-Cj8EiXz7.js";import"./Line-CA8PuEEu.js";import"./Layer-cG34Tdrq.js";import"./Curve-B6fu5Ruc.js";import"./types-B7ADV__L.js";import"./step-B3dTMrU0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CpV-NRBb.js";import"./Label-oragi0Kj.js";import"./Text-DOHx7LgO.js";import"./DOMUtils-btZL_iKn.js";import"./useBackwardsCompatibleTheme-BlCAIHy1.js";import"./ZIndexLayer-rhqIudSr.js";import"./useAnimationId-CK12bq4f.js";import"./ActivePoints-CiwZFN_M.js";import"./Dot-C0u3Avpo.js";import"./RegisterGraphicalItemId-Ck8ajZX3.js";import"./ErrorBarContext-BGgmDGm5.js";import"./GraphicalItemClipPath-DDxOeQm3.js";import"./SetGraphicalItem-DNxW0R1P.js";import"./getRadiusAndStrokeWidthFromDot-HXIFwiLB.js";import"./ActiveShapeUtils-1I6X1s88.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-0w0QIVSx.js";import"./CartesianAxis-DueGTPVP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CPeQqwFp.js";import"./Legend--uIoEOCQ.js";import"./Symbols-DnBmXhc1.js";import"./symbol-IA9FIS8n.js";import"./useElementOffset-DExtgCNc.js";import"./uniqBy-DKsxBLj8.js";import"./iteratee-I9oDQ_jw.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-Bo_jGCkb.js";import{M as o,C as h}from"./blocks-BWQ-Fe2b.js";import{C as d,W as s}from"./dimensions.stories-Dvk8eEwK.js";import"./iframe-BMoFzqLG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./index-CCv9Fz61.js";import"./ChartSizeDimensions-C8jUkAF6.js";import"./zIndexSlice-D2eW6ynO.js";import"./throttle-CMa4JKLf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart--18maMFA.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./axisSelectors-DYuvxT8H.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./CategoricalChart-e4TDW-CP.js";import"./Page-Cj8EiXz7.js";import"./Line-DfDRU7Tf.js";import"./Layer-BF07rJeJ.js";import"./Curve-Bj9SvhiQ.js";import"./types-DnNtWK32.js";import"./step-CmTsx3cD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DtpOcSHY.js";import"./Label-C2sliePj.js";import"./Text-CWW6I1yN.js";import"./DOMUtils-zP2FF411.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./useAnimationId-DECqttvr.js";import"./ActivePoints-CGL78uWV.js";import"./Dot-BKpqXb-J.js";import"./RegisterGraphicalItemId-BWT7SWLX.js";import"./ErrorBarContext-gECkpo90.js";import"./GraphicalItemClipPath-4HDTpBwl.js";import"./SetGraphicalItem-4-n_cNOG.js";import"./getRadiusAndStrokeWidthFromDot-Dr3SeLyV.js";import"./ActiveShapeUtils-Deesho2z.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CPrZIqhG.js";import"./CartesianAxis-DOx4dBf7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DTyCZ8Eb.js";import"./Legend-SafvJPhT.js";import"./Symbols-Bp-WiaMS.js";import"./symbol-DJVN4EQ-.js";import"./useElementOffset-DpDs9Wpk.js";import"./uniqBy-DxO4yvi9.js";import"./iteratee-D8knRFDr.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

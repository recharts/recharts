import{u as n,j as e}from"./index-Bam1H2a2.js";import{M as o,C as h}from"./blocks-DrF9JHuw.js";import{C as d,W as s}from"./dimensions.stories-BnD2at-p.js";import"./iframe-CWlxxFHy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./index-uNGw9-ET.js";import"./ChartSizeDimensions-CjviVXKx.js";import"./zIndexSlice-eChv8v5o.js";import"./throttle-Cuwp_Om4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-euduWCYe.js";import"./RechartsWrapper-B211gnQK.js";import"./axisSelectors-CY4U4PmW.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./Page-Cj8EiXz7.js";import"./Line-85VhExuj.js";import"./Layer-bfSBtv71.js";import"./Curve-DlnhjhNv.js";import"./types-CjEkwpQR.js";import"./step-ClKKiZTa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-mLTl2k4L.js";import"./Label-DN7T9GpD.js";import"./Text-th2Jn0HQ.js";import"./DOMUtils-Cr7AYV1x.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./useAnimationId-BVaZGbnp.js";import"./ActivePoints-DyM9bM1H.js";import"./Dot-CVl6koMA.js";import"./RegisterGraphicalItemId-C2KKr6Fw.js";import"./ErrorBarContext-BArOb86o.js";import"./GraphicalItemClipPath-BZhOYfMs.js";import"./SetGraphicalItem-tjuShIDU.js";import"./getRadiusAndStrokeWidthFromDot-DJ40vw26.js";import"./ActiveShapeUtils-CN9JJwYa.js";import"./useGraphicalItemIdentity-BaE4xim7.js";import"./XAxis-CaG1n6yG.js";import"./CartesianAxis-I-oV71yY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-DLav1J7f.js";import"./Legend-C22flD7Y.js";import"./Symbols-rlV4L3Ga.js";import"./symbol-ECeymSrI.js";import"./useElementOffset-CpS3sFWC.js";import"./uniqBy-C1aAohnG.js";import"./iteratee-CYY7QzLS.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

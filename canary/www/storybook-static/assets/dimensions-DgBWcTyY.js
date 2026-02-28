import{j as e}from"./jsx-runtime-BQ90IwzR.js";import{useMDXComponents as n}from"./index-DJ0dOtz4.js";import{M as o,C as h}from"./blocks-CwPlukp0.js";import{C as d,W as s}from"./dimensions.stories-vAlP8Soz.js";import"./iframe-DU58YqXX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D73aQCF4.js";import"./ChartSizeDimensions-DA9JA8Lt.js";import"./arrayEqualityCheck-CPm_ZzNM.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvRsDILo.js";import"./immer-CCty7oPO.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CTPFUUjo.js";import"./RechartsWrapper-DCRQCspP.js";import"./index-CAIf49bT.js";import"./hooks-BmHTCWu2.js";import"./axisSelectors-C_NSCJzf.js";import"./d3-scale-D66UOGri.js";import"./zIndexSlice-D06B5CMj.js";import"./renderedTicksSlice-C5yXBQp1.js";import"./CartesianChart-2UpvhmGK.js";import"./chartDataContext-C5MRHpth.js";import"./CategoricalChart-CnCv7GAg.js";import"./Line-DCkrY6R_.js";import"./Layer-D-R-VvL4.js";import"./ReactUtils-qI72OB32.js";import"./Label-1-xmv-OU.js";import"./Text-BeOHNxA6.js";import"./DOMUtils--vhf8olX.js";import"./ZIndexLayer-DrZECD3r.js";import"./ActivePoints-C9rhzLLD.js";import"./Dot-24Sl23lT.js";import"./types-BRRO6f_Y.js";import"./RegisterGraphicalItemId-BSQp396K.js";import"./ErrorBarContext-CYZNadIi.js";import"./GraphicalItemClipPath-D9N1r5H3.js";import"./SetGraphicalItem-XqVw1NHm.js";import"./useAnimationId-hGktevsz.js";import"./getRadiusAndStrokeWidthFromDot-XWXBClrt.js";import"./ActiveShapeUtils-CmjzNmwX.js";import"./isPlainObject-CFpSvqCv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiaAAf2E.js";import"./Trapezoid-BQne9xH8.js";import"./Sector-NGcPnez7.js";import"./Symbols-CeuFr1Zm.js";import"./symbol-B759Rj27.js";import"./step-DaNDWZj1.js";import"./Curve-CdKz9IVe.js";import"./XAxis-CqmwPZ8Q.js";import"./CartesianAxis-C18m4Bo_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DIF8wKFU.js";import"./Legend-965RzLLJ.js";import"./useElementOffset-CRKDW-Si.js";import"./uniqBy-B_be_HkH.js";import"./iteratee-Da9ZVL55.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

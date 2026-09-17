import{u as n,j as e}from"./index-BVqpBczP.js";import{M as o,C as h}from"./blocks-DIZC9UiM.js";import{C as d,W as s}from"./dimensions.stories-BPmXu7e1.js";import"./iframe-ZxQmCvwy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPMVDNb6.js";import"./index-BDLiH1an.js";import"./index-BS98XUV2.js";import"./ChartSizeDimensions-CBTyV1zF.js";import"./zIndexSlice-RPdwBP9f.js";import"./throttle-DmwvZWHb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DpipilcU.js";import"./isWellBehavedNumber-sAavL0dG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BATf_pxJ.js";import"./RechartsWrapper-BdNFCoW6.js";import"./axisSelectors-BWbFpFtg.js";import"./d3-scale-CzTTxW2Z.js";import"./index-BWm52sKa.js";import"./renderedTicksSlice-BYZOrskl.js";import"./index-CABC13wD.js";import"./CartesianChart-SPk4tXhy.js";import"./chartDataContext-DINqA_zr.js";import"./CategoricalChart-CFCUhC_p.js";import"./Page-Cj8EiXz7.js";import"./Line-BzfmnxQQ.js";import"./Layer-B0D5UKjQ.js";import"./Curve-Bnqw1l-2.js";import"./types-CAEm0sG6.js";import"./step-BZUQ-l0Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DNQqwiG9.js";import"./Label-jkryqT5d.js";import"./Text-BO32xjCe.js";import"./DOMUtils-CnJnyfSI.js";import"./useId-CDbRoZtb.js";import"./useBackwardsCompatibleTheme-rwc4Ui1J.js";import"./ZIndexLayer-CHR5usSt.js";import"./useAnimationId-BzN7QWtj.js";import"./ActivePoints-CZGIVnLi.js";import"./Dot-D5ITAbBb.js";import"./RegisterGraphicalItemId-TiGOVH9L.js";import"./ErrorBarContext-DUW_9KGf.js";import"./GraphicalItemClipPath-BQlyOKfz.js";import"./SetGraphicalItem-BoNO2rRn.js";import"./getRadiusAndStrokeWidthFromDot-DYQBE5cH.js";import"./ActiveShapeUtils-C_YMBjW3.js";import"./useGraphicalItemIdentity-BCt8bdV6.js";import"./XAxis-Bl2tbEmW.js";import"./CartesianAxis-D6DZF6-J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-B8sk4GXn.js";import"./Legend-CZaLFHxf.js";import"./Symbols-DyrvYund.js";import"./symbol-8zizbiR8.js";import"./useElementOffset-CWsrqzYy.js";import"./uniqBy-Blp6aEMv.js";import"./iteratee-C4SJTDea.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

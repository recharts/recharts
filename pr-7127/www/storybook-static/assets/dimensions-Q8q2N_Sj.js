import{j as e}from"./jsx-runtime-BOOljMWN.js";import{useMDXComponents as n}from"./index-DHk8KsLm.js";import{M as o,C as h}from"./blocks-9THzIe0k.js";import{C as d,W as s}from"./dimensions.stories--6Ox3uEi.js";import"./iframe-DhSnVUUY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AtwlN2q9.js";import"./ChartSizeDimensions-DmcIrBX8.js";import"./arrayEqualityCheck-ItSr43uT.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDCkM2ln.js";import"./immer-ffnfnJI7.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CygvqBNp.js";import"./RechartsWrapper-yZud87Hm.js";import"./index-CW6mkywG.js";import"./hooks-DwPTB9f-.js";import"./axisSelectors-DHZbKxu8.js";import"./d3-scale-Ct4dajvC.js";import"./zIndexSlice-CmnFYU-3.js";import"./renderedTicksSlice-aQirpCka.js";import"./CartesianChart-ctNiBsLN.js";import"./chartDataContext-Bt56Um39.js";import"./CategoricalChart-ChCgxSjg.js";import"./Line-B0U88ML_.js";import"./Layer-DqA8yJsy.js";import"./ReactUtils-BaLETgkD.js";import"./Label-CbPieNct.js";import"./Text-CBNPQM7i.js";import"./DOMUtils-D7qsrRP2.js";import"./ZIndexLayer-qqef8KVB.js";import"./ActivePoints-BvftcU8L.js";import"./Dot-DMOGBFVp.js";import"./types-B9YiKk4f.js";import"./RegisterGraphicalItemId-BW5epSWy.js";import"./ErrorBarContext-CqudBFLS.js";import"./GraphicalItemClipPath-DatVZLDO.js";import"./SetGraphicalItem-C2kFHRye.js";import"./useAnimationId-DocxG_ZJ.js";import"./getRadiusAndStrokeWidthFromDot-DsTA79K5.js";import"./ActiveShapeUtils-BCO2XZGI.js";import"./isPlainObject-DGz3R_rk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2VqkgWSF.js";import"./Trapezoid-DWk3aWgj.js";import"./Sector-D1ZNHkRR.js";import"./Symbols-Dh3_mjCF.js";import"./symbol-DWYWkMAQ.js";import"./step-CbaapRre.js";import"./Curve-BOb3x1Vv.js";import"./XAxis-BK9sGi8f.js";import"./CartesianAxis-wTVaN_w2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CXFxK72j.js";import"./Legend-BbSGbk_D.js";import"./useElementOffset-CdKfT37L.js";import"./uniqBy-zkYuhEQW.js";import"./iteratee-lYsZgTBf.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

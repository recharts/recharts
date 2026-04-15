import{j as e}from"./jsx-runtime-BF30Ei29.js";import{useMDXComponents as n}from"./index-C5s2K0wU.js";import{M as o,C as h}from"./blocks-DkH2JgrA.js";import{C as d,W as s}from"./dimensions.stories-Cr1aU9fG.js";import"./iframe-BXY1ZxMw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LDL5x1G-.js";import"./ChartSizeDimensions-BO7SfmPn.js";import"./arrayEqualityCheck-DcA-4E3i.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-HKPb9Y.js";import"./immer-BIFs4B-N.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DqLYQ7wE.js";import"./RechartsWrapper-D-QVGmW9.js";import"./index-3g6pKTEF.js";import"./hooks-BMNZaKTW.js";import"./axisSelectors-DujQk2mS.js";import"./d3-scale-CVGboYSt.js";import"./zIndexSlice-Ce-rItNm.js";import"./renderedTicksSlice-9b_yiBc1.js";import"./CartesianChart-RUN03By5.js";import"./chartDataContext-ktNnxBdo.js";import"./CategoricalChart-BRmwchnd.js";import"./Page-Cj8EiXz7.js";import"./Line-njRk575c.js";import"./Layer-CSlcUsPH.js";import"./ReactUtils-jvyP91Ey.js";import"./Label-DBppt7lW.js";import"./Text-khHsIcyp.js";import"./DOMUtils-DRNBButz.js";import"./ZIndexLayer-NUbH9u4P.js";import"./ActivePoints-ChJ6-xNu.js";import"./Dot-fq0sMsij.js";import"./types-6ITthLWo.js";import"./RegisterGraphicalItemId-Bn5vI_pp.js";import"./ErrorBarContext-D19syQ9l.js";import"./GraphicalItemClipPath-BRuIkpbH.js";import"./SetGraphicalItem-CZGya2Pz.js";import"./useAnimationId-CLslbl-_.js";import"./getRadiusAndStrokeWidthFromDot-BYlpFOLw.js";import"./ActiveShapeUtils-DDyUax94.js";import"./isPlainObject-CCgYT477.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSTpqGq.js";import"./Trapezoid-OWqREu8T.js";import"./Sector-DCuOMg7b.js";import"./Symbols-DIWprCIn.js";import"./symbol-CgR1B8Aj.js";import"./step-BxTVkj_h.js";import"./Curve-yQu46FzN.js";import"./XAxis-C1AEexQD.js";import"./CartesianAxis-Cu56U0d6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-BQsY6Xkn.js";import"./Legend-DiXCz_iN.js";import"./useElementOffset-OY-49NtZ.js";import"./uniqBy-COQJy0N9.js";import"./iteratee-g6hWHTNZ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{j as e}from"./jsx-runtime-zfBQddGE.js";import{useMDXComponents as n}from"./index-Mz9OM0oQ.js";import{M as o,C as h}from"./blocks-DFqUpKdW.js";import{C as d,W as s}from"./dimensions.stories-SXuhE-01.js";import"./iframe-Dr9hlnt0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dj7LSIr-.js";import"./ChartSizeDimensions-DlMrTXA2.js";import"./arrayEqualityCheck-dGE5_Gdx.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcfXVXAk.js";import"./immer-B0cgghQh.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C3ymMAIf.js";import"./RechartsWrapper-DInH99Th.js";import"./index-IE9LPIX3.js";import"./hooks-CB3Bi2qN.js";import"./axisSelectors-BElW-4uO.js";import"./d3-scale-Kw50_LDj.js";import"./zIndexSlice-DGOFW2aZ.js";import"./renderedTicksSlice-CKBM6rCx.js";import"./CartesianChart-DxJdttbu.js";import"./chartDataContext-no4gboHT.js";import"./CategoricalChart-BlqKECmV.js";import"./Line-DLj2NM4I.js";import"./Layer-Dau6qZl4.js";import"./ReactUtils-DLDWRsmH.js";import"./Label-Cwqjf1nY.js";import"./Text-5hzj-3E2.js";import"./DOMUtils-CHMlhwBF.js";import"./ZIndexLayer-bo4FLnP8.js";import"./ActivePoints-BWlIiscJ.js";import"./Dot-G9S3vDXU.js";import"./types-BT9nDPZN.js";import"./RegisterGraphicalItemId-DaJnSa8q.js";import"./ErrorBarContext-DFPKgud5.js";import"./GraphicalItemClipPath-C96TQI3r.js";import"./SetGraphicalItem-13vPI63j.js";import"./useAnimationId-DF7fT-LB.js";import"./getRadiusAndStrokeWidthFromDot-IhVKPv-0.js";import"./ActiveShapeUtils-Zy3mhGJ3.js";import"./isPlainObject-CA9cA3dI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0CBW5qs.js";import"./Trapezoid-B4y_3kG1.js";import"./Sector-B2l0FABS.js";import"./Symbols-DjCtNUtk.js";import"./symbol-DBg6OtuT.js";import"./step-0gc20F8a.js";import"./Curve-B9wE7HPg.js";import"./XAxis-DVCekQJU.js";import"./CartesianAxis-zfjDIuu9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-oVvY9CD_.js";import"./Legend-D_ZWZENa.js";import"./useElementOffset-C8Y7cVjc.js";import"./uniqBy-CKd_6bHf.js";import"./iteratee-BGMuKn8v.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

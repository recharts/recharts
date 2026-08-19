import{u as n,j as e}from"./index-DcjLet2T.js";import{M as o,C as h}from"./blocks-C_C8bKjI.js";import{C as d,W as s}from"./dimensions.stories-ClTaWkFY.js";import"./iframe-BxezfZww.js";import"./preload-helper-Dp1pzeXC.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./index-jirKooN3.js";import"./ChartSizeDimensions-BIhGwhB2.js";import"./zIndexSlice-HcjonX2F.js";import"./throttle-kDZpq7hG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-lZLISn57.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./axisSelectors-Cqbxg7Vx.js";import"./d3-scale-D269iDuq.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./CategoricalChart-BhuBu3pE.js";import"./Page-Cj8EiXz7.js";import"./Line-C7LVm8Rz.js";import"./Layer-B7Lou8N3.js";import"./Curve-D-Z_q46N.js";import"./types-CqtRzysP.js";import"./step-Dc9pogTJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-szXuAxdz.js";import"./Label-Cwi7qDe-.js";import"./Text-BDhYhtIl.js";import"./DOMUtils-DML8OagK.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./ZIndexLayer-DCAxC-a3.js";import"./useAnimationId-DlB6WviS.js";import"./ActivePoints-B8-Z2u2e.js";import"./Dot-_cBoNrM4.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./ErrorBarContext-1IA4vt79.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getRadiusAndStrokeWidthFromDot-BQG6lvrP.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CiqbzTox.js";import"./CartesianAxis-DN3oreA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CLrmrnP-.js";import"./Legend-BdxBUo-d.js";import"./Symbols-pAbRtZ_g.js";import"./symbol-Env5CKNw.js";import"./useElementOffset-BSnhPvQn.js";import"./uniqBy-CZlT9ctG.js";import"./iteratee-B_pdIMYS.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-tPXvq9g-.js";import{M as o,C as h}from"./blocks-Cv2GR6ZU.js";import{C as d,W as s}from"./dimensions.stories-C83B4eSP.js";import"./iframe-B_nNZpI2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CvC1anYi.js";import"./index-CLDy2H7V.js";import"./index-CMcdxE-j.js";import"./ChartSizeDimensions-B4AYpReI.js";import"./zIndexSlice-FViTDxbD.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BCFRFaLp.js";import"./throttle-CfowHFSP.js";import"./ComposedChart-IJuZ_x55.js";import"./RechartsWrapper-C-v3LlOW.js";import"./axisSelectors-BlrbKtsJ.js";import"./polarAxisSelectors-c40A3UY1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BP2r_61E.js";import"./index-D3rZTjme.js";import"./renderedTicksSlice-BZkCDNTa.js";import"./index-CkI1O38Z.js";import"./fillDefinitions-BvN15Ps2.js";import"./CartesianChart-Ct6HzlQ7.js";import"./ZIndexPortal-fcfY6DBt.js";import"./CategoricalChart-CN7dS280.js";import"./Page-Cj8EiXz7.js";import"./Line-CXhhFX8j.js";import"./Layer-BI_5R4V_.js";import"./Curve-CDY88Bak.js";import"./types-CwUR8ti8.js";import"./step-Bq7ByKAT.js";import"./path-DyVhHtw_.js";import"./LabelList-DxewBo1N.js";import"./Label-CETIJz5j.js";import"./Text-D-JNnNjs.js";import"./DOMUtils-adSDEv62.js";import"./ZIndexLayer-DP7ICro2.js";import"./ActivePoints-2YuDFMtV.js";import"./Dot-DlBvAs_S.js";import"./activeStyles-BsBbQeVt.js";import"./useAnimationId-DARA-gCu.js";import"./dataEntryStyles-RBGB6YIO.js";import"./Symbols-zxsCudAN.js";import"./symbol-CQ43VyHp.js";import"./ErrorBarContext-DhTGqk3o.js";import"./SetGraphicalItem-BWi71ya4.js";import"./getRadiusAndStrokeWidthFromDot-C7tNLDQS.js";import"./ActiveShapeUtils-B2gG84cu.js";import"./useEffectiveDataKey-BKhq6vYl.js";import"./XAxis-BnGisaM6.js";import"./CartesianAxis-CmpohTUe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-2XrZ_LwE.js";import"./Legend-ZqNJUdO7.js";import"./useElementOffset-Q6NphwPQ.js";import"./uniqBy-B6gg-PM7.js";import"./iteratee-pGgkjcUZ.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

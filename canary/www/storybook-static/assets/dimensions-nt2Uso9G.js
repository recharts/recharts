import{u as n,j as e}from"./index-D1jdr3uY.js";import{M as o,C as h}from"./blocks-B0_vKpKh.js";import{C as d,W as s}from"./dimensions.stories-82FnXCez.js";import"./iframe-1WG2GaGK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5AmNG6XU.js";import"./index-B9GM_nGd.js";import"./index-4UOu-PIF.js";import"./ChartSizeDimensions-CHDGoxVE.js";import"./zIndexSlice-Cov-NdD7.js";import"./throttle-CilGSGoA.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B25CKbLH.js";import"./isWellBehavedNumber-B8fKCwi6.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-oCH7LOuc.js";import"./RechartsWrapper-DEOyl0D-.js";import"./index-VHVhx1s3.js";import"./renderedTicksSlice-yo2RGDNB.js";import"./axisSelectors-Z8eCsImY.js";import"./d3-scale-CmojMi_E.js";import"./CartesianChart-Zn47P4p1.js";import"./chartDataContext-D8DLudE3.js";import"./CategoricalChart-SqRjK-fv.js";import"./Page-Cj8EiXz7.js";import"./Line-B4LmlSzQ.js";import"./Layer-DBIGyDPn.js";import"./Curve-E4cJetkR.js";import"./types-CoEQwN0Z.js";import"./step-BCYuq7V7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-4pikexb5.js";import"./Label-C04bXC5p.js";import"./Text-Dz3dqWjs.js";import"./DOMUtils-BEiFehcN.js";import"./ZIndexLayer-DViTPcza.js";import"./useAnimationId-CnlBu4wu.js";import"./ActivePoints-QnPfRyyM.js";import"./Dot-DPmzUGmI.js";import"./RegisterGraphicalItemId-kBJx_8Si.js";import"./ErrorBarContext-odKApO7t.js";import"./GraphicalItemClipPath-CPz3ISZ8.js";import"./SetGraphicalItem-C1oEpLce.js";import"./getRadiusAndStrokeWidthFromDot-Be8-hX5d.js";import"./ActiveShapeUtils--OE9DBaA.js";import"./XAxis-B48KuXEj.js";import"./CartesianAxis-CtKdIdzU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DhndnEIx.js";import"./Legend-Duop5GXq.js";import"./Symbols-BlVo0R4U.js";import"./symbol-BnNCQHpU.js";import"./useElementOffset-CzZdzVLP.js";import"./uniqBy-gRFmhWu-.js";import"./iteratee-CT0EjMPh.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

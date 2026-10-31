import{u as n,j as e}from"./index-xhTXkr8w.js";import{M as o,C as h}from"./blocks-Bp39nxow.js";import{C as d,W as s}from"./dimensions.stories-DcmtIGOn.js";import"./iframe-CIzVR-2-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./index-CJvlApl9.js";import"./ChartSizeDimensions-Ci9O64E8.js";import"./zIndexSlice-CJv9lj0d.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./throttle-g_l7Z0ZN.js";import"./ComposedChart-OQrQnGRh.js";import"./RechartsWrapper-CaOZ9lUC.js";import"./axisSelectors-mbotnnaX.js";import"./polarAxisSelectors-D4S23sJN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CN1jPZAK.js";import"./index-B0W9noqG.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./Page-Cj8EiXz7.js";import"./Line-kvdINkjm.js";import"./Layer-BlSvO1E4.js";import"./Curve-qbG6zMME.js";import"./fillDefinitions-CqtDfKww.js";import"./pageBackground-DPTEcMe3.js";import"./types-Ci0QqKEV.js";import"./step-Ma_Va74-.js";import"./path-DyVhHtw_.js";import"./LabelList-BTCEEH0Q.js";import"./Label-MgaHTNfc.js";import"./Text-D3Kha142.js";import"./DOMUtils-D-TrccP0.js";import"./ZIndexLayer-eeqaM0q4.js";import"./ActivePoints-Bfyy8a29.js";import"./Dot-CbUJ7B3N.js";import"./activeStyles-Dl0q6Ayx.js";import"./useAnimationId-BGu4RQqd.js";import"./dataEntryStyles-DxP76lNF.js";import"./Symbols-C3CTyIIX.js";import"./symbol-N4VmGah0.js";import"./ErrorBarContext-BpJZX0b6.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./getRadiusAndStrokeWidthFromDot-MbD5sGJN.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./XAxis-DuVjd9Cl.js";import"./CartesianAxis-B1xkqmAC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BM-BvKCY.js";import"./Legend-BOMw6FGf.js";import"./useElementOffset-39obdmvK.js";import"./uniqBy-BCkSDL9F.js";import"./iteratee-CRTQKy1O.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

import{j as e}from"./jsx-runtime-BLkz0U31.js";import{useMDXComponents as n}from"./index-DanKANhb.js";import{M as o,C as h}from"./blocks-CH8LtI9c.js";import{C as d,W as s}from"./dimensions.stories-DD97jKnZ.js";import"./iframe-BVwI20TL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DF74iLY4.js";import"./ChartSizeDimensions-BbmTVycb.js";import"./arrayEqualityCheck-q35BrOAH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-PLOIW3pB.js";import"./immer-CKYyw7I3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-gqrKgpX-.js";import"./RechartsWrapper-B1ccuPti.js";import"./index-aBikmdLQ.js";import"./hooks-DZGA03xX.js";import"./axisSelectors-BSaMlK4p.js";import"./d3-scale-DIeSkgov.js";import"./zIndexSlice-CZKvoJNP.js";import"./renderedTicksSlice-B3vc9s72.js";import"./CartesianChart-B_CBLak0.js";import"./chartDataContext-yFkjRteM.js";import"./CategoricalChart-CfauKlBd.js";import"./Page-Cj8EiXz7.js";import"./Line-Cg3NfnSh.js";import"./Layer-BmJqKhGN.js";import"./ReactUtils-dYl2dBOE.js";import"./Label-3Z8b_JxM.js";import"./Text-CcVVjC8p.js";import"./DOMUtils-aQVlIlVH.js";import"./ZIndexLayer-BZIg8_TU.js";import"./ActivePoints-B9lq65JZ.js";import"./Dot-DeCDV3Wq.js";import"./types-BIqLm2SJ.js";import"./RegisterGraphicalItemId-8gcs_7Mt.js";import"./ErrorBarContext-B-N11lls.js";import"./GraphicalItemClipPath-D5L_NXCW.js";import"./SetGraphicalItem-dD-mjnVv.js";import"./useAnimationId-CflNsn_7.js";import"./getRadiusAndStrokeWidthFromDot-DxWoOp80.js";import"./ActiveShapeUtils-BmYZJk21.js";import"./isPlainObject-BNX6QwlN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wHaT59.js";import"./Trapezoid-C9IYD2pk.js";import"./Sector-B_oSB9k0.js";import"./Symbols-DeCFkgF7.js";import"./symbol-D_Kx8u1W.js";import"./step-BWajvomR.js";import"./Curve-Bi3if4gv.js";import"./XAxis-Luh5ls2c.js";import"./CartesianAxis-lBH2hlA3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CkI3VGvs.js";import"./Legend-DNjSjV6V.js";import"./useElementOffset-apNPQ-9u.js";import"./uniqBy-DR9geMAy.js";import"./iteratee-Cr_uQpDg.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

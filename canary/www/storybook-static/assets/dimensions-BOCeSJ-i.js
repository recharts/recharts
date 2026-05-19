import{j as e}from"./jsx-runtime-2T_UgM1X.js";import{useMDXComponents as n}from"./index-BCqf2LuA.js";import{M as o,C as h}from"./blocks-Czl01Ru7.js";import{C as d,W as s}from"./dimensions.stories-C1UkjLgv.js";import"./iframe-cnMzeIJZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSSLHj9Z.js";import"./ChartSizeDimensions-BiOnGwPS.js";import"./arrayEqualityCheck-Diz3n3Hs.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BJEUNe0z.js";import"./immer-CEVvpJh0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DE00tkMR.js";import"./RechartsWrapper-9N_K_8iJ.js";import"./index-DcitoB6s.js";import"./hooks-DbNIViQP.js";import"./axisSelectors-JTUQkC92.js";import"./d3-scale-BBoVmphj.js";import"./zIndexSlice-KCSxBezz.js";import"./renderedTicksSlice-CttqerD-.js";import"./CartesianChart-v4VQpoAp.js";import"./chartDataContext-DuCir45J.js";import"./CategoricalChart-CbexdhNs.js";import"./Page-DPte-9pC.js";import"./Line-DNc1zXXh.js";import"./Layer-C2d9GIhW.js";import"./ReactUtils-Cvax_Sun.js";import"./Label-r0BVcH36.js";import"./Text-B1T-uFVD.js";import"./DOMUtils-8Qso1Lek.js";import"./ZIndexLayer-DgSpDsSo.js";import"./ActivePoints-BF7AMWlG.js";import"./Dot-CuCyL62Q.js";import"./types-CvoSDie4.js";import"./RegisterGraphicalItemId-CKB_e_SX.js";import"./ErrorBarContext-UNWUxf6o.js";import"./GraphicalItemClipPath-D7TSUiOR.js";import"./SetGraphicalItem-CHoRTGzo.js";import"./useAnimationId-BIlplKMu.js";import"./getRadiusAndStrokeWidthFromDot-D1rOBQHf.js";import"./ActiveShapeUtils-gcJ89Q36.js";import"./isPlainObject-D33aVf8i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXYQFJg_.js";import"./Trapezoid-D7-33KRZ.js";import"./Sector-q4gGdICU.js";import"./Symbols-zGmBpapW.js";import"./symbol-CLamLFlr.js";import"./step-CVx5i_lR.js";import"./Curve-BYV27PWl.js";import"./XAxis-CwsNG3zV.js";import"./CartesianAxis-DKEuyvio.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DADsk3iq.js";import"./Legend-2gzXd1Ey.js";import"./useElementOffset-DUk4lhRc.js";import"./uniqBy-CkPNX-V7.js";import"./iteratee-D0L7wdlz.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

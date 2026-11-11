import{u as n,j as e}from"./index-DiAKgMpX.js";import{M as o,C as h}from"./blocks-DlPa2toW.js";import{C as d,W as s}from"./dimensions.stories-C25YpHyA.js";import"./iframe-DnaR6K_4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DMJIF8QV.js";import"./index-BgXLdz_X.js";import"./index-D5D7Mpig.js";import"./ChartSizeDimensions-Di2_R0FL.js";import"./zIndexSlice-HRkrVJ9X.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xcCt7KB7.js";import"./throttle-CmS6TmXS.js";import"./ComposedChart-D_61vaIh.js";import"./RechartsWrapper-CRNPPXNH.js";import"./axisSelectors-BZT-kfpn.js";import"./polarAxisSelectors-vWLUjf8B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgvfK_mE.js";import"./index-DmfGSg0J.js";import"./renderedTicksSlice-C__KIq2D.js";import"./index-CnPRymSo.js";import"./fillDefinitions-BLgrfcm8.js";import"./CartesianChart-DnaM71J4.js";import"./chartDataContext-aWkBfLLJ.js";import"./CategoricalChart-CBGPntpg.js";import"./Page-Cj8EiXz7.js";import"./Line-BiRiWgrj.js";import"./Layer-BH_fCpBP.js";import"./Curve-nkhv6z3O.js";import"./types-Dnad10Cx.js";import"./step-CWTcW_Xz.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BUjHKeGu.js";import"./Label-BEN9LI2d.js";import"./Text-Lh_HZPYn.js";import"./ZIndexLayer-B1l-eSb9.js";import"./ActivePoints-BGPPfRbm.js";import"./Dot-CMPD7QLc.js";import"./activeStyles-WfyfS5co.js";import"./useAnimationId-DvJiKZIl.js";import"./Symbols-ClvwSwOZ.js";import"./symbol-QpFOfTRN.js";import"./ErrorBarContext-Bc_t8m9L.js";import"./SetGraphicalItem-DJe9VMWh.js";import"./getRadiusAndStrokeWidthFromDot-EcMggKSX.js";import"./ActiveShapeUtils-jyclsiEg.js";import"./useEffectiveDataKey-BtEPyz6t.js";import"./XAxis-JXd9qzo8.js";import"./CartesianAxis-CAMeCfaf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-wlK6hgFu.js";import"./Legend-31MAQyrk.js";import"./useElementOffset-1fsM2BLX.js";import"./uniqBy-BerQeZ6C.js";import"./iteratee-BOqKd5kc.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

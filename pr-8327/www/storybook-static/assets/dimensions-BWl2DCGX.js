import{u as n,j as e}from"./index-Daz8mY1n.js";import{M as o,C as h}from"./blocks-NzgjdODU.js";import{C as d,W as s}from"./dimensions.stories-C675o4RH.js";import"./iframe-2f2w1eP7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C9gJxZVs.js";import"./index-Ftdy-Ulz.js";import"./index-CczUKsLU.js";import"./ChartSizeDimensions-DSeJE-7i.js";import"./zIndexSlice-CjJDCeK0.js";import"./resolveDefaultProps-CGl449JI.js";import"./get-CjriyByo.js";import"./throttle-b8Y6KxZo.js";import"./ComposedChart-D2F9GDNP.js";import"./RechartsWrapper-BnbJXMBG.js";import"./axisSelectors-D3RC08dV.js";import"./polarAxisSelectors--pE3aPXl.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cc08ccIM.js";import"./index-6HopGisC.js";import"./renderedTicksSlice-Bc2u_l9O.js";import"./index-fhAHbGs4.js";import"./fillDefinitions-CQk55RgO.js";import"./CartesianChart-DpJaOFiF.js";import"./chartDataContext-D-ZzsBgN.js";import"./CategoricalChart-BX6OynRn.js";import"./Page-Cj8EiXz7.js";import"./Line-5fH2CL9K.js";import"./getRadiusAndStrokeWidthFromDot-AuV9g_SF.js";import"./Layer-BbIS_iGu.js";import"./Curve-mX17fPzt.js";import"./types-DRiMB5bf.js";import"./step-DiSsdMnX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CX3wrxT3.js";import"./Label-CxsWdT_n.js";import"./Text-Ch8rCVXH.js";import"./ZIndexLayer-UYyaz2px.js";import"./ActivePoints-Bv6CckHB.js";import"./Dot-BR-A3ViM.js";import"./activeStyles-fmqkmIUl.js";import"./useAnimationId-CyAJnZP0.js";import"./Symbols-fsmg-V93.js";import"./symbol-CyxV486p.js";import"./ErrorBarContext-BMvZMoH6.js";import"./SetGraphicalItem-12XTWwtV.js";import"./ActiveShapeUtils-C_e7Ka4v.js";import"./useEffectiveDataKey-BS5IJ5Is.js";import"./XAxis-CJ4nXsTf.js";import"./CartesianAxis-Bgf8P4J0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CAInNDnd.js";import"./Legend-K0ydl4Ax.js";import"./useElementOffset-lvJWvhjj.js";import"./uniqBy-DGZQQqxr.js";import"./iteratee-DNN7vJ8e.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

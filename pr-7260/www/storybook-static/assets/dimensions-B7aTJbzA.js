import{j as e}from"./jsx-runtime-D-Yvhyen.js";import{useMDXComponents as n}from"./index-CFUoSnkj.js";import{M as o,C as h}from"./blocks-w83BIt28.js";import{C as d,W as s}from"./dimensions.stories-CAVxi8GP.js";import"./iframe-8w6hSOb3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1JoQw62M.js";import"./ChartSizeDimensions-BdSUC2dN.js";import"./arrayEqualityCheck-BcSkIFjy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5HxWc-X.js";import"./immer-CNp4ouR9.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BXY8auWm.js";import"./RechartsWrapper-CJbnro3S.js";import"./index-DPLqP4cy.js";import"./hooks-DH6TblVT.js";import"./axisSelectors-DJq9vOix.js";import"./d3-scale-DocPO7gd.js";import"./zIndexSlice-xR0tBw_b.js";import"./renderedTicksSlice-CehvSBlF.js";import"./CartesianChart-Bnp5U_KI.js";import"./chartDataContext-CHxjExdF.js";import"./CategoricalChart-C3Pb3oJs.js";import"./Page-Cj8EiXz7.js";import"./Line-CsDzzK8s.js";import"./Layer-VbLV2S9I.js";import"./ReactUtils-RNztsw35.js";import"./Label-CbTww8i0.js";import"./Text-Bl83wQcg.js";import"./DOMUtils-DpW_Dxz8.js";import"./ZIndexLayer-BZxHBglw.js";import"./ActivePoints-c5MJ5OkK.js";import"./Dot-B5t0Roay.js";import"./types-DDD23-V2.js";import"./RegisterGraphicalItemId-vJe763ER.js";import"./ErrorBarContext-BMaq7Beg.js";import"./GraphicalItemClipPath-CMalPiCh.js";import"./SetGraphicalItem-CLkVCWjn.js";import"./useAnimationId-kYjgFxKg.js";import"./getRadiusAndStrokeWidthFromDot-BGkBgNmA.js";import"./ActiveShapeUtils-CG73MWk5.js";import"./isPlainObject-UED8GYmG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYl8kbGp.js";import"./Trapezoid-BJuggP_P.js";import"./Sector-C0Mog3VL.js";import"./Symbols-HCV45nTw.js";import"./symbol-DDPk1XI3.js";import"./step-CO9P-pBw.js";import"./Curve-DCDk8LQV.js";import"./XAxis-AMaL4weY.js";import"./CartesianAxis-B-EZEcGt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Bf2ShXUT.js";import"./Legend-B3iEZQNB.js";import"./useElementOffset-BS3k8eV3.js";import"./uniqBy-BKrVti4k.js";import"./iteratee-E4lAKDYa.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

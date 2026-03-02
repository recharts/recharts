import{j as e}from"./jsx-runtime-5UUP8wXk.js";import{useMDXComponents as n}from"./index-BLUc7T2Q.js";import{M as o,C as h}from"./blocks-CD7PaOJX.js";import{C as d,W as s}from"./dimensions.stories-DWFa4dHW.js";import"./iframe-iwEL6Umv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LsQkT41Y.js";import"./ChartSizeDimensions-CbGn3agI.js";import"./arrayEqualityCheck-BhZQM3Cp.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCVuQ-Yr.js";import"./immer-Cr1rPGS6.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CJS29MNc.js";import"./RechartsWrapper-9n0f-4bA.js";import"./index-DLdiPLRr.js";import"./hooks-BKxqdv6E.js";import"./axisSelectors-OvY2hZ5X.js";import"./d3-scale-DtoPWeCi.js";import"./zIndexSlice-B2mfmoSl.js";import"./renderedTicksSlice-C2RN1S42.js";import"./CartesianChart-awM32UjI.js";import"./chartDataContext-GxGvfaB0.js";import"./CategoricalChart-DS_wxFYH.js";import"./Line-BcSBVIXo.js";import"./Layer-blbwcMF4.js";import"./ReactUtils-sQyeAkyW.js";import"./Label-D1qeHozD.js";import"./Text-BGZOUB9S.js";import"./DOMUtils-DAlnAof2.js";import"./ZIndexLayer--muSGjRM.js";import"./ActivePoints-CCPY0FLb.js";import"./Dot-77XJxXcb.js";import"./types-CbKx0ZMp.js";import"./RegisterGraphicalItemId-DquoBc_j.js";import"./ErrorBarContext-CgjFOrMU.js";import"./GraphicalItemClipPath-DN8WJV-C.js";import"./SetGraphicalItem-7qCAbAa9.js";import"./useAnimationId-fTTqSava.js";import"./getRadiusAndStrokeWidthFromDot-CfubkPAe.js";import"./ActiveShapeUtils-C3Zx6KRY.js";import"./isPlainObject-Ddh5v3It.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXew48xc.js";import"./Trapezoid-CwbjlUlI.js";import"./Sector-CvrBUmaX.js";import"./Symbols-CT2be5W7.js";import"./symbol-Q9vYiwbO.js";import"./step-4pZgFtPk.js";import"./Curve-_1pLvIld.js";import"./XAxis-Dgqn4iEv.js";import"./CartesianAxis-BWMGM7_Q.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-umZBaGOr.js";import"./Legend-ClZYW9UT.js";import"./useElementOffset-DNqle7pd.js";import"./uniqBy-B3qdkWVD.js";import"./iteratee-D_7LxRKv.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

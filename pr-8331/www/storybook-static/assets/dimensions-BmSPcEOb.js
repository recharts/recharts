import{u as n,j as e}from"./index-CTBZD3tH.js";import{M as o,C as h}from"./blocks-CRqPyJpk.js";import{C as d,W as s}from"./dimensions.stories-CP7a2Ax7.js";import"./iframe-CjYP3ojB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./index-CvkAYdqK.js";import"./ChartSizeDimensions-CRSUm-EK.js";import"./zIndexSlice-Cy7CLl9Z.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./ComposedChart-Bpv-zdhu.js";import"./RechartsWrapper-UTu-k1rT.js";import"./axisSelectors-CPJSjERY.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-HdrCxTIi.js";import"./index-cwlxkqz2.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./Page-Cj8EiXz7.js";import"./Line-COY0vFQs.js";import"./getRadiusAndStrokeWidthFromDot-C_KRSABn.js";import"./Layer-BI-kTcme.js";import"./Curve-CNaKNyZA.js";import"./types-D4qLdpQF.js";import"./step-BZQ3UPaP.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BvceDOIn.js";import"./Label-CaJS6zCA.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./ActivePoints-D4hUXiIf.js";import"./Dot-BzVdtL2Q.js";import"./activeStyles-D9A5DeQH.js";import"./useAnimationId-C3slNkW8.js";import"./Symbols-CAjbkOs6.js";import"./symbol-Lqckysps.js";import"./ErrorBarContext-DD39jyt1.js";import"./SetGraphicalItem-B_iWrnd9.js";import"./ActiveShapeUtils-DicChUyh.js";import"./useEffectiveDataKey-BSYT-tLD.js";import"./XAxis-Blplutoc.js";import"./CartesianAxis-5Yui6JuQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-Bt-Cr0Xc.js";import"./Legend-25wTq1-O.js";import"./getUniqPayload-DT0aDQpX.js";import"./uniqBy-Bdlm7mbE.js";import"./iteratee-DlQmRZQR.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

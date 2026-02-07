import{j as e}from"./jsx-runtime-Cs3A6X8H.js";import{useMDXComponents as n}from"./index-B6Fkp2aZ.js";import{M as h,C as o}from"./blocks-m4Mp_PRj.js";import{C as d,W as s}from"./dimensions.stories-B4BAePqO.js";import"./iframe-DhLWPZ06.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DvWkBSj_.js";import"./ChartSizeDimensions-C4EMLUii.js";import"./arrayEqualityCheck-CC1O7uMi.js";import"./resolveDefaultProps-Xflu8RP3.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DqQWtOY7.js";import"./RechartsWrapper-DUMd0Jc6.js";import"./hooks-BVelaaLp.js";import"./axisSelectors-DMZtzusH.js";import"./zIndexSlice-DphDhRje.js";import"./CartesianChart-XrmXSdkV.js";import"./chartDataContext-D-yHh9FI.js";import"./CategoricalChart-CZEP5E7E.js";import"./Line-DV1Pc56J.js";import"./Layer-DYv-jvxI.js";import"./ReactUtils-BtUFOzkx.js";import"./Label-FSHYxmdz.js";import"./Text-DO5FmLPB.js";import"./DOMUtils-CqWLBihg.js";import"./ZIndexLayer-DD1HiNcR.js";import"./ActivePoints-DprIqvLX.js";import"./Dot-BoxzeF_p.js";import"./types-C2AjUdZP.js";import"./RegisterGraphicalItemId-DKys76eX.js";import"./ErrorBarContext-D2Y9d5di.js";import"./GraphicalItemClipPath-CuDzi9bq.js";import"./SetGraphicalItem-BLAlPe4G.js";import"./useAnimationId-C9SVwlUf.js";import"./getRadiusAndStrokeWidthFromDot-Lki9i3qE.js";import"./ActiveShapeUtils-BM0r3s-g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZfrdEyG.js";import"./Trapezoid-C38TpHLa.js";import"./Sector-DNph1k80.js";import"./Symbols-BmApJZ92.js";import"./Curve-CrhEQPlh.js";import"./XAxis-DHBBBHf5.js";import"./CartesianAxis-DBjvK8IT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CnLq9B_y.js";import"./Legend-D5X8NU7K.js";import"./useElementOffset-BcoburPK.js";import"./iteratee-B1pJwrfy.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function he(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{he as default};

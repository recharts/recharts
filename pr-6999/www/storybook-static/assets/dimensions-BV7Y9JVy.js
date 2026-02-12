import{j as e}from"./jsx-runtime-i1yV5TI8.js";import{useMDXComponents as n}from"./index-Dz-qdaJO.js";import{M as h,C as o}from"./blocks-C1F8ZJHI.js";import{C as d,W as s}from"./dimensions.stories-CBRwJ5b0.js";import"./iframe-CMiM_Qgn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Y0M71Of.js";import"./ChartSizeDimensions-DBnJjpf_.js";import"./arrayEqualityCheck-_vyoivmV.js";import"./resolveDefaultProps-41R1n5JW.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DsrHqkWw.js";import"./RechartsWrapper-NJ0Ez51E.js";import"./hooks-BePoF5l4.js";import"./axisSelectors-Cx7ZtEIH.js";import"./zIndexSlice-BExtdyub.js";import"./CartesianChart-CauNMHrH.js";import"./chartDataContext-By2fKgIb.js";import"./CategoricalChart-O0vVyZYM.js";import"./Line-ByFuaooi.js";import"./Layer-CgUnyU8v.js";import"./ReactUtils-BtLAWZFM.js";import"./Label-gyqygLIm.js";import"./Text-BCzzepAd.js";import"./DOMUtils-DDwkXkUm.js";import"./ZIndexLayer-BI90jm2U.js";import"./ActivePoints-BMo7GV7Z.js";import"./Dot-B0Edv62r.js";import"./types-CyIMtLrt.js";import"./RegisterGraphicalItemId-ChahBClM.js";import"./ErrorBarContext-DTmAcjw7.js";import"./GraphicalItemClipPath-DrjjmV4D.js";import"./SetGraphicalItem-DFpoPkFf.js";import"./useAnimationId-Cub4YggD.js";import"./getRadiusAndStrokeWidthFromDot-guaPTICv.js";import"./ActiveShapeUtils-DqPdrrUk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-PYLd1R2f.js";import"./Trapezoid-BG55ZEGY.js";import"./Sector-D5UzUxjZ.js";import"./Symbols-BXDeECV7.js";import"./Curve-BXAMzxgI.js";import"./XAxis-DaiKeapO.js";import"./CartesianAxis-BZUH34_W.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Dt3qo-M7.js";import"./Legend-YSI1bbWS.js";import"./useElementOffset-DHbCjGEK.js";import"./iteratee-CYb7fGYl.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

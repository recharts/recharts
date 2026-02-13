import{j as e}from"./jsx-runtime-Bh7S5Iug.js";import{useMDXComponents as n}from"./index-BMJlWq_j.js";import{M as h,C as o}from"./blocks-DpZpVSgE.js";import{C as d,W as s}from"./dimensions.stories-CrJbsH70.js";import"./iframe-KPAXLOLU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DScL8g0g.js";import"./ChartSizeDimensions-DvlPtCXc.js";import"./arrayEqualityCheck-C56QUJ1f.js";import"./resolveDefaultProps-DoONYDR5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DeZSIAh0.js";import"./RechartsWrapper-DbDiUXBh.js";import"./hooks-BSsx0bCA.js";import"./axisSelectors-BryM1FYj.js";import"./zIndexSlice-BZZRXwbi.js";import"./CartesianChart-DFX2Z7FU.js";import"./chartDataContext-T6w2KyJs.js";import"./CategoricalChart-Dk9GNXPU.js";import"./Line-CBxA7gKU.js";import"./Layer-Da82H4oD.js";import"./ReactUtils-DU0YFNnG.js";import"./Label-BCITgdoX.js";import"./Text-bc5Wvmbt.js";import"./DOMUtils-tqc8lMYW.js";import"./ZIndexLayer-DGM-MLqc.js";import"./ActivePoints-Be3meqdm.js";import"./Dot-Bzj5Rswh.js";import"./types-Bf6Uuk4n.js";import"./RegisterGraphicalItemId-DhvOJqxy.js";import"./ErrorBarContext-DSh5xxoF.js";import"./GraphicalItemClipPath-CMapYqoy.js";import"./SetGraphicalItem-DnuvD-SA.js";import"./useAnimationId-CcLJkYYw.js";import"./getRadiusAndStrokeWidthFromDot-HFeMNqJA.js";import"./ActiveShapeUtils-CGbu2e04.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BzpXjes6.js";import"./Trapezoid-CVMTG_aU.js";import"./Sector-2YnOnij-.js";import"./Symbols-B8OFT3tL.js";import"./Curve-DKnP5GEK.js";import"./XAxis-C4HchdwG.js";import"./CartesianAxis-Fwh7n2FF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CAPsonmh.js";import"./Legend-KXMFISbb.js";import"./useElementOffset-BgJqWN_p.js";import"./iteratee-OJWbNbsR.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

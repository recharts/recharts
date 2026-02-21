import{j as e}from"./jsx-runtime-GVwugCgy.js";import{useMDXComponents as n}from"./index-pevc6O52.js";import{M as o,C as h}from"./blocks-BwVTD23i.js";import{C as d,W as s}from"./dimensions.stories-DfFJTOgc.js";import"./iframe-9V8AjEOx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwQkTyvb.js";import"./ChartSizeDimensions-CbBegVji.js";import"./arrayEqualityCheck--JByrSZG.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CUsIIFoU.js";import"./immer-GD2CRReg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-IZ3mT89B.js";import"./RechartsWrapper-CqXbC8Hs.js";import"./index-BMXE6tR4.js";import"./hooks-DNt9wj8m.js";import"./axisSelectors-QruKIcBb.js";import"./d3-scale-Bl0aS6m3.js";import"./zIndexSlice-B9w7kjZW.js";import"./renderedTicksSlice-C4Apcjxw.js";import"./CartesianChart-CpyTtyWF.js";import"./chartDataContext-DJ1KYV-U.js";import"./CategoricalChart-dRG2K9eI.js";import"./Line-B0Dau14d.js";import"./Layer-BqC-87gq.js";import"./ReactUtils-D2pkvG7O.js";import"./Label-BTjKNwoq.js";import"./Text-Bl4_Rxhh.js";import"./DOMUtils-BsKMkSa3.js";import"./ZIndexLayer-jMQWKp1h.js";import"./ActivePoints-C1-72Ow0.js";import"./Dot-D5dnQ80q.js";import"./types-O5g7_guk.js";import"./RegisterGraphicalItemId-CZx2estc.js";import"./ErrorBarContext-DJx-pzZ-.js";import"./GraphicalItemClipPath-C9Ikc3kX.js";import"./SetGraphicalItem-CKCVtDA0.js";import"./useAnimationId-DIbwNcNj.js";import"./getRadiusAndStrokeWidthFromDot-CL71UNXv.js";import"./ActiveShapeUtils-BMU98mA9.js";import"./isPlainObject-CxfM663_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSXeln9N.js";import"./Trapezoid-A27zrHNd.js";import"./Sector-BmAUhY_Z.js";import"./Symbols-BY884xTp.js";import"./symbol-CSV3itcb.js";import"./step-gLl9sxps.js";import"./Curve-DFGvX__4.js";import"./XAxis-DLQ4yzhf.js";import"./CartesianAxis-BQAjBvVB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CMVVgcYW.js";import"./Legend-Cn2tAy58.js";import"./useElementOffset-D-vKT_LV.js";import"./uniqBy-B7MVGk6U.js";import"./iteratee-UUIQTfF7.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

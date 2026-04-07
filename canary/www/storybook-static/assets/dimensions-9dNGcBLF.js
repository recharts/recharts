import{j as e}from"./jsx-runtime-CEzy8S3W.js";import{useMDXComponents as n}from"./index-DlgGH76x.js";import{M as o,C as h}from"./blocks-DoC6cRzB.js";import{C as d,W as s}from"./dimensions.stories-a5xAKIni.js";import"./iframe-u6iaaRfQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BOENtfhc.js";import"./ChartSizeDimensions-CsL5LAMT.js";import"./arrayEqualityCheck-CLYylJu6.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-IMCpx0Yt.js";import"./immer-2VVJTBUN.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CnJe6xFk.js";import"./RechartsWrapper-BxKNS5Rk.js";import"./index-CIiFpIIw.js";import"./hooks-Dssc-Fg7.js";import"./axisSelectors-krUy4F6I.js";import"./d3-scale-Bj-ttDNW.js";import"./zIndexSlice-DWVvwkZr.js";import"./renderedTicksSlice-B-DvccZo.js";import"./CartesianChart-Dljgkd1w.js";import"./chartDataContext-CfRwcYbq.js";import"./CategoricalChart-CFZJD47L.js";import"./Page-Cj8EiXz7.js";import"./Line-BT8py2Um.js";import"./Layer-CT2CAOks.js";import"./ReactUtils-BAv5fhiw.js";import"./Label-DK4_THpm.js";import"./Text-CgS9yB44.js";import"./DOMUtils-Nlbt7DfZ.js";import"./ZIndexLayer-D67zVttg.js";import"./ActivePoints-BaaXz2oX.js";import"./Dot-CTvFv7nE.js";import"./types-BdeQdTqa.js";import"./RegisterGraphicalItemId-C8o_81FM.js";import"./ErrorBarContext-qXy6_5PW.js";import"./GraphicalItemClipPath-PPuT3qYL.js";import"./SetGraphicalItem-CnqUUVpy.js";import"./useAnimationId-BD3P1pqn.js";import"./getRadiusAndStrokeWidthFromDot-PqQ1H61_.js";import"./ActiveShapeUtils-DdZUdvs2.js";import"./isPlainObject-B8BtVZgq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqG21RYU.js";import"./Trapezoid-CNfti2nG.js";import"./Sector-Cd7r1-lt.js";import"./Symbols-Bxoc8kEL.js";import"./symbol-BgXEUeDH.js";import"./step-0mVlQoKY.js";import"./Curve-5QbieyFV.js";import"./XAxis-CafeDi3k.js";import"./CartesianAxis-D9B34M5E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DOArs6LY.js";import"./Legend-CQkR-ZeO.js";import"./useElementOffset-DUmZLxwu.js";import"./uniqBy-CfdH-2E7.js";import"./iteratee-Dv-ztwy4.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

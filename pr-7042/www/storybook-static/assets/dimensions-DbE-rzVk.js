import{j as e}from"./jsx-runtime-CPQgSpu5.js";import{useMDXComponents as n}from"./index-C5snQvX7.js";import{M as o,C as h}from"./blocks-DmqISX0V.js";import{C as d,W as s}from"./dimensions.stories-CX-5BlXk.js";import"./iframe-CJQnRCN7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BmBTwCFz.js";import"./ChartSizeDimensions-BxOAeUa_.js";import"./arrayEqualityCheck-DcQtyVca.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bn42vmR1.js";import"./immer-pCuW_8mX.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DY1EoIsB.js";import"./RechartsWrapper-DEeMF7CZ.js";import"./index-D1Dxg2z1.js";import"./hooks-D3GLo4z9.js";import"./axisSelectors-CBcJoGrJ.js";import"./d3-scale-AQeZIKmR.js";import"./zIndexSlice-D7pH0QjK.js";import"./renderedTicksSlice-6is9WC9q.js";import"./CartesianChart-pu1Q9M14.js";import"./chartDataContext-DYHRLxlR.js";import"./CategoricalChart-DZh5W8ZS.js";import"./Line-CK6_c6B6.js";import"./Layer-B-568WrD.js";import"./ReactUtils-BMRDQSQL.js";import"./Label-C1IYMHDK.js";import"./Text-8oP5Jeys.js";import"./DOMUtils-CpcfJsF7.js";import"./ZIndexLayer-DBz_ncGo.js";import"./ActivePoints-0FO4QfDc.js";import"./Dot-DVt8NYvp.js";import"./types-Bb5s1IIN.js";import"./RegisterGraphicalItemId-CErdNO5K.js";import"./ErrorBarContext-WcfhBNrP.js";import"./GraphicalItemClipPath-BMpRvZ7r.js";import"./SetGraphicalItem-oTp0Feor.js";import"./useAnimationId-Btjbf-3C.js";import"./getRadiusAndStrokeWidthFromDot-27Jzsgzj.js";import"./ActiveShapeUtils-Al5O4_0X.js";import"./isPlainObject-Cy53febZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIClz7bW.js";import"./Trapezoid-DO_o8qI8.js";import"./Sector-DPKTnHdo.js";import"./Symbols-BqZb3kY5.js";import"./symbol-CVXqLImo.js";import"./step-xPk2jUCK.js";import"./Curve-ClJjpRlb.js";import"./XAxis-DGEO6QJA.js";import"./CartesianAxis-CA-DoWhq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Bx_UxG-b.js";import"./Legend-BlD56xgl.js";import"./useElementOffset-DS1TYk1g.js";import"./uniqBy-CVqqkYEQ.js";import"./iteratee-tQQnC2SF.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

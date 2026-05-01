import{j as e}from"./jsx-runtime-Gl6TzejP.js";import{useMDXComponents as n}from"./index-Ct7LQZ-N.js";import{M as o,C as h}from"./blocks-ymF3uzgC.js";import{C as d,W as s}from"./dimensions.stories-Crof5gFT.js";import"./iframe-DYXgwBIj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIOmg34x.js";import"./ChartSizeDimensions-DgpSyLAE.js";import"./arrayEqualityCheck-CLSXPhEJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-xhU6-TKE.js";import"./immer-DqnPv083.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BNyuImgf.js";import"./RechartsWrapper-BJ4twCb0.js";import"./index-DKQaQPo5.js";import"./hooks-B36GXF-L.js";import"./axisSelectors-D1Sw3rlY.js";import"./d3-scale-DvhayWTq.js";import"./zIndexSlice-grNRpkcv.js";import"./renderedTicksSlice-BsOdr-UA.js";import"./CartesianChart-BhbBZsjR.js";import"./chartDataContext-CQgEv-1D.js";import"./CategoricalChart-8xICKxcP.js";import"./Page-Cj8EiXz7.js";import"./Line-BncdpxOP.js";import"./Layer-B2chWpFo.js";import"./ReactUtils-D9ZXF6dc.js";import"./Label-BotO9q2I.js";import"./Text-1DsuNyNG.js";import"./DOMUtils-YQarvmoJ.js";import"./ZIndexLayer-D-ilahJA.js";import"./ActivePoints-DYLWF3Yu.js";import"./Dot-TZcM57dL.js";import"./types-D3wyGAu1.js";import"./RegisterGraphicalItemId-BBYoprYG.js";import"./ErrorBarContext-BIMALam9.js";import"./GraphicalItemClipPath-BivSF4rD.js";import"./SetGraphicalItem-C0jCUDKT.js";import"./useAnimationId-DLi04jG5.js";import"./getRadiusAndStrokeWidthFromDot-DuV-YuJd.js";import"./ActiveShapeUtils-Cw5R38HO.js";import"./isPlainObject-BJALdUT1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2yqkvEMt.js";import"./Trapezoid-D95G9lkc.js";import"./Sector-CVKx1V34.js";import"./Symbols-JaciBV2o.js";import"./symbol-BlyA1o_2.js";import"./step-5UvXITCF.js";import"./Curve-DqnNZDut.js";import"./XAxis-DxuZp48g.js";import"./CartesianAxis-C_t8uogb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DLCMUUgi.js";import"./Legend-Cn9-2bkH.js";import"./useElementOffset-BX9-o7BY.js";import"./uniqBy-C8w4JvJv.js";import"./iteratee-CXILqLE9.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

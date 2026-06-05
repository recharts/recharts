import{u as n,j as e}from"./index-DgL0KWzm.js";import{M as o,C as h}from"./blocks-BQasvCFx.js";import{C as d,W as s}from"./dimensions.stories-D4laP-2x.js";import"./iframe-COvhlo3n.js";import"./preload-helper-Dp1pzeXC.js";import"./index-HVKWfhx-.js";import"./index-S2en6f0x.js";import"./index-DX1qvyWd.js";import"./ChartSizeDimensions-DC6suZAV.js";import"./zIndexSlice-UjQyxCBO.js";import"./immer-BpCohf0r.js";import"./get-DcOFzyCK.js";import"./resolveDefaultProps-DJ7OALvu.js";import"./isWellBehavedNumber-y7VTG9QG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B7Y6WjOd.js";import"./RechartsWrapper-Dx2dgZSl.js";import"./index-iNixOGJn.js";import"./renderedTicksSlice-DbzHTb4p.js";import"./axisSelectors-Zbm12FCw.js";import"./d3-scale-BlVLCp11.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dy7YVWuh.js";import"./chartDataContext-iIol8Xhi.js";import"./CategoricalChart-CLWSl7gV.js";import"./Page-Cj8EiXz7.js";import"./Line-Cmqu6p5D.js";import"./Layer-B-6Is3nc.js";import"./Curve-DZz8_CrJ.js";import"./types-p5b3Q5GI.js";import"./step-hf0ZFvgG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DpY5jibk.js";import"./Label-Vr2WzXIC.js";import"./Text-opN_hZQa.js";import"./DOMUtils-C6WNHbS7.js";import"./ZIndexLayer-B0TWuVZ-.js";import"./useAnimationId-BKJNFkSk.js";import"./ActivePoints-Dfm7fkiJ.js";import"./Dot-DfhacusV.js";import"./RegisterGraphicalItemId-C7wd0umC.js";import"./ErrorBarContext-BHPD5mnS.js";import"./GraphicalItemClipPath-CI-F5EmQ.js";import"./SetGraphicalItem-CwV_dfS_.js";import"./getRadiusAndStrokeWidthFromDot-D1_dalUD.js";import"./ActiveShapeUtils-C3R6UHJX.js";import"./XAxis-CiJXThtt.js";import"./CartesianAxis-s3bXG1ws.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Xvc1KoDU.js";import"./Legend-B9lRYV4R.js";import"./Symbols-C20faFIm.js";import"./symbol-Bj1Ifcbm.js";import"./useElementOffset-CQ-gJFbp.js";import"./uniqBy-CK_LJved.js";import"./iteratee-BnLCBSbQ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

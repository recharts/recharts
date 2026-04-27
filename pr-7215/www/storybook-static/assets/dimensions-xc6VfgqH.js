import{j as e}from"./jsx-runtime-C5MKze98.js";import{useMDXComponents as n}from"./index-CN-TqWSs.js";import{M as o,C as h}from"./blocks-CRXmPhho.js";import{C as d,W as s}from"./dimensions.stories-C5RhF-vP.js";import"./iframe-Qs6O8wpy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-COAE6_R9.js";import"./ChartSizeDimensions-h_Vewza7.js";import"./arrayEqualityCheck-DiPmtVsh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DkvZoiFw.js";import"./immer-BUNCc4EX.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DbT19AeO.js";import"./RechartsWrapper-DXH9h8qa.js";import"./index-BLhY0zjE.js";import"./hooks-C6T0ux6I.js";import"./axisSelectors-BqhGWF7A.js";import"./d3-scale-C7QcSE0p.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-BdRBx_3M.js";import"./renderedTicksSlice-Si7G1rdh.js";import"./CartesianChart-CZ-ONe5U.js";import"./chartDataContext-Dx6fqFLh.js";import"./CategoricalChart-D7dhNxwj.js";import"./Page-Cj8EiXz7.js";import"./Line-BBeciYnn.js";import"./Layer-CICKsHec.js";import"./Curve-uoVbw7SZ.js";import"./types-Cs32UOA0.js";import"./step-6wxOI7IM.js";import"./AnimatedItems-Bmk-Vn6E.js";import"./Label-DJKNn60w.js";import"./Text-DQ28Uic0.js";import"./DOMUtils-C3QfuTRj.js";import"./ZIndexLayer-Dzi2jwDH.js";import"./useAnimationId-Bx8YWNYj.js";import"./ActivePoints-DlYWl3uo.js";import"./Dot-Ck8_T0Z-.js";import"./RegisterGraphicalItemId-D_GbpICU.js";import"./ErrorBarContext-DiylhWX0.js";import"./GraphicalItemClipPath-97GOlLPd.js";import"./SetGraphicalItem-CPtdCQ7b.js";import"./getRadiusAndStrokeWidthFromDot-DBGot3sv.js";import"./ActiveShapeUtils--dL8_NPS.js";import"./isPlainObject-CN0NSOTq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bukdiqfq.js";import"./Trapezoid-CT6ZG2gE.js";import"./Sector-ByAF8mSb.js";import"./Symbols-B1g8PGM_.js";import"./symbol-DP01-Acw.js";import"./XAxis-B5r0d-Gb.js";import"./CartesianAxis-BvKnbhLV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-C1EP92fD.js";import"./Legend-DcdmhQ06.js";import"./useElementOffset-CF7P1hcV.js";import"./uniqBy-BKY48JQd.js";import"./iteratee-CVgA4_T5.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

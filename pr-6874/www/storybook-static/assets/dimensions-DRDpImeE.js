import{j as e}from"./jsx-runtime-BsZN2L_G.js";import{useMDXComponents as n}from"./index-n0ekW9XS.js";import{M as h,C as o}from"./blocks-DHSQpkuh.js";import{C as d,W as s}from"./dimensions.stories-BTtF6knv.js";import"./iframe-CzId_vMR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./arrayEqualityCheck-DSdyV2X5.js";import"./resolveDefaultProps-CjfObxG9.js";import"./PolarUtils-pvs2WqdL.js";import"./ComposedChart-CMv1ks2h.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./hooks-C9JnWS43.js";import"./axisSelectors-OGsi9SPN.js";import"./zIndexSlice-BwlmGQPJ.js";import"./CartesianChart-Cp_RTL_u.js";import"./chartDataContext-bc8aYpmC.js";import"./CategoricalChart-Fsg15egP.js";import"./Line-DpyEtb9m.js";import"./Layer-Cd1nD4kQ.js";import"./ReactUtils-B9bn4DTf.js";import"./Label-C0ElDb7Z.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./ZIndexLayer-C_SxWHYm.js";import"./ActivePoints-FI39lxZ5.js";import"./Dot-BamGkrTG.js";import"./types-DjXw3wTJ.js";import"./RegisterGraphicalItemId-CBAG7Y6C.js";import"./ErrorBarContext-DSOKUBI-.js";import"./GraphicalItemClipPath-BWo7OkkL.js";import"./SetGraphicalItem-w1vQ_GFV.js";import"./useAnimationId-DOB-FYIq.js";import"./getRadiusAndStrokeWidthFromDot-DhoyS4sY.js";import"./ActiveShapeUtils-CjNwvE6j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B-Y8RlPT.js";import"./Trapezoid-D5iOXGDe.js";import"./Sector-BzoC5hxT.js";import"./Symbols-BRKfSvcL.js";import"./Curve-D5USJD5l.js";import"./XAxis-CekBcBSy.js";import"./CartesianAxis-DwsgLCPL.js";import"./YAxis-D1MjdOqy.js";import"./Legend-CFNhqrRN.js";import"./useElementOffset-DjiMAkTW.js";import"./iteratee-DjtVUf_D.js";import"./Page-DPte-9pC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};

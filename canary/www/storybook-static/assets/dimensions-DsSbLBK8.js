import{j as e}from"./jsx-runtime-D-5Niasc.js";import{useMDXComponents as n}from"./index-Nrhq5KzH.js";import{M as h,C as o}from"./blocks-BllNs8tG.js";import{C as d,W as s}from"./dimensions.stories-DDrJJIz9.js";import"./iframe-But0a38P.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C00Mu2Jv.js";import"./ChartSizeDimensions-C_cjOMUb.js";import"./arrayEqualityCheck-CYbCyNsP.js";import"./resolveDefaultProps-Bm0IZKgg.js";import"./PolarUtils-DdS5KPsI.js";import"./ComposedChart-da7ff5Gu.js";import"./RechartsWrapper-PnZQcIU_.js";import"./hooks-CpJdPTaX.js";import"./axisSelectors-C4f3hvSw.js";import"./zIndexSlice-BltV0wsp.js";import"./CartesianChart-Cwa6sqm_.js";import"./chartDataContext-BNuUAnVq.js";import"./CategoricalChart-B2oR5-3x.js";import"./Line-jJQzj9d9.js";import"./Layer-afBuC6vE.js";import"./ReactUtils-BkpqDUuI.js";import"./Label-C7EMJJOB.js";import"./Text-CcNcGCTu.js";import"./DOMUtils-Du126Ke7.js";import"./ZIndexLayer-BqdPe-lh.js";import"./ActivePoints-Dnf6qJKf.js";import"./Dot-CcU5UjI7.js";import"./types-BORgRnck.js";import"./RegisterGraphicalItemId-ByXCQiha.js";import"./ErrorBarContext-C-Z575OG.js";import"./GraphicalItemClipPath-YNxfKYWD.js";import"./SetGraphicalItem-BNXEXR48.js";import"./useAnimationId-DCy88jod.js";import"./getRadiusAndStrokeWidthFromDot-BQ0TWRR4.js";import"./ActiveShapeUtils-CpE5KD3c.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BVahoehG.js";import"./Trapezoid-OOuCLK_Z.js";import"./Sector-BzzDDKvP.js";import"./Symbols-D7e9GUiu.js";import"./Curve-B4UI-EDA.js";import"./XAxis-BAXANk5N.js";import"./CartesianAxis-C8-lm3EO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-DG24jA9M.js";import"./Legend-C86zWpAz.js";import"./useElementOffset-B8Ksl-QF.js";import"./iteratee-Dt4Ii8C3.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

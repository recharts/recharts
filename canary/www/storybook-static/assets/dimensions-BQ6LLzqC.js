import{j as e}from"./jsx-runtime-D43LfG8S.js";import{useMDXComponents as n}from"./index-DPtKuDaU.js";import{M as o,C as h}from"./blocks-BrK7k-c6.js";import{C as d,W as s}from"./dimensions.stories-C2-5ykAE.js";import"./iframe-B82KKzsZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BDwCI-pI.js";import"./ChartSizeDimensions-DGlceztD.js";import"./arrayEqualityCheck-Cg0idRhp.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cz2WpobP.js";import"./immer-Cjr4YINx.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D9FBDa9m.js";import"./RechartsWrapper-Dy52E8zA.js";import"./index-BPhr2cwx.js";import"./hooks-C_Bk0iWL.js";import"./axisSelectors-BlY0RvlZ.js";import"./d3-scale-gdEhlQZC.js";import"./zIndexSlice-DoZOUHwV.js";import"./renderedTicksSlice-D6QyWwDV.js";import"./CartesianChart-DjM6_Ohn.js";import"./chartDataContext-BVeH-QEp.js";import"./CategoricalChart-BF433tP-.js";import"./Line-FhoCkSnF.js";import"./Layer-ug_gWv5Y.js";import"./ReactUtils-CyWe8bPC.js";import"./Label-CoPQcGVn.js";import"./Text-C1AVdMVq.js";import"./DOMUtils-DQZy4jxA.js";import"./ZIndexLayer-CCx46f1u.js";import"./ActivePoints-Bp-xuhXe.js";import"./Dot-BzE5qBfr.js";import"./types-DaFthwO7.js";import"./RegisterGraphicalItemId-tJqvGPQR.js";import"./ErrorBarContext-DSt7HMag.js";import"./GraphicalItemClipPath-Chx7G7zK.js";import"./SetGraphicalItem-BNPEWY7y.js";import"./useAnimationId-BjMwuZHe.js";import"./getRadiusAndStrokeWidthFromDot-VGAN5l6V.js";import"./ActiveShapeUtils-CrpulZpz.js";import"./isPlainObject-6AK1zo7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-qAHqHP.js";import"./Trapezoid-CL1eg36a.js";import"./Sector-SPbT55o6.js";import"./Symbols-dztR1yZz.js";import"./symbol-Djdr0qU4.js";import"./step-D_vNME6r.js";import"./Curve-BsV_hxX6.js";import"./XAxis-EvgP7bI2.js";import"./CartesianAxis-DURtsiuN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-B1evlESR.js";import"./Legend-luZ-3Qz2.js";import"./useElementOffset-DaSnC2vL.js";import"./uniqBy-CF2YBGTs.js";import"./iteratee-Csu2HEtD.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

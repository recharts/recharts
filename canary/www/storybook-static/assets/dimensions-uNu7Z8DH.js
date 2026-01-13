import{j as e}from"./jsx-runtime-8fuAvmPf.js";import{useMDXComponents as n}from"./index-vibXd7BY.js";import{M as h,C as o}from"./blocks-mMMvD1ve.js";import{C as d,W as s}from"./dimensions.stories-D95DnCHY.js";import"./iframe-CjUtT138.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYZv41C2.js";import"./ChartSizeDimensions-CNTgDKUn.js";import"./arrayEqualityCheck-B-tT2ESq.js";import"./resolveDefaultProps-DXKWDAOg.js";import"./PolarUtils-_eTStEZn.js";import"./ComposedChart-DK7N52sv.js";import"./RechartsWrapper-it-0F-jx.js";import"./hooks-4UrLvWFw.js";import"./axisSelectors-BX9CBNHK.js";import"./zIndexSlice-DsVMOISz.js";import"./CartesianChart-DOBNNTq5.js";import"./chartDataContext-Cd_ntzly.js";import"./CategoricalChart-QNPsXY_1.js";import"./Line-BZe_CoGr.js";import"./Layer-D_MGslDL.js";import"./ReactUtils-CHVaJjT2.js";import"./Label-BL8V4Wmg.js";import"./Text-DwSJp926.js";import"./DOMUtils-D7gju_6v.js";import"./ZIndexLayer-DLNaK2nP.js";import"./ActivePoints-ggcLh7it.js";import"./Dot-C7pBRmz2.js";import"./types-C9Ftyw06.js";import"./RegisterGraphicalItemId-BsU6Bbki.js";import"./ErrorBarContext-M64mzIpO.js";import"./GraphicalItemClipPath-BkNEqUtH.js";import"./SetGraphicalItem-pIRkDX-c.js";import"./useAnimationId-D51fABKH.js";import"./getRadiusAndStrokeWidthFromDot-BnN5ibWF.js";import"./ActiveShapeUtils-BsX54dsF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Btcn2slE.js";import"./Trapezoid-tluOV2am.js";import"./Sector-DLzrEVZJ.js";import"./Symbols-Lp37GtaH.js";import"./Curve-vYHSIBiw.js";import"./XAxis-CEXHANTM.js";import"./CartesianAxis-OEoEt9oE.js";import"./YAxis-Cz0XZWIE.js";import"./Legend-VMc9Q-gx.js";import"./useElementOffset-BvQjE7ab.js";import"./iteratee-D11VEsjy.js";import"./Page-DPte-9pC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

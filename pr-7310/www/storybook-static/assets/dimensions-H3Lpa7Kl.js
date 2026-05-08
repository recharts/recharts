import{j as e}from"./jsx-runtime-D-mc6H5s.js";import{useMDXComponents as n}from"./index-D-J-OYoe.js";import{M as o,C as h}from"./blocks-B3rxBmGM.js";import{C as d,W as s}from"./dimensions.stories-DEFL580M.js";import"./iframe-ZnuiNVaE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWgKuq9M.js";import"./ChartSizeDimensions-CpD-sUWL.js";import"./arrayEqualityCheck-DcpsFffb.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SpwOLF2r.js";import"./immer-0nSCgAvg.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CNkq3UMc.js";import"./RechartsWrapper-CEYGVzUm.js";import"./index-BpNZQyS5.js";import"./hooks-B5VA8Mmq.js";import"./axisSelectors-B7fsKZ9l.js";import"./d3-scale-CY4nDl51.js";import"./zIndexSlice-Drs2c4sD.js";import"./renderedTicksSlice-Bn9JwHxd.js";import"./CartesianChart-QqWjed8q.js";import"./chartDataContext-DOw2_YIC.js";import"./CategoricalChart-Bp3TzfC0.js";import"./Page-Cj8EiXz7.js";import"./Line-UlckhZvH.js";import"./Layer-3YLDlAyc.js";import"./ReactUtils-DWDhNlKk.js";import"./Label-CBQ7F7ZY.js";import"./Text-CLHYbH4R.js";import"./DOMUtils-DTgaodk1.js";import"./ZIndexLayer-BzV-T_Iz.js";import"./ActivePoints-CsKFQX5w.js";import"./Dot-DOC-EnTU.js";import"./types-mDbQPIQK.js";import"./RegisterGraphicalItemId-BcaLYkaD.js";import"./ErrorBarContext-C1ZpfKHJ.js";import"./GraphicalItemClipPath-C75obMCp.js";import"./SetGraphicalItem-CLIyGsmN.js";import"./useAnimationId-DkOya059.js";import"./getRadiusAndStrokeWidthFromDot-CVCMuq1B.js";import"./ActiveShapeUtils-B0-GYp8s.js";import"./isPlainObject-Bh5udtth.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8PzQF5cj.js";import"./Trapezoid-BzAzl90f.js";import"./Sector-BJWLe057.js";import"./Symbols-D3ZFSmHu.js";import"./symbol-DOh64DiI.js";import"./step-BAeuU6ZP.js";import"./Curve-D7bzhexe.js";import"./XAxis-hfxAoNer.js";import"./CartesianAxis-90i_fguh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-Diz2Tspw.js";import"./Legend-Ki2DFXnv.js";import"./useElementOffset-DfXBdw7O.js";import"./uniqBy-C1Nplgu-.js";import"./iteratee-CLm8sMEH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

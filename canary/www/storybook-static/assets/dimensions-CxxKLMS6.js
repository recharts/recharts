import{u as n,j as e}from"./index-BkJZkZri.js";import{M as o,C as h}from"./blocks-1426RcfF.js";import{C as d,W as s}from"./dimensions.stories-B5KvsZG3.js";import"./iframe-CV_Focqb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./index-B3f3WOos.js";import"./ChartSizeDimensions-CioLxqmU.js";import"./zIndexSlice-BMlZ-BTA.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./throttle-B3rCyY-p.js";import"./ComposedChart-MH3garqG.js";import"./RechartsWrapper-gHoUEC4B.js";import"./axisSelectors-BxeWYXvo.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaWFw3Yv.js";import"./index-CURBXMxT.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./Page-Cj8EiXz7.js";import"./Line-DHwzAAmS.js";import"./Layer-CsEez_y-.js";import"./Curve-BuhBl-mk.js";import"./types-DM7Vi8Am.js";import"./step-BlU7WG28.js";import"./path-DyVhHtw_.js";import"./LabelList-DREKrdKH.js";import"./Label-Du5iQDtH.js";import"./Text-DkcQkg85.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./dataEntryStyles-BVJSTixW.js";import"./ActivePoints-CZ1Bkl4s.js";import"./Dot-BSQDV2JF.js";import"./activeStyles-gddFfhxG.js";import"./useAnimationId-DuuBzQL8.js";import"./Symbols-iEBpa06p.js";import"./symbol-CX01f9Tn.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./ErrorBarContext-CdrVSUrx.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getRadiusAndStrokeWidthFromDot-BmGx7Z4E.js";import"./ActiveShapeUtils-180icphM.js";import"./useEffectiveDataKey-CjigGJWt.js";import"./XAxis-CbmbdddR.js";import"./CartesianAxis-CQt-kkqP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-B-5hoebp.js";import"./Legend-BTHfZ4-s.js";import"./useElementOffset-BdGXytv2.js";import"./uniqBy-CNcyodij.js";import"./iteratee-D2eul8Fy.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

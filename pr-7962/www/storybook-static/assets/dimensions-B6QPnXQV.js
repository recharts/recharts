import{u as n,j as e}from"./index-BUQrUphs.js";import{M as o,C as h}from"./blocks-pq0jJbc7.js";import{C as d,W as s}from"./dimensions.stories-DozrGqd2.js";import"./iframe-D3EjTtxy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./index-D-PCy9lp.js";import"./ChartSizeDimensions-OOVlG3TN.js";import"./zIndexSlice-CR47Grm-.js";import"./throttle-EojsqAtG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CypR0Li3.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DuMK799R.js";import"./RechartsWrapper-BKqCmNei.js";import"./axisSelectors-2jJKhRaD.js";import"./d3-scale-Bcyj84u8.js";import"./index-CW2m-a8N.js";import"./renderedTicksSlice-DWYht6zE.js";import"./index-C-LGK5kE.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./Page-Cj8EiXz7.js";import"./Line-BwJdDGaV.js";import"./Layer-CAR2aUbH.js";import"./Curve-DGfDXyXs.js";import"./types-OWn5Mrao.js";import"./step-BpQzdfyO.js";import"./path-DyVhHtw_.js";import"./activeStyles-Celt-13r.js";import"./Label-Cwzl5MfK.js";import"./Text-D8BNDsFW.js";import"./pageBackground-Bgbh54PU.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./ZIndexLayer-DYrhxp9-.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./ActivePoints-BFJ9lPgu.js";import"./Dot-B5LpJNu8.js";import"./ErrorBarContext-D2RzPC2k.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getRadiusAndStrokeWidthFromDot-O_fwqGez.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./useEffectiveDataKey-CruL2487.js";import"./XAxis-CBAr_26y.js";import"./CartesianAxis-Mzi-Pwf8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-ChbhO02F.js";import"./Legend-xKqboeAU.js";import"./Symbols-C_eJ930f.js";import"./symbol-Cwu5ve2k.js";import"./useElementOffset-CcOLWzLv.js";import"./uniqBy-BMWd6n_M.js";import"./iteratee-CFhE0l7L.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

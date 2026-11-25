import{u as n,j as e}from"./index-DCVcoBe5.js";import{M as o,C as h}from"./blocks-CjSxOka9.js";import{C as d,W as s}from"./dimensions.stories-lXrVuCcQ.js";import"./iframe-DkUPJ-sS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./index-Cvlsg4mt.js";import"./ChartSizeDimensions-DSxWmO_H.js";import"./zIndexSlice-12UiSTLm.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./throttle-B27eHaYH.js";import"./ComposedChart-3SzIkZlG.js";import"./RechartsWrapper-mRcsep52.js";import"./axisSelectors-DXomLufj.js";import"./polarAxisSelectors-BXszvLGt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CycPPIVV.js";import"./index-C1Em399f.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./chartDataContext-90C9fl16.js";import"./CategoricalChart-B3U5Ej9_.js";import"./Page-Cj8EiXz7.js";import"./Line-C2hOgETN.js";import"./getRadiusAndStrokeWidthFromDot-CiiVoAk9.js";import"./Layer-Dz0e5F_f.js";import"./Curve-CbuCUFZQ.js";import"./types-BwlCxTmg.js";import"./step-BRslF1pk.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BCBCgPLo.js";import"./Label-8ZjagO8_.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./ActivePoints-D6Ig6JoZ.js";import"./Dot-1lM7GFo1.js";import"./activeStyles-DgOrLWSA.js";import"./useAnimationId-2gl_z5Fx.js";import"./Symbols-u4sk2XTY.js";import"./symbol-C2La0w81.js";import"./ErrorBarContext-MZRvuvrv.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./useEffectiveDataKey-CN20ww8a.js";import"./XAxis-BWwIFA6B.js";import"./CartesianAxis-CPfh-d6g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-DUp2X2GH.js";import"./Legend-DKjZAMK9.js";import"./useElementOffset-Bn3uQ3yx.js";import"./uniqBy-BDWNlPAq.js";import"./iteratee-WjMYvucc.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

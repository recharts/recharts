import{u as n,j as e}from"./index-CjXYKxUy.js";import{M as o,C as h}from"./blocks-aC2OUP6K.js";import{C as d,W as s}from"./dimensions.stories-uat2AKwn.js";import"./iframe-DB1dQNP8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDVC-U_9.js";import"./index-CCD7ra-J.js";import"./index-BBS885gB.js";import"./ChartSizeDimensions-DUqfa5rR.js";import"./zIndexSlice-4nnTulLE.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DmpFbxUX.js";import"./throttle-BFaVdKGa.js";import"./ComposedChart-CXmJ-ojD.js";import"./RechartsWrapper-BSa1uinT.js";import"./axisSelectors-DYpJMmPb.js";import"./polarAxisSelectors-CrHx5sYT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BO6-R8pB.js";import"./index-D-0kkOAc.js";import"./renderedTicksSlice-BBAl23GW.js";import"./index-D2MojgXH.js";import"./fillDefinitions-Cx6IehzG.js";import"./CartesianChart-DYBxU76V.js";import"./chartDataContext-B1lnzDGG.js";import"./CategoricalChart-DANutzlC.js";import"./Page-Cj8EiXz7.js";import"./Line-CHe47qf6.js";import"./Layer-Dv8-s5I6.js";import"./Curve-CckPV-p0.js";import"./types-DtWjgFmy.js";import"./step-Bnr8fo0T.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Cv4r99AD.js";import"./Label-jFA6iMVu.js";import"./Text-C1medGIX.js";import"./ZIndexLayer-CWhMC-q_.js";import"./ActivePoints-CSEAww-_.js";import"./Dot-oe6mnN2l.js";import"./activeStyles-ByNnOm-i.js";import"./useAnimationId-CoLe5YqV.js";import"./Symbols-UlDypbOg.js";import"./symbol-CJrx0ghD.js";import"./ErrorBarContext-XalCVz8w.js";import"./SetGraphicalItem-BpLBLRYe.js";import"./getRadiusAndStrokeWidthFromDot-BxCLKzYD.js";import"./ActiveShapeUtils-Bsyq6LIm.js";import"./useEffectiveDataKey-H48CmBWB.js";import"./XAxis-CMTVdgXW.js";import"./CartesianAxis-C8e-4BIf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CIxMAlZN.js";import"./Legend-u1l_rcUz.js";import"./useElementOffset-RlCX_v1O.js";import"./uniqBy-CbTOLIgk.js";import"./iteratee-BDHXi_B6.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

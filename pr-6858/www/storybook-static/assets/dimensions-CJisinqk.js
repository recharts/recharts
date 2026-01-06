import{j as e}from"./jsx-runtime-CHgIia86.js";import{useMDXComponents as n}from"./index-Uw3SpPuJ.js";import{M as h,C as o}from"./blocks-DKGmVktE.js";import{C as d,W as s}from"./dimensions.stories-xJo2IxD6.js";import"./iframe-DP2mOMln.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMQ1Twes.js";import"./ChartSizeDimensions-fmpk3s6Q.js";import"./arrayEqualityCheck-5iTHPuD6.js";import"./resolveDefaultProps-_qLwNxhH.js";import"./PolarUtils-DkgNb_vz.js";import"./ComposedChart-D-mUb2sk.js";import"./RechartsWrapper-T4ODBC4p.js";import"./hooks-zeoTqeYF.js";import"./axisSelectors-1ZBBcU4q.js";import"./zIndexSlice-Cik2D4vv.js";import"./CartesianChart-DpJZ7Wkf.js";import"./chartDataContext-B_bP7OxR.js";import"./CategoricalChart-DEV1B1BC.js";import"./Line-7aVkqytC.js";import"./Layer-BZqUSVid.js";import"./ReactUtils-DJEcSmKG.js";import"./Label-DnLJWwCk.js";import"./Text-C5XiBNyf.js";import"./DOMUtils-DWLh1SLI.js";import"./ZIndexLayer-BOwqkVYS.js";import"./ActivePoints-CZ6tlVSr.js";import"./Dot-qyySS_n7.js";import"./types-DdS-Ezdx.js";import"./RegisterGraphicalItemId-30jUMiK8.js";import"./ErrorBarContext-D6qGOW5T.js";import"./GraphicalItemClipPath-C-hXbMEZ.js";import"./SetGraphicalItem-ZmYa4ptY.js";import"./useAnimationId-BuyyHYgP.js";import"./getRadiusAndStrokeWidthFromDot-ChYaQN1P.js";import"./ActiveShapeUtils-BdyerBrO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcVYjSDm.js";import"./Trapezoid-3yVnAnN-.js";import"./Sector-CAH7EP92.js";import"./Symbols-1_tOvOdR.js";import"./Curve-DYGBu986.js";import"./XAxis-B_VQg86f.js";import"./CartesianAxis-CF6IOTSN.js";import"./YAxis-WXcImUvg.js";import"./Legend-CKQzX7-y.js";import"./useElementOffset-Bme7kzJ-.js";import"./iteratee-VohP_WFB.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

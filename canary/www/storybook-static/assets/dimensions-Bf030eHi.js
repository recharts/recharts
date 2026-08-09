import{u as n,j as e}from"./index-btemC4QT.js";import{M as o,C as h}from"./blocks-CTvCDZLn.js";import{C as d,W as s}from"./dimensions.stories-DOxgUXJ2.js";import"./iframe-DLS25dHQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ByCW5xID.js";import"./index-Dq9FB6TB.js";import"./index-CbCT7aty.js";import"./ChartSizeDimensions-QtFCxR2O.js";import"./zIndexSlice-l2YZmfJm.js";import"./throttle-Hx_xB1Pu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C31rpRZv.js";import"./isWellBehavedNumber-oc6n5G8D.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-3ReoGfqO.js";import"./RechartsWrapper-B_GPZUKV.js";import"./index-CfSfkQYu.js";import"./axisSelectors-L-RJvPIw.js";import"./d3-scale-BGUeNoA2.js";import"./renderedTicksSlice-CvT_UYhE.js";import"./CartesianChart-D13Xcxp2.js";import"./chartDataContext-D70kksUU.js";import"./CategoricalChart-C6ulcIic.js";import"./Page-Cj8EiXz7.js";import"./Line-inZI_3U-.js";import"./Layer-DThhki4j.js";import"./Curve-D-nKyO-x.js";import"./types-BNikxk5Q.js";import"./step-CSyDwz3m.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-FlKGX8.js";import"./Label-Bs5nvBdN.js";import"./Text-DoJs4GjF.js";import"./DOMUtils-B4V2lSh1.js";import"./ZIndexLayer-CVnRsL__.js";import"./useAnimationId-BwYkYmq-.js";import"./ActivePoints-CxfQZGg2.js";import"./Dot-DrvJzzI1.js";import"./RegisterGraphicalItemId-DMMtsE5T.js";import"./ErrorBarContext-BMV815Qz.js";import"./graphicalItemIdentity-COzJlxtu.js";import"./SetGraphicalItem-B5zc41tl.js";import"./getRadiusAndStrokeWidthFromDot-BcCKN7uZ.js";import"./ActiveShapeUtils-CZHkl0hJ.js";import"./RechartsThemeContext-DQBBH2gy.js";import"./XAxis-ZvceRVhD.js";import"./CartesianAxis-ByLvjEbn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BYgagr7S.js";import"./Legend-CMw0PR8-.js";import"./Symbols-BghUztBR.js";import"./symbol-DJn7TpAb.js";import"./useElementOffset-DOuGmOFv.js";import"./uniqBy-CkpvLjjt.js";import"./iteratee-BC57QjIY.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function pe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};

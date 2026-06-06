import{u as n,j as e}from"./index-C_-ILs7n.js";import{M as o,C as h}from"./blocks-Bcg74m3w.js";import{C as d,W as s}from"./dimensions.stories-D-auI4b4.js";import"./iframe-Cx28kabR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./index-D-WuKlNL.js";import"./ChartSizeDimensions-Yc4tQxk_.js";import"./zIndexSlice-BJophbSs.js";import"./immer-C9z4Tvb1.js";import"./get-B9lrw7-x.js";import"./resolveDefaultProps-DKQmb89J.js";import"./isWellBehavedNumber-CMbzImp5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dhi_mSXs.js";import"./RechartsWrapper-DI8RF6tE.js";import"./index-DVR_r8nO.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./Page-Cj8EiXz7.js";import"./Line-Cn1MCW6C.js";import"./Layer-DvLhXWX-.js";import"./Curve-BhQA-w3U.js";import"./types-UeNFcMv5.js";import"./step-JKjbkiwo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BxtLfWI4.js";import"./Label-BDMWILCu.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./ZIndexLayer-CZAm4j4p.js";import"./useAnimationId-DLl-Zvtm.js";import"./ActivePoints-Bq-7Nh5y.js";import"./Dot-Iy9OPdn2.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./ErrorBarContext-ZNw_jj1S.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./getRadiusAndStrokeWidthFromDot-pD6-2pnW.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./XAxis-CWTUtLan.js";import"./CartesianAxis-BKywCzO2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DtGVJOoG.js";import"./Legend-CHHDMFmN.js";import"./Symbols-BlW_LPoz.js";import"./symbol-8JxOaiEe.js";import"./useElementOffset-C1Lt73IJ.js";import"./uniqBy-1qQJ4H2D.js";import"./iteratee-8IZU8Gil.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

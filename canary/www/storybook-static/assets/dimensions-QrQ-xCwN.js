import{j as e}from"./jsx-runtime-j4SxGfYe.js";import{useMDXComponents as n}from"./index-DnOjrNIO.js";import{M as o,C as h}from"./blocks-DPZlGF-y.js";import{C as d,W as s}from"./dimensions.stories-D6hHGUdO.js";import"./iframe-Dt4aI4cx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9ndWW50.js";import"./ChartSizeDimensions-DFLxu7GA.js";import"./arrayEqualityCheck-Cy9OM50o.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnBFDAwN.js";import"./immer-yH4a-Hlo.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Dj62jzJB.js";import"./RechartsWrapper-BQTEnB61.js";import"./index-DfJHLdb0.js";import"./hooks-Dm9h8rk1.js";import"./axisSelectors-gtHn-lFq.js";import"./d3-scale-BYMZZ-q_.js";import"./zIndexSlice-w9XFtOqX.js";import"./renderedTicksSlice-DE3C--Q6.js";import"./CartesianChart-vzcLi1ES.js";import"./chartDataContext-F8MoEuAy.js";import"./CategoricalChart-yI3i5yFY.js";import"./Line-UFT70g__.js";import"./Layer-XX14EpjR.js";import"./ReactUtils-As56lGLj.js";import"./Label-Dmj78U1Q.js";import"./Text-LG7Y1Qb6.js";import"./DOMUtils-5HA3g2TS.js";import"./ZIndexLayer-GPk988Ay.js";import"./ActivePoints-DSq6xApl.js";import"./Dot-DWaeMyCd.js";import"./types-CrM7aEhh.js";import"./RegisterGraphicalItemId-BZJpY04p.js";import"./ErrorBarContext-DF-ZGRah.js";import"./GraphicalItemClipPath-CzTif6uL.js";import"./SetGraphicalItem-ByAuxD-G.js";import"./useAnimationId-Bl7aTw__.js";import"./getRadiusAndStrokeWidthFromDot-DFYx_98L.js";import"./ActiveShapeUtils-CylnP5Yt.js";import"./isPlainObject-CAtbLXkb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDlQaAI4.js";import"./Trapezoid-DzQkp94u.js";import"./Sector-CDC7yo8h.js";import"./Symbols-QnBNzaPT.js";import"./symbol-BLeS_YRk.js";import"./step-BxKH8omU.js";import"./Curve-ZdoQmbTm.js";import"./XAxis-Cp9OOhUB.js";import"./CartesianAxis-C1sXhNsX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-hzK6Shx7.js";import"./Legend-Cx21nPu-.js";import"./useElementOffset-_Rki3zcD.js";import"./uniqBy-BCx0vEEL.js";import"./iteratee-CJYw7GAe.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

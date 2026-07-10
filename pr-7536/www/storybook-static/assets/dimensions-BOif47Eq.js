import{u as n,j as e}from"./index-CYG32SS2.js";import{M as o,C as h}from"./blocks-qPPwT13m.js";import{C as d,W as s}from"./dimensions.stories-BPQzwel0.js";import"./iframe-GFu4u_Sr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./index-CFslUPNA.js";import"./ChartSizeDimensions-BUvDyyCE.js";import"./zIndexSlice-B5qFJFtI.js";import"./throttle-CQYhSY5q.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-aZQazbAt.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./axisSelectors-CITTcs7P.js";import"./d3-scale-XJfpe2FZ.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./Page-Cj8EiXz7.js";import"./Line-DxAxJoY7.js";import"./Layer-rjKJbMCf.js";import"./Curve-d1fxHJEK.js";import"./types-CpBB06eN.js";import"./step-CJ2svyaN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMr3q6ws.js";import"./Label-DJGaBZN0.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./ZIndexLayer-DO98mi6X.js";import"./useAnimationId-DHrR_uSV.js";import"./ActivePoints-BKnSZj52.js";import"./Dot-Cf60LmSz.js";import"./RegisterGraphicalItemId-C2TZCZTY.js";import"./ErrorBarContext-E48lOcW2.js";import"./GraphicalItemClipPath-Dp-oK_MY.js";import"./SetGraphicalItem-BWFxWlyV.js";import"./getRadiusAndStrokeWidthFromDot-CavQSINe.js";import"./ActiveShapeUtils-DrDRZtp1.js";import"./XAxis-DCmYbaAb.js";import"./CartesianAxis-BChvL9JZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DPkQctbd.js";import"./Legend-JpIvIi3S.js";import"./Symbols-DVtZC3AN.js";import"./symbol-DEeTDO-b.js";import"./useElementOffset-DBEFVHKJ.js";import"./uniqBy-eEvGEJfN.js";import"./iteratee-BruxsO2g.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

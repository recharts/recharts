import{j as e}from"./jsx-runtime-CpIJGm3T.js";import{useMDXComponents as n}from"./index-BJSkewb7.js";import{M as o,C as h}from"./blocks-CpG_lRj0.js";import{C as d,W as s}from"./dimensions.stories-DfBPijoA.js";import"./iframe-DftoLjMQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-l8sRLK9z.js";import"./ChartSizeDimensions-BJ7Qv0Pi.js";import"./arrayEqualityCheck-OUBI6cxl.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BarHlGRM.js";import"./immer-CQJBkabG.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DxZ1rHvA.js";import"./RechartsWrapper-DHlVG8GT.js";import"./index-uEh81NxT.js";import"./hooks-CtUEKUIT.js";import"./axisSelectors-wXsEFnMj.js";import"./d3-scale-BsmYBoZY.js";import"./zIndexSlice--T96FzXv.js";import"./renderedTicksSlice-D9MmoYOr.js";import"./CartesianChart-Dc_3s4TO.js";import"./chartDataContext-IpRtB3jy.js";import"./CategoricalChart-DhhIk46Q.js";import"./Page-Cj8EiXz7.js";import"./Line-BaarjASd.js";import"./Layer-Dsgs0O8o.js";import"./ReactUtils-D8J0Scd8.js";import"./Label-OGw7wMde.js";import"./Text-BLuQUWft.js";import"./DOMUtils-DS-WaQM8.js";import"./ZIndexLayer--xl3uim8.js";import"./ActivePoints-CvxxlQO1.js";import"./Dot-BPJX98FX.js";import"./types-Bejjp4Hx.js";import"./RegisterGraphicalItemId-BsfM9YTI.js";import"./ErrorBarContext-BqvDCGa4.js";import"./GraphicalItemClipPath-CA0a5dPY.js";import"./SetGraphicalItem-CtgQyVhP.js";import"./useAnimationId-HlRR6VOg.js";import"./getRadiusAndStrokeWidthFromDot-1sEj6j-N.js";import"./ActiveShapeUtils-KSU4yUqy.js";import"./isPlainObject-DhKwCKiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdclZ8ZW.js";import"./Trapezoid-Cfr8ELTn.js";import"./Sector-9UyeEGs-.js";import"./Symbols-xJuY3fVT.js";import"./symbol--t7F40kw.js";import"./step-DzOVAhhf.js";import"./Curve-5-yobk2P.js";import"./XAxis-diXG-Ooh.js";import"./CartesianAxis-D4w_zo3U.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-_evmKux2.js";import"./Legend-BWUyCpiN.js";import"./useElementOffset-D9nHdrIo.js";import"./uniqBy-CvQpRBMV.js";import"./iteratee-C5N7-gfq.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-B8eI8Ntd.js";import{M as o,C as h}from"./blocks-C7GKoeMa.js";import{C as d,W as s}from"./dimensions.stories-BJCrAMOu.js";import"./iframe-CTZq4wow.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsdYqaGf.js";import"./index-CDrnfkiS.js";import"./index-C9WAMmaw.js";import"./ChartSizeDimensions-B4vsR-xL.js";import"./zIndexSlice-BugLLn2I.js";import"./throttle-CyDwbdt-.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-HvEOYUSi.js";import"./isWellBehavedNumber-o0IYSWOi.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B7gp54eM.js";import"./RechartsWrapper-DfAH14um.js";import"./index-B4a7aOKY.js";import"./renderedTicksSlice-CnaOGMsT.js";import"./axisSelectors-CvXoECki.js";import"./d3-scale-oRxS8xLw.js";import"./CartesianChart-D9JMH5Z9.js";import"./chartDataContext-CjbWGJuj.js";import"./CategoricalChart-xMgetrMq.js";import"./Page-Cj8EiXz7.js";import"./Line-BSq-1OIA.js";import"./Layer-B0eWkEir.js";import"./Curve-B2-DT88v.js";import"./types-Cmo79yaU.js";import"./step-BOqrsqeu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TPOIkuad.js";import"./Label-BA3Mm5Cp.js";import"./Text-Cu7BMLGl.js";import"./DOMUtils-DAhFjHam.js";import"./ZIndexLayer-JO4x2o2R.js";import"./useAnimationId-N1bAbizC.js";import"./ActivePoints-DduaoRit.js";import"./Dot-Ck1gikCj.js";import"./RegisterGraphicalItemId-CBhnZQJL.js";import"./ErrorBarContext-4wXqzGb4.js";import"./GraphicalItemClipPath-C2c2EBGK.js";import"./SetGraphicalItem-Dzd1nu2B.js";import"./getRadiusAndStrokeWidthFromDot-DY4tcjGE.js";import"./ActiveShapeUtils-BYg3ncJn.js";import"./XAxis-DLDzw0JX.js";import"./CartesianAxis-Fbl6c-dp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-H48Xjaif.js";import"./Legend-BtTmIeby.js";import"./Symbols-CyYUR82X.js";import"./symbol-BfAs-hZf.js";import"./useElementOffset-CKa6iluZ.js";import"./uniqBy-CatM64vN.js";import"./iteratee-BUImv9wm.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

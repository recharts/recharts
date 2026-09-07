import{u as n,j as e}from"./index-D2Z1vzvh.js";import{M as o,C as h}from"./blocks-BbZpoeFA.js";import{C as d,W as s}from"./dimensions.stories-BWjEQ1HI.js";import"./iframe-DJz24IKn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BNwKLvBG.js";import"./index-DbXeBKDO.js";import"./index-C6YBLKF8.js";import"./ChartSizeDimensions-DJSBO04Y.js";import"./zIndexSlice-CaAOW0et.js";import"./throttle-BsbtN1cS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Y06lZ3Q4.js";import"./isWellBehavedNumber-fz8KERtX.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-xCfhu6hO.js";import"./RechartsWrapper-DWus6mTf.js";import"./axisSelectors-Dn-i2Eyh.js";import"./d3-scale-DpRdoN7U.js";import"./index-C__guRbQ.js";import"./renderedTicksSlice-Dg7Ny4_Y.js";import"./index-DMHuassP.js";import"./CartesianChart-CnQAJVhL.js";import"./chartDataContext-Dgbqaxm0.js";import"./CategoricalChart-uGwJvut9.js";import"./Page-Cj8EiXz7.js";import"./Line-BvJdofYx.js";import"./Layer-CBv-uhLi.js";import"./Curve-3bxMRdbj.js";import"./types-DwqEhWGa.js";import"./step-BwCbZBCr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CKV2EJWT.js";import"./Label-VNkqCN5V.js";import"./Text-DOF1K2eH.js";import"./DOMUtils-bn8Tja0g.js";import"./useId-B5fw3oZO.js";import"./useBackwardsCompatibleTheme-LsfOWVY-.js";import"./ZIndexLayer-Clw8d4Oc.js";import"./useAnimationId-CK0cbgiG.js";import"./ActivePoints-CWxCsPop.js";import"./Dot-C5Lvhk5n.js";import"./RegisterGraphicalItemId-2YIIw7m6.js";import"./ErrorBarContext-BLLu5XO3.js";import"./GraphicalItemClipPath-CvjsKkOB.js";import"./SetGraphicalItem-npZ_hDhu.js";import"./getRadiusAndStrokeWidthFromDot-CFlofvCE.js";import"./ActiveShapeUtils-BKaKBNza.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BvHkm7Qz.js";import"./CartesianAxis-Dg3lbTZ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-D-LGUrvE.js";import"./Legend-8QayZjLh.js";import"./Symbols-DerxF3g_.js";import"./symbol-zN9zL-V3.js";import"./useElementOffset-CceHZgWF.js";import"./uniqBy-BmN8ddO_.js";import"./iteratee-BEbzn8gE.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

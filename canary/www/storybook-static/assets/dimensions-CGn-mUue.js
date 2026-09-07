import{u as n,j as e}from"./index-iZDj1RkI.js";import{M as o,C as h}from"./blocks-DlJProdv.js";import{C as d,W as s}from"./dimensions.stories-B9gwzAFx.js";import"./iframe-B9f439XI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./index--FioM-W6.js";import"./ChartSizeDimensions-wDfqaWPS.js";import"./zIndexSlice-C6Otyq85.js";import"./throttle-Cul9o8Fv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C-QIoD4C.js";import"./RechartsWrapper-DhjKeyZf.js";import"./axisSelectors-CtkTbFLc.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./Page-Cj8EiXz7.js";import"./Line-B7UaIz2p.js";import"./Layer-JExDg_3T.js";import"./Curve-BNGAgwsP.js";import"./types-BsF4BT96.js";import"./step-Cd0cogV_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-17rMBNfA.js";import"./Label-DVN-Hwwb.js";import"./Text-Bow6SjUp.js";import"./DOMUtils-DhGAIzWN.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./ZIndexLayer-C4eGne8u.js";import"./useAnimationId-7tiok7vs.js";import"./ActivePoints-Uofgco9H.js";import"./Dot-T9Kvs1vN.js";import"./RegisterGraphicalItemId-CMz-uJdk.js";import"./ErrorBarContext-ltkmTZdi.js";import"./GraphicalItemClipPath-CarNY15C.js";import"./SetGraphicalItem-6PuFIxdb.js";import"./getRadiusAndStrokeWidthFromDot-C7sSECjk.js";import"./ActiveShapeUtils-Djn55Wjw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DOU84Hlo.js";import"./CartesianAxis-DdFgmu19.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-JNrwnee_.js";import"./Legend-DX-GvFUk.js";import"./Symbols-CAnsshcC.js";import"./symbol-CisfiURK.js";import"./useElementOffset-CX1bHy_W.js";import"./uniqBy-DENRboCh.js";import"./iteratee-CJfDgSnT.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

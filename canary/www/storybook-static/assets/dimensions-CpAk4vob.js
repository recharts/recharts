import{u as n,j as e}from"./index-_3yvJt8T.js";import{M as o,C as h}from"./blocks-Cgr7CIWz.js";import{C as d,W as s}from"./dimensions.stories-BFpNGLZd.js";import"./iframe-BppzjNnb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C65TBMtY.js";import"./index-G9uqktgG.js";import"./index-e2oR9ZSK.js";import"./ChartSizeDimensions-NNWnHI9v.js";import"./zIndexSlice-Bz25ueAP.js";import"./immer-BMUlrvOK.js";import"./get-BADN9FM0.js";import"./resolveDefaultProps-DWEEC0T7.js";import"./isWellBehavedNumber-C8JMlk1c.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DhR9pH6Q.js";import"./RechartsWrapper-BctTvK_s.js";import"./index-BbKylj6c.js";import"./renderedTicksSlice-DTii-kcm.js";import"./axisSelectors-W078EOTn.js";import"./d3-scale-CWnXAf3z.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DAZ3YXd0.js";import"./chartDataContext-C-pJrkOs.js";import"./CategoricalChart-CXNjM0Ue.js";import"./Page-Cj8EiXz7.js";import"./Line-DXBTQPhH.js";import"./Layer-InP7nrar.js";import"./Curve-WhS8CD1Y.js";import"./types-CY6jhn9K.js";import"./step-DI4lIq9s.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ClsYQppB.js";import"./Label-mqH-rpXP.js";import"./Text-YWAIgGvz.js";import"./DOMUtils-CKoiYbaH.js";import"./ZIndexLayer-vT85rwTx.js";import"./useAnimationId-CFK7zTSZ.js";import"./ActivePoints-Bg1sxNgn.js";import"./Dot-DL7hVzu-.js";import"./RegisterGraphicalItemId-B42PFFZO.js";import"./ErrorBarContext-DT0m-eV5.js";import"./GraphicalItemClipPath-C_3x93JD.js";import"./SetGraphicalItem-DoX9EqUs.js";import"./getRadiusAndStrokeWidthFromDot-BbbBTUy4.js";import"./ActiveShapeUtils-BLIRe5G7.js";import"./XAxis-C5D711PO.js";import"./CartesianAxis-DwkD9703.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DsoUE30k.js";import"./Legend-BJIzGJvS.js";import"./Symbols-C60S9_I6.js";import"./symbol-CA-NhIsd.js";import"./useElementOffset-BHylbXnP.js";import"./uniqBy-BmI5nKZU.js";import"./iteratee-Cj4c1lFv.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

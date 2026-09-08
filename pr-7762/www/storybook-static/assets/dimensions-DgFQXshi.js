import{u as n,j as e}from"./index-CtQBNuq-.js";import{M as o,C as h}from"./blocks-DMMqijWq.js";import{C as d,W as s}from"./dimensions.stories-DCQ5h5M4.js";import"./iframe-BAkJeTr4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DjVuoFnH.js";import"./index-XgffbxYa.js";import"./index-D15jXgP1.js";import"./ChartSizeDimensions-DD4QiXLj.js";import"./zIndexSlice-CKNgQ3a1.js";import"./throttle-Dv1aPsuB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-5cpPAvAv.js";import"./isWellBehavedNumber-tRFPHljB.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BuIARBZ7.js";import"./RechartsWrapper-EWDb0L0f.js";import"./axisSelectors-CSrb8LKj.js";import"./d3-scale-CDR0rKSq.js";import"./index-DAtUpVNY.js";import"./renderedTicksSlice-BJEMwp3X.js";import"./index-I2U5t58b.js";import"./CartesianChart-DDPBhM-t.js";import"./chartDataContext-BT4eLMiU.js";import"./CategoricalChart-BbbjbFxH.js";import"./Page-Cj8EiXz7.js";import"./Line-CY96wbQv.js";import"./Layer-CKQWhaEi.js";import"./Curve-BVog-1mq.js";import"./types-HIIkAPMh.js";import"./step-C9hVegCW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuF6Bkm2.js";import"./Label-Dc3MUSo6.js";import"./Text-CbVPJcpZ.js";import"./DOMUtils-Cq0_H_rP.js";import"./useId-Dap1RfTv.js";import"./useBackwardsCompatibleTheme-sM5V7IYB.js";import"./ZIndexLayer-D5m0oF5l.js";import"./useAnimationId-CvTUgOKN.js";import"./ActivePoints-AYIQDcyP.js";import"./Dot-CleLxuMG.js";import"./RegisterGraphicalItemId-Bt_uVbrn.js";import"./ErrorBarContext-DuO3heB_.js";import"./GraphicalItemClipPath-Bys_fmGG.js";import"./SetGraphicalItem-BwMH--N4.js";import"./getRadiusAndStrokeWidthFromDot-BNUuDnnH.js";import"./ActiveShapeUtils-EPv0ZgAx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-BD-kVe53.js";import"./CartesianAxis-DtahLlIk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-wkouAcT5.js";import"./Legend-Dcb99-gu.js";import"./Symbols-fYq7nkG0.js";import"./symbol-DpBVLgIw.js";import"./useElementOffset-A8S9o9XT.js";import"./uniqBy-DQFF8pwP.js";import"./iteratee-plK0tt8R.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

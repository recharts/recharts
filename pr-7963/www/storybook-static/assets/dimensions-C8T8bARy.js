import{u as n,j as e}from"./index-DRVprYW3.js";import{M as o,C as h}from"./blocks-aFiHi68U.js";import{C as d,W as s}from"./dimensions.stories-V-gMZXCb.js";import"./iframe-DUnkgIOQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bi2SJwnS.js";import"./index-DrITryDs.js";import"./index-B4osSD3q.js";import"./ChartSizeDimensions-Dy3E50bC.js";import"./zIndexSlice-r-fMsMuk.js";import"./throttle-BvBsSQNH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DLNxblaS.js";import"./isWellBehavedNumber-dou1peGm.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DmUk4KiU.js";import"./RechartsWrapper-Cnrgjbh6.js";import"./axisSelectors-zqyiWpFa.js";import"./d3-scale-D5X6Q4ub.js";import"./index-BneZVI-r.js";import"./renderedTicksSlice-B8EBEqyh.js";import"./index-CsDFOcOo.js";import"./CartesianChart-5Wn1_YAG.js";import"./chartDataContext-jAnWnb0r.js";import"./CategoricalChart-CgAmM9Jo.js";import"./Page-Cj8EiXz7.js";import"./Line-Bcr6rtjC.js";import"./Layer-B-Hy8zN7.js";import"./Curve-DuIVBM1d.js";import"./types-BzNQj-ku.js";import"./step-BgKuKAEi.js";import"./path-DyVhHtw_.js";import"./activeStyles-BaanO1pI.js";import"./Label-C4zX0cwX.js";import"./Text-2AgJvCRv.js";import"./pageBackground-DK5qsHYc.js";import"./useId-NTbtm6dC.js";import"./useBackwardsCompatibleTheme-BSnNSNn_.js";import"./ZIndexLayer-BhOOp4BW.js";import"./useAnimationId-Dm7GmgCn.js";import"./dataEntryStyles-YmAEtIi5.js";import"./ActivePoints-CKn97wio.js";import"./Dot-DF5hxMLE.js";import"./ErrorBarContext-CpGIL_Og.js";import"./GraphicalItemClipPath-YZJU-iu_.js";import"./SetGraphicalItem-C8kjqmoZ.js";import"./getRadiusAndStrokeWidthFromDot-DP2NGMyj.js";import"./ActiveShapeUtils-jD8IoLvy.js";import"./useEffectiveDataKey-BUAhKumu.js";import"./XAxis-CsNzSfhq.js";import"./CartesianAxis-DLgiES_b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CvXueHp_.js";import"./Legend-q2Udb48u.js";import"./Symbols-DQWfOt37.js";import"./symbol-DaljVJK8.js";import"./useElementOffset-CA4XVRci.js";import"./uniqBy-iGwqEOr_.js";import"./iteratee-DrlCX8r1.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

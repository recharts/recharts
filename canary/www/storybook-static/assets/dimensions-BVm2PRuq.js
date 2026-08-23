import{u as n,j as e}from"./index-CwrVwGrZ.js";import{M as o,C as h}from"./blocks-CT_EiSfy.js";import{C as d,W as s}from"./dimensions.stories-DS0Uymj2.js";import"./iframe-1Nx1Hwd8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BxODcotD.js";import"./index-BxXrUDFi.js";import"./index-DuNxWLhT.js";import"./ChartSizeDimensions-CuU9sTU5.js";import"./zIndexSlice-BPgffy3O.js";import"./throttle-BvcOGqjl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuS60Zcm.js";import"./isWellBehavedNumber-BZkA4GqO.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DwgM-9LJ.js";import"./RechartsWrapper-DOZVWK-P.js";import"./index-DrfO8rcp.js";import"./axisSelectors-C77-vGCj.js";import"./d3-scale-B_Ed44y-.js";import"./renderedTicksSlice-DdDjPDgD.js";import"./CartesianChart-CfBDZXwX.js";import"./chartDataContext-B9qtLtUj.js";import"./CategoricalChart-CmvqfSaL.js";import"./Page-Cj8EiXz7.js";import"./Line-N-ZSdJCU.js";import"./Layer-CY3HNiYQ.js";import"./Curve-BLyT9pX_.js";import"./types-CW2QSzeT.js";import"./step-DiCJ9NfT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CvXLsYG2.js";import"./Label-CzY3tv0Q.js";import"./Text-D7Dvlpl9.js";import"./DOMUtils-CyzSDn7U.js";import"./useId-y9Z6ZhpG.js";import"./useBackwardsCompatibleTheme-CJcbMh-P.js";import"./ZIndexLayer-CgXwR33B.js";import"./useAnimationId-BUamwr57.js";import"./ActivePoints-C0mFYRu2.js";import"./Dot-CrNXlHuf.js";import"./RegisterGraphicalItemId-Ctsh4Fgt.js";import"./ErrorBarContext-aNneKhPH.js";import"./GraphicalItemClipPath-l6BikrPU.js";import"./SetGraphicalItem-CfAx1sDn.js";import"./getRadiusAndStrokeWidthFromDot-BvpolENt.js";import"./ActiveShapeUtils-K1kvzU25.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-Iy9-nOhv.js";import"./CartesianAxis-zUKk9a_2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CLaAdl_L.js";import"./Legend-DyA1uf70.js";import"./Symbols-DZorPepo.js";import"./symbol-C-30n4A9.js";import"./useElementOffset-CDb0HKNC.js";import"./uniqBy-o1WAa8Cs.js";import"./iteratee-BRVvFQUm.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

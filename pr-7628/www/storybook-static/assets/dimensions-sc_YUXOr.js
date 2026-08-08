import{u as n,j as e}from"./index-DaK4t4TF.js";import{M as o,C as h}from"./blocks-Bt1aOvNq.js";import{C as d,W as s}from"./dimensions.stories-_4WE-4aw.js";import"./iframe-D_g4F33S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bqb3oNhY.js";import"./index-DU-EG8Ox.js";import"./index-RMAjGoM1.js";import"./ChartSizeDimensions-D5VXL6n_.js";import"./zIndexSlice-qk_W91LH.js";import"./throttle-C8ol7TbU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMNeBin1.js";import"./isWellBehavedNumber-DbmSi19e.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DYa_RjMP.js";import"./RechartsWrapper-CPYm6CLL.js";import"./index-DjQlfIyB.js";import"./axisSelectors-BTeU-Lnf.js";import"./d3-scale-CQkgQnoX.js";import"./renderedTicksSlice-9yA5jGLk.js";import"./CartesianChart-C30ToINU.js";import"./chartDataContext-abfC3Iow.js";import"./CategoricalChart-Dp3h3G-T.js";import"./Page-Cj8EiXz7.js";import"./Line-BbKfURZ_.js";import"./Layer-CZAafMyB.js";import"./Curve-DHe5_cmM.js";import"./types-E4fDsamD.js";import"./step-BcJtBoCB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-5bCKGYgm.js";import"./Label-mwDIEaZu.js";import"./Text-dC5bBnrz.js";import"./DOMUtils-D15rvujY.js";import"./ZIndexLayer-CBemJ52Z.js";import"./useAnimationId-F97RPKrS.js";import"./ActivePoints-CjAssZ9T.js";import"./Dot-DT1eTQrx.js";import"./RegisterGraphicalItemId-S9qjeBvy.js";import"./ErrorBarContext-j16ccEsR.js";import"./GraphicalItemClipPath-Ce5CheJW.js";import"./SetGraphicalItem-MWcQtcPB.js";import"./getRadiusAndStrokeWidthFromDot-Bjf5_Zne.js";import"./ActiveShapeUtils-AssYUN6s.js";import"./RechartsThemeContext-DEVDikLO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-D0V-DbQJ.js";import"./CartesianAxis-eoFvh8zn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BeSx8PLK.js";import"./Legend-DP4hRnPN.js";import"./Symbols-vnU70vMn.js";import"./symbol-CvKw74Ax.js";import"./useElementOffset-D_pF2ZzE.js";import"./uniqBy-CTUiS_hF.js";import"./iteratee-D3RgNIdT.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

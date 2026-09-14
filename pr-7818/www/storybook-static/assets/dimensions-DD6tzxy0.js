import{u as n,j as e}from"./index-DwHCL91S.js";import{M as o,C as h}from"./blocks-BanFSfxp.js";import{C as d,W as s}from"./dimensions.stories-BPHpRWMq.js";import"./iframe-CazybM5Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DnBm6OUb.js";import"./index-DOWHA8mY.js";import"./index-7BXYpUCT.js";import"./ChartSizeDimensions-CpHZtagF.js";import"./zIndexSlice-C8_Ry1FK.js";import"./throttle-l1Kptz9a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CBYYqUCW.js";import"./isWellBehavedNumber-CpA3kMgp.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-U-yCg0Zp.js";import"./RechartsWrapper-CpPe0RTB.js";import"./axisSelectors-DZkp_M3U.js";import"./d3-scale-pDPjkkGb.js";import"./index-SN9fh9yC.js";import"./renderedTicksSlice-kdcY3T7P.js";import"./index-D_RyOPxQ.js";import"./CartesianChart-DVi_4rZ_.js";import"./chartDataContext-D7DiZH02.js";import"./CategoricalChart-CzkgI-hR.js";import"./Page-Cj8EiXz7.js";import"./Line-BeMUZHhs.js";import"./Layer-fj-XlG60.js";import"./Curve-DGBASg2P.js";import"./types-BzWyleSx.js";import"./step-CrScPSNY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoL70GVg.js";import"./Label-jvSJhliV.js";import"./Text-x2aI-_E3.js";import"./DOMUtils-D953XyQL.js";import"./useId-C2k1DfII.js";import"./useBackwardsCompatibleTheme-Busncj89.js";import"./ZIndexLayer-ytwD_49s.js";import"./useAnimationId-Bh-TCZxX.js";import"./ActivePoints-BsSeTHgb.js";import"./Dot-BNIKPTnU.js";import"./RegisterGraphicalItemId-DaFrO76U.js";import"./ErrorBarContext-BX_x-hk-.js";import"./GraphicalItemClipPath-Gh_0CyLf.js";import"./SetGraphicalItem-CGh1GzJA.js";import"./getRadiusAndStrokeWidthFromDot-BNmcBPi1.js";import"./ActiveShapeUtils-D_rLTXV3.js";import"./useGraphicalItemIdentity-C973phhc.js";import"./XAxis-DU0DQOG4.js";import"./CartesianAxis-CjSMZkKI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BbPMcjUo.js";import"./Legend-BO9b5cY6.js";import"./Symbols-CaSh0UR-.js";import"./symbol-EFStI95C.js";import"./useElementOffset-4OfpAhcO.js";import"./uniqBy-DV26r5Rr.js";import"./iteratee-Ry3r0H3-.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

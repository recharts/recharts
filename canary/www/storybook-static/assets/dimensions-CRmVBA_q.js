import{u as n,j as e}from"./index-Cqh_0x9c.js";import{M as o,C as h}from"./blocks-iJlsMxee.js";import{C as d,W as s}from"./dimensions.stories-Bl_vSR8Z.js";import"./iframe-CtzYfaFS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B_3CFrL4.js";import"./index-CS7Z3m5_.js";import"./index-B8ynkf98.js";import"./ChartSizeDimensions-CQh-G9UK.js";import"./zIndexSlice-CHFLQ-iB.js";import"./immer-5-WksSwG.js";import"./get-BsiXY17Z.js";import"./resolveDefaultProps-B4yZFq1_.js";import"./isWellBehavedNumber-C_JD1Sao.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-XEkgpTLA.js";import"./RechartsWrapper-DtAkHf5u.js";import"./index-CQyW4Cl8.js";import"./renderedTicksSlice-CyXKwvU2.js";import"./axisSelectors-C9oTN7aY.js";import"./d3-scale-Dsn_Yuxt.js";import"./CartesianChart-DLLDguMM.js";import"./chartDataContext-CAcvyAd0.js";import"./CategoricalChart-CwCdJGlO.js";import"./Page-Cj8EiXz7.js";import"./Line-BA9hGf2z.js";import"./Layer-BYFEOVHG.js";import"./Curve-CEEgN7pC.js";import"./types-BhOKl2M1.js";import"./step-BRDo_NJw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFTPfFdo.js";import"./Label-vhEl4j2z.js";import"./Text-EAXDgmFv.js";import"./DOMUtils-CZaHz23v.js";import"./ZIndexLayer-DBCChzpw.js";import"./useAnimationId-Dat_OdBO.js";import"./ActivePoints-VdjJXov3.js";import"./Dot-DiQjGxU2.js";import"./RegisterGraphicalItemId-C98AlHEB.js";import"./ErrorBarContext-Bj7SM4UW.js";import"./GraphicalItemClipPath-DEcca-2A.js";import"./SetGraphicalItem-CIPU0D-S.js";import"./getRadiusAndStrokeWidthFromDot-DosUFuXZ.js";import"./ActiveShapeUtils-Bjb6cUC6.js";import"./XAxis-oAw543sJ.js";import"./CartesianAxis-BA_E2N7m.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-IWkh__zP.js";import"./Legend-CiR3j6vn.js";import"./Symbols-BZg8aTao.js";import"./symbol-Cw8G4fgp.js";import"./useElementOffset-DkrRKcsg.js";import"./uniqBy-CBSkEntb.js";import"./iteratee-BJLAzLHV.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

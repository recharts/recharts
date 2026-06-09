import{u as n,j as e}from"./index-MTVdpoYE.js";import{M as o,C as h}from"./blocks-BWJNU9d1.js";import{C as d,W as s}from"./dimensions.stories-rUHj06ID.js";import"./iframe-AkXMTiN1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DO9nmyvc.js";import"./index-B7ESZsek.js";import"./index-cd3KTdjN.js";import"./ChartSizeDimensions--vkYLzzE.js";import"./zIndexSlice-D2IbpIG9.js";import"./immer-CGdqiLEl.js";import"./get-hfJl8nDX.js";import"./resolveDefaultProps-Cb6CyAiD.js";import"./isWellBehavedNumber-BjHph-L0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CbcedsfM.js";import"./RechartsWrapper-BFfZ1OV4.js";import"./index-Dvk2Reae.js";import"./renderedTicksSlice-CIoFYl-j.js";import"./axisSelectors-DNRIweDw.js";import"./d3-scale-uKys2Prv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuevVog_.js";import"./chartDataContext-krnp3gzW.js";import"./CategoricalChart-Bbv_9Kq1.js";import"./Page-Cj8EiXz7.js";import"./Line-bSxVFdvW.js";import"./Layer-BbfEqMjd.js";import"./Curve-DjnTfF-s.js";import"./types-eY1LNeEN.js";import"./step-Du2Dxzc7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMUwO7tR.js";import"./Label-yi6vcZhu.js";import"./Text-B8TabNrv.js";import"./DOMUtils-tdyvfO_t.js";import"./ZIndexLayer-2Zb-HEnP.js";import"./useAnimationId-DnVrzYZK.js";import"./ActivePoints-CsE5DRnu.js";import"./Dot-CXwe2hvn.js";import"./RegisterGraphicalItemId-GDKh1K9_.js";import"./ErrorBarContext-DPoGAGab.js";import"./GraphicalItemClipPath-D9xbA8oG.js";import"./SetGraphicalItem-D-MN-a76.js";import"./getRadiusAndStrokeWidthFromDot-CXAjyQPs.js";import"./ActiveShapeUtils-cQX6UbLq.js";import"./XAxis-pJLX02b7.js";import"./CartesianAxis-nu48EpeM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-oXwNoYI-.js";import"./Legend-CDcsegyl.js";import"./Symbols-jueKSyNC.js";import"./symbol-CZDfixHm.js";import"./useElementOffset-B-pwvrhw.js";import"./uniqBy-BLFid8pB.js";import"./iteratee-oc6mos4-.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

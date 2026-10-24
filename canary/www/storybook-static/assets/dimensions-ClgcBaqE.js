import{u as n,j as e}from"./index-BJD3rIrU.js";import{M as o,C as h}from"./blocks-D3MW_axA.js";import{C as d,W as s}from"./dimensions.stories-BxaLdrvb.js";import"./iframe-02jumC35.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./index-CDDoEg3V.js";import"./ChartSizeDimensions-BsjSjzta.js";import"./zIndexSlice-Dh2CbWTc.js";import"./throttle-C3YzeAkV.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-R_fgljAr.js";import"./RechartsWrapper-ClpzkpkH.js";import"./axisSelectors-M7ebD7ER.js";import"./d3-scale-cjemRmDN.js";import"./index-DIJUc9fc.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-3m7_l-7v.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./Page-Cj8EiXz7.js";import"./Line-qAcnYglM.js";import"./Layer-BluUqzQG.js";import"./Curve-sD1K-_o7.js";import"./types-BU7rhtDT.js";import"./step-DZxAeMnC.js";import"./path-DyVhHtw_.js";import"./activeStyles-BV4ZXPNg.js";import"./Label-DdA7iutk.js";import"./Text-CUWOvwAb.js";import"./pageBackground-hJZbYU9A.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./ZIndexLayer-Usgx4vbu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./useAnimationId-BlDuhaIC.js";import"./ActivePoints-p_qQIX4t.js";import"./Dot-DmS4t6aH.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getRadiusAndStrokeWidthFromDot-C-prUT-T.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./XAxis-CnRK3wsv.js";import"./CartesianAxis-BreAXyHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-mNI4SsbU.js";import"./Legend-mpzgqkwF.js";import"./Symbols-Dm7SeMDV.js";import"./symbol-7GPz0Uc5.js";import"./useElementOffset-CDDOtZbO.js";import"./uniqBy-BgoixCH6.js";import"./iteratee-8yTmLCe3.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ue as default};

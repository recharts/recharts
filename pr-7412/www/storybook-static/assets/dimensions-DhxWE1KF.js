import{u as n,j as e}from"./index-Dq_EvbtP.js";import{M as o,C as h}from"./blocks-CFKrlBc-.js";import{C as d,W as s}from"./dimensions.stories-C68kZeJi.js";import"./iframe-BiXVY0YN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./index-PSniF_G7.js";import"./ChartSizeDimensions-eNt1ZC2K.js";import"./zIndexSlice-nY6JNSg8.js";import"./immer-Bguoov5l.js";import"./get-DSfNO7n4.js";import"./resolveDefaultProps-DD4XGInB.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Cf4jkg33.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./Page-Cj8EiXz7.js";import"./Line-DjzxsS4q.js";import"./Layer-uuEILT3S.js";import"./Curve-D7wuzLSQ.js";import"./types-CLXMlpTC.js";import"./step-BzaqppXW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DfhrJO_Z.js";import"./Label-BJ6MA63M.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./ZIndexLayer-6ebEplbW.js";import"./useAnimationId-CfBicigm.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./ErrorBarContext-DrwdD_lh.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./XAxis-8aOHTtEo.js";import"./CartesianAxis-eCQKtisH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Da5Yhwpa.js";import"./Legend-Cuei_W9Z.js";import"./Symbols-BELca2ug.js";import"./symbol-DzSheJ7o.js";import"./useElementOffset-CPLS44DG.js";import"./uniqBy-CcGBVuj2.js";import"./iteratee-STjWE_qx.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{j as e}from"./jsx-runtime-RlvmNLlW.js";import{useMDXComponents as n}from"./index-CsQsDG1a.js";import{M as h,C as o}from"./blocks-BQcHl3st.js";import{C as d,W as s}from"./dimensions.stories-CKOWe5SX.js";import"./iframe-BtpSaGeD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-o2N_x1RI.js";import"./ChartSizeDimensions-9kzbcyaa.js";import"./arrayEqualityCheck-csfjq8mV.js";import"./resolveDefaultProps-DkARaCDv.js";import"./PolarUtils-5F1_zZA0.js";import"./ComposedChart-D3TQl5Wu.js";import"./RechartsWrapper-BQPGXXGO.js";import"./hooks-DULxqo3A.js";import"./axisSelectors-CQvuHlQI.js";import"./zIndexSlice-ydm78BYW.js";import"./CartesianChart-2vMAanpf.js";import"./chartDataContext-D1JeIz7Q.js";import"./CategoricalChart-BIOH4Ga_.js";import"./Line-Cf2UA-3o.js";import"./Layer-CYyvuKkx.js";import"./ReactUtils-TAFDop8V.js";import"./Label-BOlhuZqt.js";import"./Text-DH63q3ed.js";import"./DOMUtils-CVzw1QbG.js";import"./ZIndexLayer-BcDwNHGX.js";import"./ActivePoints-Djg9xCE5.js";import"./Dot-BgtKn9fG.js";import"./types-245F3-IH.js";import"./RegisterGraphicalItemId-CJ_I0CZl.js";import"./ErrorBarContext-D_YNM0zR.js";import"./GraphicalItemClipPath-CmYuvuXv.js";import"./SetGraphicalItem-CMYrG93h.js";import"./useAnimationId-Be_3bM2l.js";import"./getRadiusAndStrokeWidthFromDot-BgQkEg5F.js";import"./ActiveShapeUtils-D3Igja4T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3A1KPVj.js";import"./Trapezoid-xDGlDRMK.js";import"./Sector-NNIkOagX.js";import"./Symbols-Dt8Khp4u.js";import"./Curve-BC2lzeAQ.js";import"./XAxis-iLH9P-hU.js";import"./CartesianAxis-B74-p-s1.js";import"./YAxis-Bmepm0jT.js";import"./Legend-Kz1kmGL9.js";import"./useElementOffset-BXGnihpP.js";import"./iteratee-C4eAhDSk.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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
`,e.jsx(o,{of:s,layout:"padded"}),`
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
`]})]})}function ne(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ne as default};

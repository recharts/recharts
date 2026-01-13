import{j as e}from"./jsx-runtime-C9IV6oth.js";import{useMDXComponents as n}from"./index-mQziYaEa.js";import{M as h,C as o}from"./blocks-q90KmMck.js";import{C as d,W as s}from"./dimensions.stories-BSTKiCCj.js";import"./iframe-1i9HA9RQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAAFpx__.js";import"./ChartSizeDimensions-BQPJaKjV.js";import"./arrayEqualityCheck-BwjFPiUr.js";import"./resolveDefaultProps-CuqYJHcO.js";import"./PolarUtils-B3zJ31hA.js";import"./ComposedChart-9-Rooa_k.js";import"./RechartsWrapper-Ca6atg1S.js";import"./hooks-y-J71LZD.js";import"./axisSelectors-B-ey3vYH.js";import"./zIndexSlice-kDjHMkcM.js";import"./CartesianChart-gPb3Ow7G.js";import"./chartDataContext-Cq6PbOHK.js";import"./CategoricalChart-fTOtoFif.js";import"./Line-D2VioKUJ.js";import"./Layer-TtoeX7Dg.js";import"./ReactUtils-CesYLNMs.js";import"./Label-B5L7e25b.js";import"./Text-CkIqO9jR.js";import"./DOMUtils-BvTgwRu6.js";import"./ZIndexLayer-CX343y-L.js";import"./ActivePoints-D2uAfPbW.js";import"./Dot-BEc3ne5l.js";import"./types-BWGBotoG.js";import"./RegisterGraphicalItemId-C0szZiML.js";import"./ErrorBarContext-B9-hedxb.js";import"./GraphicalItemClipPath-C-3gRK47.js";import"./SetGraphicalItem-DlpP7DnH.js";import"./useAnimationId-CKk3JzZu.js";import"./getRadiusAndStrokeWidthFromDot-BzmVXP46.js";import"./ActiveShapeUtils-CgjTEdkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaWdx0SZ.js";import"./Trapezoid-GbRA1Hs7.js";import"./Sector-C3B07LHk.js";import"./Symbols-Bn7dqeJu.js";import"./Curve-DYisYGAN.js";import"./XAxis-0WAwRzrH.js";import"./CartesianAxis-DT5pZ6h2.js";import"./YAxis-D6A0s1aE.js";import"./Legend-ekTJAtD9.js";import"./useElementOffset-BOAH7-ZQ.js";import"./iteratee-Dlx_Wmlz.js";import"./Page-DPte-9pC.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
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

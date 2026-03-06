import{j as e}from"./jsx-runtime-hxSDis3-.js";import{useMDXComponents as n}from"./index-BS7W5S7Q.js";import{M as o,C as h}from"./blocks-bHUELNRH.js";import{C as d,W as s}from"./dimensions.stories-BWKvr0si.js";import"./iframe-B_nHVd2r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4ywjx6k.js";import"./ChartSizeDimensions-CZvd_Zg7.js";import"./arrayEqualityCheck-DY9D726-.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4kbUPRd1.js";import"./immer-BI8B3IAj.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-D26vWmHk.js";import"./RechartsWrapper-DzqzeMkT.js";import"./index-Ccd-ueyn.js";import"./hooks-J0Oqh1od.js";import"./axisSelectors-BMRY7YQG.js";import"./d3-scale-B9XrMCDb.js";import"./zIndexSlice-CcXit2BS.js";import"./renderedTicksSlice-BzSKsfOY.js";import"./CartesianChart-DEWcUEuJ.js";import"./chartDataContext-CnxSTV7I.js";import"./CategoricalChart-BQ2UlDix.js";import"./Line-DeMf4hlA.js";import"./Layer-CuJ2fFlM.js";import"./ReactUtils-DvQ3Bihg.js";import"./Label-Dso9Y4kd.js";import"./Text-DiyzG_aV.js";import"./DOMUtils-DYxHXfua.js";import"./ZIndexLayer-BUYIYBsc.js";import"./ActivePoints-kvA6RkM9.js";import"./Dot-Bdj5CCRw.js";import"./types-BNmhs72m.js";import"./RegisterGraphicalItemId-DYT3txR2.js";import"./ErrorBarContext-D0DhrZWs.js";import"./GraphicalItemClipPath-rjxHDAAK.js";import"./SetGraphicalItem-BcnT6vB3.js";import"./useAnimationId-DeeI7Yuu.js";import"./getRadiusAndStrokeWidthFromDot-DJFnzptW.js";import"./ActiveShapeUtils-Bm79eQGO.js";import"./isPlainObject-Bku77CDs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsvkISRN.js";import"./Trapezoid-Bt86oLyu.js";import"./Sector-BoI-sHTN.js";import"./Symbols-DkF8brZX.js";import"./symbol-DVZ8Ov9_.js";import"./step-DYOoDPDf.js";import"./Curve-RQsVLKEt.js";import"./XAxis-CW60u556.js";import"./CartesianAxis-CcM516-L.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CHeSJRY3.js";import"./Legend-BmKGcTGD.js";import"./useElementOffset-C3UWFn_c.js";import"./uniqBy-Co66ylAO.js";import"./iteratee-BX1xRums.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

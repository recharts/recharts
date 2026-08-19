import{u as n,j as e}from"./index-DmYSzoX3.js";import{M as o,C as h}from"./blocks-DOuK5g24.js";import{C as d,W as s}from"./dimensions.stories-BoazXEBl.js";import"./iframe-TE0a3h8U.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CbO58SlV.js";import"./index-Bes_wTqv.js";import"./index-mICHaOdM.js";import"./ChartSizeDimensions-DAmwzouD.js";import"./zIndexSlice-CuzvPj3e.js";import"./throttle-B9xIgtOp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DxKF5pbQ.js";import"./isWellBehavedNumber-Cwb0Yuac.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CK1drtAL.js";import"./RechartsWrapper-Zf4efnQ7.js";import"./index-CH7AYfaw.js";import"./axisSelectors-D4Hdk4ax.js";import"./d3-scale-ClwuSri4.js";import"./renderedTicksSlice-CV9ehOCs.js";import"./CartesianChart-D6VrfDcf.js";import"./chartDataContext-CdtLleKV.js";import"./CategoricalChart-D_woPTvb.js";import"./Page-Cj8EiXz7.js";import"./Line-BxXqtFAj.js";import"./Layer-CEnr9JeS.js";import"./Curve-0Fl3QjsV.js";import"./types-8QdsKxPr.js";import"./step-DBFL-Bln.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFCWs_6E.js";import"./Label-DW2voJ8G.js";import"./Text-DL22Whxw.js";import"./DOMUtils-CzEfLf16.js";import"./useId-CnhnPuIR.js";import"./useBackwardsCompatibleTheme-Kb0l05fi.js";import"./ZIndexLayer-DV8vU7iD.js";import"./useAnimationId-BD80cuEQ.js";import"./ActivePoints-Wah4GhQ3.js";import"./Dot-CvKEUnwP.js";import"./RegisterGraphicalItemId-BfW92mN9.js";import"./ErrorBarContext-C63SGP0L.js";import"./GraphicalItemClipPath-DIHeVoC3.js";import"./SetGraphicalItem-BZwhXqLy.js";import"./getRadiusAndStrokeWidthFromDot-o3R21rDY.js";import"./ActiveShapeUtils-DlXszYqE.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-DYSrX7Pe.js";import"./CartesianAxis-zD9IwJ4x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-nM39HCeg.js";import"./Legend-_H4ztsp0.js";import"./Symbols-PfYJfFbB.js";import"./symbol-DF3HRbQ3.js";import"./useElementOffset-2eLJ_fKs.js";import"./uniqBy-DzAw4gbB.js";import"./iteratee-D3tN9cZP.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

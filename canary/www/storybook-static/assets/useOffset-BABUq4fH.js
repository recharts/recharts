import{j as e}from"./jsx-runtime-C3n3f1CZ.js";import{useMDXComponents as i}from"./index-8Z0p70EB.js";import{M as o,C as s}from"./blocks-SE--CBbi.js";import{C as h,U as d}from"./useOffset.stories-etxIN6hq.js";import"./iframe-B8wZLo82.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUOpxgLn.js";import"./OffsetShower-DE0ZkW5V.js";import"./ChartSizeDimensions-QOi8XTXN.js";import"./arrayEqualityCheck-mQHvFPpg.js";import"./resolveDefaultProps-DhFJ0Eqh.js";import"./PolarUtils-DHvcKc2n.js";import"./hooks-BiJhptmv.js";import"./axisSelectors-Bv-IDWqv.js";import"./ComposedChart-BcqGzy_j.js";import"./RechartsWrapper-CBigNIyW.js";import"./zIndexSlice-vxKp5epo.js";import"./CartesianChart-o83YROHa.js";import"./chartDataContext-Cx3FiXmZ.js";import"./CategoricalChart-DfnOGKPM.js";import"./Line-da8_ePOc.js";import"./Layer-BJUTpLkJ.js";import"./ReactUtils-Dj7f4Iqr.js";import"./Label-DvY0zh6c.js";import"./Text-B5lfNvYb.js";import"./DOMUtils-Caps1FVU.js";import"./ZIndexLayer-DdiLICHA.js";import"./ActivePoints-D4-LWpJq.js";import"./Dot-DaV-kn_2.js";import"./types-DiGBS5_O.js";import"./RegisterGraphicalItemId-CCpmn4R2.js";import"./ErrorBarContext-D12Q2uZb.js";import"./GraphicalItemClipPath-BYlHtFhX.js";import"./SetGraphicalItem-CNzy8eWj.js";import"./useAnimationId-Dy4qDS51.js";import"./getRadiusAndStrokeWidthFromDot-7lS6mcqR.js";import"./ActiveShapeUtils-CpZCSmIN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg6726WX.js";import"./Trapezoid-Zj_KtUDG.js";import"./Sector-B3KOtxMp.js";import"./Symbols-CZWpR43S.js";import"./Curve-CMsBNtPf.js";import"./XAxis-BVtf3sZB.js";import"./CartesianAxis-B9jPSK4o.js";import"./YAxis-DRyjSKtp.js";import"./Legend-nundP5JZ.js";import"./useElementOffset-CA4uogOE.js";import"./iteratee-1BNukA-G.js";import"./Page-DPte-9pC.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
`,e.jsx(n.h1,{id:"useoffset",children:e.jsx(n.code,{children:"useOffset"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useOffset } from 'recharts';

function MyChart() {
  const offset = useOffset();
  return; // ...
}
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useOffset"})," hook returns the offset of the chart in pixels."]}),`
`,e.jsx(n.p,{children:"The offset is the distance from the edges of the chart to the edges of the plot area."}),`
`,e.jsx(n.p,{children:"Plot area is the area where the data is rendered, and shows the actual data points, bars, lines, etc."}),`
`,e.jsx(n.p,{children:"The space between the plot area and the edges of the chart is used for axes, legends, and other supporting elements."}),`
`,e.jsx(n.p,{children:"The offset includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Margins"}),`
`,e.jsx(n.li,{children:"Width and height of the axes"}),`
`,e.jsx(n.li,{children:"Width and height of the legend"}),`
`,e.jsx(n.li,{children:"Brush height"}),`
`]}),`
`,e.jsxs(n.p,{children:["(If you are only interested in the margins, use the ",e.jsx(n.code,{children:"useMargin"})," hook instead.)"]}),`
`,e.jsx(n.p,{children:"The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized."}),`
`,e.jsx(n.p,{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out,
the numbers will not change as the chart gets visually larger or smaller.`}),`
`,e.jsx(s,{of:d,layout:"padded"}),`
`,e.jsx(n.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(n.p,{children:"This hook can be used within any chart:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<AreaChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<BarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<LineChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<PieChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<RadarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<Sankey/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<Treemap/>"})}),`
`]})]})}function oe(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{oe as default};

import{j as e}from"./jsx-runtime-Cueqrgm8.js";import{useMDXComponents as i}from"./index-WaxXs1o9.js";import{M as o,C as s}from"./blocks-CudnpRvr.js";import{C as h,U as d}from"./useOffset.stories-BDbuzJTu.js";import"./iframe-B2sVpU8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8c_ign4p.js";import"./OffsetShower-BJ2e6zPx.js";import"./ChartSizeDimensions-DNVkMrvA.js";import"./arrayEqualityCheck-Dhi79NZV.js";import"./resolveDefaultProps-CY8PYEK4.js";import"./PolarUtils-D7wLniJK.js";import"./hooks-CO8_l9qG.js";import"./axisSelectors-CpQ2T2MD.js";import"./ComposedChart-CtbTJa68.js";import"./RechartsWrapper-BO_KERjm.js";import"./zIndexSlice-D-AtcMvw.js";import"./CartesianChart-Cy5Kgrrw.js";import"./chartDataContext-BKjXgLbF.js";import"./CategoricalChart-Dr5ioBXT.js";import"./Line-CnVEiaWf.js";import"./Layer-CgMiZnew.js";import"./ReactUtils-myx_H7Lt.js";import"./Label-Cini22wZ.js";import"./Text-BIiE8Zu5.js";import"./DOMUtils-BEUHT1oG.js";import"./ZIndexLayer-BRoLt-1O.js";import"./ActivePoints-B9nnYV9I.js";import"./Dot-3WZgPHXQ.js";import"./types-DwL4AKHm.js";import"./RegisterGraphicalItemId-DS_P1DDV.js";import"./ErrorBarContext-DVCgOIGq.js";import"./GraphicalItemClipPath-Dg2YJGXp.js";import"./SetGraphicalItem-BEcH9pqG.js";import"./useAnimationId-Dci0ZhWb.js";import"./getRadiusAndStrokeWidthFromDot-DcCyEWQm.js";import"./ActiveShapeUtils-BmX6o3Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-r91KSjwc.js";import"./Trapezoid-CHmzYexd.js";import"./Sector-DOuizIpa.js";import"./Symbols-D-gYgerz.js";import"./Curve-DIfGyAUS.js";import"./XAxis-tglJjYCd.js";import"./CartesianAxis-BtXVVZhW.js";import"./YAxis-DOY4gwW6.js";import"./Legend-B9gCA0tv.js";import"./useElementOffset-kvSaE0nm.js";import"./iteratee-Cq_sZyYY.js";import"./Page-DPte-9pC.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
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

import{j as e}from"./jsx-runtime-Cp8mEDvq.js";import{useMDXComponents as o}from"./index-Da_fvFg_.js";import{M as i,C as s}from"./blocks-DIhmRcTn.js";import{C as a,U as h}from"./usePlotArea.stories-CgK50UoY.js";import"./iframe-DGrXlEkx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUFFx6eI.js";import"./PlotAreaShower-B7mPYwn0.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./arrayEqualityCheck-DicChNuU.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./PolarUtils-DHWqJfSQ.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./ComposedChart-B5e_pVnj.js";import"./RechartsWrapper-BsZxNtsW.js";import"./zIndexSlice-BOlzJk7E.js";import"./CartesianChart-DhyYzKH1.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./Line-WPyxC3MW.js";import"./Layer-D3LXHH9n.js";import"./ReactUtils-B0RMD20A.js";import"./Label-BU6Zd3bq.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./ZIndexLayer-B0lWMP9E.js";import"./ActivePoints-Cg45XT1Q.js";import"./Dot-JJjdvtMS.js";import"./types-Byz7h8Fw.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./ErrorBarContext-B6C65bkw.js";import"./GraphicalItemClipPath-BaBV_qBF.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./useAnimationId-BLzFnaDj.js";import"./getRadiusAndStrokeWidthFromDot-gCSpblHn.js";import"./ActiveShapeUtils-Dmo5KH5o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_ChE2a8.js";import"./Trapezoid-D3rkb8mR.js";import"./Sector-BiHhGzVm.js";import"./Symbols-lPueLsWK.js";import"./Curve-B7GNUcvb.js";import"./XAxis-CAsPUI6L.js";import"./CartesianAxis-BzLzw--d.js";import"./YAxis-m9KoigUY.js";import"./Legend-CsXa4xxu.js";import"./useElementOffset-peD2ny1m.js";import"./iteratee-BfALflAJ.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(r.h1,{id:"useplotarea",children:e.jsx(r.code,{children:"usePlotArea"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { usePlotArea } from 'recharts';

function MyChart() {
  const plotArea = usePlotArea();
  return; // ...
}
`})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"usePlotArea"})," hook returns the dimensions of the plot area in pixels."]}),`
`,e.jsx(r.p,{children:"The plot area is the area where the data is rendered, and shows the actual data points, bars, lines, etc."}),`
`,e.jsxs(r.p,{children:["Plot area ",e.jsx(r.code,{children:"width"})," and ",e.jsx(r.code,{children:"height"}),` are the dimensions in pixels;
`,e.jsx(r.code,{children:"x"})," and ",e.jsx(r.code,{children:"y"})," are the coordinates of the top-left corner of the plot area relative to the chart container."]}),`
`,e.jsx(r.p,{children:"All of these values are independent of the chart's position on the page, meaning they do not change as the chart is scrolled or resized."}),`
`,e.jsx(r.p,{children:`They are also independent of the scale and zoom, meaning that as the user zooms in and out,
the plot area dimensions will not change as the chart gets visually larger or smaller.`}),`
`,e.jsx(s,{of:h,layout:"padded"}),`
`,e.jsx(r.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(r.p,{children:"This hook can be used within any chart:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<AreaChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<BarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<LineChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<PieChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<RadarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<Sankey/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<Treemap/>"})}),`
`]})]})}function ie(t={}){const{wrapper:r}={...o(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{ie as default};

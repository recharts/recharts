import{j as e}from"./jsx-runtime-GjFzOlel.js";import{useMDXComponents as o}from"./index-Dndw8WO2.js";import{M as i,C as s}from"./blocks-BqM_BOT0.js";import{C as a,U as h}from"./usePlotArea.stories-BS-WqPHp.js";import"./iframe-Cz5RPrzo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-nSyYgmIS.js";import"./PlotAreaShower-CCuY3b1X.js";import"./ChartSizeDimensions-BL9_hnvT.js";import"./arrayEqualityCheck-DuhA3hrU.js";import"./resolveDefaultProps-x0GM_Fqy.js";import"./PolarUtils-BqV0Lm0k.js";import"./hooks-BM-KAHTV.js";import"./axisSelectors-B5q7pd7-.js";import"./ComposedChart-kzL2mx6f.js";import"./RechartsWrapper-cu-FIaeq.js";import"./zIndexSlice-CcJ--Fig.js";import"./CartesianChart-eteQYMRm.js";import"./chartDataContext-CuN30YAe.js";import"./CategoricalChart-LFVK4bCX.js";import"./Line-pgE5fomn.js";import"./Layer-CngTgEke.js";import"./ReactUtils-BQq-yyvu.js";import"./Label-XMPDelhI.js";import"./Text-BayrHrEj.js";import"./DOMUtils-m1R-l7fT.js";import"./ZIndexLayer-DopQY-kA.js";import"./ActivePoints-DbZXc6w0.js";import"./Dot-ChSBHykE.js";import"./types-D1v_Rc2a.js";import"./RegisterGraphicalItemId-B1o2SWmz.js";import"./ErrorBarContext-BeejT6aM.js";import"./GraphicalItemClipPath-apQ9eD6L.js";import"./SetGraphicalItem-BmMKLEXu.js";import"./useAnimationId-ifmUbYmC.js";import"./getRadiusAndStrokeWidthFromDot-BufAZu8L.js";import"./ActiveShapeUtils-D5xwOR7W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2aKHHpL.js";import"./Trapezoid-CFJnjNBB.js";import"./Sector-D7vvH_6F.js";import"./Symbols-R3z9Gbft.js";import"./Curve-C0KXugLq.js";import"./XAxis-Dad-gt40.js";import"./CartesianAxis-D-RjJSot.js";import"./YAxis-Dvw6k3XO.js";import"./Legend-CnO7142l.js";import"./useElementOffset-Dgk1VpEv.js";import"./iteratee-DF4ETxvE.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

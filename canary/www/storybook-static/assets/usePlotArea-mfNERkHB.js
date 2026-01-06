import{j as e}from"./jsx-runtime-DXDcEmXB.js";import{useMDXComponents as o}from"./index-CZ3WTnhl.js";import{M as i,C as s}from"./blocks-DPxIgh9s.js";import{C as a,U as h}from"./usePlotArea.stories-XLdfipgd.js";import"./iframe-I1Pz45Ny.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DMBIHBp8.js";import"./PlotAreaShower-DtXJ5a61.js";import"./ChartSizeDimensions-rQb-Z9Di.js";import"./arrayEqualityCheck-BssfPt5l.js";import"./resolveDefaultProps-Bq-o5tNM.js";import"./PolarUtils-DcZ6GJsX.js";import"./hooks-B674bzAM.js";import"./axisSelectors-BE-GMhoq.js";import"./ComposedChart-C6b_M18r.js";import"./RechartsWrapper-DCDr6Jqb.js";import"./zIndexSlice-BV16LNaQ.js";import"./CartesianChart-DRbFdOf0.js";import"./chartDataContext-CiPGF6pl.js";import"./CategoricalChart-Cv93x4E-.js";import"./Line-BNPFyFtr.js";import"./Layer-DQZYEAka.js";import"./ReactUtils-_pBy8ldc.js";import"./Label-BgdagQ_F.js";import"./Text-DswTa9RV.js";import"./DOMUtils--5RVCy_u.js";import"./ZIndexLayer-BcHuHMGr.js";import"./ActivePoints-dh-kFKvq.js";import"./Dot-CUoJxuAW.js";import"./types-CrbLuNpc.js";import"./RegisterGraphicalItemId-S1t7FnBd.js";import"./ErrorBarContext-CapFOLPB.js";import"./GraphicalItemClipPath-CYavBbht.js";import"./SetGraphicalItem-B3UzWK5E.js";import"./useAnimationId-SAHxkggc.js";import"./getRadiusAndStrokeWidthFromDot-CMO9CrvP.js";import"./ActiveShapeUtils-BdkX4Sau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JQHiIfjv.js";import"./Trapezoid-DAueh7ih.js";import"./Sector-B4M-Rhc-.js";import"./Symbols-BVua8K5W.js";import"./Curve-CHlRnf3G.js";import"./XAxis-C686G_Ng.js";import"./CartesianAxis-BfHa-zKL.js";import"./YAxis-yT2DhUCy.js";import"./Legend-H90mA884.js";import"./useElementOffset-BNdgrSNe.js";import"./iteratee-TGONUFdq.js";import"./Page-Cj8EiXz7.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

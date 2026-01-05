import{j as e}from"./jsx-runtime-BDw9hUHj.js";import{useMDXComponents as o}from"./index-DBXwZbrg.js";import{M as i,C as s}from"./blocks-6VOxaGcC.js";import{C as a,U as h}from"./usePlotArea.stories-DdVsGTIV.js";import"./iframe-Dh_IuGPW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DsFYMPMW.js";import"./PlotAreaShower-xnDTqs4e.js";import"./ChartSizeDimensions-qNhWq2Xl.js";import"./arrayEqualityCheck-7YZsQ9Yt.js";import"./resolveDefaultProps-tTgU6cCH.js";import"./PolarUtils-ByAhdJKw.js";import"./hooks-D1sh8Xam.js";import"./axisSelectors-D1G3YuQl.js";import"./ComposedChart-BT1Cqczr.js";import"./RechartsWrapper-Bf-DnYOw.js";import"./zIndexSlice-Bln6WQdm.js";import"./CartesianChart-DmznhiBw.js";import"./chartDataContext-B9etQFAj.js";import"./CategoricalChart-DXWZuSB1.js";import"./Line-BSUfhiQO.js";import"./Layer-0hKCd9Go.js";import"./ReactUtils-CN6AvFkh.js";import"./Label-CwPC6lqR.js";import"./Text-5FWhTZND.js";import"./DOMUtils-1CpgM-hP.js";import"./ZIndexLayer-DgCIyG2A.js";import"./ActivePoints-BukcLVSu.js";import"./Dot-C1cga5mV.js";import"./types-C1SnlukV.js";import"./RegisterGraphicalItemId-C5qI6NMo.js";import"./ErrorBarContext-8rW3rtTK.js";import"./GraphicalItemClipPath-DVZrGS-c.js";import"./SetGraphicalItem-l88fIsgf.js";import"./useAnimationId-DFnSrzQe.js";import"./getRadiusAndStrokeWidthFromDot-CHYbPHm1.js";import"./ActiveShapeUtils-DNzZoZ6X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAYNTDZ7.js";import"./Trapezoid-Dv67nGF9.js";import"./Sector-D9tond7R.js";import"./Symbols-JLtyUHl6.js";import"./Curve-et2ZIOkM.js";import"./XAxis-BVn7zGv-.js";import"./CartesianAxis-LyuwKeVQ.js";import"./YAxis-FBaKUNO9.js";import"./Legend-sGrsloJr.js";import"./useElementOffset-BKWIuYmf.js";import"./iteratee-WBVmOS_2.js";import"./Page-Cj8EiXz7.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

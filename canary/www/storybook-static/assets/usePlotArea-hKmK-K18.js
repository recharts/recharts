import{j as e}from"./jsx-runtime-BIubXg9o.js";import{useMDXComponents as o}from"./index-DcfrOaTx.js";import{M as i,C as s}from"./blocks-Cd1fioHh.js";import{C as a,U as h}from"./usePlotArea.stories-BlqStjbU.js";import"./iframe-Dnh1Ryvb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BBrJvbdK.js";import"./PlotAreaShower-5JxeAXKY.js";import"./ChartSizeDimensions-DbCZNQtH.js";import"./arrayEqualityCheck-DCevfetv.js";import"./resolveDefaultProps-Coi4LBhI.js";import"./PolarUtils-Cgm959MD.js";import"./hooks-TRp6kMUA.js";import"./axisSelectors-CwAmoCkz.js";import"./ComposedChart-BSdoMSkl.js";import"./RechartsWrapper-Ch8zJvUN.js";import"./zIndexSlice-BXugI2eB.js";import"./CartesianChart-B2M6TWiT.js";import"./chartDataContext-CqWHnJZ5.js";import"./CategoricalChart-BipcxAVd.js";import"./Line-BA57OhZU.js";import"./Layer-CG0lsnsl.js";import"./ReactUtils-09bip2qn.js";import"./Label-B-RHJFae.js";import"./Text-DuqEZ_1u.js";import"./DOMUtils-Bor3dP_R.js";import"./ZIndexLayer-Bcm3_13n.js";import"./ActivePoints-CXZHC2s7.js";import"./Dot-DDKiUYZY.js";import"./types-NxPc932w.js";import"./RegisterGraphicalItemId-vvLaBIlf.js";import"./ErrorBarContext-ELPHN1NQ.js";import"./GraphicalItemClipPath-DCk99Thz.js";import"./SetGraphicalItem-Dm7xV0AH.js";import"./useAnimationId-DymxHjdh.js";import"./getRadiusAndStrokeWidthFromDot-BiJeskmV.js";import"./ActiveShapeUtils-oJd1nGJX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-lOgApOPv.js";import"./Trapezoid-DqrFuhKX.js";import"./Sector-CK7LUajO.js";import"./Symbols-Bi-3r2yZ.js";import"./Curve-CGOZKazJ.js";import"./XAxis-CR1tc-KL.js";import"./CartesianAxis-CXvREodt.js";import"./YAxis-BShcefNK.js";import"./Legend-DNq5AodR.js";import"./useElementOffset-JFxjDGnz.js";import"./iteratee-KFvQ-6kW.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

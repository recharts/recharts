import{j as e}from"./jsx-runtime-8KllFi6g.js";import{useMDXComponents as o}from"./index-BNNlBOBR.js";import{M as i,C as s}from"./blocks-LvCPbZcw.js";import{C as a,U as h}from"./usePlotArea.stories-DqXrExhw.js";import"./iframe-BeTvSsnM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BBjIj-68.js";import"./PlotAreaShower-DNqWhhRF.js";import"./ChartSizeDimensions-8siL2NNx.js";import"./arrayEqualityCheck-D3IRE7yY.js";import"./resolveDefaultProps-Bu9sKtx0.js";import"./PolarUtils-CiP_-J6C.js";import"./hooks-Buy-B5J7.js";import"./axisSelectors-B3oALCrY.js";import"./ComposedChart-BO-NFwBX.js";import"./RechartsWrapper-DqbHfwZA.js";import"./zIndexSlice-ClDvfLGt.js";import"./CartesianChart-Btcoj6QB.js";import"./chartDataContext-BveSyHyY.js";import"./CategoricalChart-7psyK6-L.js";import"./Line-bp10Wzax.js";import"./Layer-vwm7UlyD.js";import"./ReactUtils-Bt5PnhOQ.js";import"./Label-DX1B0Se3.js";import"./Text-DQUPEW1Z.js";import"./DOMUtils-CPaL2uk1.js";import"./ZIndexLayer-D3vvSLkM.js";import"./ActivePoints-B6jpmgBg.js";import"./Dot-DD-hz-w5.js";import"./types-ColG541f.js";import"./RegisterGraphicalItemId-ktGcRGkW.js";import"./ErrorBarContext-MJgNid9a.js";import"./GraphicalItemClipPath-CllyT1DZ.js";import"./SetGraphicalItem-T9xLTiUd.js";import"./useAnimationId-CijMLLZk.js";import"./getRadiusAndStrokeWidthFromDot-BZQhgDsT.js";import"./ActiveShapeUtils-DAFlR22H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do5x2l-c.js";import"./Trapezoid-zw4Ixv-f.js";import"./Sector-CUcldSZb.js";import"./Symbols-Drvhtafw.js";import"./Curve-B6pW5hMh.js";import"./XAxis-CikzDxWn.js";import"./CartesianAxis-CLVwDgLN.js";import"./YAxis-htB2Xdvz.js";import"./Legend-DHkaMzVY.js";import"./useElementOffset-4UzseTJd.js";import"./iteratee-B3Iw57Mc.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

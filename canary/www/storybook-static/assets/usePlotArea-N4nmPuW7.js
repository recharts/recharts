import{j as e}from"./jsx-runtime-C9IV6oth.js";import{useMDXComponents as o}from"./index-mQziYaEa.js";import{M as i,C as s}from"./blocks-q90KmMck.js";import{C as a,U as h}from"./usePlotArea.stories-B-rLTgqP.js";import"./iframe-1i9HA9RQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAAFpx__.js";import"./PlotAreaShower-BqU9kqmb.js";import"./ChartSizeDimensions-BQPJaKjV.js";import"./arrayEqualityCheck-BwjFPiUr.js";import"./resolveDefaultProps-CuqYJHcO.js";import"./PolarUtils-B3zJ31hA.js";import"./hooks-y-J71LZD.js";import"./axisSelectors-B-ey3vYH.js";import"./ComposedChart-9-Rooa_k.js";import"./RechartsWrapper-Ca6atg1S.js";import"./zIndexSlice-kDjHMkcM.js";import"./CartesianChart-gPb3Ow7G.js";import"./chartDataContext-Cq6PbOHK.js";import"./CategoricalChart-fTOtoFif.js";import"./Line-D2VioKUJ.js";import"./Layer-TtoeX7Dg.js";import"./ReactUtils-CesYLNMs.js";import"./Label-B5L7e25b.js";import"./Text-CkIqO9jR.js";import"./DOMUtils-BvTgwRu6.js";import"./ZIndexLayer-CX343y-L.js";import"./ActivePoints-D2uAfPbW.js";import"./Dot-BEc3ne5l.js";import"./types-BWGBotoG.js";import"./RegisterGraphicalItemId-C0szZiML.js";import"./ErrorBarContext-B9-hedxb.js";import"./GraphicalItemClipPath-C-3gRK47.js";import"./SetGraphicalItem-DlpP7DnH.js";import"./useAnimationId-CKk3JzZu.js";import"./getRadiusAndStrokeWidthFromDot-BzmVXP46.js";import"./ActiveShapeUtils-CgjTEdkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaWdx0SZ.js";import"./Trapezoid-GbRA1Hs7.js";import"./Sector-C3B07LHk.js";import"./Symbols-Bn7dqeJu.js";import"./Curve-DYisYGAN.js";import"./XAxis-0WAwRzrH.js";import"./CartesianAxis-DT5pZ6h2.js";import"./YAxis-D6A0s1aE.js";import"./Legend-ekTJAtD9.js";import"./useElementOffset-BOAH7-ZQ.js";import"./iteratee-Dlx_Wmlz.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

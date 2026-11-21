import{R as t}from"./iframe-ClXUkryL.js";import{y as p}from"./RechartsWrapper-C4CsKSyh.js";import{R as a}from"./zIndexSlice-DzUiPhG1.js";import{C as n}from"./ComposedChart-D4GI_a_J.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CTNZd68_.js";import{X as d}from"./XAxis-DAmFlkh4.js";import{Y as h}from"./YAxis-CSB-tj7Q.js";import{L as g}from"./Legend-Du0XFptm.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BImpBlrZ.js";import"./throttle-CEjR9znF.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Crqvu4_S.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./getRadiusAndStrokeWidthFromDot-BBOOYriq.js";import"./Layer-L872TvYf.js";import"./Curve-MAqNRQ5D.js";import"./types-la06XTph.js";import"./step-DKRQgBi6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Br1h1G1A.js";import"./Label-BMxAhfb3.js";import"./Text-C9XRZpa-.js";import"./ZIndexLayer-CVBpK4Om.js";import"./ActivePoints-FWIT6xTU.js";import"./Dot-ACUQcHT1.js";import"./activeStyles-CbEtMY8z.js";import"./useAnimationId-Dks1GaGE.js";import"./Symbols-x2c8SqkY.js";import"./symbol-DbkjlHpo.js";import"./ErrorBarContext-BbIl9cJe.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./CartesianAxis-DC6JqvO0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DeqYTBDK.js";import"./uniqBy-BpqYijuT.js";import"./iteratee-B2tmauo-.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as UseOffset,lt as __namedExportsOrder,ct as default};

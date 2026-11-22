import{R as t}from"./iframe-CUvNAvus.js";import{z as a}from"./RechartsWrapper-BjljmlV4.js";import{R as p}from"./zIndexSlice-D-rH8vD1.js";import{C as n}from"./ComposedChart-CpK6zK-b.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DZZP5hqp.js";import{X as l}from"./XAxis-CM346fVw.js";import{Y as h}from"./YAxis-BY3XsiJB.js";import{L as c}from"./Legend-DIaEXIPc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-3SUBoYwM.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Xjgkf-2T.js";import"./throttle-CYllgfiW.js";import"./index-Cp_pTOca.js";import"./index-CAWn2Z9i.js";import"./polarAxisSelectors-B2l_kUqX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CA_D1sKG.js";import"./index-BMOBZiEl.js";import"./index-58JkOBJX.js";import"./renderedTicksSlice-A7Y2iS9L.js";import"./index-BkH-1jYD.js";import"./fillDefinitions-Dr0Z3ytP.js";import"./CartesianChart-cFWvwfAO.js";import"./chartDataContext-CYuQBQZt.js";import"./CategoricalChart-BW_ZnICB.js";import"./getRadiusAndStrokeWidthFromDot-BfiOw2M0.js";import"./Layer-CoFmyLu_.js";import"./Curve-C_xw8Bh0.js";import"./types-CsWgfhSt.js";import"./step-DRuHJRtS.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C_QXXqcb.js";import"./Label-B7OEZM_6.js";import"./Text-BRc4p81h.js";import"./ZIndexLayer-CPI_Yi1m.js";import"./ActivePoints-d-D6hIRO.js";import"./Dot-Dg1tnWhx.js";import"./activeStyles-DPihfCdA.js";import"./useAnimationId-BneLXqad.js";import"./Symbols-CmJ419_u.js";import"./symbol-CLRUs3HG.js";import"./ErrorBarContext-C0H1v8By.js";import"./SetGraphicalItem-DRGWCaTd.js";import"./ActiveShapeUtils-Davo8QQp.js";import"./useEffectiveDataKey-BAjzW2qT.js";import"./CartesianAxis-BL1UgLf5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DyhJv7Tq.js";import"./uniqBy-CzilxMyM.js";import"./iteratee-BTZk3n5k.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
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
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};

import{R as t}from"./iframe-BH2TtHlY.js";import{z as a}from"./RechartsWrapper-DzLFc6RH.js";import{R as p}from"./zIndexSlice-BUPzf8FY.js";import{C as n}from"./ComposedChart-DsOU5PTg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CrpIiBSr.js";import{X as l}from"./XAxis-COZT_uqw.js";import{Y as h}from"./YAxis-B0vif2kn.js";import{L as c}from"./Legend-Bsu7AJMJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DsRwL_k-.js";import"./throttle-Dx7o9_lY.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./polarAxisSelectors-CrYx-glo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXj_dWXw.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./Layer-IM2jrBt3.js";import"./Curve-CJ99zN7P.js";import"./types-DOMxGpI2.js";import"./step-ChPkaUxk.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-oNDiL7vD.js";import"./Label-CIPQeI3a.js";import"./Text-CevbSlGY.js";import"./ZIndexLayer-Doizp3A4.js";import"./ActivePoints-B7PZUjv_.js";import"./Dot-yQhLEV_U.js";import"./activeStyles-C4DAj0Um.js";import"./useAnimationId-CDSf-pzR.js";import"./Symbols-CxGDxLq8.js";import"./symbol-Dum7koiK.js";import"./ErrorBarContext-4rxkwyEB.js";import"./SetGraphicalItem-Cr0BjIMT.js";import"./getRadiusAndStrokeWidthFromDot-Cst5_ZvX.js";import"./ActiveShapeUtils-CWwwV9zV.js";import"./useEffectiveDataKey-BXRZCQow.js";import"./CartesianAxis-0pfTl-hM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BE_errrN.js";import"./uniqBy-BMu_3qtX.js";import"./iteratee-BjDUq9-x.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-BkOwE2GN.js";import{z as a}from"./RechartsWrapper-CXzR8xrS.js";import{R as p}from"./zIndexSlice-Chy-hne0.js";import{C as n}from"./ComposedChart-BhRq4U8z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DaHUMkwJ.js";import{X as l}from"./XAxis-0fckSjiA.js";import{Y as h}from"./YAxis-hX7zZE17.js";import{L as c}from"./Legend-BP3s6Hw6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./axisSelectors-DGKEku6n.js";import"./throttle-DAc5l_dD.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-CTw2DMEK.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./getRadiusAndStrokeWidthFromDot-CE4sWQuP.js";import"./Layer-CnUstnfJ.js";import"./Curve-DGsLLJww.js";import"./types-CoO4ONhi.js";import"./step-XUgRcOx_.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-R9P1sHzA.js";import"./Label-y4X5dBPS.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./ActivePoints-zmYc3mi0.js";import"./Dot-bUm5BNK-.js";import"./activeStyles-fROkMw-p.js";import"./useAnimationId-DWRfsMZ5.js";import"./Symbols-B-s6UWez.js";import"./symbol-zbMM1gn6.js";import"./ErrorBarContext-BuIxRivK.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./useEffectiveDataKey-BySMHkBi.js";import"./CartesianAxis-DEhg_nUI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C2OMNI73.js";import"./uniqBy-CEEShQv_.js";import"./iteratee-CcBPK2XM.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

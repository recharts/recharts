import{R as e}from"./iframe-BkOwE2GN.js";import{R as i}from"./zIndexSlice-Chy-hne0.js";import{C as n}from"./ComposedChart-BhRq4U8z.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D5VfAX5W.js";import{X as s}from"./XAxis-0fckSjiA.js";import{Y as c}from"./YAxis-hX7zZE17.js";import{L as d}from"./Line-DaHUMkwJ.js";import{R as g}from"./ReferenceLine-9OjAf7Tc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./throttle-DAc5l_dD.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./RechartsWrapper-CXzR8xrS.js";import"./axisSelectors-DGKEku6n.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-CTw2DMEK.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./CartesianAxis-DEhg_nUI.js";import"./Layer-CnUstnfJ.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./Label-y4X5dBPS.js";import"./types-CoO4ONhi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CE4sWQuP.js";import"./Curve-DGsLLJww.js";import"./step-XUgRcOx_.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-R9P1sHzA.js";import"./ActivePoints-zmYc3mi0.js";import"./Dot-bUm5BNK-.js";import"./activeStyles-fROkMw-p.js";import"./useAnimationId-DWRfsMZ5.js";import"./Symbols-B-s6UWez.js";import"./symbol-zbMM1gn6.js";import"./ErrorBarContext-BuIxRivK.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./useEffectiveDataKey-BySMHkBi.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};

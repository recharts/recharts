import{R as e}from"./iframe-DRd8L1ij.js";import{R as i}from"./zIndexSlice-DWK0mKBW.js";import{C as n}from"./ComposedChart-BgiL4Xm-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-5glYr1GN.js";import{X as s}from"./XAxis-DYHP_qTD.js";import{Y as c}from"./YAxis-Dzj0j6ti.js";import{L as d}from"./Line-CN_lgmVk.js";import{R as g}from"./ReferenceLine-C8i-e0GS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--2iGUKCh.js";import"./throttle-BZHSEq8k.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./RechartsWrapper-CVHpNPrj.js";import"./axisSelectors-DKYErlU4.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Degm7ixx.js";import"./index-BOBLZBKw.js";import"./index-BnUkaxQb.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./CartesianAxis-BCEsA_1Q.js";import"./Layer-C-w_mvnX.js";import"./Text-DOqNkwx7.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./Label-Dlqk38Aa.js";import"./types-99rmuj1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B3UG50Pe.js";import"./step-CVL70ILG.js";import"./path-DyVhHtw_.js";import"./LabelList-C56jidjO.js";import"./ActivePoints-DpFFg10s.js";import"./Dot-Dinx-ymZ.js";import"./activeStyles-N3dA5laV.js";import"./useAnimationId-C1EYHtHK.js";import"./dataEntryStyles-CMr7JuEI.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./ErrorBarContext-DGvI8kwC.js";import"./SetGraphicalItem-Cted8rHa.js";import"./getRadiusAndStrokeWidthFromDot-CcwRzSoX.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./useEffectiveDataKey-C0wXpfOI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};

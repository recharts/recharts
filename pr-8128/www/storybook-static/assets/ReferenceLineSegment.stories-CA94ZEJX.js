import{R as e}from"./iframe-BwLZw-_M.js";import{R as i}from"./zIndexSlice-ChI0kTlF.js";import{C as p}from"./ComposedChart-CIavBfkK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-SrRv5sp5.js";import{X as s}from"./XAxis-D6rGR5iH.js";import{Y as c}from"./YAxis-CM5oOvq7.js";import{L as d}from"./Line-B80TmJuf.js";import{R as g}from"./ReferenceLine-Dm8WoShk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BegzgTjS.js";import"./throttle-DvL4FsEQ.js";import"./index-C9AtYHBZ.js";import"./index-qoVf35OJ.js";import"./RechartsWrapper-C2SzhBqG.js";import"./axisSelectors-kUTEWjAI.js";import"./polarAxisSelectors-Bhh2eZQc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DGzUJoIU.js";import"./index-BfwFhJuC.js";import"./index-o3dNuH8W.js";import"./renderedTicksSlice-BYZX0jcd.js";import"./index-B0i9H4tX.js";import"./CartesianChart-DhrEBdyK.js";import"./ZIndexPortal-CPgp6_q6.js";import"./CategoricalChart-DWgt9BZJ.js";import"./CartesianAxis-CE8eP4oM.js";import"./Layer-DuW_QRN1.js";import"./Text-CBZN8k_S.js";import"./DOMUtils-i6fMpPJ-.js";import"./pageBackground-BK1aOTMM.js";import"./ZIndexLayer-Bvlb4wTY.js";import"./Label-U4vkciLv.js";import"./types-tzWyPHwG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-sw4Y96Vm.js";import"./fillDefinitions-B6DD0NTj.js";import"./Curve-CzfoK2T3.js";import"./step-QqIlLDuW.js";import"./path-DyVhHtw_.js";import"./LabelList-6PzejVVq.js";import"./ActivePoints-vE2lL3n4.js";import"./Dot-P4orGxiz.js";import"./activeStyles-lGmv_AYe.js";import"./useAnimationId-yjvP5B3D.js";import"./dataEntryStyles-B1tUzdyv.js";import"./Symbols-D0k11amF.js";import"./symbol-CxJ4nrsQ.js";import"./ErrorBarContext-B9C041Rd.js";import"./SetGraphicalItem-CZMv7iCK.js";import"./getRadiusAndStrokeWidthFromDot-Di0VE_vh.js";import"./ActiveShapeUtils-BCNnGPme.js";import"./useEffectiveDataKey-C-YUm0jF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const le={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:n,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},Ce=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,Ce as __namedExportsOrder,le as default};

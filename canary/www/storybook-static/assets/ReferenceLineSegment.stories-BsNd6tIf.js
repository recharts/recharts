import{R as e}from"./iframe-z45XlhiT.js";import{R as i}from"./zIndexSlice-rByxwPq2.js";import{C as n}from"./ComposedChart-C_oOM-_x.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BcNDHnb_.js";import{X as s}from"./XAxis-yN0YOhJu.js";import{Y as c}from"./YAxis-C3VQiLjy.js";import{L as d}from"./Line-BNg9pLDQ.js";import{R as g}from"./ReferenceLine-DxChhWtG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./throttle-trzEzJ5j.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./RechartsWrapper-CkIduI85.js";import"./axisSelectors-DZIpCEiW.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DBdfj2JL.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./CartesianAxis-CzSQFzRC.js";import"./Layer-BkChjDHf.js";import"./Text-D6fTfOcl.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./Label-CmK6wYAn.js";import"./types-DMhu4FvJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DeIAn4Qv.js";import"./step-xmYWYAoT.js";import"./path-DyVhHtw_.js";import"./LabelList-BXCYEXvh.js";import"./ActivePoints-DXpk42VJ.js";import"./Dot-C9aR3nF8.js";import"./activeStyles-2Y8cHsw1.js";import"./useAnimationId-DASBPoZY.js";import"./dataEntryStyles-CahaEVij.js";import"./Symbols-DOwNTV9x.js";import"./symbol-DbSGDWfT.js";import"./ErrorBarContext-C7sDKK_Q.js";import"./SetGraphicalItem-DAGbOIuL.js";import"./getRadiusAndStrokeWidthFromDot-Pw7eF4Cu.js";import"./ActiveShapeUtils-ChMdJ8i8.js";import"./useEffectiveDataKey-Dw2L82h2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};

import{R as e}from"./iframe-G0Ik9O6t.js";import{R as i}from"./zIndexSlice-CYnNRWxE.js";import{C as n}from"./ComposedChart-B4cIjG4K.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-SNQDCFgv.js";import{X as s}from"./XAxis-CWTgMLCK.js";import{Y as c}from"./YAxis-CryECj4R.js";import{L as d}from"./Line-umGGBS5k.js";import{R as g}from"./ReferenceLine-C5QP4o5d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-6jYqE8VH.js";import"./throttle-0RzAOwSl.js";import"./index-DJn7_RRX.js";import"./index-BSx-eOuX.js";import"./RechartsWrapper-C0SK3-tY.js";import"./axisSelectors-D9yir6Xs.js";import"./polarAxisSelectors-DbTpX6rz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B1oMv4d2.js";import"./index-CZjz2J7d.js";import"./index-CrEwjtpS.js";import"./renderedTicksSlice-DJGvkPcQ.js";import"./index-yaYz5_hL.js";import"./fillDefinitions-DtfSekMJ.js";import"./CartesianChart-D9yJCYyl.js";import"./ZIndexPortal-DXabDpK4.js";import"./CategoricalChart-62rauA-s.js";import"./CartesianAxis-CcGZ5e89.js";import"./Layer-DsYtJDK_.js";import"./Text-B4HlcW6K.js";import"./DOMUtils-BLMelfj-.js";import"./ZIndexLayer-rUK8h3YF.js";import"./Label-CylpphjQ.js";import"./types-D7lN_jRq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BM_Sw2Bx.js";import"./step-CKk5L9t9.js";import"./path-DyVhHtw_.js";import"./LabelList-Bc94H-h2.js";import"./ActivePoints-DtZW7fDP.js";import"./Dot-CCKVvK0p.js";import"./activeStyles-BHukLnjd.js";import"./useAnimationId-BSSTqixR.js";import"./dataEntryStyles-C4cqIMlE.js";import"./Symbols-DuXBDnMk.js";import"./symbol-D_Su1EIX.js";import"./ErrorBarContext-BMXI6Vn7.js";import"./SetGraphicalItem-CbwdoUqN.js";import"./getRadiusAndStrokeWidthFromDot-BGcbbY8R.js";import"./ActiveShapeUtils-BT1ALZoA.js";import"./useEffectiveDataKey-DGTKBWN-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

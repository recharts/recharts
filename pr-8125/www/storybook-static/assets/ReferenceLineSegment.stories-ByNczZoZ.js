import{R as e}from"./iframe-DofrrzSz.js";import{R as i}from"./zIndexSlice-D4jXZr7P.js";import{C as n}from"./ComposedChart-CvgJm-V0.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-8iIghlqn.js";import{X as s}from"./XAxis-eOTmMW_3.js";import{Y as c}from"./YAxis-CsrZD7w1.js";import{L as d}from"./Line-BTgeNYF6.js";import{R as g}from"./ReferenceLine-Dop2Uk7l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./throttle-Cv7JSN-h.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./RechartsWrapper-E_-kYNca.js";import"./axisSelectors-pqZm8n4V.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRGWuf4p.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./CartesianAxis-BejCdWme.js";import"./Layer-29jH0q4c.js";import"./Text-CCxE4_21.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./Label-CuxsGsNv.js";import"./types-DwbSI8T9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-CgPD96Nk.js";import"./step-B24WZLE3.js";import"./path-DyVhHtw_.js";import"./LabelList-CvvaVn8W.js";import"./ActivePoints-DD_thTv0.js";import"./Dot-OjOZfNpf.js";import"./activeStyles-DFxA9Zbs.js";import"./useAnimationId-DIc4f048.js";import"./dataEntryStyles-DuwvESx8.js";import"./Symbols-DBYIMXup.js";import"./symbol-BNKxEPpC.js";import"./ErrorBarContext-Be2kUHyO.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getRadiusAndStrokeWidthFromDot-Cwz8hFM3.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

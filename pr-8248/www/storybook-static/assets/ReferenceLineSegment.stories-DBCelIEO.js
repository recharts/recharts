import{R as e}from"./iframe-DQIHw-Vj.js";import{R as i}from"./zIndexSlice-DLnqMvRR.js";import{C as n}from"./ComposedChart-Bq6suzwR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DAgIamEO.js";import{X as s}from"./XAxis-C1j7r1zg.js";import{Y as c}from"./YAxis-BRNNX1VG.js";import{L as d}from"./Line-CwKp4y3S.js";import{R as g}from"./ReferenceLine-rMGtYs_r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DCDPXacx.js";import"./throttle-CsL6-oT8.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./RechartsWrapper-BOwBRf5q.js";import"./axisSelectors-BOWof0F_.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D3QDia2a.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./CartesianAxis-uR_V8Oxl.js";import"./Layer-Dtg1l4X7.js";import"./Text-UFCPlRdh.js";import"./ZIndexLayer-cKbXtIsu.js";import"./Label-CDOIzumT.js";import"./types-DC02XBeR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BtNwq4SW.js";import"./Curve-BGOWFPUa.js";import"./step-WCAmzMpM.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CRT7gJOj.js";import"./ActivePoints-fySHDRUR.js";import"./Dot-so438WjJ.js";import"./activeStyles-DlG12Hxm.js";import"./useAnimationId-BGqCxB5a.js";import"./Symbols-Derc8Zbt.js";import"./symbol-DHOCB5wG.js";import"./ErrorBarContext-DeOd0WHi.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./useEffectiveDataKey-DXNQs5X4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

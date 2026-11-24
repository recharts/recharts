import{R as e}from"./iframe-tfZrcrMF.js";import{R as i}from"./zIndexSlice-CC8kCstT.js";import{C as n}from"./ComposedChart-BCjiIJ4o.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DGthdUPw.js";import{X as s}from"./XAxis-DhOgSkqh.js";import{Y as c}from"./YAxis-BOlMvWid.js";import{L as d}from"./Line-D0Cby_f_.js";import{R as g}from"./ReferenceLine-Dnz3OYx-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./throttle-DycvlznN.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./axisSelectors-BkiuLlPZ.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uLY3we2s.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./chartDataContext-pD1W3H_C.js";import"./CategoricalChart-DGtxkSeD.js";import"./CartesianAxis-DHW_9iiH.js";import"./Layer-ru88AdSr.js";import"./Text-DXjy-RzD.js";import"./ZIndexLayer-DnL-EDkP.js";import"./Label-CrLdB5k3.js";import"./types-CWW0D7cm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-Ch3PhdMy.js";import"./Curve-C3wk6TDN.js";import"./step-8uwKBSGh.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CpzODNOV.js";import"./ActivePoints-BER6C4Du.js";import"./Dot-BulvKgA_.js";import"./activeStyles-CW3oynl8.js";import"./useAnimationId-CiRiV3_R.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./ErrorBarContext-5NXkIyss.js";import"./SetGraphicalItem-BPWS4To0.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./useEffectiveDataKey-Bate5zYb.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

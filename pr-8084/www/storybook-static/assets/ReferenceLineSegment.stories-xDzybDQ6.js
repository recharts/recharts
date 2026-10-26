import{R as e}from"./iframe-ZGmrrukO.js";import{R as i}from"./zIndexSlice-C5KgYPQq.js";import{C as n}from"./ComposedChart-DbQJYIh8.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C3qpko0P.js";import{X as s}from"./XAxis-BAXN4a1X.js";import{Y as c}from"./YAxis-C3JJ8ArK.js";import{L as d}from"./Line-CagAPKlZ.js";import{R as g}from"./ReferenceLine-CFWbK3id.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CNACe9Hw.js";import"./throttle-DEV8M7d-.js";import"./index-BDXslZly.js";import"./index-DkZKmKPL.js";import"./RechartsWrapper-D3dierpX.js";import"./axisSelectors-BkEVbAOi.js";import"./polarAxisSelectors-BTEQFOKc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BCl2Vcri.js";import"./index-DELNKpJo.js";import"./index-DjxPPcPR.js";import"./renderedTicksSlice-DslC81eO.js";import"./index-CqZ9-YDO.js";import"./CartesianChart-DTfzXdNC.js";import"./chartDataContext-CL-xIQe9.js";import"./CategoricalChart-LYzcxGWQ.js";import"./CartesianAxis-_qB2Y9Zl.js";import"./Layer-B42ScyDi.js";import"./Text-GEQvIv20.js";import"./pageBackground-fO3k-pcO.js";import"./useId-rh7m_y1i.js";import"./ZIndexLayer-C_RDQRBf.js";import"./Label-CraUapZw.js";import"./dataEntryStyles-ChBxQ-KQ.js";import"./types-CCAgRS29.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CjgpP6VN.js";import"./step-BOD7ejsf.js";import"./path-DyVhHtw_.js";import"./activeStyles-Bhs50nun.js";import"./useAnimationId-16kGh6Cm.js";import"./ActivePoints-DWVIWGut.js";import"./Dot-BvCj9lGB.js";import"./Symbols-Bj_FeK6Z.js";import"./symbol-uBdmaQJZ.js";import"./RegisterGraphicalItemId-BEb5c735.js";import"./ErrorBarContext-DCWPzwAV.js";import"./SetGraphicalItem-CHnk-ZHw.js";import"./getRadiusAndStrokeWidthFromDot-CEgP0kCP.js";import"./ActiveShapeUtils-BD2nIqux.js";import"./useEffectiveDataKey-C7ZRWxHk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

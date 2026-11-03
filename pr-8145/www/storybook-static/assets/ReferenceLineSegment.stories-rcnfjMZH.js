import{R as e}from"./iframe-C9Icmvn-.js";import{R as i}from"./zIndexSlice-BtEgXkTj.js";import{C as n}from"./ComposedChart-D9iZM0Ny.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BSotI2sM.js";import{X as s}from"./XAxis-3c-aZ5Pt.js";import{Y as c}from"./YAxis-EbKXu10L.js";import{L as d}from"./Line-CQVEJkC8.js";import{R as g}from"./ReferenceLine-DSO4_Nge.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./throttle-BP58Oxor.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./RechartsWrapper-CtHkjOy7.js";import"./axisSelectors-C12AZXdM.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZcRnjza.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./CartesianAxis-R6B48fBq.js";import"./Layer-wqByJTCO.js";import"./Text-sNGi1G51.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./Label-B5iIonTH.js";import"./types-C9Uy4GKt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C441Qxgg.js";import"./step-DBIWc43o.js";import"./path-DyVhHtw_.js";import"./LabelList-BBURyYAC.js";import"./ActivePoints-CHnUvRu_.js";import"./Dot-DC8dfn9r.js";import"./activeStyles-h91K6JZi.js";import"./useAnimationId-BL9AhoYr.js";import"./dataEntryStyles-BjZqswDr.js";import"./Symbols-ColLzRAz.js";import"./symbol-4cE6vjyv.js";import"./ErrorBarContext-BlDg14Jm.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getRadiusAndStrokeWidthFromDot-Df9gcykC.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./useEffectiveDataKey-C0LxQIpq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

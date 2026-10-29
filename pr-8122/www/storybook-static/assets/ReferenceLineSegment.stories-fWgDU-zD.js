import{R as e}from"./iframe-BmdtsHI1.js";import{R as i}from"./zIndexSlice-CLt9waUo.js";import{C as n}from"./ComposedChart-DHlxdvQ8.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-kiNNWl2U.js";import{X as s}from"./XAxis-SiUufnTD.js";import{Y as c}from"./YAxis-D_YhB_w8.js";import{L as d}from"./Line-BFAqQ4J_.js";import{R as g}from"./ReferenceLine-C5gIAN8n.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D3fedd0f.js";import"./throttle-DIqkA_6B.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./RechartsWrapper-CW25TSBD.js";import"./axisSelectors-CWAMaE0j.js";import"./polarAxisSelectors-DqiScafe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4n2-g_Q.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./CartesianAxis-6ZKwTVD2.js";import"./Layer-uwW889ah.js";import"./Text-DgdwosBP.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./Label-efFOyHP_.js";import"./types-TcTpNVA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-St2o1Zg2.js";import"./step-C3G0yHTA.js";import"./path-DyVhHtw_.js";import"./LabelList-BBJeoy6S.js";import"./ActivePoints-DOV6z7vt.js";import"./Dot-D4FfFK1V.js";import"./activeStyles-0PlrA4t0.js";import"./useAnimationId-C4l6OBef.js";import"./dataEntryStyles-C-VVWe1s.js";import"./Symbols-DTd7inGs.js";import"./symbol-OLqGol2l.js";import"./ErrorBarContext-C7bFffEo.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getRadiusAndStrokeWidthFromDot-J3eGzewL.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-jmhe2Qk6.js";import{R as i}from"./zIndexSlice-C_QNUIlg.js";import{C as n}from"./ComposedChart-DDgeQ340.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BhkEKy1o.js";import{X as s}from"./XAxis-BmABHSTj.js";import{Y as c}from"./YAxis-Bwmry524.js";import{L as d}from"./Line-CQCNhVyP.js";import{R as g}from"./ReferenceLine-BM9_eAbV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CCkzVq5s.js";import"./throttle-DZINazP_.js";import"./index-BadCiZkf.js";import"./index-DMlmY332.js";import"./RechartsWrapper-C_ACRdKM.js";import"./axisSelectors-CTtb55NE.js";import"./polarAxisSelectors-D0zNKA08.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_kmjLSGJ.js";import"./index-1mWypBK7.js";import"./index-CSauTcUd.js";import"./renderedTicksSlice-DiLJD3iy.js";import"./index-BvBcGY0n.js";import"./fillDefinitions-2mEkHeYa.js";import"./CartesianChart-DW-0hcB8.js";import"./ZIndexPortal-Qo_oHvo4.js";import"./CategoricalChart-clWULlZK.js";import"./CartesianAxis-CTjd-a6A.js";import"./Layer-B39D7NeJ.js";import"./Text-CmetEc_4.js";import"./DOMUtils-DKPcLfF3.js";import"./ZIndexLayer-BifNHCzV.js";import"./Label-Db1KZEia.js";import"./types-Cpf9ifaq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B9PMeVXe.js";import"./step-C3gp0-r4.js";import"./path-DyVhHtw_.js";import"./LabelList-Dq0YgplD.js";import"./ActivePoints-BpkFEdDf.js";import"./Dot-Oe3PKIgB.js";import"./activeStyles-sH1GlI3K.js";import"./useAnimationId-Zg5v1vJq.js";import"./dataEntryStyles-CsSE3ak0.js";import"./Symbols-BFwKw-3i.js";import"./symbol-sHGxO5Ns.js";import"./ErrorBarContext-C2f99oDG.js";import"./SetGraphicalItem-DSPgNjiu.js";import"./getRadiusAndStrokeWidthFromDot-Ds0PjUPZ.js";import"./ActiveShapeUtils-cdr3C3k5.js";import"./useEffectiveDataKey-DmT6RBvF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-SPJaGn0F.js";import{R as i}from"./zIndexSlice-nIWAtr6b.js";import{C as n}from"./ComposedChart-CmUNzOx5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-QBcC7SQw.js";import{X as s}from"./XAxis-D91EJms1.js";import{Y as c}from"./YAxis-Whjsv-c4.js";import{L as d}from"./Line-Q7YZR7MH.js";import{R as g}from"./ReferenceLine-BKczp972.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgTytEg2.js";import"./throttle-Cb7coFKv.js";import"./index-BiFHN7g6.js";import"./index-DUJEB6Vl.js";import"./RechartsWrapper-DA_3WzAb.js";import"./axisSelectors-BV5QtOCC.js";import"./polarAxisSelectors-CIAIQYnO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ChAd5Ihl.js";import"./index-U_F_U_yW.js";import"./index-B2XfpK0R.js";import"./renderedTicksSlice-CknOQqZ1.js";import"./index-Bl846mwt.js";import"./CartesianChart-DHKYKaYX.js";import"./ZIndexPortal-zVY5zLCl.js";import"./CategoricalChart-CWkGyQY4.js";import"./CartesianAxis-D0rqelxZ.js";import"./Layer-GoN2yHWA.js";import"./Text-BYUbuGtp.js";import"./DOMUtils-BDkhG4Mf.js";import"./ZIndexLayer-CuxzF6Ru.js";import"./Label-COXn0L8P.js";import"./types-DJ6_4iq2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-CQDBLSXd.js";import"./step-g9-z_5ZT.js";import"./path-DyVhHtw_.js";import"./LabelList-BeGqiY0d.js";import"./ActivePoints-BWJOXnL8.js";import"./Dot-CJO9q9fw.js";import"./activeStyles-BViWZA4B.js";import"./useAnimationId-d7QVaKqG.js";import"./dataEntryStyles-DAzBzzsr.js";import"./Symbols-CUkMeiyc.js";import"./symbol-DauxKq8Z.js";import"./ErrorBarContext-CyoUsRnh.js";import"./SetGraphicalItem-B-k8mUay.js";import"./getRadiusAndStrokeWidthFromDot-DYuKOPnc.js";import"./ActiveShapeUtils-zpveVZ8b.js";import"./useEffectiveDataKey-PspZ4BaC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

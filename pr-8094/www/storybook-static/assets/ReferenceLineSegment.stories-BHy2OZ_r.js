import{R as e}from"./iframe-DsuaRm2b.js";import{R as i}from"./zIndexSlice-BHCK5tg8.js";import{C as n}from"./ComposedChart-C07yVNqj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C4KbAzbG.js";import{X as s}from"./XAxis-DLqBMq0Q.js";import{Y as c}from"./YAxis-dn2GRGzH.js";import{L as d}from"./Line-DtkCR5A2.js";import{R as g}from"./ReferenceLine-eAX9-IWi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./throttle-CuCThFR3.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./RechartsWrapper-B7rLRibb.js";import"./axisSelectors-CXh7ZK0v.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D1FvEoQ3.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./Text-7KEzSR95.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./Label-Bg_SjTDz.js";import"./dataEntryStyles-CVVg9ITz.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B54D09ht.js";import"./step-CnnXSPZn.js";import"./path-DyVhHtw_.js";import"./LabelList-B1g8Cfod.js";import"./ActivePoints-BIHfIwHR.js";import"./Dot-CLio3VMY.js";import"./activeStyles-BEbyAFUN.js";import"./useAnimationId-BDMFeBiK.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getRadiusAndStrokeWidthFromDot-CuYo3i94.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-C5Zmv3_Q.js";import{R as i}from"./zIndexSlice-C4av0-dC.js";import{C as n}from"./ComposedChart-DQmUib5w.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-d1gBM25Q.js";import{X as s}from"./XAxis-CXSd1JZe.js";import{Y as c}from"./YAxis-iK8t4Zai.js";import{L as d}from"./Line-CPW9K2II.js";import{R as g}from"./ReferenceLine-2Z3pXG_m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CwLCHu7g.js";import"./throttle-D_vuQCXn.js";import"./index-CUtPCjcT.js";import"./index-uwf7-i8Q.js";import"./RechartsWrapper-Cbn62-za.js";import"./axisSelectors-LAQsy88k.js";import"./polarAxisSelectors-C3ABPV6P.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AN13rbty.js";import"./index-DOiQQlaZ.js";import"./index-SEOAbOhc.js";import"./renderedTicksSlice-Bu3GXH9z.js";import"./index-eHYTpsq_.js";import"./fillDefinitions-chfTF0ar.js";import"./CartesianChart-7XbIDtU0.js";import"./chartDataContext-DtLXn_BI.js";import"./CategoricalChart-XRCYKQSl.js";import"./CartesianAxis-Bf2m6kfJ.js";import"./Layer-DEJLFQPm.js";import"./Text-CCFi8jW2.js";import"./ZIndexLayer-Dmgp-ZTU.js";import"./Label-nDrE78J8.js";import"./types-BtbrjSJt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CazSWC5X.js";import"./step-D-ukyLTR.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BKf5w-lY.js";import"./ActivePoints-GlAtMEJD.js";import"./Dot-BoR4BuHa.js";import"./activeStyles-CRgGZhKT.js";import"./useAnimationId-Dbt3XGZ7.js";import"./Symbols-CWRNkrAk.js";import"./symbol-B4pqWh0c.js";import"./ErrorBarContext-9P_gyWZq.js";import"./SetGraphicalItem-Bb8-L5uL.js";import"./getRadiusAndStrokeWidthFromDot-C3ICIzAo.js";import"./ActiveShapeUtils-HLQ9J4sr.js";import"./useEffectiveDataKey-DifAuVlu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

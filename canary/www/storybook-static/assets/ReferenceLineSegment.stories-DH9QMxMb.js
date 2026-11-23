import{R as e}from"./iframe-BPMC3WYJ.js";import{R as i}from"./zIndexSlice-Dj40vb7g.js";import{C as n}from"./ComposedChart-q5KBJ-2n.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D6M-inzk.js";import{X as s}from"./XAxis-BFqeDJUQ.js";import{Y as c}from"./YAxis--I1P1gwH.js";import{L as d}from"./Line-D5wU_WBD.js";import{R as g}from"./ReferenceLine-CLFyVi3m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DrqSG9Sb.js";import"./throttle-B4k3GkVg.js";import"./index--Kmbgs-i.js";import"./index-AyLBa-KC.js";import"./RechartsWrapper-DOOVVQ84.js";import"./axisSelectors-CrZDIgWl.js";import"./polarAxisSelectors-BUrPAP_8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWK10Otc.js";import"./index-RBnEXtxa.js";import"./index-CYO9i6D-.js";import"./renderedTicksSlice-DlYiisC_.js";import"./index-sIio76FK.js";import"./fillDefinitions-D5RroE9V.js";import"./CartesianChart-DjwHqbL7.js";import"./chartDataContext-Duv-qyDG.js";import"./CategoricalChart-3WFZ3cEW.js";import"./CartesianAxis-Fpal_j0O.js";import"./Layer-Cp3c10oW.js";import"./Text-DQWN35zZ.js";import"./ZIndexLayer-edtK9VrY.js";import"./Label-pm6AJFCJ.js";import"./types-w6DZXHOl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-Dlem8Fc0.js";import"./Curve-S3vEoheb.js";import"./step-DsVBo6Bh.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BuPGiwQu.js";import"./ActivePoints-D3NC-ckk.js";import"./Dot-Ctn63yOC.js";import"./activeStyles-Ci2F5zQC.js";import"./useAnimationId-BI9f9iTm.js";import"./Symbols-BiXrA8HB.js";import"./symbol-DMDdywXz.js";import"./ErrorBarContext-CgYrVc8t.js";import"./SetGraphicalItem-BZWLeuys.js";import"./ActiveShapeUtils-yBzGzkry.js";import"./useEffectiveDataKey-o3mJFvm5.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

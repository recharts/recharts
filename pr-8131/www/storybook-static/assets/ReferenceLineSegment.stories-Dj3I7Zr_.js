import{R as e}from"./iframe-N2_k56Bi.js";import{R as i}from"./zIndexSlice-C2n8MH5C.js";import{C as n}from"./ComposedChart-BNYP_tMQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bjjq3zH2.js";import{X as s}from"./XAxis-BMzjraU8.js";import{Y as c}from"./YAxis-BWNeCe4E.js";import{L as d}from"./Line-tLQ2ur7I.js";import{R as g}from"./ReferenceLine-lHfM76EC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DqwpxfQ6.js";import"./throttle-wqOW3oZ2.js";import"./index-DW0bz290.js";import"./index-CE3twcP3.js";import"./RechartsWrapper-Dp1Mzfqy.js";import"./axisSelectors-CAEFlKfw.js";import"./polarAxisSelectors-BJLn-yPG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXPoqAuA.js";import"./index-BDOvrbcw.js";import"./index-C9ctZ6JT.js";import"./renderedTicksSlice-tTdjxG_s.js";import"./index-ByH8O9KC.js";import"./fillDefinitions-dJCuHQYF.js";import"./CartesianChart-CoYa15-4.js";import"./ZIndexPortal-C8tnP8Pm.js";import"./CategoricalChart-CrnXV7kh.js";import"./CartesianAxis-DPQ0rx3G.js";import"./Layer-CJpZrgpd.js";import"./Text-CtPksR9D.js";import"./DOMUtils-DcUCUVaa.js";import"./ZIndexLayer-C9mVRhjd.js";import"./Label-BtTjy9h1.js";import"./types-DGUdIwXy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DgWUxnsC.js";import"./step-DyI48c2G.js";import"./path-DyVhHtw_.js";import"./LabelList-CpgHxPqB.js";import"./ActivePoints-DdYZUJkv.js";import"./Dot-D37s9B75.js";import"./activeStyles-CM4N_FMo.js";import"./useAnimationId-LBywhlWd.js";import"./dataEntryStyles-C-YlvJRH.js";import"./Symbols-jQ5nGruQ.js";import"./symbol-tKDu3Sq7.js";import"./ErrorBarContext-BEo9CD_X.js";import"./SetGraphicalItem-CsZSO0ag.js";import"./getRadiusAndStrokeWidthFromDot-BENo0Gmv.js";import"./ActiveShapeUtils-CdIqoiTp.js";import"./useEffectiveDataKey-D760KGHv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

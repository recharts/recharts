import{R as e}from"./iframe-0ard7KC3.js";import{R as i}from"./zIndexSlice-D6_sdm0t.js";import{C as n}from"./ComposedChart-BAfLIPPg.js";import{p}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-BbGeSlEt.js";import{X as s}from"./XAxis-BVBrGZek.js";import{Y as c}from"./YAxis-DAk7UonM.js";import{L as d}from"./Line-D3ULcpWK.js";import{R as g}from"./ReferenceLine-klcgLKqp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BPB9Gu5f.js";import"./throttle-1OYicAaw.js";import"./index-BOEtp96n.js";import"./index-JVAEaqaY.js";import"./RechartsWrapper-BOxuYrqk.js";import"./axisSelectors-Cr_3x7-m.js";import"./polarAxisSelectors-3HyfX2K5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLPwnwVf.js";import"./index-9PVjWb0J.js";import"./index-CsSqo8aU.js";import"./renderedTicksSlice-D50-krNg.js";import"./index-ByhU0DDr.js";import"./CartesianChart-CQQLqvcY.js";import"./ZIndexPortal-Cak7rTbR.js";import"./CategoricalChart-DbqXM1OT.js";import"./CartesianAxis-CO2WQovg.js";import"./Layer-C0FwdD0E.js";import"./Text-BVN9ck4W.js";import"./DOMUtils-DPHrecH2.js";import"./pageBackground-C8Mqnqon.js";import"./ZIndexLayer-Xk93xkJ7.js";import"./Label-Bzl5TsqO.js";import"./types-DiLmbnVu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CarsCIb_.js";import"./Curve-N3TADMlP.js";import"./step-Qo2aOxrQ.js";import"./path-DyVhHtw_.js";import"./LabelList-fTXqNJ75.js";import"./ActivePoints-DWkJMBKo.js";import"./Dot-CmHWeTnm.js";import"./activeStyles-7ntMjbeG.js";import"./useAnimationId-DI_YvP-u.js";import"./dataEntryStyles-BOdZqKVH.js";import"./Symbols-lsHxNSE5.js";import"./symbol-BoiiS6VD.js";import"./ErrorBarContext-Dy4MR2nb.js";import"./SetGraphicalItem-CY1fZPiL.js";import"./getRadiusAndStrokeWidthFromDot-CnAH_jdf.js";import"./ActiveShapeUtils-Uo1E3VyC.js";import"./useEffectiveDataKey-BiPIBSbw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const he={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},le=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,le as __namedExportsOrder,he as default};

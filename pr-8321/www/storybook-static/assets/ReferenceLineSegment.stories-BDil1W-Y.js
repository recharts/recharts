import{R as e}from"./iframe-CvaFu5-c.js";import{R as i}from"./zIndexSlice-BCgb8eXa.js";import{C as n}from"./ComposedChart-CJeqweUj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-3AYqMTzZ.js";import{X as s}from"./XAxis-DQoNxyYu.js";import{Y as c}from"./YAxis-3HuEzFma.js";import{L as d}from"./Line-Bo0hpeCk.js";import{R as g}from"./ReferenceLine-C7M3Msmg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./throttle-CPKsFv9V.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./RechartsWrapper-B-sPOqKb.js";import"./axisSelectors-BvhvBZte.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-1_Z3dmgw.js";import"./index-gm9J6V3Z.js";import"./index-DnvnPPwe.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./CartesianAxis-71DKFDGT.js";import"./Layer-GSzXSKza.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./Label-D9P4cAWK.js";import"./types-B8ocCfqn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-9zV8sg_8.js";import"./Curve-CMLV0YB3.js";import"./step-C9qQ8yhV.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B7SMVv85.js";import"./ActivePoints-DxXTbZF0.js";import"./Dot-C2Vb3upB.js";import"./activeStyles-TP9Js-Ix.js";import"./useAnimationId-UMR0vx8i.js";import"./Symbols-BJcGRvsQ.js";import"./symbol-CBJm44QG.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-Dzq6KhZI.js";import{R as i}from"./zIndexSlice-DYy_9E3f.js";import{C as n}from"./ComposedChart-ZLGekMnz.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CUAX-74C.js";import{X as s}from"./XAxis-Cwq9lpMm.js";import{Y as c}from"./YAxis-BZEADbr5.js";import{L as d}from"./Line-BjRSCYND.js";import{R as g}from"./ReferenceLine-DENq2JfY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRjkVoLn.js";import"./throttle-PAjjPANm.js";import"./index-BecjNu5M.js";import"./index-DZ0fS5qA.js";import"./RechartsWrapper-Du3nHOoA.js";import"./axisSelectors-B8Xp5jln.js";import"./polarAxisSelectors-BWIDzk5M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BwgC5IAo.js";import"./index-CVNCOx1i.js";import"./index-CMF9Loaq.js";import"./renderedTicksSlice-B-37bEiL.js";import"./index-DAhgw1CA.js";import"./fillDefinitions-BkZRDt9Y.js";import"./CartesianChart-Bid-fMci.js";import"./ZIndexPortal-D7MLJjGY.js";import"./CategoricalChart-dB5tt0RG.js";import"./CartesianAxis-DeYfDX_6.js";import"./Layer-DdRdeMHx.js";import"./Text-D6SfU34x.js";import"./DOMUtils-Dv3oYuXo.js";import"./ZIndexLayer-B0fPlQAE.js";import"./Label-ns1HN8QT.js";import"./types-Bt-JjK9T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-GBvSi4lY.js";import"./step-CPy7v0ge.js";import"./path-DyVhHtw_.js";import"./LabelList-0dTnEet5.js";import"./ActivePoints-APIfm04L.js";import"./Dot-BGvDEhvz.js";import"./activeStyles-B6qdsX9q.js";import"./useAnimationId-B5vYW3bS.js";import"./dataEntryStyles-BDzv2dJf.js";import"./Symbols-CuwHSUOy.js";import"./symbol-5MHZNE2z.js";import"./ErrorBarContext-DWqusyea.js";import"./SetGraphicalItem-C8-iEcE-.js";import"./getRadiusAndStrokeWidthFromDot-CAouDUSk.js";import"./ActiveShapeUtils-qY34SWQy.js";import"./useEffectiveDataKey-2DeBYWTa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

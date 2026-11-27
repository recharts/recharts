import{R as e}from"./iframe-2f2w1eP7.js";import{R as i}from"./zIndexSlice-CjJDCeK0.js";import{C as n}from"./ComposedChart-D2F9GDNP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-TBapx3Gf.js";import{X as s}from"./XAxis-CJ4nXsTf.js";import{Y as c}from"./YAxis-CAInNDnd.js";import{L as d}from"./Line-5fH2CL9K.js";import{R as g}from"./ReferenceLine-DA3jZQJH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CGl449JI.js";import"./get-CjriyByo.js";import"./throttle-b8Y6KxZo.js";import"./index-C9gJxZVs.js";import"./index-Ftdy-Ulz.js";import"./RechartsWrapper-BnbJXMBG.js";import"./axisSelectors-D3RC08dV.js";import"./polarAxisSelectors--pE3aPXl.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cc08ccIM.js";import"./index-6HopGisC.js";import"./index-CczUKsLU.js";import"./renderedTicksSlice-Bc2u_l9O.js";import"./index-fhAHbGs4.js";import"./fillDefinitions-CQk55RgO.js";import"./CartesianChart-DpJaOFiF.js";import"./chartDataContext-D-ZzsBgN.js";import"./CategoricalChart-BX6OynRn.js";import"./CartesianAxis-Bgf8P4J0.js";import"./Layer-BbIS_iGu.js";import"./Text-Ch8rCVXH.js";import"./ZIndexLayer-UYyaz2px.js";import"./Label-CxsWdT_n.js";import"./types-DRiMB5bf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-AuV9g_SF.js";import"./Curve-mX17fPzt.js";import"./step-DiSsdMnX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CX3wrxT3.js";import"./ActivePoints-Bv6CckHB.js";import"./Dot-BR-A3ViM.js";import"./activeStyles-fmqkmIUl.js";import"./useAnimationId-CyAJnZP0.js";import"./Symbols-fsmg-V93.js";import"./symbol-CyxV486p.js";import"./ErrorBarContext-BMvZMoH6.js";import"./SetGraphicalItem-12XTWwtV.js";import"./ActiveShapeUtils-C_e7Ka4v.js";import"./useEffectiveDataKey-BS5IJ5Is.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

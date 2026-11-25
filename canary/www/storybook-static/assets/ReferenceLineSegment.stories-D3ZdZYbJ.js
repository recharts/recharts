import{R as e}from"./iframe-DUAuhaDC.js";import{R as i}from"./zIndexSlice-CUoIUvAK.js";import{C as n}from"./ComposedChart-veB2s4XE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B-xmY73e.js";import{X as s}from"./XAxis-DmKgW9ez.js";import{Y as c}from"./YAxis-D6BReFW5.js";import{L as d}from"./Line-W70Z0DZz.js";import{R as g}from"./ReferenceLine-axRTktjJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./throttle-C34y-YGF.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./RechartsWrapper-C2YARZjw.js";import"./axisSelectors-DKypf8DU.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BzOzklff.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./CartesianAxis-DlgnL8lU.js";import"./Layer-CfAsTpPf.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./Label-BlZKxSKy.js";import"./types-BR7AAoV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-D_0qwyd0.js";import"./Curve-DZ4xVtop.js";import"./step-C7gBnBWw.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-ChkH59oB.js";import"./ActivePoints-V66Ltvnp.js";import"./Dot-BAVTGvfE.js";import"./activeStyles-joM0AtO_.js";import"./useAnimationId-B4mDEWzj.js";import"./Symbols-dKtAvw89.js";import"./symbol-L0CgFuJm.js";import"./ErrorBarContext-CEfM97ww.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./useEffectiveDataKey-CqgqLaRX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

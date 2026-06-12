import{R as e}from"./iframe-B7udcz8q.js";import{R as i}from"./zIndexSlice-CtXztuzC.js";import{C as a}from"./ComposedChart-BH1TZk1K.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-nS5-AJWi.js";import{X as s}from"./XAxis-DiPjyBYO.js";import{Y as c}from"./YAxis-B456uVCj.js";import{L as d}from"./Line-D-LESVBA.js";import{R as g}from"./ReferenceLine-DaSPJAn6.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-t_2Sayw7.js";import"./index-S5IzzpjS.js";import"./index-rAymN7LL.js";import"./get-Tn0kxTo7.js";import"./resolveDefaultProps-B-U9qcdT.js";import"./isWellBehavedNumber-BlYOzctW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-RU_ueSyC.js";import"./index-BlkuEMuV.js";import"./index-Bml9ugX6.js";import"./renderedTicksSlice-LbTh7uAL.js";import"./axisSelectors-Cj3RkADr.js";import"./d3-scale-NB2wmaCb.js";import"./string-B6fdYHAA.js";import"./CartesianChart-94_kN34Y.js";import"./chartDataContext-BQtkj7i-.js";import"./CategoricalChart-Hmy3E080.js";import"./CartesianAxis-Cfla_J1H.js";import"./Layer-CJbCrDcq.js";import"./Text-DijhQOvE.js";import"./DOMUtils-D_cLkzH2.js";import"./Label-DwDNb6uu.js";import"./ZIndexLayer-D4FmDVUU.js";import"./types-bSkV0tKv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CqYDgXu-.js";import"./step-BfmxT7JJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-KJX7W3it.js";import"./useAnimationId-Ceo5Qx4Z.js";import"./ActivePoints-03Jr3wsv.js";import"./Dot-CT7VE7Ou.js";import"./RegisterGraphicalItemId-NzEXLpZt.js";import"./ErrorBarContext-DUPlcwIm.js";import"./GraphicalItemClipPath-dDeN-gZy.js";import"./SetGraphicalItem-CbXxnaP2.js";import"./getRadiusAndStrokeWidthFromDot-C1_PUQIm.js";import"./ActiveShapeUtils-CuaFKTcX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};

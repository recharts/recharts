import{R as e}from"./iframe-DkQJn7oC.js";import{R as i}from"./zIndexSlice-CLvhVPNj.js";import{C as a}from"./ComposedChart-BSrSYERH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BjORpNZe.js";import{X as s}from"./XAxis-OlRaja_E.js";import{Y as c}from"./YAxis-B058BHQI.js";import{L as d}from"./Line-3Fr2lg_K.js";import{R as g}from"./ReferenceLine-YMWUN-hZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ozzvrCwh.js";import"./index-DD1gmeQO.js";import"./index-DNtFXHJ-.js";import"./get-_o-XDxyc.js";import"./resolveDefaultProps-CtV3qxun.js";import"./isWellBehavedNumber-D3HHn2e5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D5ByFvr9.js";import"./index-CDE_9WY4.js";import"./index-BU3HhPoo.js";import"./renderedTicksSlice-DdtdEwsq.js";import"./axisSelectors-kKO86fyF.js";import"./d3-scale-B9HIJ_CW.js";import"./CartesianChart-BQyR2r2D.js";import"./chartDataContext-Ca9RDW-S.js";import"./CategoricalChart-Fc9nOzpN.js";import"./CartesianAxis-BfpvL1x5.js";import"./Layer-Br1RHuVf.js";import"./Text-Bdxz4_Jg.js";import"./DOMUtils-Dl1hyTMQ.js";import"./Label-ufurgCkW.js";import"./ZIndexLayer-BvwLITgH.js";import"./types-BZmxyoje.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-HzFtr0jb.js";import"./step-G_UXBYu7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-w7rZvjc1.js";import"./useAnimationId-CwryZT39.js";import"./ActivePoints-j2kJmVua.js";import"./Dot-Dno_atKi.js";import"./RegisterGraphicalItemId-BCNHxJaH.js";import"./ErrorBarContext-DzKhrRZV.js";import"./GraphicalItemClipPath-Dkvi73X5.js";import"./SetGraphicalItem-Cl7ozA9v.js";import"./getRadiusAndStrokeWidthFromDot-DRw_J2VH.js";import"./ActiveShapeUtils-CNNYz_9g.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};

import{R as e}from"./iframe-Bq5XC69E.js";import{R as i}from"./zIndexSlice-CH_ot-kn.js";import{C as n}from"./ComposedChart-DMESowBx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CylaqNlF.js";import{X as s}from"./XAxis-CJ__L0zP.js";import{Y as c}from"./YAxis-C-Z0y3eM.js";import{L as d}from"./Line-CrvG0Qpi.js";import{R as g}from"./ReferenceLine-BcUXoUEe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./throttle-Ct-rPSxx.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./RechartsWrapper-bjxa_6pD.js";import"./axisSelectors-BOZBH3Nn.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-MB7Peh3q.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./CartesianAxis-D7JxrcAJ.js";import"./Layer-Cnu5LwAi.js";import"./Text-BD2GyaNh.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./Label-CGkLvakU.js";import"./types-L3YuI5Vg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BJhBX3YD.js";import"./step-CitgC7Ni.js";import"./path-DyVhHtw_.js";import"./LabelList-0FCseyju.js";import"./ActivePoints-BI0eNhe7.js";import"./Dot-DSeqyqR_.js";import"./activeStyles-BIBdu-Bw.js";import"./useAnimationId-DwGbNOL_.js";import"./dataEntryStyles-DVS0RaWt.js";import"./Symbols-Cive21Dh.js";import"./symbol-BHxgCtzG.js";import"./ErrorBarContext-JgTKdwbz.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getRadiusAndStrokeWidthFromDot-BSwjIQeh.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

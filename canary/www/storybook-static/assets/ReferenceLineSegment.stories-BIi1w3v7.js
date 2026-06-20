import{R as e}from"./iframe-BT2fAbbB.js";import{R as i}from"./zIndexSlice-0bHXttbZ.js";import{C as a}from"./ComposedChart-DdVrflO2.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-vXCbkaod.js";import{X as s}from"./XAxis-BoVnFGs6.js";import{Y as c}from"./YAxis-ChrnpRQE.js";import{L as d}from"./Line-D6orMjMD.js";import{R as g}from"./ReferenceLine-BFQVYEyg.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cs_HwjFQ.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./get-C017lSC3.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./isWellBehavedNumber-LZ0iz-Mn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdzpqzJC.js";import"./index-BploPkwU.js";import"./index-DkhzDGLz.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./CartesianAxis-BeeS8R2V.js";import"./Layer-CwmO2g8o.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./Label-BKr83VYg.js";import"./ZIndexLayer-vZErJXnS.js";import"./types-UgUXQeZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-5RTqUT5x.js";import"./step-CJvEyRUy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9eraKkz.js";import"./useAnimationId-B9b4cNZQ.js";import"./ActivePoints-DVgNgNPk.js";import"./Dot-BCEb4Rzy.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./ErrorBarContext-Dl3pruuO.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./getRadiusAndStrokeWidthFromDot-CAQ9ByQw.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

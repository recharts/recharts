import{R as e}from"./iframe-DNItCT7m.js";import{R as i}from"./zIndexSlice-BIc7DaAW.js";import{C as a}from"./ComposedChart-C5LgD4az.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-68pXkVyS.js";import{X as s}from"./XAxis-Daqmz5Xv.js";import{Y as c}from"./YAxis-BTzQl_Zr.js";import{L as d}from"./Line-DvlQWCkT.js";import{R as g}from"./ReferenceLine-DNWgeCKv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C6rBLGvR.js";import"./index-CATLtXB_.js";import"./index-COLkHtZe.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl2ououO.js";import"./isWellBehavedNumber-CgbpTCVR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMs8UQqD.js";import"./index-ROxRgVl8.js";import"./index-C_m6BLaT.js";import"./renderedTicksSlice-DtPKT0nb.js";import"./axisSelectors-BBK9nbq3.js";import"./d3-scale-CToN17b5.js";import"./CartesianChart-CPv-NLLr.js";import"./chartDataContext-abx-D_mf.js";import"./CategoricalChart-DyfBdBCf.js";import"./CartesianAxis-Bnx97baV.js";import"./Layer-Db2cjn9q.js";import"./Text-CG5VQSen.js";import"./DOMUtils-D-QZZqkA.js";import"./Label-Dd-8-k84.js";import"./ZIndexLayer-C8mc3Rgo.js";import"./types-BUhan55B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DUQP-DVq.js";import"./step-CV_HIcdR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CA_PH1lw.js";import"./useAnimationId-0YgIZ0Y8.js";import"./ActivePoints-DrmmrcJw.js";import"./Dot-CBZvltEJ.js";import"./RegisterGraphicalItemId-DzuoUeII.js";import"./ErrorBarContext-BlEkCG4n.js";import"./GraphicalItemClipPath-DTm1hIPW.js";import"./SetGraphicalItem-B0-RRBJT.js";import"./getRadiusAndStrokeWidthFromDot-DPqVYI7W.js";import"./ActiveShapeUtils-DbSW9g1N.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

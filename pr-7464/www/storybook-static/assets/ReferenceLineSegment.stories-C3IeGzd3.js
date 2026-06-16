import{R as e}from"./iframe-DMp7qWBc.js";import{R as i}from"./zIndexSlice-DwEqiBQ-.js";import{C as a}from"./ComposedChart-r_H9u5_0.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-FVIu4V9p.js";import{X as s}from"./XAxis-BEU7rEXV.js";import{Y as c}from"./YAxis-Csr1iP4L.js";import{L as d}from"./Line-ChEIx0ob.js";import{R as g}from"./ReferenceLine-Bu66_IEh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cdu3yC2y.js";import"./index-DJULArvF.js";import"./index-FSdFZP1-.js";import"./get-xm_p6-0H.js";import"./resolveDefaultProps-CCMYu7HG.js";import"./isWellBehavedNumber-B2IEwkWH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8C7w0fBl.js";import"./index-Bwz7camG.js";import"./index-BjkWDWFl.js";import"./renderedTicksSlice-xTgogQQT.js";import"./axisSelectors-CBZu9wu4.js";import"./d3-scale-BXmCrXPd.js";import"./string-B6fdYHAA.js";import"./CartesianChart-k38Maw3n.js";import"./chartDataContext-CQxGEncO.js";import"./CategoricalChart-Wp3XMWTG.js";import"./CartesianAxis-BpcewqQP.js";import"./Layer-CuLdBvJ8.js";import"./Text-BUBM5ImZ.js";import"./DOMUtils-u8y8aNP3.js";import"./Label-CTVwy9Ni.js";import"./ZIndexLayer-r-UQ7MHf.js";import"./types-nrPXTQ41.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-ClaSDCwv.js";import"./step-BmHxAVOq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BdLU55_g.js";import"./useAnimationId-Bo28EVo_.js";import"./ActivePoints-BbdycfO-.js";import"./Dot-BLk4Ltpd.js";import"./RegisterGraphicalItemId-CQp3zThr.js";import"./ErrorBarContext-BXcE1fb6.js";import"./GraphicalItemClipPath-BhBDN4-E.js";import"./SetGraphicalItem-DeAOJWfR.js";import"./getRadiusAndStrokeWidthFromDot-3yPUTvTw.js";import"./ActiveShapeUtils-B9LOxtfw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

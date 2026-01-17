import{e}from"./iframe-DVbcaGEk.js";import{R as i}from"./arrayEqualityCheck-D_Ccs7mG.js";import{C as a}from"./ComposedChart-CkOG6aXI.js";import{C as p}from"./CartesianGrid-BC7g-EtZ.js";import{X as n}from"./XAxis-3cZu4ol_.js";import{Y as s}from"./YAxis-C7ETLAW_.js";import{L as c}from"./Line-1nZMRzsV.js";import{R as d}from"./ReferenceLine-CufEhWEi.js";import{R as g}from"./RechartsHookInspector-CNkljFSC.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvhwmIy1.js";import"./PolarUtils-BCmS2GQK.js";import"./RechartsWrapper-CI_kVB3D.js";import"./hooks-DrJQ9o1U.js";import"./axisSelectors-Dq8ysKg7.js";import"./zIndexSlice-C3Z2iJoi.js";import"./CartesianChart-DwoXLAKx.js";import"./chartDataContext-BHEPpTwp.js";import"./CategoricalChart-DaQkrRKt.js";import"./CartesianAxis-DJav8QwX.js";import"./Layer-CTeRo74K.js";import"./Text-BnUgu-YX.js";import"./DOMUtils-C3Nevwge.js";import"./Label-Vy4t0U1x.js";import"./ZIndexLayer-DQcVBq3k.js";import"./types-glyr-q7x.js";import"./ReactUtils-PeKnJ7eE.js";import"./ActivePoints-iMOiVhGw.js";import"./Dot-BVLrssPS.js";import"./RegisterGraphicalItemId-sqkoY2pX.js";import"./ErrorBarContext-BcI0a9d6.js";import"./GraphicalItemClipPath-58Cq7fMH.js";import"./SetGraphicalItem-CMkDLn5I.js";import"./useAnimationId-BsgPO1Qj.js";import"./getRadiusAndStrokeWidthFromDot-Bc3iZ5Rn.js";import"./ActiveShapeUtils-CQxGvOB9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDg01dVF.js";import"./Trapezoid-_bdwRMqG.js";import"./Sector-D5CuENkF.js";import"./Symbols-D0zgYynQ.js";import"./Curve-DRY3YzYB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BAtGFOnL.js";import"./ChartSizeDimensions-B0rnWoCy.js";import"./OffsetShower-DI4Pwzeh.js";import"./PlotAreaShower-CPYGkOSs.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};

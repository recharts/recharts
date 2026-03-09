import{e}from"./iframe-zNZ6gtuS.js";import{R as i}from"./arrayEqualityCheck-Dt2SCAs7.js";import{C as p}from"./ComposedChart-Dsj55aBj.js";import{C as a}from"./CartesianGrid-DzNs49mq.js";import{X as n}from"./XAxis-DgIpX0Qf.js";import{Y as s}from"./YAxis-QWxltK0B.js";import{L as c}from"./Line-c3RRemFq.js";import{R as d}from"./ReferenceLine-zb8xb3y7.js";import{R as g}from"./RechartsHookInspector-C4FQcsDn.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./immer-M5VU9jjz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C9d9AYjY.js";import"./index-FhY_ESTg.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./zIndexSlice-DvWemZ8b.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./CartesianAxis-CVokkLFp.js";import"./Layer-BQ0S_2Uh.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./Label-BCeegupp.js";import"./ZIndexLayer-BqvP1SAm.js";import"./types-ynSAt5pr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CDHy-yxP.js";import"./ActivePoints-CYKr6AgU.js";import"./Dot-DYFOoPhj.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./ErrorBarContext-DueqJhS_.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./useAnimationId-C73SjrYi.js";import"./getRadiusAndStrokeWidthFromDot-OAyCmPPZ.js";import"./ActiveShapeUtils-CGpmN3Ni.js";import"./isPlainObject-BwG0gXsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOPBXjWX.js";import"./Trapezoid-D3gu8WeD.js";import"./Sector-BY1ck4On.js";import"./Symbols-D7LFKWCm.js";import"./symbol-31gnSDTi.js";import"./step-CCZqHQ-h.js";import"./Curve-o1yhe_oH.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-NY9m0Yqy.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./OffsetShower-ZOCzTQ0h.js";import"./PlotAreaShower-CmvJo0mK.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};

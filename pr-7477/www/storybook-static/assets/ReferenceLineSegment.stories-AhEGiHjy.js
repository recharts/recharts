import{R as e}from"./iframe-DiQxFPiD.js";import{R as i}from"./zIndexSlice-CbAjIrOk.js";import{C as a}from"./ComposedChart-CxyGmExL.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BNjJpSbz.js";import{X as s}from"./XAxis-EdXvGrQH.js";import{Y as c}from"./YAxis-Djww7T90.js";import{L as d}from"./Line-sGvSTEOh.js";import{R as g}from"./ReferenceLine-Blar6opd.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DosMXF92.js";import"./index-gf7fYE_b.js";import"./index-B_6w02dr.js";import"./get-Dz6QpTIZ.js";import"./resolveDefaultProps-BZylAH88.js";import"./isWellBehavedNumber-BHg_3JmY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvKHUawi.js";import"./index-DEHTfYnV.js";import"./index-DXMpEhi9.js";import"./renderedTicksSlice-CVnOD3jK.js";import"./axisSelectors-BmcnLQg7.js";import"./d3-scale-DQujxaME.js";import"./CartesianChart-j347tMAF.js";import"./chartDataContext-sNW_KTv-.js";import"./CategoricalChart-1umVaoo6.js";import"./CartesianAxis-BIrMP5Fh.js";import"./Layer-DW7oRwXF.js";import"./Text-BktdaDV_.js";import"./DOMUtils-C48HdCx5.js";import"./Label-DzhDJono.js";import"./ZIndexLayer-CyWmE1eJ.js";import"./types-3xORkcTs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B6Y4ZTmR.js";import"./step-C72WQite.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BWXZdjgl.js";import"./useAnimationId-BBPLHSdH.js";import"./ActivePoints-CDvTrnjr.js";import"./Dot-DDdvkJOK.js";import"./RegisterGraphicalItemId-CwapTkk7.js";import"./ErrorBarContext-CkyyD-i0.js";import"./GraphicalItemClipPath-B5HruHls.js";import"./SetGraphicalItem-glSzG2Ws.js";import"./getRadiusAndStrokeWidthFromDot-lcmD8n15.js";import"./ActiveShapeUtils-CPs_mOyJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

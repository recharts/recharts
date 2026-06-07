import{R as e}from"./iframe-D7uas6gE.js";import{R as i}from"./zIndexSlice-CAxEqTk2.js";import{C as a}from"./ComposedChart-Bu5G-rAT.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DKYL6vzY.js";import{X as s}from"./XAxis-Dlqp3Ogy.js";import{Y as c}from"./YAxis-W2Aym5bJ.js";import{L as d}from"./Line-Bt42QxV_.js";import{R as g}from"./ReferenceLine-D-bGfGsN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bz_FyVM_.js";import"./index-f8LaKELp.js";import"./index-Dk8a2p8j.js";import"./get-DF7xdNw5.js";import"./resolveDefaultProps-D-Lsr8PC.js";import"./isWellBehavedNumber-sBFjFrrH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPySDgBx.js";import"./index-Dt2ZjhLE.js";import"./index-BtWXQEei.js";import"./renderedTicksSlice-D97r0PID.js";import"./axisSelectors-BhBGSIM3.js";import"./d3-scale-DiIEKRDM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-vfyIL2vN.js";import"./chartDataContext-BvY4an5W.js";import"./CategoricalChart-BfBc4XBk.js";import"./CartesianAxis-C9po9qUK.js";import"./Layer-CiOv_hF8.js";import"./Text-BI32KZkM.js";import"./DOMUtils-BN2-dIl7.js";import"./Label-CK9JMWUG.js";import"./ZIndexLayer-C4cBgWge.js";import"./types-ChkVH57z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D_EYdykS.js";import"./step-5js8pNAW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DfQiZ4K_.js";import"./useAnimationId-PEz7c_71.js";import"./ActivePoints-BJoa2H8O.js";import"./Dot-DBpQmpJD.js";import"./RegisterGraphicalItemId-9gLwt1vY.js";import"./ErrorBarContext-B-gFvCKx.js";import"./GraphicalItemClipPath-DuOXc9m5.js";import"./SetGraphicalItem-BFYbkBHm.js";import"./getRadiusAndStrokeWidthFromDot-CDEMAmhz.js";import"./ActiveShapeUtils-BP0tkgwI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-QMSevZ_Z.js";import{R as i}from"./zIndexSlice-CqmMHsGQ.js";import{C as a}from"./ComposedChart-BanYSBKC.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-uhk3J4Lq.js";import{X as s}from"./XAxis-C0cN_JCK.js";import{Y as c}from"./YAxis-CX1GPX_T.js";import{L as d}from"./Line-1jaGMewt.js";import{R as g}from"./ReferenceLine-CrxHQ0Og.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CSWl79hr.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./get-Dt9ZBUsD.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMF7GIN4.js";import"./index-CIER62SJ.js";import"./index-pi0GgTlW.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./axisSelectors-ClPssgYV.js";import"./d3-scale-BdG0BwVM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./CartesianAxis-fxCqdamK.js";import"./Layer-BIlvUco-.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./Label-CDZiRvSt.js";import"./ZIndexLayer-CEBsGFM8.js";import"./types-P1jJ2pmT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-YfzASo2H.js";import"./step-CM1NK0SI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDsdaMkZ.js";import"./useAnimationId-DlcOUKTA.js";import"./ActivePoints-DxJpOWHz.js";import"./Dot-HKvUxCmw.js";import"./RegisterGraphicalItemId-YPLe9nYm.js";import"./ErrorBarContext-CmLe_bSh.js";import"./GraphicalItemClipPath-D6ZPyI0A.js";import"./SetGraphicalItem-CL5I6sew.js";import"./getRadiusAndStrokeWidthFromDot-ClQ6U8mJ.js";import"./ActiveShapeUtils-Bwe4ExnQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

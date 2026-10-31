import{R as e}from"./iframe-CGtTT9aO.js";import{R as i}from"./zIndexSlice-DkqERUsC.js";import{C as n}from"./ComposedChart-CtOwOAMH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BdfxyveL.js";import{X as s}from"./XAxis-Cs9YVmSO.js";import{Y as c}from"./YAxis-CPZ41WbR.js";import{L as d}from"./Line-B39YTIfI.js";import{R as g}from"./ReferenceLine-BtWEtv5v.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BOjz-2GT.js";import"./throttle-Cpyd11_g.js";import"./index-D5qFyhva.js";import"./index-BaBVYkzg.js";import"./RechartsWrapper-Bg-qxCCU.js";import"./axisSelectors-B4GsvVbU.js";import"./polarAxisSelectors-C5R6EJHs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-HCxTFMcs.js";import"./index-DFHlfpO_.js";import"./index-oOofm89c.js";import"./renderedTicksSlice-CvmQK_hy.js";import"./index-fDgmIFeX.js";import"./CartesianChart-BOnMx4gA.js";import"./ZIndexPortal-CtHFHKQR.js";import"./CategoricalChart-BhkaiiYp.js";import"./CartesianAxis-DK3VbMKT.js";import"./Layer-BOfjEgNF.js";import"./Text-CPcXRBKa.js";import"./DOMUtils-Lkl9NNxk.js";import"./ZIndexLayer-BNZ9nAXZ.js";import"./Label-CdpdsstW.js";import"./types-Do3ps9Vj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-BOBD875w.js";import"./step-BRhFbrj_.js";import"./path-DyVhHtw_.js";import"./LabelList-bhGj16_R.js";import"./ActivePoints-DxEPNf6W.js";import"./Dot-C5v9BtZ0.js";import"./activeStyles-Dtv8ZhnZ.js";import"./useAnimationId-C_28wM0V.js";import"./dataEntryStyles-CQ5H-98B.js";import"./Symbols-OSdQxEEJ.js";import"./symbol-BfL8oXc2.js";import"./ErrorBarContext-9FDAfVa2.js";import"./SetGraphicalItem-8Ajtlbfj.js";import"./getRadiusAndStrokeWidthFromDot-BkHpd6-h.js";import"./ActiveShapeUtils-BNWigvv2.js";import"./useEffectiveDataKey-DHKFzj0x.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

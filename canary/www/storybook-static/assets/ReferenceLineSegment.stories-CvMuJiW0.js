import{R as e}from"./iframe-txLfFnZC.js";import{R as i}from"./zIndexSlice-BxlfArAG.js";import{C as a}from"./ComposedChart-C3txqyeK.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D-O2QK8Y.js";import{X as s}from"./XAxis-CUKDl1yE.js";import{Y as c}from"./YAxis-Bqp7D6OE.js";import{L as d}from"./Line-D0hoDC_i.js";import{R as g}from"./ReferenceLine-BqUPqqVf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-q2TDx7Oc.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BBYfN4li.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./index-CTiUFbNZ.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./axisSelectors-ClpNZRSK.js";import"./d3-scale-C2Ev96_0.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./CartesianAxis-Bpg83Llu.js";import"./Layer-DgCStFRG.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./Label-Bg0xf_F2.js";import"./ZIndexLayer-CgOQ9duv.js";import"./types-DBwOBb8v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-C5z8NQ6L.js";import"./step-Ca4h6n57.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXTzwQHr.js";import"./useAnimationId-BBZuCs7J.js";import"./ActivePoints-CFI3c4jj.js";import"./Dot-BIm_l5LV.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./ErrorBarContext-g-_09_Lv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getRadiusAndStrokeWidthFromDot-B1a7F3Ip.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

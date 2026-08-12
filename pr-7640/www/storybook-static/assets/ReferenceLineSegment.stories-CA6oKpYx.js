import{R as e}from"./iframe-BIMbD8mx.js";import{R as i}from"./zIndexSlice-wO_dW_9z.js";import{C as a}from"./ComposedChart-BBbivD2D.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-zFs8ZGAv.js";import{X as s}from"./XAxis-79yd8ZPy.js";import{Y as c}from"./YAxis-yZR3Ev9U.js";import{L as d}from"./Line-C4NM27Mj.js";import{R as g}from"./ReferenceLine-BN3lM0UQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DiXkeT8N.js";import"./index-DwWghGbc.js";import"./index-BRQlGlsm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZ6QiDkA.js";import"./isWellBehavedNumber-CazuspJq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QNCP9nY0.js";import"./index-A5Cgym80.js";import"./index-BP-geqPm.js";import"./axisSelectors-BtNyQa3m.js";import"./d3-scale-DL9ezE1-.js";import"./renderedTicksSlice-B-RvvD_k.js";import"./CartesianChart-CABLVMKg.js";import"./chartDataContext-CXOVrzNd.js";import"./CategoricalChart-rgEOMHEL.js";import"./CartesianAxis-B1RojcCV.js";import"./Layer-1Cdcr0Iy.js";import"./Text-D6zl2tjY.js";import"./DOMUtils-DjDyXH_P.js";import"./RechartsThemeContext-BjZ7jnPh.js";import"./Label-DfQOptl9.js";import"./ZIndexLayer-YpWri7rk.js";import"./types-Dp-Ax4LT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BJXCkxMN.js";import"./step-O2UOarbe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-QaKLnfOP.js";import"./useAnimationId-hHgrQgML.js";import"./ActivePoints-BrY5sxJW.js";import"./Dot-N76mer2J.js";import"./RegisterGraphicalItemId-DN1O3Sjb.js";import"./ErrorBarContext-DnIQZp30.js";import"./GraphicalItemClipPath-nqtdT7cB.js";import"./SetGraphicalItem-DRMG3qH2.js";import"./getRadiusAndStrokeWidthFromDot-Dpt2Y5Zj.js";import"./ActiveShapeUtils-CBR4xzcn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};

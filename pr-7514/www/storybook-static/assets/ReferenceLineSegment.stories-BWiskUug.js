import{R as e}from"./iframe-DJHXlrGw.js";import{R as i}from"./zIndexSlice-CFaJnUYw.js";import{C as a}from"./ComposedChart-c9TgP79T.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-SaI1xQn-.js";import{X as s}from"./XAxis-Bazc91VB.js";import{Y as c}from"./YAxis-BulSHvtc.js";import{L as d}from"./Line-B15qEuth.js";import{R as g}from"./ReferenceLine-WfPfkIKQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAd10cPx.js";import"./index-BPz6-png.js";import"./index-DwRJQzwD.js";import"./get-j_9LvNGC.js";import"./resolveDefaultProps-CeQOO-Pe.js";import"./isWellBehavedNumber-Czb4zvRP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkeMmjUq.js";import"./index-DwS8J4hC.js";import"./index-Be4tbGBe.js";import"./renderedTicksSlice-BKsRhTz6.js";import"./axisSelectors-ClcXvPv0.js";import"./d3-scale-DpYCNPeY.js";import"./CartesianChart-BtZogvmq.js";import"./chartDataContext-CJXmJdS8.js";import"./CategoricalChart-BtoYqjdS.js";import"./CartesianAxis-CkFZLbcD.js";import"./Layer-DZpjcI0F.js";import"./Text-CRISoaMT.js";import"./DOMUtils-R0ltg_fS.js";import"./Label-R2VOv6mw.js";import"./ZIndexLayer-KkfMfF_A.js";import"./types-vAWUzS0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dw1fPQvk.js";import"./step-vGwa_xXj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BgKM4093.js";import"./useAnimationId-CR2wKsf0.js";import"./ActivePoints-ChuwA-C_.js";import"./Dot-C_JeniDT.js";import"./RegisterGraphicalItemId-Dmdqk05n.js";import"./ErrorBarContext-DLSy_XzC.js";import"./GraphicalItemClipPath-Cd-sqkad.js";import"./SetGraphicalItem-BYhVDRYC.js";import"./getRadiusAndStrokeWidthFromDot-WrvxTCng.js";import"./ActiveShapeUtils-CSLmPB1h.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

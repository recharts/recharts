import{R as e}from"./iframe-Bc8uafj_.js";import{R as i}from"./zIndexSlice-DgIKKnku.js";import{C as a}from"./ComposedChart-BaFcNv6t.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BZwF4Ai8.js";import{X as s}from"./XAxis-D3U7ZnRc.js";import{Y as c}from"./YAxis-TQ1T3gnX.js";import{L as d}from"./Line-C5bCj1pP.js";import{R as g}from"./ReferenceLine-DupNqYUC.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhRCiF9y.js";import"./index-9l0gGEIz.js";import"./index-DbEmmVI0.js";import"./get-CoQ1aHe8.js";import"./resolveDefaultProps-D94aQw_7.js";import"./isWellBehavedNumber-CGMb3shs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ENbvc07n.js";import"./index-C3D0VAho.js";import"./index-Dhuj-LWB.js";import"./renderedTicksSlice-CDLhDidm.js";import"./axisSelectors-BV-5bajo.js";import"./d3-scale-CuCR1Aws.js";import"./CartesianChart-D-LYbang.js";import"./chartDataContext-w3WNE9w3.js";import"./CategoricalChart-DEq5So-g.js";import"./CartesianAxis-DjGZfAuA.js";import"./Layer-BOwFFWNG.js";import"./Text-BXzZhQXx.js";import"./DOMUtils-Dp92goZ8.js";import"./Label-3HS03WWg.js";import"./ZIndexLayer-BEkWbSjN.js";import"./types-unK8WfaH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DiuauwRl.js";import"./step-B3z5Hoe6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CDgcpQiE.js";import"./useAnimationId-CUqgRxQq.js";import"./ActivePoints-Byxcert_.js";import"./Dot-Ch1zQlh_.js";import"./RegisterGraphicalItemId-CKxQU2m7.js";import"./ErrorBarContext-BEm0gOJL.js";import"./GraphicalItemClipPath-DUHE7Dv_.js";import"./SetGraphicalItem-DFzenvxr.js";import"./getRadiusAndStrokeWidthFromDot-DFKmST2Y.js";import"./ActiveShapeUtils-H6mpGyBM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

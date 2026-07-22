import{R as e}from"./iframe-DzzybHr3.js";import{R as i}from"./zIndexSlice-APm024yE.js";import{C as a}from"./ComposedChart-9Aj8MpN0.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BFcPkEHE.js";import{X as s}from"./XAxis-C2N3vX2E.js";import{Y as c}from"./YAxis-CKuS-Mr_.js";import{L as d}from"./Line-B14pcOUO.js";import{R as g}from"./ReferenceLine-DKd_TjQS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DXJQ7qa7.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./axisSelectors-DxliL3D-.js";import"./d3-scale-ikjFpXkq.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./CartesianAxis-Bp9IVHGC.js";import"./Layer-DBuOEsC-.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./Label-Yw7Q0JfB.js";import"./ZIndexLayer-B65O7Oyl.js";import"./types-Ck7x6Nhk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-CgifKxr5.js";import"./step-CE07F2xj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJCL0mBl.js";import"./useAnimationId--dSVNcdm.js";import"./ActivePoints-gO5Bi9Sm.js";import"./Dot-BL6lif_-.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getRadiusAndStrokeWidthFromDot-40lXrNs0.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

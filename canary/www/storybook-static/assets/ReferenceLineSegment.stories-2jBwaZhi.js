import{e}from"./iframe-BMiRdtzi.js";import{R as i}from"./arrayEqualityCheck-Da9FQhP8.js";import{C as p}from"./ComposedChart-A8h7UTh-.js";import{C as a}from"./CartesianGrid-CM8CSWoO.js";import{X as n}from"./XAxis-zYIEy4Nj.js";import{Y as s}from"./YAxis-4AjIhGFV.js";import{L as c}from"./Line-BwxhCkq8.js";import{R as d}from"./ReferenceLine-Bb8U-LHs.js";import{R as g}from"./RechartsHookInspector-PXISS_9s.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BbcxzGSI.js";import"./immer-CeUHRJUh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1Zuj5aj.js";import"./index-CFZ_txX2.js";import"./hooks-Dj-8y2kZ.js";import"./axisSelectors-Dhmk1Apf.js";import"./d3-scale-lZPJgZrs.js";import"./zIndexSlice-DXZuZUhc.js";import"./renderedTicksSlice-DuZcooa-.js";import"./CartesianChart-hRI6eS0t.js";import"./chartDataContext-FBHrtSoZ.js";import"./CategoricalChart-DDM_7pl3.js";import"./CartesianAxis-B9OgjJ9q.js";import"./Layer-D9Oz3zOW.js";import"./Text-KMtMbVYS.js";import"./DOMUtils-D9vxTovY.js";import"./Label-BNGz4hpX.js";import"./ZIndexLayer-BSi_oIk9.js";import"./types-nLF0_SAW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-f9rIQTZx.js";import"./ActivePoints-BU8KSqCe.js";import"./Dot-BugqpfmD.js";import"./RegisterGraphicalItemId-_26M4VR4.js";import"./ErrorBarContext-CzWKH65H.js";import"./GraphicalItemClipPath-DVqZ2J0u.js";import"./SetGraphicalItem-DG59MNm5.js";import"./useAnimationId-5Oa7E8I_.js";import"./getRadiusAndStrokeWidthFromDot-B57zRP1H.js";import"./ActiveShapeUtils-ien1uv2Y.js";import"./isPlainObject-CocMjk2l.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7gjhdc4.js";import"./Trapezoid-YEyIDayp.js";import"./Sector-CiduAPVO.js";import"./Symbols-DfsWCoSA.js";import"./symbol-Dypj6TZZ.js";import"./step-BA38JlTy.js";import"./Curve-B8D8lFuj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BxIeWHLt.js";import"./ChartSizeDimensions-CNT6A0OH.js";import"./OffsetShower-Bzn-sKNm.js";import"./PlotAreaShower-B0eURlXX.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

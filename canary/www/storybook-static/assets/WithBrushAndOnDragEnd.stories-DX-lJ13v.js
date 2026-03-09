import{e as t}from"./iframe-BMiRdtzi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Da9FQhP8.js";import{B as p}from"./BarChart-ZCYh0EYw.js";import{X as l}from"./XAxis-zYIEy4Nj.js";import{Y as h}from"./YAxis-4AjIhGFV.js";import{B as c}from"./Brush-Cwrvn6xL.js";import{B as x}from"./Bar-Cm6GGKcE.js";import{R as u}from"./RechartsHookInspector-PXISS_9s.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BbcxzGSI.js";import"./immer-CeUHRJUh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1Zuj5aj.js";import"./index-CFZ_txX2.js";import"./hooks-Dj-8y2kZ.js";import"./axisSelectors-Dhmk1Apf.js";import"./d3-scale-lZPJgZrs.js";import"./zIndexSlice-DXZuZUhc.js";import"./renderedTicksSlice-DuZcooa-.js";import"./CartesianChart-hRI6eS0t.js";import"./chartDataContext-FBHrtSoZ.js";import"./CategoricalChart-DDM_7pl3.js";import"./CartesianAxis-B9OgjJ9q.js";import"./Layer-D9Oz3zOW.js";import"./Text-KMtMbVYS.js";import"./DOMUtils-D9vxTovY.js";import"./Label-BNGz4hpX.js";import"./ZIndexLayer-BSi_oIk9.js";import"./types-nLF0_SAW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DA92YycH.js";import"./ReactUtils-f9rIQTZx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-ien1uv2Y.js";import"./isPlainObject-CocMjk2l.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7gjhdc4.js";import"./useAnimationId-5Oa7E8I_.js";import"./Trapezoid-YEyIDayp.js";import"./Sector-CiduAPVO.js";import"./Symbols-DfsWCoSA.js";import"./symbol-Dypj6TZZ.js";import"./step-BA38JlTy.js";import"./Curve-B8D8lFuj.js";import"./RegisterGraphicalItemId-_26M4VR4.js";import"./ErrorBarContext-CzWKH65H.js";import"./GraphicalItemClipPath-DVqZ2J0u.js";import"./SetGraphicalItem-DG59MNm5.js";import"./getZIndexFromUnknown-Dn8XUg5a.js";import"./graphicalItemSelectors-BrJpLTa1.js";import"./index-BxIeWHLt.js";import"./ChartSizeDimensions-CNT6A0OH.js";import"./OffsetShower-Bzn-sKNm.js";import"./PlotAreaShower-B0eURlXX.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};

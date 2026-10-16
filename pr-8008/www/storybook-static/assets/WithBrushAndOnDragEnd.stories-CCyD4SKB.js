import{R as t}from"./iframe-R8qakbXa.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CpW5IUCm.js";import{B as p}from"./BarChart-CzFxjom_.js";import{X as l}from"./XAxis-C4Jew8Rv.js";import{Y as h}from"./YAxis-ByXOMKUb.js";import{B as x}from"./Brush-C9U3flc1.js";import{B as c}from"./Bar-D2CZZrMV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9oD6XZ1.js";import"./index-BFIsGGpk.js";import"./index-igt8webG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CKR1Qcev.js";import"./isWellBehavedNumber-B09TyYXX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClWcdPE7.js";import"./axisSelectors-DMTHYW2V.js";import"./d3-scale-aDQi0991.js";import"./index-BFytD52I.js";import"./index-CMthufc-.js";import"./renderedTicksSlice-BQVB4poR.js";import"./index-Di16hjPT.js";import"./CartesianChart-PED4jNlL.js";import"./chartDataContext-BSaHGzuI.js";import"./CategoricalChart-DaUIhj12.js";import"./CartesianAxis-D_UchkJi.js";import"./Layer-CmAPD_t-.js";import"./Text-DWNopLVO.js";import"./pageBackground-C5CyBpzw.js";import"./useId-bPLq3L_8.js";import"./useBackwardsCompatibleTheme-qV0asEjz.js";import"./Label-KdqZDMP0.js";import"./ZIndexLayer-BembMDFS.js";import"./types-D_TtzLi3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-B3GTJvDM.js";import"./useAnimationId-CjllIhER.js";import"./dataEntryStyles-DI0HDDLL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-iquA0V0c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6A65k3S.js";import"./tooltipContext-CmeFo2DA.js";import"./ErrorBarContext-0rDV8hpt.js";import"./GraphicalItemClipPath-BVAEKKRa.js";import"./SetGraphicalItem-Bvw8mbwf.js";import"./getZIndexFromUnknown-B1PlbyRn.js";import"./useEffectiveDataKey-DI06uwcg.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

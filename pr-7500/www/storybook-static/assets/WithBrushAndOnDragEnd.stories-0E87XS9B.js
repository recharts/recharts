import{R as t}from"./iframe-Cz3m2SJ3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cjh-3nYc.js";import{B as p}from"./BarChart-COZO6_Fo.js";import{X as l}from"./XAxis-BOtH_Bb_.js";import{Y as h}from"./YAxis-DcGNi3Zk.js";import{B as x}from"./Brush-DSebjVrf.js";import{B as c}from"./Bar-VGxnhh_M.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpZE7kkB.js";import"./index-Ch8SxpQ7.js";import"./index-NxrJrzZn.js";import"./get-DnJGsTBL.js";import"./resolveDefaultProps-C8QIhMpF.js";import"./isWellBehavedNumber-CDOyudGY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B4Ii8FQX.js";import"./index-BaDzCXFV.js";import"./index-CMdFAdtp.js";import"./renderedTicksSlice-CFzmMv1J.js";import"./axisSelectors-kRjEmRJx.js";import"./d3-scale-WEKEQNVu.js";import"./CartesianChart-BLcm5KGH.js";import"./chartDataContext-BYln8BgM.js";import"./CategoricalChart-DoGmIe9w.js";import"./CartesianAxis-C3-vjNSw.js";import"./Layer-DT2BS3Fo.js";import"./Text-CM8vLpAR.js";import"./DOMUtils-DZThnrL0.js";import"./Label-DtW8Frf2.js";import"./ZIndexLayer-dXuwT3rZ.js";import"./types-CfBB8f9x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Bkx1J4ih.js";import"./AnimatedItems-BHx4y2NH.js";import"./useAnimationId-BTiOYTQB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pvDgbZGd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXFbPlV-.js";import"./RegisterGraphicalItemId-CDGD75SL.js";import"./ErrorBarContext--7X7cLyV.js";import"./GraphicalItemClipPath-Bz4IuZP3.js";import"./SetGraphicalItem-Ci_nDVmD.js";import"./getZIndexFromUnknown-tViS5WT4.js";import"./graphicalItemSelectors-R8m2abgh.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};

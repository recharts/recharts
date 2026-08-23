import{R as t}from"./iframe-Bva2xGHH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DeikvbmU.js";import{B as p}from"./BarChart-BU9r1BP5.js";import{X as l}from"./XAxis-CsoDjkEh.js";import{Y as h}from"./YAxis-B36u7uIT.js";import{B as x}from"./Brush-Llzy3KLn.js";import{B as c}from"./Bar-Bjnhtopz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFyzV36U.js";import"./index-Bo6z76Fs.js";import"./index-DT3MRaoS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuBoAocm.js";import"./isWellBehavedNumber-D9_2opJl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkrfE3IH.js";import"./index-VUoyG6xU.js";import"./index-EwtDjp0y.js";import"./axisSelectors-1RAYR2bl.js";import"./d3-scale-CJSi8F9P.js";import"./renderedTicksSlice-CmjvxnPV.js";import"./CartesianChart-KP50bz7-.js";import"./chartDataContext-DHJzh3Cw.js";import"./CategoricalChart-DYOSFUHe.js";import"./CartesianAxis-aOVQqLXO.js";import"./Layer-PgPW5wj-.js";import"./Text-D8IJbXoV.js";import"./DOMUtils-CMvwzHzQ.js";import"./useId-Bwx6_eZW.js";import"./useBackwardsCompatibleTheme-3vkLTFmK.js";import"./Label-Dki1vWaX.js";import"./ZIndexLayer-B1sYnbf5.js";import"./types-CDHj9Y5Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dw2l639N.js";import"./useAnimationId-DDHow2US.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGcjrFAk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-zdhhOiSb.js";import"./tooltipContext-CjkCpUHj.js";import"./RegisterGraphicalItemId-CycuLbwA.js";import"./ErrorBarContext-tOF5cXSF.js";import"./GraphicalItemClipPath-D8nHpKQ-.js";import"./SetGraphicalItem-482J7PRy.js";import"./getZIndexFromUnknown-C0llVkwV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CkKDZXGW.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

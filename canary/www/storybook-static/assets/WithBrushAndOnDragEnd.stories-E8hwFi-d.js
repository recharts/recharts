import{R as t}from"./iframe-y6pZoBOe.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BAPHOf-A.js";import{B as p}from"./BarChart-ItUo6sLS.js";import{X as l}from"./XAxis-B75EARC_.js";import{Y as h}from"./YAxis-BDc8eAjx.js";import{B as x}from"./Brush-DFJAB-59.js";import{B as c}from"./Bar-tWx0IQIQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sUHqZCtQ.js";import"./index-DViwT0RC.js";import"./index-vL-3KTyV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK41N9kV.js";import"./isWellBehavedNumber-Cb3oTnMu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bd4_Y8lY.js";import"./axisSelectors-BmcHsTRr.js";import"./d3-scale-DRlyCOFP.js";import"./index-B6N9MB9B.js";import"./index-0bNzEg3t.js";import"./renderedTicksSlice-CTLbpy90.js";import"./index-CSbalAtk.js";import"./CartesianChart-Bvg5MZxQ.js";import"./chartDataContext-Dpe-QKhv.js";import"./CategoricalChart-aAiDUiAX.js";import"./CartesianAxis-CoHDQG06.js";import"./Layer-34ncCtUV.js";import"./Text-DdGQmpzq.js";import"./DOMUtils-Co8gRLU9.js";import"./useId-DiCeZzyc.js";import"./useBackwardsCompatibleTheme-DpzVFbqN.js";import"./Label-9NqXhRk3.js";import"./ZIndexLayer-C7BuriGU.js";import"./types-DtUXsqBa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DIgNuRUa.js";import"./useAnimationId-9X7pomqp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfUU1stN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrA6HvN5.js";import"./tooltipContext-xkClZfdt.js";import"./RegisterGraphicalItemId-DljjsDCZ.js";import"./ErrorBarContext-TnpfkRXW.js";import"./GraphicalItemClipPath-6O7hO6A5.js";import"./SetGraphicalItem-BmPIFAsA.js";import"./getZIndexFromUnknown-Cp_8YTP1.js";import"./useGraphicalItemIdentity-CXZPeRzX.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

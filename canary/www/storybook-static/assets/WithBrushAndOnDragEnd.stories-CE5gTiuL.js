import{R as t}from"./iframe-D_03ePl7.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-gI7CPKt8.js";import{B as p}from"./BarChart-BW23egIL.js";import{X as l}from"./XAxis-CjKd6FOO.js";import{Y as h}from"./YAxis-BYLx-dFj.js";import{B as x}from"./Brush-DKLobAQy.js";import{B as c}from"./Bar-BWpXlTgZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlozmNLH.js";import"./index-CbBA7rES.js";import"./index-Hu7BLM9I.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_535qvz.js";import"./isWellBehavedNumber-08WJO6-p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_Jo0xL0.js";import"./axisSelectors-CyxZNoxv.js";import"./d3-scale-CS5gmyGm.js";import"./index-DmfSCfAr.js";import"./index-CsBIVix0.js";import"./renderedTicksSlice-DL9pT9-E.js";import"./index-Dlf7H1uA.js";import"./CartesianChart-B_RdHXsl.js";import"./chartDataContext-sh7W2Xea.js";import"./CategoricalChart-Wu8m05Op.js";import"./CartesianAxis-C3nD1dv8.js";import"./Layer-PN0rvZRP.js";import"./Text-Z5PwaRTj.js";import"./pageBackground-2sAJZ1tz.js";import"./useId-BHfhqUC8.js";import"./useBackwardsCompatibleTheme-CFqJibBS.js";import"./Label-BQXHRFnW.js";import"./ZIndexLayer-CAYdtHvW.js";import"./types-dtQ43_yo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BEtEtj28.js";import"./useAnimationId-CBDTDHfD.js";import"./dataEntryStyles-eD8YHQf_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdU_MFIg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DGMvpmsE.js";import"./tooltipContext-DTMzdFRl.js";import"./ErrorBarContext-DFl8QQpS.js";import"./GraphicalItemClipPath-Dpw0HOzQ.js";import"./SetGraphicalItem-CJI-A4Bp.js";import"./getZIndexFromUnknown-CAhvpo2r.js";import"./useEffectiveDataKey-OYuZWKUp.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

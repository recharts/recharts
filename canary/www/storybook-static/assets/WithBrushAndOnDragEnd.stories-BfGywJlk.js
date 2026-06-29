import{R as t}from"./iframe-CtCQjsM6.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dyeq-kTm.js";import{B as p}from"./BarChart-BH-1qmH-.js";import{X as l}from"./XAxis-CP213xw9.js";import{Y as h}from"./YAxis-DBaHNEP2.js";import{B as x}from"./Brush-BhrHobuW.js";import{B as c}from"./Bar-K77vF5If.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-UADZssR3.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./get-CXMuCFS1.js";import"./resolveDefaultProps-y277M-17.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./renderedTicksSlice-B82fdgBY.js";import"./axisSelectors-CBHiYL8s.js";import"./d3-scale-DSObG5R7.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./CartesianAxis-BR8NQrXr.js";import"./Layer-ikVkc87V.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./Label-DEKQSx_8.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./types-DG_xuUOr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BoH31FI7.js";import"./AnimatedItems-D-nX9UUI.js";import"./useAnimationId-BByU_EIU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYymeKVw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./ErrorBarContext-DA8eqje8.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getZIndexFromUnknown-DA3lv6Ga.js";import"./graphicalItemSelectors-Dx8FkvhD.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

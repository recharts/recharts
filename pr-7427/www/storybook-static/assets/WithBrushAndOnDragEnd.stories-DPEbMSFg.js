import{R as t}from"./iframe-gLXjAGh2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BiRgg5Ku.js";import{B as p}from"./BarChart-CJIJfTnl.js";import{X as l}from"./XAxis-DwB13nw6.js";import{Y as h}from"./YAxis-sdrrSkAr.js";import{B as x}from"./Brush-reamUmG2.js";import{B as c}from"./Bar-Cs-HkM7d.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-JN2QralJ.js";import"./index-M9vhh8Qk.js";import"./index-konkIWth.js";import"./get-Qcb7JOLO.js";import"./resolveDefaultProps-CF7N32I5.js";import"./isWellBehavedNumber-CiIySEg5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAyuf4sH.js";import"./index-BffiaVbp.js";import"./index-DhIjfNMc.js";import"./renderedTicksSlice-xzybHrTF.js";import"./axisSelectors-CZIlY7LR.js";import"./d3-scale-Ce8TMAGR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BlBRmLbV.js";import"./chartDataContext-ClIe94X6.js";import"./CategoricalChart-2uN7uMEr.js";import"./CartesianAxis-FCBmPftJ.js";import"./Layer-BmcxLaEj.js";import"./Text-CQFVpw6C.js";import"./DOMUtils-yWa5RV4F.js";import"./Label-CJgHZQsX.js";import"./ZIndexLayer-BnXfcGJ6.js";import"./types-BTt0M0gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-epHbKqMP.js";import"./AnimatedItems-BahKKeqN.js";import"./useAnimationId-Cl5wMxi-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMbb_PeV.js";import"./ActiveShapeUtils-C5UVGI0p.js";import"./RegisterGraphicalItemId-Dn8a3wZC.js";import"./ErrorBarContext-DTXTD-Qt.js";import"./GraphicalItemClipPath-0uk6nwou.js";import"./SetGraphicalItem-Ce5UA7yP.js";import"./getZIndexFromUnknown-Cdc_ibXY.js";import"./graphicalItemSelectors-Cr5TPSnx.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

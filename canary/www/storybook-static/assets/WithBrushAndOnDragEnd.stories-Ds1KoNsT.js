import{R as t}from"./iframe-DLBrGVIL.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D04f94zz.js";import{B as p}from"./BarChart-DuI9QmrH.js";import{X as l}from"./XAxis-CeLc4bEQ.js";import{Y as h}from"./YAxis-BYVuK0Yz.js";import{B as x}from"./Brush-E8TGxagy.js";import{B as c}from"./Bar-DeiK9zHA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./throttle-Csq4RHLA.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./RechartsWrapper-CQD9R6Ch.js";import"./axisSelectors-e5FgB8sH.js";import"./polarAxisSelectors-5dY8QunD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7f23rgt.js";import"./index-wzkov3Za.js";import"./index-C5Iik6-v.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./CartesianAxis-DwNRBXKt.js";import"./Layer-fmxJ3YOZ.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./Label-B42eZj7W.js";import"./types-Bhx-lAgy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-C-aMudj3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BfcJPzvH.js";import"./useAnimationId-UzUbsW_e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./tooltipContext-I57Z2J2k.js";import"./ErrorBarContext-5vBRFIsn.js";import"./activeStyles-DixW-39S.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./getZIndexFromUnknown-DInNQp8a.js";import"./useEffectiveDataKey-CzXzkxYB.js";import"./omit-VFDAEpqp.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

import{R as t}from"./iframe-C3Hc6ExU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DUSt-QRk.js";import{B as p}from"./BarChart-Bmg6z9xi.js";import{X as l}from"./XAxis-Dtgw3Co8.js";import{Y as h}from"./YAxis-C-y6lpsY.js";import{B as x}from"./Brush-D8i-B7qm.js";import{B as c}from"./Bar-BJGqZnNl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DY2EWLMY.js";import"./index-BCuR5Ep7.js";import"./index-N8Br274d.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-I9hvH7ZX.js";import"./isWellBehavedNumber-BaxFFXf5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7tS-h39.js";import"./index-DPHIqaZF.js";import"./index-jh_FdFAs.js";import"./axisSelectors-CVNuchwD.js";import"./d3-scale-BNbYa6kD.js";import"./renderedTicksSlice-C_VQ6yCW.js";import"./CartesianChart-D83sOKb0.js";import"./chartDataContext-De2r_5pJ.js";import"./CategoricalChart-Z9dORHEb.js";import"./CartesianAxis-DzoIF-ni.js";import"./Layer-nhPcXxtD.js";import"./Text-DrMy69_K.js";import"./DOMUtils-Cnn_urMe.js";import"./useId-z0f7lKjA.js";import"./useBackwardsCompatibleTheme-BO1TP3oH.js";import"./Label-CANqho75.js";import"./ZIndexLayer-G0ryhOC-.js";import"./types-fNKA8Oi0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-EryZIVr5.js";import"./useAnimationId-C5Z2jNIS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8xTYBg9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBT5vOsU.js";import"./tooltipContext-BfV4vefB.js";import"./RegisterGraphicalItemId-B-hExQD4.js";import"./ErrorBarContext-C-2s-xSs.js";import"./GraphicalItemClipPath-1LBjo5Ot.js";import"./SetGraphicalItem-DJG5Kc0f.js";import"./getZIndexFromUnknown-B6lJBKJt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CPtG7WLe.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

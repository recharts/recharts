import{R as t}from"./iframe-BqyXYbfO.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B01GboJR.js";import{B as p}from"./BarChart-ESh7QywH.js";import{X as l}from"./XAxis-0w0QIVSx.js";import{Y as h}from"./YAxis-CPeQqwFp.js";import{B as x}from"./Brush-CzEqjqUa.js";import{B as c}from"./Bar-BGWmYCKQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CuHL7VMX.js";import"./index-Bv49Pgrm.js";import"./index-B9uHeZTZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3i-Tg0K.js";import"./isWellBehavedNumber-BRVst2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3v9xwCM.js";import"./index-CVfSI7O7.js";import"./index-bCeEKDHC.js";import"./axisSelectors-DpUYmlyC.js";import"./d3-scale-YUujBWq4.js";import"./renderedTicksSlice-7sTJiycY.js";import"./CartesianChart-0syXRV9F.js";import"./chartDataContext-D6yTmy2l.js";import"./CategoricalChart-RVKqvA7y.js";import"./CartesianAxis-DueGTPVP.js";import"./Layer-cG34Tdrq.js";import"./Text-DOHx7LgO.js";import"./DOMUtils-btZL_iKn.js";import"./useBackwardsCompatibleTheme-BlCAIHy1.js";import"./Label-oragi0Kj.js";import"./ZIndexLayer-rhqIudSr.js";import"./types-B7ADV__L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CpV-NRBb.js";import"./useAnimationId-CK12bq4f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CftrBWbD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1I6X1s88.js";import"./tooltipContext-fOshULGt.js";import"./RegisterGraphicalItemId-Ck8ajZX3.js";import"./ErrorBarContext-BGgmDGm5.js";import"./GraphicalItemClipPath-DDxOeQm3.js";import"./SetGraphicalItem-DNxW0R1P.js";import"./getZIndexFromUnknown-zJFwqN1H.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DNiSTRsW.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

import{R as t}from"./iframe-Bh4IukvS.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BnhPp-nh.js";import{B as p}from"./BarChart-CUV9Fd2v.js";import{X as l}from"./XAxis-DTE5zt6_.js";import{Y as h}from"./YAxis-CydhA_LO.js";import{B as x}from"./Brush-BnNIUmQ1.js";import{B as c}from"./Bar-ESxCekV8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXYaw1-J.js";import"./index-BAvBYzvL.js";import"./index-Bd7C7KEc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CS55fj5A.js";import"./isWellBehavedNumber-COGARIBs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CloVGpsi.js";import"./axisSelectors-C8F9z3Z9.js";import"./d3-scale-BYEA786G.js";import"./index-BSsixbSb.js";import"./index-Xb0OYFJE.js";import"./renderedTicksSlice-DKLC06E4.js";import"./index-BoLfeuKb.js";import"./CartesianChart-BfQhJC72.js";import"./chartDataContext-BtR7OiSm.js";import"./CategoricalChart-Cv2qqsYa.js";import"./CartesianAxis-Ds6tzB92.js";import"./Layer-O2qI8LTc.js";import"./Text-ByHw94zt.js";import"./DOMUtils-jG16kJ-0.js";import"./useId-DUPaFVMq.js";import"./useBackwardsCompatibleTheme-BGwCHVGE.js";import"./Label-B71mUMe3.js";import"./ZIndexLayer-HUNPQO7Y.js";import"./types-kFpO5oed.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D-YvBlp4.js";import"./useAnimationId-DwO0dP0K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CrdePQGE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DP7EI6-I.js";import"./tooltipContext-zkadhmnz.js";import"./RegisterGraphicalItemId-_cXLNg8O.js";import"./ErrorBarContext-CofrBm2P.js";import"./GraphicalItemClipPath-B9NNnVgG.js";import"./SetGraphicalItem-DSGRIbG0.js";import"./getZIndexFromUnknown-B2B-cbVB.js";import"./useGraphicalItemIdentity-Dsj7jE7N.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

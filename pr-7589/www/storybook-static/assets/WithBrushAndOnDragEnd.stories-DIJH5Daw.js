import{R as t}from"./iframe-DsM5Snoh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bw64GR0n.js";import{B as p}from"./BarChart-Ckp8AFfc.js";import{X as l}from"./XAxis-BP59MRl4.js";import{Y as h}from"./YAxis-AiKtCrqX.js";import{B as x}from"./Brush-BwqZsP3_.js";import{B as c}from"./Bar-CwzjLEwS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BxJwdddW.js";import"./index-C1bUMSNa.js";import"./index-Cpv94xK3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B889QW7F.js";import"./isWellBehavedNumber-BL4XxRG3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCACJiBR.js";import"./index-DzyEvv1d.js";import"./index-Dme9ADAC.js";import"./renderedTicksSlice-C2lYgmQd.js";import"./axisSelectors-ZbRe1Fr2.js";import"./d3-scale-5xoUdZXJ.js";import"./CartesianChart-DHkgxIBG.js";import"./chartDataContext-ChNOSR4m.js";import"./CategoricalChart-C7zh0Rx-.js";import"./CartesianAxis-CVbxoQSN.js";import"./Layer-DJ-_hZeS.js";import"./Text-DTpoJfmA.js";import"./DOMUtils-bol6pq_B.js";import"./Label-COWFM_3h.js";import"./ZIndexLayer-8J4UOhVH.js";import"./types-C3s_AHHw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-BUP9beLh.js";import"./AnimatedItems-B9cLBWaU.js";import"./useAnimationId-C3tGSe4h.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJ0VqAUA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Crk25mmB.js";import"./RegisterGraphicalItemId-B77AAmB8.js";import"./ErrorBarContext-SZrR3kne.js";import"./GraphicalItemClipPath-DkDzGEyf.js";import"./SetGraphicalItem-HftiDrim.js";import"./getZIndexFromUnknown-CJvTlMay.js";import"./graphicalItemSelectors-Bvrvqop5.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};

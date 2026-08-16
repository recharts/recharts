import{R as t}from"./iframe-Ci96e1sZ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B1EQFXas.js";import{B as p}from"./BarChart-CVQvW1TU.js";import{X as l}from"./XAxis-sNeLDR5W.js";import{Y as h}from"./YAxis-BeupBiv_.js";import{B as x}from"./Brush-BAYJMoVE.js";import{B as c}from"./Bar-D1tl0g-a.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dnh15uFS.js";import"./index-CPCYaABA.js";import"./index-BOr38y8s.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BzIfhmsg.js";import"./isWellBehavedNumber-CF2GCTfq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZtweL3y.js";import"./index-7lcQp6iI.js";import"./index-DH9mueDN.js";import"./axisSelectors-Bjs83WTa.js";import"./d3-scale-B0NLrUrx.js";import"./renderedTicksSlice-DNsJLMW0.js";import"./CartesianChart-CCAPJMRK.js";import"./chartDataContext-BYKHEhUl.js";import"./CategoricalChart--GJhAkst.js";import"./CartesianAxis-D8l6BhAe.js";import"./Layer-CZ2F14sW.js";import"./Text-B3nSPEiT.js";import"./DOMUtils-BbVSTVZx.js";import"./useBackwardsCompatibleTheme-D2Fw4B1K.js";import"./Label-CF4xlS6j.js";import"./ZIndexLayer-DwZny_eu.js";import"./types-D2o80dZ0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BJQZQgAI.js";import"./AnimatedItems-BGUr9OQF.js";import"./useAnimationId-BzCTa_4t.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ELfFl8ZJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bmp4Kv1_.js";import"./RegisterGraphicalItemId-CEOZLZl3.js";import"./ErrorBarContext-MBgpuxtH.js";import"./GraphicalItemClipPath-wdGuOIwS.js";import"./SetGraphicalItem-C5ta0dz_.js";import"./getZIndexFromUnknown-BBNK0WaR.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-0mlVHwuX.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

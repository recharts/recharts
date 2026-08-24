import{R as t}from"./iframe-DY9K6heQ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Djux0zqs.js";import{B as p}from"./BarChart-ri_yn_e6.js";import{X as l}from"./XAxis-C70fZAmi.js";import{Y as h}from"./YAxis-5RHUhJ9E.js";import{B as x}from"./Brush-Cy81de0b.js";import{B as c}from"./Bar-Di02x63B.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DOydnajF.js";import"./index-DB-c6PeB.js";import"./index-9g91mWlk.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CO8OTY-B.js";import"./isWellBehavedNumber-f1cIhCPU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqtOwQCr.js";import"./index-RUzZ63uG.js";import"./index-B-UxVCSc.js";import"./axisSelectors-DwkKcaC_.js";import"./d3-scale-Dg6wJCEU.js";import"./renderedTicksSlice-C6QgZ4Eb.js";import"./CartesianChart-CY7DJm7t.js";import"./chartDataContext-BtMzfRRp.js";import"./CategoricalChart-COo_l3nK.js";import"./CartesianAxis-VfKXuPT2.js";import"./Layer-D519VTAP.js";import"./Text-CteNh9ks.js";import"./DOMUtils-B_xez7qI.js";import"./useId-C5bD9K_5.js";import"./useBackwardsCompatibleTheme-C3HLbI6N.js";import"./Label-CfiePbO3.js";import"./ZIndexLayer-HnenvO0i.js";import"./types-Cb4xht2_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DF7HmAGo.js";import"./useAnimationId-BQX98cVJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DoSmT7gp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EdkW4Ajt.js";import"./tooltipContext-BDbAc8WD.js";import"./RegisterGraphicalItemId-za1bJavc.js";import"./ErrorBarContext-g1sTu3z_.js";import"./GraphicalItemClipPath-BVMw74rr.js";import"./SetGraphicalItem-B5Li8-y0.js";import"./getZIndexFromUnknown-B0BY6pJ1.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DYFwZgVx.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

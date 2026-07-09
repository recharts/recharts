import{R as t}from"./iframe-DnX8r39b.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CdRT6CH7.js";import{B as p}from"./BarChart-5dmaFkeq.js";import{X as l}from"./XAxis-BTaYdNe8.js";import{Y as h}from"./YAxis-CSFozfSt.js";import{B as x}from"./Brush-CLa2KgGu.js";import{B as c}from"./Bar-BA46o5sv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JCKZhQLq.js";import"./index-B59DWSJw.js";import"./index-8CcjFvVe.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-yb31Cz6R.js";import"./isWellBehavedNumber-ChlqVGNf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sbu3sQZd.js";import"./index-CARiuz8r.js";import"./index-lg-7YqR9.js";import"./renderedTicksSlice-DDGhfVYq.js";import"./axisSelectors-D4OQvXCv.js";import"./d3-scale-B45mdNw5.js";import"./CartesianChart-8TrBr0AL.js";import"./chartDataContext-B2KFL-Nz.js";import"./CategoricalChart-DVOQ2_gX.js";import"./CartesianAxis-Cy9WREkT.js";import"./Layer-CauFkfpG.js";import"./Text-BO1t-pUg.js";import"./DOMUtils-jh1pVKRO.js";import"./Label-D3KHAYnK.js";import"./ZIndexLayer-C1d715l9.js";import"./types-CgrT81ZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Cuox8ssJ.js";import"./AnimatedItems--Dg0X7dt.js";import"./useAnimationId-zs5IE8iA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cv-9SrzG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4xeJz4x.js";import"./RegisterGraphicalItemId-qEo7oahD.js";import"./ErrorBarContext-C_qu3TpT.js";import"./GraphicalItemClipPath-BiCBWmQX.js";import"./SetGraphicalItem-BXuH3_k3.js";import"./getZIndexFromUnknown-CnaJJwMJ.js";import"./graphicalItemSelectors-CBSU1VvW.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

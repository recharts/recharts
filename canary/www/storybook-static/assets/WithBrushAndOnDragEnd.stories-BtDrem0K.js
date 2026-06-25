import{R as t}from"./iframe-Bbgfrsw7.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CQlXcDAc.js";import{B as p}from"./BarChart-B2tTSewe.js";import{X as l}from"./XAxis-B3CRQ6u6.js";import{Y as h}from"./YAxis-p6BAB9xn.js";import{B as x}from"./Brush-_Yz0fCKT.js";import{B as c}from"./Bar-Cwb8wJei.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BnwOCZg8.js";import"./index-C0ODKNwO.js";import"./index-v2biSiVS.js";import"./get-CGUpvFiU.js";import"./resolveDefaultProps-o6njxdDq.js";import"./isWellBehavedNumber-BR76DXAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRt4NQQt.js";import"./index-CECpKJ3H.js";import"./index-Dgahjeym.js";import"./renderedTicksSlice-CbreQ2EV.js";import"./axisSelectors-CDvVNjDS.js";import"./d3-scale-OklfQgrl.js";import"./CartesianChart-QVFJB6ft.js";import"./chartDataContext-CL0ujozD.js";import"./CategoricalChart-DhdplheV.js";import"./CartesianAxis-D1v9Dkeg.js";import"./Layer-8m_pE-_A.js";import"./Text-Bz6YKmeV.js";import"./DOMUtils-Z9sFA7ma.js";import"./Label-BiRqfMN5.js";import"./ZIndexLayer-6gPnMOeu.js";import"./types-8gz_-wr5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BBYK_tl_.js";import"./AnimatedItems-CtW6zihY.js";import"./useAnimationId-DUfU26_x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Tqtw105A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLp6ysVz.js";import"./RegisterGraphicalItemId-BgE_IAVb.js";import"./ErrorBarContext-hic6ppru.js";import"./GraphicalItemClipPath-zba15Mlm.js";import"./SetGraphicalItem-Bny1zUhU.js";import"./getZIndexFromUnknown-CA9HJ68R.js";import"./graphicalItemSelectors-Bw7brN2T.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

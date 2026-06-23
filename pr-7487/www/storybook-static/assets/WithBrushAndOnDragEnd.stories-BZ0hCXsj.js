import{R as t}from"./iframe-Dgfa45pO.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C1KjhRe9.js";import{B as p}from"./BarChart-xptC1I3E.js";import{X as l}from"./XAxis-BSLC3Bv_.js";import{Y as h}from"./YAxis-XwOa9eE6.js";import{B as x}from"./Brush-DCRLhVK_.js";import{B as c}from"./Bar-C9JUbNld.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DVLCs_h8.js";import"./index-BgENuBix.js";import"./index-Bo_UbBqc.js";import"./get-BZICNy-w.js";import"./resolveDefaultProps-ChQrXTkd.js";import"./isWellBehavedNumber-BrMIbSaZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-XphNsNZ5.js";import"./index-ksaWIuWX.js";import"./index-CBjnf8TP.js";import"./renderedTicksSlice-fSTgGnjG.js";import"./axisSelectors-4s-45b5o.js";import"./d3-scale-D3oEXvep.js";import"./CartesianChart-BC1ybKqz.js";import"./chartDataContext-xlhPPH5F.js";import"./CategoricalChart-BUu6OQ7Y.js";import"./CartesianAxis-DznDQPew.js";import"./Layer-BwLAkNRA.js";import"./Text-tvsjfW3h.js";import"./DOMUtils-C6RrxFOP.js";import"./Label-Dzw51f8E.js";import"./ZIndexLayer-Dy6LsEV1.js";import"./types-C1ZkWqT0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-gANt9rxI.js";import"./AnimatedItems-CIa4005N.js";import"./useAnimationId-CjXgi841.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQY8rJu-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8QNpF57.js";import"./RegisterGraphicalItemId-DMVQPcLn.js";import"./ErrorBarContext-DUzmHtBE.js";import"./GraphicalItemClipPath-CGgVvw3m.js";import"./SetGraphicalItem-eSn4zQ3n.js";import"./getZIndexFromUnknown-Dp2Ioitv.js";import"./graphicalItemSelectors-Bgpj2GzB.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

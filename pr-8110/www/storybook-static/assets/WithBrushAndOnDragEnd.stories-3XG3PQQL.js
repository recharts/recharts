import{R as t}from"./iframe-CUml5YCN.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Duug8EOo.js";import{B as p}from"./BarChart-DOf10C0B.js";import{X as l}from"./XAxis-DS-AJg-5.js";import{Y as h}from"./YAxis-CGT5tGsT.js";import{B as x}from"./Brush-97wNLzUl.js";import{B as c}from"./Bar-W3g4LJoB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./throttle-00pBoixS.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./RechartsWrapper-jAZSY4Pq.js";import"./axisSelectors-B2HI9EL2.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CEanJ2qJ.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./CartesianAxis-BVj8a-va.js";import"./Layer-BUAUs1E0.js";import"./Text-C-J7rFVH.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./Label-Co-nrknN.js";import"./types-BdRO-t6j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-1BV2-5OM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ayj5uTYD.js";import"./useAnimationId-CTU-teyX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./tooltipContext-Bogx-4r_.js";import"./dataEntryStyles-DqljzTne.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./activeStyles-DSIZcOzy.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./getZIndexFromUnknown-CxF_xcLQ.js";import"./useEffectiveDataKey-11clGpT5.js";import"./FillDefinition-DVWLhRTd.js";import"./omit-DgWjCywH.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

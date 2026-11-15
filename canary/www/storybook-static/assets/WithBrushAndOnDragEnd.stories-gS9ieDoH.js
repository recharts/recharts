import{R as t}from"./iframe-CVlx7bU_.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CQ18OEDz.js";import{B as p}from"./BarChart-BGS8ECD3.js";import{X as l}from"./XAxis-DMF0oTJ1.js";import{Y as h}from"./YAxis-Bw2rcCFX.js";import{B as x}from"./Brush-C-j1XdDc.js";import{B as c}from"./Bar-BcttE19g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7sOSs16A.js";import"./throttle-CmXgXLjc.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./axisSelectors-BJrugk6A.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkwZs2c8.js";import"./index-2xma1Lio.js";import"./index-Ddvmj82W.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./CartesianAxis-BdpTb-nX.js";import"./Layer-CTBEbigF.js";import"./Text-GjS4GngU.js";import"./ZIndexLayer-DRYYNy0H.js";import"./Label-DOtvRCj8.js";import"./types-BMFpEHKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CMoIO_lw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BzACz78L.js";import"./useAnimationId-JkE7TXZo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./tooltipContext-CnffpGeV.js";import"./ErrorBarContext-DzVhOjsh.js";import"./activeStyles-5RuXhDxF.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getZIndexFromUnknown-CQuHEXnK.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./omit-BUnywL07.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

import{R as t}from"./iframe-BJZBYlXs.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-4kzTBdEO.js";import{B as p}from"./BarChart-CLZqaqLi.js";import{X as l}from"./XAxis-BODArBrx.js";import{Y as h}from"./YAxis-8yYBvtiR.js";import{B as x}from"./Brush-DVMjgiZB.js";import{B as c}from"./Bar-B1VVAgaA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./throttle-m042I2dJ.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./RechartsWrapper-xMruxvG5.js";import"./axisSelectors-fPyxXNp-.js";import"./polarAxisSelectors-BW13raLn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fXkyVTj6.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./CartesianAxis-DuzHYXrg.js";import"./Layer-BiONajIB.js";import"./Text-D_QESfNW.js";import"./DOMUtils-CSm0nbrI.js";import"./pageBackground-OPtbMqw3.js";import"./ZIndexLayer-9eIJN5cX.js";import"./Label-BB8sjzzI.js";import"./types-BRBV9Zbz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DO9vEba-.js";import"./LabelList-CjXuEtRO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcbqjYEw.js";import"./fillDefinitions-DzwllWHv.js";import"./useAnimationId-t_dEgl2e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./tooltipContext-B6VSljem.js";import"./dataEntryStyles-O6Ub96yy.js";import"./ErrorBarContext-B2TtUlqL.js";import"./activeStyles-CNDsNUTt.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getZIndexFromUnknown-D2iN--cE.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./omit-XdCNQa49.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ut as __namedExportsOrder,ct as default};

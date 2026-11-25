import{R as t}from"./iframe-DUAuhaDC.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CUoIUvAK.js";import{B as p}from"./BarChart-hzCYIJkL.js";import{X as l}from"./XAxis-DmKgW9ez.js";import{Y as h}from"./YAxis-D6BReFW5.js";import{B as x}from"./Brush-BSbh1qV9.js";import{B as c}from"./Bar-BGxI6Riz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./throttle-C34y-YGF.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./RechartsWrapper-C2YARZjw.js";import"./axisSelectors-DKypf8DU.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BzOzklff.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./CartesianAxis-DlgnL8lU.js";import"./Layer-CfAsTpPf.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./Label-BlZKxSKy.js";import"./types-BR7AAoV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-ChkH59oB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDSDw5vR.js";import"./useAnimationId-B4mDEWzj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./tooltipContext-D3Fgt_MK.js";import"./ErrorBarContext-CEfM97ww.js";import"./activeStyles-joM0AtO_.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./getZIndexFromUnknown-DTqv0Uhu.js";import"./useEffectiveDataKey-CqgqLaRX.js";import"./omit-zEWwmT1D.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

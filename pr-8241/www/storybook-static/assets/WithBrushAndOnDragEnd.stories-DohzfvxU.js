import{R as t}from"./iframe-BoIdwylW.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-PMZXbuz8.js";import{B as p}from"./BarChart-Cb-g6iDb.js";import{X as l}from"./XAxis-ClVSu1zU.js";import{Y as h}from"./YAxis-GNczrVGv.js";import{B as x}from"./Brush-Cctp37cN.js";import{B as c}from"./Bar-Bgc3sHUc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./throttle-DJovDE6i.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./RechartsWrapper-KwWkpOaO.js";import"./axisSelectors-CnNiq6Rh.js";import"./polarAxisSelectors-BUrHoreM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Asjkzq2w.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./CartesianAxis-DE9aH7XM.js";import"./Layer-DnLGFXqh.js";import"./Text-D_S4fT48.js";import"./ZIndexLayer-BYJgF0xG.js";import"./Label-B2lBcb4D.js";import"./types-D0djA_gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CG-hLtdl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cws0XjiK.js";import"./useAnimationId-BZtpw3X8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BK27ZWgW.js";import"./tooltipContext-CvAsZq0Y.js";import"./ErrorBarContext-DqGqKTxS.js";import"./activeStyles-kk8IGRJt.js";import"./SetGraphicalItem-B5MmjNJa.js";import"./getZIndexFromUnknown-De3nvjVs.js";import"./useEffectiveDataKey-QRSJB29_.js";import"./omit-Dsblyt9d.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

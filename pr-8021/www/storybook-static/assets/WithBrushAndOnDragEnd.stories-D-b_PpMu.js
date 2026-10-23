import{R as t}from"./iframe--Qc961ov.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Rc2BOlPQ.js";import{B as p}from"./BarChart-KYqZquDM.js";import{X as l}from"./XAxis-CYwUm2ws.js";import{Y as h}from"./YAxis-BdfS4w8D.js";import{B as x}from"./Brush-Djasq8xp.js";import{B as c}from"./Bar-2WsDtfT7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D5ruWPez.js";import"./index-BaNjZzFe.js";import"./index-sLpNG2DY.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D0aZwB6X.js";import"./isWellBehavedNumber-BbQJ1Ue6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5yfwU4S.js";import"./axisSelectors-CnmzOTaD.js";import"./d3-scale-BiVvCoqI.js";import"./index-C334R2OZ.js";import"./index-gD-WMNxq.js";import"./renderedTicksSlice-iEsOV4gM.js";import"./index-CIuk1Fk6.js";import"./CartesianChart-BPOxbtvv.js";import"./chartDataContext-B9pBQpH6.js";import"./CategoricalChart-BTLrwTlO.js";import"./CartesianAxis-BwXCcZP6.js";import"./Layer-CSo0ACXf.js";import"./Text-DukYE8yg.js";import"./pageBackground-DnfHP8JU.js";import"./useId-DBBGR5j5.js";import"./useBackwardsCompatibleTheme-BAsN2dru.js";import"./Label-BPAtAFkR.js";import"./ZIndexLayer-CboR9GKx.js";import"./dataEntryStyles-D5gnKJwo.js";import"./types-CdbE1zIR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CmGMz93r.js";import"./useAnimationId-CtnGdaHg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPuH_shy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRmxiGhG.js";import"./tooltipContext-Co8wMlo1.js";import"./RegisterGraphicalItemId-CC6U92H6.js";import"./ErrorBarContext-CJzEAfVg.js";import"./GraphicalItemClipPath-dlzptreQ.js";import"./SetGraphicalItem-CzqDdYjp.js";import"./getZIndexFromUnknown-Dv9psM4b.js";import"./useEffectiveDataKey-B387RzKO.js";import"./omit-I1vbqsah.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

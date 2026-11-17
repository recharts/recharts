import{R as t}from"./iframe-DQIHw-Vj.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DLnqMvRR.js";import{B as p}from"./BarChart-DNpWAhWq.js";import{X as l}from"./XAxis-C1j7r1zg.js";import{Y as h}from"./YAxis-BRNNX1VG.js";import{B as x}from"./Brush-BGZV_Jn2.js";import{B as c}from"./Bar-Dxm-nh1c.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DCDPXacx.js";import"./throttle-CsL6-oT8.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./RechartsWrapper-BOwBRf5q.js";import"./axisSelectors-BOWof0F_.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D3QDia2a.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./CartesianAxis-uR_V8Oxl.js";import"./Layer-Dtg1l4X7.js";import"./Text-UFCPlRdh.js";import"./ZIndexLayer-cKbXtIsu.js";import"./Label-CDOIzumT.js";import"./types-DC02XBeR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CRT7gJOj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bd8I5Mu8.js";import"./useAnimationId-BGqCxB5a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./tooltipContext-Bf6OH0S4.js";import"./ErrorBarContext-DeOd0WHi.js";import"./activeStyles-DlG12Hxm.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./getZIndexFromUnknown-BwTxVF7X.js";import"./useEffectiveDataKey-DXNQs5X4.js";import"./omit-BvCra_Tw.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

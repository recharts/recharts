import{R as t}from"./iframe-ULtY-NVK.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-jBtZtiCi.js";import{B as p}from"./BarChart-Cdb5t1OL.js";import{X as l}from"./XAxis-BxexlvNE.js";import{Y as h}from"./YAxis-BQ0jDyxm.js";import{B as x}from"./Brush-CqPyZ4Hg.js";import{B as c}from"./Bar-CnB-dAcN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./throttle-CHVCCuLD.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./RechartsWrapper-JXy35Des.js";import"./axisSelectors-DyOG1uRh.js";import"./polarAxisSelectors-DJMQca_o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ZBKsHMes.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./CartesianAxis-B-ohTpBX.js";import"./Layer-DhwnXi08.js";import"./Text-DIgVe04Z.js";import"./ZIndexLayer-3L32Zbp4.js";import"./Label-RNo0-Kup.js";import"./types-YE6r9ekT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CgoAn4IQ.js";import"./useAnimationId-BnN3bcdg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./tooltipContext-jXwpxvM2.js";import"./ErrorBarContext-DkSuy-bE.js";import"./activeStyles-nNAh6kPS.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getZIndexFromUnknown-BJNwi2ms.js";import"./useEffectiveDataKey-DbYUjo2f.js";import"./omit-BAMQNq7o.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

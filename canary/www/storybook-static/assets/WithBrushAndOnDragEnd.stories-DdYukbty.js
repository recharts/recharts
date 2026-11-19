import{R as t}from"./iframe-Cr4SLAPG.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DyLLhom_.js";import{B as p}from"./BarChart-eF3uBpT4.js";import{X as l}from"./XAxis-B99-G5ow.js";import{Y as h}from"./YAxis-CY62iJg-.js";import{B as x}from"./Brush-Dy2t9Xhq.js";import{B as c}from"./Bar-Tb9OLyEI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./throttle-m67LhZgN.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./RechartsWrapper-BMMPlSoi.js";import"./axisSelectors-DrKqMaOQ.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WAvM56kv.js";import"./index-kvmeuQQ0.js";import"./index-COeoIdkq.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./CartesianAxis-Ds5qTBHM.js";import"./Layer-CWQ0f2zH.js";import"./Text-BBE8dgLe.js";import"./ZIndexLayer-B4fE1k7j.js";import"./Label-iIhWQC5W.js";import"./types-B6oZtPsa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-IfVv-8UK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-PLu_R94q.js";import"./useAnimationId-kAVaPV6O.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./tooltipContext-Dwc5DzUh.js";import"./ErrorBarContext-6e7pSH1e.js";import"./activeStyles-aUydRVRE.js";import"./SetGraphicalItem-C9um0bAO.js";import"./getZIndexFromUnknown-DlBRJe4T.js";import"./useEffectiveDataKey-CUJehQI3.js";import"./omit-D750KmtC.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

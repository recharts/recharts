import{R as t}from"./iframe-Ctz7IHW3.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BOhKAINV.js";import{B as p}from"./BarChart-ClQ9uUoj.js";import{X as l}from"./XAxis-C7TfuOxC.js";import{Y as h}from"./YAxis-B3lARwfm.js";import{B as x}from"./Brush-DIlUafx0.js";import{B as c}from"./Bar-DZKxygDq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--WcksQI-.js";import"./throttle-BK8aOUUW.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./RechartsWrapper-B5-BQ43L.js";import"./axisSelectors-CmsQwY11.js";import"./polarAxisSelectors-2S85hvBv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7S8RTAk.js";import"./index-D9m5BeGD.js";import"./index-DTCcovWx.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./CartesianAxis-D2YA5lRA.js";import"./Layer-DwO5QDCB.js";import"./Text-d5sUAgwt.js";import"./ZIndexLayer-GawJhFHW.js";import"./Label-Cx25Byjk.js";import"./types-o_vm3YHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DhE1x9oW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKam2C2s.js";import"./useAnimationId-CDmHN2F8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./tooltipContext-DT4_kJxc.js";import"./ErrorBarContext-CWAd3_q9.js";import"./activeStyles-DYt1MbCF.js";import"./SetGraphicalItem-ZbovNH06.js";import"./getZIndexFromUnknown-emziqfMi.js";import"./useEffectiveDataKey-v8KMaUS0.js";import"./omit-CFl2-F-T.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-DNnhIzqd.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CZnRUfU-.js";import{B as p}from"./BarChart-C9EERBjG.js";import{X as l}from"./XAxis-DyyKFn3c.js";import{Y as h}from"./YAxis-DL1XukoQ.js";import{B as x}from"./Brush-DMQx9ckW.js";import{B as c}from"./Bar-DD1GfBl4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./throttle-QyoUWs98.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./RechartsWrapper-CrR43_nu.js";import"./axisSelectors-D3RI42dK.js";import"./polarAxisSelectors-D96CZuW6.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DjL9qVWl.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./CartesianAxis-DyWgnQe6.js";import"./Layer-BC8osa1v.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./Label-zRO_Glrc.js";import"./types-BRWBXBDp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BLzS4I_n.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BldvyN6i.js";import"./useAnimationId-nuwJNMaM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./tooltipContext-BL5AVfuY.js";import"./ErrorBarContext-BEOQHAHp.js";import"./activeStyles-C2NC3gaF.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./getZIndexFromUnknown-CDoNNBeO.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./omit-CCPfwULE.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

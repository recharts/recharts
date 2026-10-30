import{R as t}from"./iframe-DofrrzSz.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D4jXZr7P.js";import{B as p}from"./BarChart-dLr56obe.js";import{X as l}from"./XAxis-eOTmMW_3.js";import{Y as h}from"./YAxis-CsrZD7w1.js";import{B as x}from"./Brush-DJYqRU7C.js";import{B as c}from"./Bar-Bfvx97hH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./throttle-Cv7JSN-h.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./RechartsWrapper-E_-kYNca.js";import"./axisSelectors-pqZm8n4V.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRGWuf4p.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./CartesianAxis-BejCdWme.js";import"./Layer-29jH0q4c.js";import"./Text-CCxE4_21.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./Label-CuxsGsNv.js";import"./types-DwbSI8T9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-CvvaVn8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH-fHCjZ.js";import"./useAnimationId-DIc4f048.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./tooltipContext-eCkchuHu.js";import"./dataEntryStyles-DuwvESx8.js";import"./ErrorBarContext-Be2kUHyO.js";import"./activeStyles-DFxA9Zbs.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getZIndexFromUnknown-whhWsiF3.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./omit-CEqwGjdZ.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

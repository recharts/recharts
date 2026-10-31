import{R as t}from"./iframe-CDpmIgQT.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BfaxD0dh.js";import{B as p}from"./BarChart-CmN0FBv0.js";import{X as l}from"./XAxis-3XA4-bKe.js";import{Y as h}from"./YAxis-Ogt9or7H.js";import{B as x}from"./Brush-Ci6AAFDv.js";import{B as c}from"./Bar-DR4D050-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./throttle-aImz7VVk.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./RechartsWrapper-CVUl_Te9.js";import"./axisSelectors-CxEn2HHB.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8Pupn_R.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./CartesianAxis-f-wQfyV-.js";import"./Layer-mHCkFu2a.js";import"./Text-BSIquxO3.js";import"./DOMUtils-Cs7FGDH8.js";import"./pageBackground-JqsHu2De.js";import"./ZIndexLayer-DJsGHloM.js";import"./Label-PB9tCobP.js";import"./types-C_7I-XQd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-os6E-iMi.js";import"./LabelList-IVU2RGL-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D76RToCn.js";import"./useAnimationId-LIn9B9pI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CinHd9se.js";import"./tooltipContext-BuClDIkr.js";import"./dataEntryStyles-tenSUrif.js";import"./ErrorBarContext-Bqx6IufA.js";import"./activeStyles-BpeBFXJT.js";import"./SetGraphicalItem-BpXWLUsD.js";import"./getZIndexFromUnknown-BIyjUwkt.js";import"./useEffectiveDataKey-Dsusti8Y.js";import"./omit-C64e-Xwc.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};

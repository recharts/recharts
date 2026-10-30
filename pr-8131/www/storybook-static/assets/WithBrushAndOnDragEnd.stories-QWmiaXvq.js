import{R as t}from"./iframe-jmhe2Qk6.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C_QNUIlg.js";import{B as p}from"./BarChart-PFNNGazU.js";import{X as l}from"./XAxis-BmABHSTj.js";import{Y as h}from"./YAxis-Bwmry524.js";import{B as x}from"./Brush-BSJcTHY8.js";import{B as c}from"./Bar-B0_POE5j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CCkzVq5s.js";import"./throttle-DZINazP_.js";import"./index-BadCiZkf.js";import"./index-DMlmY332.js";import"./RechartsWrapper-C_ACRdKM.js";import"./axisSelectors-CTtb55NE.js";import"./polarAxisSelectors-D0zNKA08.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_kmjLSGJ.js";import"./index-1mWypBK7.js";import"./index-CSauTcUd.js";import"./renderedTicksSlice-DiLJD3iy.js";import"./index-BvBcGY0n.js";import"./fillDefinitions-2mEkHeYa.js";import"./CartesianChart-DW-0hcB8.js";import"./ZIndexPortal-Qo_oHvo4.js";import"./CategoricalChart-clWULlZK.js";import"./CartesianAxis-CTjd-a6A.js";import"./Layer-B39D7NeJ.js";import"./Text-CmetEc_4.js";import"./DOMUtils-DKPcLfF3.js";import"./ZIndexLayer-BifNHCzV.js";import"./Label-Db1KZEia.js";import"./types-Cpf9ifaq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Dq0YgplD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CuWi-3o9.js";import"./useAnimationId-Zg5v1vJq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-cdr3C3k5.js";import"./tooltipContext-CDJ_DWvW.js";import"./dataEntryStyles-CsSE3ak0.js";import"./ErrorBarContext-C2f99oDG.js";import"./activeStyles-sH1GlI3K.js";import"./SetGraphicalItem-DSPgNjiu.js";import"./getZIndexFromUnknown-40hh8wet.js";import"./useEffectiveDataKey-DmT6RBvF.js";import"./omit-DiBX4K-8.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

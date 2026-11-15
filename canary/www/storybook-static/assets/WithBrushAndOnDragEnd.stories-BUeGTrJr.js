import{R as t}from"./iframe-aStk4u5G.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-fM76ZZLK.js";import{B as p}from"./BarChart-CNm34x-N.js";import{X as l}from"./XAxis-ENAn7eOB.js";import{Y as h}from"./YAxis-IZNj2QSL.js";import{B as x}from"./Brush-BIDBPs4E.js";import{B as c}from"./Bar-5Dh1lLRb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./throttle-DVcVwqMz.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./axisSelectors-DBp9gfhA.js";import"./polarAxisSelectors-DXerv3y1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6YLYpaJ.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./CartesianAxis-B4XXfFP6.js";import"./Layer-BjWQQh7I.js";import"./Text-ByyFOVFg.js";import"./ZIndexLayer-CcTOehup.js";import"./Label-CSHZSiX2.js";import"./types-DjvBJzo1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BcmbbFXW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6Wk_c6i.js";import"./useAnimationId-BKAZWpn4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BP2ijoKU.js";import"./tooltipContext-BP9m843V.js";import"./ErrorBarContext-ABxS7lmh.js";import"./activeStyles-CZ0hnhrg.js";import"./SetGraphicalItem-Yj9tvd7_.js";import"./getZIndexFromUnknown-D1mWXeFS.js";import"./useEffectiveDataKey-mYWLQ9Vk.js";import"./omit-8MYgr6Kv.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-PHc5u_Go.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-O7J7Jeos.js";import{B as p}from"./BarChart-BESqZy9l.js";import{X as l}from"./XAxis-CwnWWi2T.js";import{Y as h}from"./YAxis-W1GxgUQy.js";import{B as x}from"./Brush-C14QsCiJ.js";import{B as c}from"./Bar-BqmF2dhP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CtovE_6b.js";import"./get-CjriyByo.js";import"./throttle-B7fmfrhU.js";import"./index-CENrQ3Fo.js";import"./index-BL548a5i.js";import"./RechartsWrapper-0aodawEv.js";import"./axisSelectors-D8A3lwIR.js";import"./polarAxisSelectors-C8shuSpM.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ca8JIZw_.js";import"./index-B6C2iRoi.js";import"./index-B8MUftfu.js";import"./renderedTicksSlice-B_HpVp09.js";import"./index-B4O5QRRq.js";import"./fillDefinitions-CfETDC7a.js";import"./CartesianChart-B8odkp-B.js";import"./chartDataContext-uHFtVhR5.js";import"./CategoricalChart-BjWAqdhB.js";import"./CartesianAxis-DA5HtWf2.js";import"./Layer-DvHcP4X_.js";import"./Text-B4WGoEXs.js";import"./ZIndexLayer-jWs-pX7J.js";import"./Label-B_2vkxlb.js";import"./types-DsQO6Yiz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B0gayhW-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EDZm1eQj.js";import"./useAnimationId-Crie2Rxs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-4zLzrPeO.js";import"./tooltipContext-DID6IymL.js";import"./ErrorBarContext-DX7Uypjj.js";import"./activeStyles-C4EAX3cB.js";import"./SetGraphicalItem-CpbhBJBp.js";import"./getZIndexFromUnknown-DVAgy0Q3.js";import"./useEffectiveDataKey-Br4Rw_9X.js";import"./omit-BXi7naXk.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-BuTq1GDI.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-nFeNXjL9.js";import{B as p}from"./BarChart-95mOVGVy.js";import{X as l}from"./XAxis-DP0H9aj2.js";import{Y as h}from"./YAxis-CWQHnkYU.js";import{B as x}from"./Brush-Ca-MoS67.js";import{B as c}from"./Bar-CZIcjIp7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BvjC40ji.js";import"./throttle-Bg_wxbeM.js";import"./index-BVmeVX9a.js";import"./index-C37pRckm.js";import"./RechartsWrapper-tdUtbdK0.js";import"./axisSelectors-C8SZQKCy.js";import"./polarAxisSelectors-DrJ1eC5o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B-VNUnVY.js";import"./index-CEj4l4tR.js";import"./index-Uz7QCUjK.js";import"./renderedTicksSlice-BeHs1Q1W.js";import"./index-CvYG7xEe.js";import"./CartesianChart-BC3FDidD.js";import"./chartDataContext-DlVD7MBP.js";import"./CategoricalChart-DnThaA0e.js";import"./CartesianAxis-DubJAr-q.js";import"./Layer-BRqC8U5C.js";import"./Text-CBEIE7g5.js";import"./pageBackground-BebQB_1W.js";import"./useId-haS85Qmm.js";import"./ZIndexLayer-eqYDQc0b.js";import"./Label-DQJj2wvU.js";import"./dataEntryStyles-Cr3Y7I5g.js";import"./types-CybiymHT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CQul6riI.js";import"./useAnimationId-PmZ8IQYc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nbayO8Mj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6CQyjc5t.js";import"./tooltipContext-DQPd87t6.js";import"./RegisterGraphicalItemId-DoGvUQF1.js";import"./ErrorBarContext-DxkrfkAD.js";import"./SetGraphicalItem-B6ig3Thz.js";import"./getZIndexFromUnknown-Bk9fUZU7.js";import"./useEffectiveDataKey-BAtZCpA-.js";import"./omit-CRLPKLD5.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

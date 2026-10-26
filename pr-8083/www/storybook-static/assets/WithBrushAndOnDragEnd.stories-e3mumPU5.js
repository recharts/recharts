import{R as t}from"./iframe-xm0njxpX.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BXJXmFQu.js";import{B as p}from"./BarChart-lw8n3jKM.js";import{X as l}from"./XAxis-BO1QGjPl.js";import{Y as h}from"./YAxis-NECyBpPr.js";import{B as x}from"./Brush-DtKvo2jT.js";import{B as c}from"./Bar-HGS41inY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B61AogRi.js";import"./throttle-CQYnjh9B.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./RechartsWrapper-B8IVe3Ss.js";import"./axisSelectors-CvRpVDMX.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRKVpWRJ.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./CartesianAxis-C-JfYURt.js";import"./Layer-BK3cybNP.js";import"./Text-B0-TExiI.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./Label-S9WiqPCG.js";import"./dataEntryStyles-6HljWj9B.js";import"./types-dJ8tHIrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-DbHXCiJk.js";import"./useAnimationId-CEkjnsp2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-y41hMVV_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BgjHc8Mn.js";import"./tooltipContext-jY8SRIcz.js";import"./RegisterGraphicalItemId-CvVXplwq.js";import"./ErrorBarContext-iSnZN3fR.js";import"./SetGraphicalItem-BWe-V4S4.js";import"./getZIndexFromUnknown-5YUkMLyI.js";import"./useEffectiveDataKey-L1KgQlH4.js";import"./omit-lelMGAAU.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

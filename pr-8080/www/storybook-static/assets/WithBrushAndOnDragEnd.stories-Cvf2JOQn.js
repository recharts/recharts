import{R as t}from"./iframe-BzJSp-Lb.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CpY4G_41.js";import{B as p}from"./BarChart-BooX06ub.js";import{X as l}from"./XAxis-CLk9ccVg.js";import{Y as h}from"./YAxis-DH3wuMUO.js";import{B as x}from"./Brush-D3hGGkYL.js";import{B as c}from"./Bar-Df1CrUgg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./throttle-BdS6UYxD.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./RechartsWrapper-LKbuKCMS.js";import"./axisSelectors-Dmo5ac34.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BS7oaQgh.js";import"./index-GvdMQirt.js";import"./index-DTL6jccP.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./CartesianAxis-ImLT1R94.js";import"./Layer-Ci5AF7LX.js";import"./Text-Di-RptE9.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./Label-CXAJ70oq.js";import"./dataEntryStyles-eQjR1qV2.js";import"./types-DTueBMDQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-B_Yk1DNA.js";import"./useAnimationId-vzOulJcL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COJJ_LvU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPEFsget.js";import"./tooltipContext-BQCgoNZU.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./ErrorBarContext-CPvXKihC.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getZIndexFromUnknown-pUg2_Mae.js";import"./useEffectiveDataKey-Dlkdw6F3.js";import"./omit-CNibo81X.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
